const { assert } = require('chai');
// require('chai').use(require('chai-as-promised')).should();

const ExpenseTracker = artifacts.require('ExpenseTracker');

contract('ExpenseTracker', (accounts) => {
  let expTracker;

  before(async () => {
    expTracker = await ExpenseTracker.new();
  });

  describe('Expense Tracker Deployment', () => {
    it('has a name', async () => {
      const name = await expTracker.name({ from: accounts[0] });
      assert.equal(name, 'ETH Expense Tracker App');
    });
  });

  describe('Testing sample transactions', () => {
    it('has a sample 1 income', async () => {
      const {
        txOwner,
        txDescription,
        amount,
      } = await expTracker.transactions('0', { from: accounts[0] });
      assert.equal(txOwner, accounts[0]);
      assert.equal(txDescription, 'This is sample 1: income');
      assert.equal(amount.toString(), '100');
    });

    it('has a sample 2 expense', async () => {
      const {
        txOwner,
        txDescription,
        amount,
      } = await expTracker.transactions('1', { from: accounts[0] });
      assert.equal(txOwner, accounts[0]);
      assert.equal(txDescription, 'This is sample 2: expense');
      assert.equal(amount.toString(), '-50');
    });
  });

  describe('Contract balance', () => {
    it('has a balance 0f 50', async () => {
      const balance = await expTracker.balance({ from: accounts[0] });
      assert.equal(balance.toString(), '50');
    });
  });

  describe('Adding Transaction', () => {
    it('should add new transaction', async () => {
      await expTracker.addTransaction('This is sample 3: income', '200', {
        from: accounts[0],
      });
    });

    it('has newly added transaction', async () => {
      const {
        txOwner,
        txDescription,
        amount,
      } = await expTracker.transactions('2', { from: accounts[0] });
      assert.equal(txOwner, accounts[0]);
      assert.equal(txDescription, 'This is sample 3: income');
      assert.equal(amount.toString(), '200');
    });

    it('has new balance 0f 250', async () => {
      const balance = await expTracker.balance({ from: accounts[0] });
      assert.equal(balance.toString(), '250');
    });
  });

  describe('Checking Transaction Count', () => {
    it('has a transaction count of 3', async () => {
      const txCount = await expTracker.transactionCount({ from: accounts[0] });
      assert.equal(txCount.toString(), '3');
    });
  });
});
