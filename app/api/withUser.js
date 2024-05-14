import db from "@/app/db";

export const withUser = handler => async (req, res) => {
	const collection = db.collection('users');
	const user = await collection.findOne({
		providerAccountId: req.token.sub,
	});
	if(!user){
		return await handler(req, res)
	}
	req.user = user;
	return await handler(req, res)
}
