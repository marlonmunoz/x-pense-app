import React, {useState} from "react";


function Balance({ balance, setBalance, transactions, budget }) {
  const handleChange = (event) => {
    setBalance(event.target.value);
  };

  const totalTransactions = transactions.reduce((total, transaction) => total + transaction.amount, 0);
  const remainingBalance = balance - totalTransactions;

  const [cashOnHand, setCashOnHand] = useState();
  const [bankAccountBalance , setBankAccountBalance] = useState();
  const [savings, setSavings] = useState();
  const [investments, setInvestments] = useState();

  const totalBalance = cashOnHand + bankAccountBalance + savings + investments;

  return (
    <div>
      <h5>Set Balance</h5>
      <div className="container">
        <label htmlFor="cashOnHand" className="form-label">Cash on Hand</label>
        <input 
          type="number" 
          id="cashOnHand"
          name="cashOnHand"
          value={cashOnHand}
          onChange={(e) => setCashOnHand(Number(e.target.value))}
          placeholder="Enter cash on hand"
          className="form-control"
        />
        <br />
        <label htmlFor="bankAccountBalance" className="form-label">Bank Account Balance</label>
        <input 
          type="number" 
          id="bankAccountBalance"
          name="bankAccountBalance"
          value={bankAccountBalance}
          onChange={(e) => setBankAccountBalance(Number(e.target.value))}
          placeholder="Enter bank account balance"
          className="form-control"
        />
        <br />
        <label htmlFor="savings" className="form-label">Savings</label>
        <input 
          type="number" 
          id="savings"
          name="savings"
          value={savings}
          onChange={(e) => setSavings(Number(e.target.value))}
          placeholder="Enter savings"
          className="form-control"
        />
        <br />
        <label htmlFor="investments" className="form-label">Investments</label>
        <input 
          type="number" 
          id="investments"
          name="investments"
          value={investments}
          onChange={(e) => setInvestments(Number(e.target.value))}
          placeholder="Enter investments"
          className="form-control"
        />
        <br />
        <p>Your total balance is: $ {totalBalance}</p>
        {/* <p>Your balance is: $ {balance}</p> */}
        <p>Total transactions: $ {totalTransactions}</p>
        <p>Remaining balance: $ {remainingBalance}</p>
        <p>Budget: $ {budget}</p>
      </div>
    </div>
  );
}

export default Balance;

// Assests
// Liabilities 

// Cash on Hand: Physical cash available.
// Bank Account Balance: The amount of money currently available in a bank account.
// Savings: Money saved in savings accounts.
// Investments: Liquid investments that can be quickly converted to cash.