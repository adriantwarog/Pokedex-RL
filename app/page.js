"use client";
import { StoreContext, useContext, observer } from './Mobx'


import Header from './layout/Header'
import Footer from './layout/Footer'
import Pokedex from '@/app/pokedex/Pokedex'
import SignButton from './SignButton'
import LoginImage from "./imgs/login-image.png"
import ButtonLogin from "./imgs/button-login.png"
import ButtonScan from "./imgs/button-scan.png"
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'



const Page = observer(() => {
  const store = useContext(StoreContext)
  const { data: session } = useSession()
  if(session && session.user){
    return (
      <>
      <Header />
      <Pokedex />
      <Footer />
    </>
    )
  }
  return (
    <>
      <Header />
      <div className="login-page">
          <img src={LoginImage.src} width="320" className="mt-24" />
          <div>
            <img src={ButtonLogin.src} width="320" className="cursor-pointer" onClick={()=>signIn('google')} />
            <Link href="/camera">
              <img src={ButtonScan.src} width="320" />
            </Link>
          </div>
      </div>
    </>
  );
});



export default Page;