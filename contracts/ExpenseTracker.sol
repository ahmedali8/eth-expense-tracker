// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.6.12;

contract ExpenseTracker {
    int256 public balance = 0;
    
    struct Transaction {
        address txOwner;
        string txDescription;
        int64 amount;
    }
    
    Transaction[] public transactions;
    
    function transactionCount() 
        public 
        view 
        returns (uint256) 
    {
        return transactions.length;
    }
    
    function addTransaction(string memory _description, int64 _amount) 
        public
        returns (bool)
    {
        transactions.push(
            Transaction({
                txOwner: msg.sender,
                txDescription: _description,
                amount: _amount
            })
        );
        balance += _amount;
        
        return true;
    }
}