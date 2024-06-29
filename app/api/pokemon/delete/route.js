import { NextResponse } from "next/server";
import { DataAPIClient } from "@datastax/astra-db-ts";


// Initialize the client
const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT);

export async function POST(req) {

	let { _id } = await req.json();

	console.log(`_id`, _id)

	const collection = db.collection('pokedex');
	const pokemon = await collection.deleteOne({
		_id
	});

	return NextResponse.json({
		success: true,
		pokemon
	}, {
		status: 200
	});
	
};
