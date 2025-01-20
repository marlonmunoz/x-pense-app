import React, {useState, useEffect} from "react";
import axios from "axios";

function Balance({ darkMode, cashOnHand, setCashOnHand, bankAccountBalance, setBankAccountBalance, savings, setSavings, total, setTotal, formatCurrency }) {
  const [balanceId, setBalanceId] = useState(null)
  const [balances, setBalances] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editBalance, setEditBalance] = useState({cash_on_hand: 0, bank_account_balance: 0, savings:0, total: 0});
  
  useEffect(() => {
    axios.get('http://localhost:5001/balance')
      .then(response => {
        if (Array.isArray(response.data)) {
          const fetchedBalances = response.data.map(balance => ({
            ...balance,
            total: balance.cash_on_hand + balance.bank_account_balance + balance.savings, // Calculate total
            id: balance.id // Ensure each balance has an id
          }));
          setBalances(fetchedBalances);
          if (fetchedBalances.length > 0) {
            const firstBalance = fetchedBalances[0];
            setCashOnHand(firstBalance.cash_on_hand);
            setBankAccountBalance(firstBalance.bank_account_balance);
            setSavings(firstBalance.savings);
          }
        } else if (response.data && typeof response.data === 'object') {
          const balance = {
            ...response.data,
            total: response.data.cash_on_hand + response.data.bank_account_balance + response.data.savings // Calculate total
          };
          setBalances([balance]); // Wrap the single object in an array
          setCashOnHand(balance.cash_on_hand);
          setBankAccountBalance(balance.bank_account_balance);
          setSavings(balance.savings);
        } else {
          console.error('Fetched data is not an array or object:', response.data);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the balances!', error);
      });
  }, []);

  useEffect(() => {
   
    setTotal(cashOnHand + bankAccountBalance + savings);
  }, [cashOnHand, bankAccountBalance, savings, setTotal]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditBalance({ ...editBalance, [name]: Number(value) })
  };

  const handleEditSave = (index) => {
    const updatedBalance = {
      ...editBalance,
      total: editBalance.cash_on_hand + editBalance.bank_account_balance + editBalance.savings // Recalculate total
    };
  
    const updatedBalances = balances.map((balance, i) => (i === index ? updatedBalance : balance));
    setBalances(updatedBalances);
    setEditIndex(null);
  
    // Optionally, send the updated balance to the server
    axios.put(`http://localhost:5001/balance/${updatedBalance.id}`, updatedBalance)
      .then(response => {
        console.log('Balance updated:', response.data);
      })
      .catch(error => {
        console.error('There was an error updating the balance!', error);
      });
  };

  const handleDelete = async (index) => {
    const balance = balances[index];
    if (!balance || !balance.id) {
      console.error('Balance or balance.id is undefined');
      return;
    }
    try {
      await axios.delete(`http://localhost:5001/balance/${balance.id}`);
      const newBalances = balances.filter((_, i) => i !== index);
      setBalances(newBalances);
    } catch (error) {
      console.error('Error deleting balance:', error);
    }
  };

  const updateBalance = (id, updatedValues) => {
    // console.log(`Updating balance with  ID ${id}values:`, updatedValues); // Add logging
    axios.put(`http://localhost:5001/balance/${id}`, updatedValues)
    .then(response => {
      console.log('Balance updated:', response.data);
    })
    .catch(error => {
      console.error('There was an error updating your balance!', error);
    });
  };
  
  const resetFields = () => {
    const updatedValues = {
      cash_on_hand: 0,
      bank_account_balance: 0,
      savings: 0,
      total: 0
    }
    
    setCashOnHand(0);
    setBankAccountBalance(0);
    setSavings(0);
    setTotal(0);
    
    updateBalance(balanceId, updatedValues)
  }

  const totalBalance = () => {
    const newTotal = cashOnHand + bankAccountBalance + savings;
    
    setTotal(newTotal);

    const newBalance = {
      cash_on_hand: cashOnHand,
      bank_account_balance: bankAccountBalance,
      savings: savings,
      total: newTotal
    };

    setBalances([...balances, newBalance]);

    axios.post('http://localhost:5001/balance', newBalance)
      .then(response => {
        console.log('Balance saved:', response.data);
      })
      .catch(error => {
        console.error('There was an error saving your balance!', error);
      });
  }
  
  // const formatAmount = (amount) => {
  //   return parseFloat(amount).toLocaleString();
  // };

  return (
    <div>
      <h5>Set Balance</h5>
      <div className="container">
        <label htmlFor="cashOnHand" className="form-label">Cash on Hand</label>
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
        </div>
        <br />
        <button className="btn btn-primary " onClick={totalBalance} >Set Balance</button>
        <button className="btn btn-warning ml-2 " onClick={resetFields} >Reset</button>
        <br />
        <br />

        <h5>Account Overview</h5>

        <div className="table-responsive">
        <table className={`table table-striped table-hover table-responsive ${darkMode ? 'table-dark' : 'table-light table-light-bordered'} table-rounded`}>
            <thead>
              <tr>
                <th>ACC#</th>
                <th>Cash on Hand</th>
                <th>Bank Account Balance</th>
                <th>Savings</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {balances.map((balance, index) => (
                <tr key={index}>
                  {editIndex === index ? (
                    <>
                      <td>{index + 1}</td>
                      <td>
                        <input type="number" name="cash_on_hand" value={editBalance.cash_on_hand} onChange={handleEditChange} className="form-control" />
                      </td>
                      <td>
                        <input type="number" name="bank_account_balance" value={editBalance.bank_account_balance} onChange={handleEditChange} className="form-control" />
                      </td>
                      <td>
                        <input type="number" name="savings" value={editBalance.savings} onChange={handleEditChange} className="form-control" />
                      </td>
                      <td>{editBalance.total}</td>
                      <td>
                        <button onClick={() => handleEditSave(index)} className="btn btn-sm btn-success">Save</button>
                        <button onClick={() => setEditIndex(null)} className="btn btn-sm btn-secondary ml-2">Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{index + 1}</td>
                      <td>{formatCurrency(balance.cash_on_hand)}</td>
                      <td>{formatCurrency(balance.bank_account_balance)}</td>
                      <td>{formatCurrency(balance.savings)}</td>
                      {/* {console.log('TOTAL', total)} */}
                      <td>{formatCurrency(balance.total !== undefined ? balance.total : 0)}</td>
                      
                      <td>
                        <button onClick={() => { setEditIndex(index); setEditBalance(balance); }} className="btn btn-sm btn-primary">Edit</button>
                        <button onClick={() => handleDelete(index)} className="btn btn-sm btn-danger ml-2">Delete</button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Balance;