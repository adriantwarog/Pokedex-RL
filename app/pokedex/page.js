"use client";
import { StoreContext, useContext, observer } from '@/app/Mobx'

import Header from '@/app/layout/Header'
import Footer from '@/app/layout/Footer'
import Pokedex from '@/app/pokedex/Pokedex'

const Page = observer(() => {
  return (
    <>
      <Header />
      <Pokedex />
      <Footer />
    </>
  );
});


export default Page;