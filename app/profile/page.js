"use client";
import { StoreContext, useContext, observer } from '@/app/Mobx'
import { signIn, signOut } from 'next-auth/react'
import Header from '@/app/layout/Header'
import Footer from '@/app/layout/Footer'

const Profile = observer(() => {
  const store = useContext(StoreContext)
  return (
    <>
      <Header />

          <div className="h-24" />

          {/* show avatar circle, profile name and email and sign out button */}

          <div className="flex flex-col items-center">
            <img
              src={store.profile.avatar}
              alt="profile"
              className="rounded-full h-48 w-48 mb-4"
            />
            <h1 className="text-3xl">{store.profile.name}</h1>
            <h2 className="text-lg text-gray-500">{store.profile.email}</h2>
            <button
              onClick={()=>{
                signOut({
                  callbackUrl: `/`,
                  redirect:true 
                })
              }}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            >
              Sign Out
            </button>
          </div>

      <Footer />
    </>
  );
});



export default Profile;