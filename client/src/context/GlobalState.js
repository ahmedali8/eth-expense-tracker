import React, { createContext, useReducer, useEffect, useContext } from 'react';
import AppReducer from './AppReducer';
import { loadBlockchain } from './asyncActions';

// Initial state
const initialState = {
  isWeb3: false,
  web3: null,
  transactions: [],
  balance: 0,
  account: '',
  contract: {},
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Global provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // console.log(state);

  useEffect(() => {
    loadBlockchain(dispatch);
  }, []);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};

// useStore hook to access state and dispatch
export const useStore = () => useContext(GlobalContext);
