import { NextResponse } from "next/server";
import db from "@/app/db";

export async function POST(req) {

	const users = db.collection('users');

	const leaderboard = await users.find({}, { 
		limit: 999,
		sort : { pokedexEntries: -1 },
		// dont select vector field
		projection: { 
			name: 1,
			avatar: 1,
			pokedexEntries: 1,
		}
	}).toArray();

	return NextResponse.json({
		success: true,
		leaderboard,
	}, {
		status: 200
	});
	
};
