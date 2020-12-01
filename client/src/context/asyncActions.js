import Web3 from 'web3';
import ExpenseTracker from '../abis/ExpenseTracker.json';
import {
  setupWeb3,
  setupContract,
  setupAccount,
  addTransaction,
} from './actions';

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

      // Loading Contract
      const networkId = await web3.eth.net.getId();
      const { address } = await ExpenseTracker.networks[networkId];
      const contract = new web3.eth.Contract(ExpenseTracker.abi, address);
      console.log(contract);
      dispatch(setupContract(contract));

      // Loading Account
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      dispatch(setupAccount(accounts[0]));

      // Loading Transactions
      let transactionCount = await contract.methods.transactionCount().call();
      console.log('transactionCount', transactionCount);

      for (var i = 0; i < transactionCount; i++) {
        const {
          txOwner,
          txDescription,
          amount,
        } = await contract.methods.transactions(i).call();

        let txObj = {
          txOwner,
          txDescription,
          amount: parseInt(amount),
        };

        console.log(txObj);
        dispatch(addTransaction(txObj));
      }
    } else {
      console.log('Please install Metamask or ethereum enabled browser!');
    }
  } catch (error) {
    console.log('Error in loading Web3 >>> ', error);

    if (error.code === 4001) {
      console.log('Error message >>> ', error.message);
    }
  }
};

export const addTransactionAsync = async (
  contract,
  account,
  newTxObj,
  dispatch
) => {
  console.log('before transaction');
  const receipt = await contract.methods
    .addTransaction(newTxObj.description, newTxObj.amount)
    .send({ from: account });
  console.log('after transaction >>>', receipt);
  dispatch(addTransaction(newTxObj));
};
