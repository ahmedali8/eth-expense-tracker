import React from 'react';
// global context
import { useStore } from './context/GlobalState';
// components
import {
  Header,
  AccountInfo,
  Balance,
  IncomeExpenses,
  TransactionList,
  AddTransaction,
  Footer,
  Popup,
} from './components';
// css file
import './App.css';

function App() {
  const [{ loading }] = useStore();

  return (
    <>
      {loading ? (
        <Popup />
      ) : (
        <div className="box-ui">
          <Header />
          <AccountInfo />
          <div className="container">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
