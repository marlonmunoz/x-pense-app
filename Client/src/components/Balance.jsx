import React, {useState} from "react";


function Balance() {
  const [cashOnHand, setCashOnHand] = useState(0);
  const [bankAccountBalance , setBankAccountBalance] = useState(0);
  const [savings, setSavings] = useState(0);
  const [total , setTotal] = useState(0);
  
 

  const formatAmount = (amount) => {
    return parseFloat(amount).toLocaleString();''
  }


  const totalBalance = () => {
    setTotal(cashOnHand + bankAccountBalance + savings);
  }

  const resetFields = () => {
    setCashOnHand(0);
    setBankAccountBalance(0);
    setSavings(0);
    setTotal(0);
  }

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
        <button className="btn btn-primary " onClick={totalBalance} >Set Balance</button>
        <button className="btn btn-danger ml-2 " onClick={resetFields} >Reset</button>
        <br />
        <br />
        <h5>Total balance is: $ {isNaN(total) ? 0 : formatAmount(total)}</h5>
       
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