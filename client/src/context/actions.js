// Actions
export const setupWeb3 = (web3) => {
  return {
    type: 'SETUP_WEB3',
    action: web3,
  };
};

export const setupContract = (contract) => {
  return {
    type: 'SETUP_CONTRACT',
    payload: contract,
  };
};
