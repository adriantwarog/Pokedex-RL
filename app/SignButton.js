// import { getServerSession } from "next-auth/next"
// import { authOptions } from "@/app/api/auth/[...nextauth]/route"
// import { signIn, signOut } from 'next-auth/react'
import { signIn, signOut } from 'next-auth/react'

// export default async function MediaKitButton() {
// 	const session = await getServerSession(authOptions)
// 	if(session && session.user){
// 		return (
// 			<button type="button" onClick={()=>signOut()}>Sign Out</button>
// 		)
// 	}
// 	return (
// 		<button type="button" onClick={()=>signIn('google')}>Sign In</button>
// 	)
// }

export default function SignButton() {
	return (
	<button type="button" onClick={()=>signIn('google')}>Sign In</button>
  )
}