// Actions

export const setloading = (boolean) => {
  return {
    type: 'SET_LOADING',
    payload: boolean,
  };
};

export const setupWeb3 = (web3) => {
  return {
    type: 'SETUP_WEB3',
    payload: web3,
  };
};

export const setupContract = (contract) => {
  return {
    type: 'SETUP_CONTRACT',
    payload: contract,
  };
};

export const setupAccount = (account) => {
  return {
    type: 'SETUP_ACCOUNT',
    payload: account,
  };
};

export const addTransaction = (txObj) => {
  return {
    type: 'ADD_TRANSACTION',
    payload: txObj,
  };
};

export const setBalance = (balance) => {
  return {
    type: 'SET_BALANCE',
    payload: balance,
  };
};
