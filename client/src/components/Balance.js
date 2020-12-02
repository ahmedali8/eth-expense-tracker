import React from 'react';

import { useStore } from '../context/GlobalState';

const Balance = () => {
  const [{ balance }] = useStore();
  // console.log(balance);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${balance}</h1>
    </>
  );
};

export default Balance;
