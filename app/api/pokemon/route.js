import { NextResponse } from "next/server";
import { DataAPIClient } from "@datastax/astra-db-ts";
import { getToken } from 'next-auth/jwt';
import db from "@/app/db";

export async function GET(req) {

	const collection = db.collection('pokedex');
	const users = db.collection('users');
	const token = await getToken({ req });
	

	if(token){
		const user = await users.findOne({
			providerAccountId: token.sub,
		});
		if(user){
			
			const pokemon = await collection.find({
				user_id: user._id
			}, { 
				limit: 999,
				sort : { no: 1 },
				// dont select vector field
				projection: { 
					$vector: 0
				}
			}).toArray();
			return NextResponse.json({
				success: true,
				pokemon
			}, {
				status: 200
			});
		}
	}

	

	return NextResponse.json({
		success: true,
		pokemon: []
	}, {
		status: 200
	});
	
};
