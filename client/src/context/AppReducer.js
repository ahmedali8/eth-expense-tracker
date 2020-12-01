// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    case 'SETUP_WEB3':
      return {
        ...state,
        web3: action.payload,
        isWeb3: true,
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

    case 'SET_BALANCE':
      return {
        ...state,
        balance: action.payload,
      };

    default:
      return state;
  }
};
