import { NextResponse } from "next/server";
import { DataAPIClient } from "@datastax/astra-db-ts";
import { UUID, ObjectId } from '@datastax/astra-db-ts';
import OpenAI from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);

// Initialize the client
const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT);

export async function GET(req) {

	const collection = db.collection('pokedex');

	const poke = await collection.findOne({ 
		_id: {
			"$uuid": 'e718bc1c-139b-4d9f-bd06-eee0529e37e6'
		}
	});

	return NextResponse.json({
		success: true,
		poke
	}, {
		status: 200
	});
	
};
