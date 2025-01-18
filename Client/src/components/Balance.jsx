import React, {useState, useEffect} from "react";
import axios from "axios";

function Balance() {
  const [cashOnHand, setCashOnHand] = useState(0);
  const [bankAccountBalance , setBankAccountBalance] = useState(0);
  const [savings, setSavings] = useState(0);
  const [total , setTotal] = useState(0);
  
  useEffect(() => {
    axios.get('http://localhost:5001/balance')
    .then(response => {
      const balance = response.data;
      setCashOnHand(balance.cash_on_hand);
      setBankAccountBalance(balance.bank_account_balance);
      setSavings(balance.savings);
      setTotal(balance.cash_on_hand + balance.bank_account_balance + balance.savings);
    })
    .catch(error => {
      if (error.response && error.response.status === 404) {
        console.log('No balance found, initializing with the default value.');
      } else {
        console.error('There was an error fetching the balance', error);
      }
    });
  }, []);

  const formatAmount = (amount) => {
    return parseFloat(amount).toLocaleString();''
  }

  const totalBalance = () => {
    const newTotal = cashOnHand + bankAccountBalance + savings;
    setTotal(newTotal);

    axios.post('http://localhost:5001/balance',{
      cash_on_hand: cashOnHand,
      bank_account_balance: bankAccountBalance,
      savings: savings
    })
    .then(response => {
      console.log('Balance  saved:', response.data);
    })
    .catch(error => {
      console.error('There was an error saving your balance!', error);
    })
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

        <label htmlFor="cashOnHand" className="form-label">Cash on Hand : </label>
          <div className="input-group mb-3">
          <input 
            type="number" 
            id="cashOnHand"
            name="cashOnHand"
            value={cashOnHand}
            onChange={(e) => setCashOnHand(Number(e.target.value))}
            placeholder="Enter cash on hand"
            className="form-control"
          />
          <div className="input-group-append">
            <button className="btn btn-warning">Edit</button>
          </div>
        </div>
        <br />


        <label htmlFor="bankAccountBalance" className="form-label">Bank Account Balance</label>
        <div className="input-group mb-3">
          <input 
            type="number" 
            id="bankAccountBalance"
            name="bankAccountBalance"
            value={bankAccountBalance}
            onChange={(e) => setBankAccountBalance(Number(e.target.value))}
            placeholder="Enter bank account balance"
            className="form-control"
          />
          <div className="input-group-append">
            <button className="btn btn-warning">Edit</button>
          </div>
        </div>
        <br />


        <label htmlFor="savings" className="form-label">Savings</label>
        <div className="input-group mb-3">
          <input 
            type="number" 
            id="savings"
            name="savings"
            value={savings}
            onChange={(e) => setSavings(Number(e.target.value))}
            placeholder="Enter savings"
            className="form-control"
          />
          <div className="input-group-append">
            <button className="btn btn-warning">Edit</button>
          </div>
        </div>
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