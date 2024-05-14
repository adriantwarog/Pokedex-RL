"use client";
import { StoreContext, useContext, observer } from '@/app/Mobx'
import { useEffect, useRef } from 'react'
import Header from '@/app/layout/Header'
import Footer from '@/app/layout/Footer'

const Leaderboard = observer(() => {
  const store = useContext(StoreContext)

  const initialized = useRef(false)

  useEffect(() => {
	// Fix so that it doesn't run on first render
	if (!initialized.current) {
		initialized.current = true
		store.getLeaderboard()
	}
	return () => {
		
	}
  }, []);

  return (
    <>
      <Header />


        <div className="h-12"/>

        
      
        <div className="relative overflow-x-auto">
         <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="w-12 text-center">
                    #
                </th>
                <th scope="col" className="px-3 py-3">
                    Name
                </th>
                <th scope="col" className="px-3 py-3">
                    Entries
                </th>
            </tr>
        </thead>
        <tbody>
            {store.leaderboard.map((user, index) => (
              <tr className="bg-white border-b" key={index}>
                <th scope="row" className="w-12 text-center  font-medium text-gray-900 whitespace-nowrap ">
                    {index + 1}
                </th>
                <td className="px-3 py-3">
                    <img src={user.avatar} className="w-6 h-6 rounded-full inline-block mr-2" alt={user.name} />
                    {user.name}
                </td>
                <td className="px-3 py-3">
                    {user.pokedexEntries}
                </td>
            </tr>))}
        </tbody>
    </table>
    {store.leaderboardRefresh ? 
          <div className="text-center mt-4 pt-4 text-gray-400">
              <div className="mt-4 bouncing-loader "><div /><div /><div /></div>
              <div className="mt-4">Refreshing</div>
            </div>
        : <div >
          
        </div>}
</div>

      <Footer />
    </>
  );
});



export default Leaderboard;