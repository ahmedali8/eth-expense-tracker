// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.6.12;

contract ExpenseTracker {
	string public name;
    int256 public balance = 0;
    
    struct Transaction {
        address txOwner;
        string txDescription;
        int64 amount;
    }
    
    Transaction[] public transactions;

	constructor() public {
		name = 'ETH Expense Tracker App';

		// Sample Transactions
		addTransaction('This is sample 1: income', 100);
		addTransaction('This is sample 2: expense', -50);
	}
    
	// Read function
    function transactionCount() 
        public 
        view 
        returns (uint256) 
    {
        return transactions.length;
    }
    
	// Write function
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