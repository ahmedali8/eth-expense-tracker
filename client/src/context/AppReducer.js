export default (state, action) => {
  switch (action.type) {
    case 'SETUP_WEB3':
      return {
        ...state,
        web3: action.payload,
        isWeb3: true,
        loading: false,
      };

    case 'SETUP_CONTRACT':
      return {
        ...state,
        contract: action.payload,
      };

    case 'SETUP_ACCOUNT':
      return {
        ...state,
        account: action.payload,
      };

    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
};
