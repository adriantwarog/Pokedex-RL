"use client";
import { StoreContext, useContext, observer } from '@/app/Mobx'
import { useEffect, useRef, } from 'react';

import { Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend, } from "chart.js";

import { Radar } from 'react-chartjs-2';

import Header from '@/app/layout/Header'
import Footer from '@/app/layout/Footer'
import ButtonDelete from "@/app/imgs/button-delete.png"


ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
  );

const Pokedex = observer(() => {
  const store = useContext(StoreContext)
  const initialized = useRef(false)

  useEffect(() => {
	// Fix so that it doesn't run on first render
	if (!initialized.current) {
		initialized.current = true
		store.fetchVoice();
	}
	return () => {
		// if(store.pollingVoice){
			clearInterval(store.pollingVoice)
		// }
	}
  }, []);

  const type = store.capture.type.toLowerCase();
  const firstType = type.split(/[^a-zA-Z]/g)[0];
  const typeBgLight = "bg-100-" + type.replace(/[^a-zA-Z]/g, " bg-100-");
  const typeBg = "bg-" + type.replace(/[^a-zA-Z]/g, " bg-");

  return (
    <>
      <Header />
		  <>
		  <div className="poke-preview" style={{
			backgroundImage: `url(${store.capture.image})`,
		  }}>

		  </div>
		  <div className="poke-info">
		  	<div className="title">
			  {store.capture.object}
			</div>
			

			<div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mt-2 mb-2 font-medium bg-${firstType}`}
            >
            <span className="inline-flex align-center content-center rounded-full w-4 h-6">
              <img src={`/${firstType}-icon.svg`} width="100%" />
            </span>
            {store.capture.type}
            </div>
			
			

			{store.capture.voiceUrl ? 
			<audio 
			className="mb-2"
			src={store.capture.voiceUrl} controls 
			// autoPlay 
			// playsInline 
			/> : <div>
			<button type="button" className="inline-flex items-center px-4 py-2  leading-6 text-sm shadow rounded-full text-gray-500 bg-gray-200 hover:bg-gray-100 transition ease-in-out duration-150 cursor-not-allowed mb-2" disabled="">
				<svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
				<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
				</svg>
				Processing Audio...
			</button>
			</div>}
			
			<div className="description">
				{store.capture.description}
			</div>

			

		  	<div className="stats divide-y">
			  <div className="stat p-2">
		  			<div className="stat-icon w-8"><IconSpecies /></div>
					<div className="stat-attr w-24">Species</div>
					<div className="stat-value">{store.capture.species}</div>
				</div>
			  	<div className="stat p-2">
		  			<div className="stat-icon w-8"><IconWeight /></div>
					<div className="stat-attr w-24">Weight</div>
					<div className="stat-value">{store.capture.approximateWeight}</div>
				</div>
				<div className="stat p-2">
		  			<div className="stat-icon w-8"><IconHeight /></div>
					<div className="stat-attr w-24">Height</div>
					<div className="stat-value ">{store.capture.approximateHeight}</div>
				</div>
				<div className="stat p-2">
		  			<div className="stat-icon w-8"><IconSpeed /></div>
					<div className="stat-attr w-24">Speed</div>
					<div className="stat-value">{store.capture.speed}</div>
				</div>
				<div className="stat p-2">
		  			<div className="stat-icon w-8"><IconHP /></div>
					<div className="stat-attr w-24">HP</div>
					<div className="stat-value">{store.capture.hp}</div>
				</div>
				<div className="stat p-2">
		  			<div className="stat-icon w-8"><IconAttack /></div>
					<div className="stat-attr w-24">Attack</div>
					<div className="stat-value ">{store.capture.attack}</div>
				</div>
				<div className="stat p-2">
		  			<div className="stat-icon w-8"><IconDefense /></div>
					<div className="stat-attr w-24">Defense</div>
					<div className="stat-value">{store.capture.defense}</div>
				</div>
			</div>

			<div className="stat-graph">
			<Radar
				options={{
					scales: {
						r: {
							suggestedMin: 0,
							suggestedMax: 50
						}
					},
					
				}}
				data={{
					label: '',
					labels: [
						'HP', 
						'Attack', 
						'Defense',
						'Speed',
						'Height',
						'Weight',
					],
					datasets: [{
						label: '',
						data: [
							parseInt(store.capture.hp),
							parseInt(store.capture.attack),
							parseInt(store.capture.defense),
							parseInt(store.capture.speed),
							parseInt(store.capture.height),
							parseInt(store.capture.weight),
						],
						backgroundColor: 'rgba(255, 99, 132, 0.2)',
      					borderColor: 'rgba(255, 99, 132, 1)',
						borderWidth: 1,
						// tension: 0.1,
					}]
				}}
				// {...props}
			/>
			</div>

			<div className="flex justify-center cursor-pointer" onClick={()=> store.deletePokemon(store.entry)}>
				<img src={ButtonDelete.src} width="320" />
			</div>

		  </div>
			
		</>
		
      <Footer />
    </>
  );
});

const IconHP = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>

const IconAttack = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/></svg>

const IconDefense = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>

const IconSpeed = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>

const IconSpecies = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.75V21"/><path d="M7 18a6 6 0 0 0 3.84-10.61"/></svg>

const IconWeight = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"/></svg>

const IconHeight = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>



export default Pokedex;