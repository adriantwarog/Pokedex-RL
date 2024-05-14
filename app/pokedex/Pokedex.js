"use client";
import { StoreContext, useContext, observer } from '@/app/Mobx'
import "./style.css";

const Pokedex = observer(() => {
  const store = useContext(StoreContext)
  return (
	<>
		<Searchbar />
		<div className="flex flex-col px-4 gap-4">
			{store.filteredPokemon.map((poke) => (
				<Poke key={poke._id.$uuid} poke={poke} viewPoke={store.viewPoke} />
			))
			}
      {store.pokemon.length === 0 && 
      <div className="text-center p-4">
         <img src="/dragon.svg" width="100" className="mx-auto mb-4 grayscale opacity-50" />
         <h2 className="text-3xl mb-2">No Pokemon Found</h2>
         <p>Try taking some photos of pokemon on the Camera Page</p>
      </div>
      }
		</div>
	</>
  );
});

// poke.no is a number that should be like N001, N002, N003, etc. but can go past N999 to N1000, N1001, etc. for numbers below 1000, it should be N001, N002, N003, etc with the padding of 0s.

function pad(num = 0, size = 3) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

const Poke = ({ poke, viewPoke}) => {
  const type = poke.type.toLowerCase();
  const firstType = type.split(/[^a-zA-Z]/g)[0];
  
  return (
    <div 
    className={`flex rounded-xl cursor-pointer bg-100-${firstType}`}
     onClick={()=>viewPoke(poke)}>
        <div className="flex-1 flex flex-col justify-center pl-4">
          <span className="text-xs font-medium">N{pad(poke.no)}</span>
          <h2 className="text-xl font-bold">{poke.object}</h2>
          <div>
            <div
              className={`inline-flex items-center gap-2 px-2 py-1 text-xs rounded-full mt-2 font-medium bg-${firstType}`}
            >
            <span className="inline-flex align-center content-center rounded-full w-3 h-3">
              <img src={`./${firstType}-icon.svg`} width="100%" />
            </span>
            {poke.type}
            </div>
          </div>
        </div>
        <div className="flex-1 relative h-32">
          <div className="absolute  bg-gray-200 rounded-xl bg-cover bg-center top-2 right-2 bottom-2 left-2" style={{
            backgroundImage: `url(${poke.image})`
          }}></div>
        </div>
      </div>
  )
}

const Searchbar = observer(() => {
  const store = useContext(StoreContext)
  return (
    <div className="mt-12 p-4">
          <form className="flex items-center">   
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                  <svg className="w-6 h-6 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input 
                  type="text" 
                  onChange={(e) => store.keyword = e.target.value}
                  value={store.keyword}
                  id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-4  text-lg" placeholder="Search..." required />
            </div>
        </form>
      </div>
  )
})


export default Pokedex;