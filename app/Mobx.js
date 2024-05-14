'use client';

import { useEffect, createContext } from 'react';
import AppStore from './store'

import { observer  } from 'mobx-react'
import { useContext } from 'react'

let store;

function initializeStore() {
	const _store = store ?? new AppStore();
  
	// For server side rendering always create a new store
	if (typeof window === "undefined") return _store;
  
	// Create the store once in the client
	if (!store) store = _store;

	if(!window.store){
		window.store = store
	}
  
	return _store;
  }

const StoreContext = createContext()

const MobxProvider = ({ children }) => {

	const store = initializeStore();

  return <StoreContext.Provider value={store}>
  		{children}
	</StoreContext.Provider>;

};

export { observer, useContext, MobxProvider, StoreContext }
export default MobxProvider