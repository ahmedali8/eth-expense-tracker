import React, { useState, useEffect } from 'react';

import { useStore } from '../context/GlobalState';

const Balance = () => {
  const [{ contract }] = useStore();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    (async () => {
      if (contract) {
        let total = await contract.methods.balance().call();
        console.log(total);
        setBalance(total);
      }
    })();
  }, [contract]);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${balance}</h1>
    </>
  );
};

export default Balance;
