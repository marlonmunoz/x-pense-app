import React from "react";

function Balance({ balance, setBalance, transactions }) {
  const handleChange = (event) => {
    setBalance(event.target.value);
  };

  const totalTransactions = transactions.reduce((total, transaction) => total + transaction.amount, 0);
  const remainingBalance = balance - totalTransactions;

  return (
    <div className="container">
      <h1>Balance</h1>
      <input
        type="number"
        value={balance}
        onChange={handleChange}
        placeholder="Enter balance"
        className="form-control"
      />
      <p>Your balance is: $ {balance}</p>
      <p>Total transactions: $ {totalTransactions}</p>
      <p>Remaining balance: $ {remainingBalance}</p>
    </div>
  );
}

export default Balance;