import React from "react";

function Balance({ balance, setBalance, transactions, budget }) {
  const handleChange = (event) => {
    setBalance(event.target.value);
  };

  const totalTransactions = transactions.reduce((total, transaction) => total + transaction.amount, 0);
  const remainingBalance = balance - totalTransactions;

  return (
    <div className="container">
      <label htmlFor="amount" className="form-label"></label>    
      <input
        type="number"
        id="balance"
        name="balance"
        value={balance}
        onChange={handleChange}
        placeholder="Enter balance"
        className="form-control"
      />
      <p>Your balance is: $ {balance}</p>
      <p>Total transactions: $ {totalTransactions}</p>
      <p>Remaining balance: $ {remainingBalance}</p>
      <p>Budget: $ {budget}</p>
    </div>
  );
}

export default Balance;

// Assests
// Liabilities 
