export default (state, action) => {
  switch (action.type) {
    case 'SETUP_WEB3':
      return {
        ...state,
        web3: action.payload,
        loading: false,
      };

    case 'SETUP_CONTRACT':
      return {
        ...state,
        contract: action.payload,
      };

    default:
      return state;
  }
};
