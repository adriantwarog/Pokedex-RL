import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt';

export const withAuth = handler => async (req, res) => {

	const token = await getToken({ req });

	console.log('token', token);

	if(!token){
		return NextResponse.json({
			message: 'Auth required' 
		}, { status: 401 })
	}

	req.token = token;

	// Do something with the request
	return await handler(req, res)
}
