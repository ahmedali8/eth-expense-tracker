// Actions
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
