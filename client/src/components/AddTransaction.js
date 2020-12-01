import React, { useState, useContext } from 'react';

import { useStore } from '../context/GlobalState';
import { addTransactionAsync } from '../context/asyncActions';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const [{ contract, account }, dispatch] = useStore();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (text.trim() === '') {
      alert('Add valid text');
    } else if (+amount.trim() === 0) {
      alert('Add valid amount');
    } else {
      let newTxObj = {
        txDescription: text,
        amount: parseInt(amount),
      };

      await addTransactionAsync(contract, account, newTxObj, dispatch);

      setText('');
      setAmount('');
    }
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (income is positive, expense is negative)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
            required
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
