import React from 'react';

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <div>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.txDescription}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
      </li>
    </div>
  );
};
