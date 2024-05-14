import { NextResponse } from "next/server";

import {withAuth} from '@/app/api/withAuth'
import {withUser} from '@/app/api/withUser'

export const GET = withAuth(withUser(async (req, res) => {
	return NextResponse.json({
		user: req.user
	}, {
		status: 200
	});
}))