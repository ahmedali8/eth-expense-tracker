import React from 'react';
import { Transaction } from './Transaction';

import { useStore } from '../context/GlobalState';

const TransactionList = () => {
  const [{ transactions }] = useStore();

  return (
    <>
      <div className="tx-history">
        <h3>Transaction History</h3>
      </div>
      <ul className="list">
        {transactions.map((transaction, index) => (
          <Transaction key={index} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
