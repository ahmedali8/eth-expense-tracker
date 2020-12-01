import Web3 from 'web3';
import ExpenseTracker from '../abis/ExpenseTracker.json';
import { setupWeb3 } from './actions';

// For loading blockchain
export const loadBlockchain = async (dispatch) => {
  try {
    console.log('Web3 >>>', Web3);
    console.log('Web3 Provider >>>', Web3.givenProvider);
    console.log('window.ethereum >>>', window.ethereum);

    if (window.ethereum) {
      // Loading web3
      const web3 = new Web3(window.ethereum || 'http://localhost:7545');
      console.log(web3);
      await window.ethereum.enable();
      dispatch(setupWeb3(web3));
    }
  } catch (error) {
    console.log('Error in loading Web3 >>> ', error);

    if (error.code === 4001) {
      console.log('Error message >>> ', error.message);
    }
  }
};
