"use client";

import Image from "next/image";
import { StoreContext, useContext, observer } from '@/app/Mobx'

const Home = observer(() => {
  const store = useContext(StoreContext)
  return ( 
    <>
      <h1 className="font-medium text-4xl">Pokedex</h1>
      {store.capture.image}
	  
      <input type="file" onChange={store.handleCaptureImage} />
      <button onClick={store.fetchVoice} className="p-2 bg-gray-200 rounded">Submit</button>
	  
      {store.capture.image ? 
        <img src={store.capture.image} className="rounded-lg max-h-[200px]" /> : 
		<div className="h-24 w-48 bg-gray-200 rounded-lg max-h-[200px]"></div>}
        {store.capture.voiceUrl && 
          <audio src={store.capture.voiceUrl} controls autoPlay playsInline />}
        <div>Voice Token: {store.capture.voiceJobToken}</div>
        <div>Voice Status: {store.capture.voiceStatus}</div>
        <div>Voice URL: {store.capture.voiceUrl}</div>
        <div>Name: {store.capture.object}</div>
        <div>Species: {store.capture.species}</div>
        <div>Weight: {store.capture.weight}</div>
        <div>Height: {store.capture.height}</div>
        <div>HP: {store.capture.hp}</div>
        <div>Attack: {store.capture.attack}</div>
        <div>Defense: {store.capture.defense}</div>
        <div>Speed: {store.capture.speed}</div>
        <div>Type: {store.capture.type}</div>
        <div>Description: {store.capture.description}</div>

    </>
  );
});


export default Home;