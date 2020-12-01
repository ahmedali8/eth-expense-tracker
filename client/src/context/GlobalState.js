import React, { createContext, useReducer, useContext } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = [];

// Create context
export const GlobalContext = createContext(initialState);

// Global provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};

// useStore hook to access state and dispatch
export const useStore = () => useContext(GlobalContext);
