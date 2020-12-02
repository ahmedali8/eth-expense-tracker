import React, { useState, useEffect } from 'react';
import { useStore } from '../context/GlobalState';

const AccountInfo = () => {
  const [{ web3, account }] = useStore();
  const [accountBalance, setAccountBalance] = useState();
  const [networkType, setNetworkType] = useState();

  // console.log(account);

  useEffect(() => {
    (async () => {
      if (web3 && account) {
        let balance = await web3.eth.getBalance(account);
        balance = web3.utils.fromWei(balance, 'ether');
        // console.log(balance);
        setAccountBalance(balance);

        let nType = await web3.eth.net.getNetworkType();
        // console.log(nType);
        setNetworkType(nType);
      }
    })();
  }, [web3, account]);
  return (
    <>
      {web3 && account ? (
        <div className="account-info">
          <p>
            Account: <small>{account}</small>
          </p>
          <p>
            Balance: <small>{accountBalance}</small>
          </p>
          <p>
            Network: <small>{networkType}</small>
          </p>
        </div>
      ) : (
        <div>Cannot load account info</div>
      )}
    </>
  );
};

export default AccountInfo;
