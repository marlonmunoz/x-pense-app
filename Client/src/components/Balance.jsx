import React, { useEffect } from "react";
import axios from "axios";

function Balance({ darkMode, cashOnHand, setCashOnHand, bankAccountBalance, setBankAccountBalance, savings, setSavings, setTotal, formatCurrency, balanceId, setBalanceId, balances, setBalances, editIndex, setEditIndex, editBalance, setEditBalance }) {
  useEffect(() => {
    console.log('BALANCE COMPONENT');
    console.log('Fetching balances...');
    axios.get('http://localhost:5001/balance')
      .then(response => {
        console.log('Response received:', response.data);
        if (Array.isArray(response.data)) {
          const fetchedBalances = response.data.map(balance => ({
            ...balance,
            total: balance.cash_on_hand + balance.bank_account_balance + balance.savings, // Calculate total
            id: balance.id // Ensure each balance has an id
          }));
          console.log('Fetched balances:', fetchedBalances);
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
          console.log('Fetched single balance:', balance);
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
    axios.put(`http://localhost:5001/balance/${id}`, updatedValues)
    .then(response => {
      console.log('Balance updated:', response.data);
    })
    .catch(error => {
      console.error('There was an error updating your balance!', error);
    })
  };

  const resetFields = () => {
    setCashOnHand(0);
    setBankAccountBalance(0);
    setSavings(0);
    setTotal(0);
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
        resetFields();
      })
      .catch(error => {
        console.error('There was an error saving your balance!', error);
      });
  }

  return (
    <div>
      <h5>Set Balance</h5>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <label htmlFor="cashOnHand" className="form-label">Cash On Hand</label>
            <input 
              type="number" 
              id="cashOnHand"
              name="cashOnHand"
              value={cashOnHand}
              onChange={(e) => setCashOnHand(Number(e.target.value))}
              placeholder="Enter cash on hand"
              className="form-control"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      <br />


        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <label htmlFor="bankAccountBalance" className="form-label">Bank Account Balance</label>
            <input 
              type="number" 
              id="bankAccountBalance"
              name="bankAccountBalance"
              value={bankAccountBalance}
              onChange={(e) => setBankAccountBalance(Number(e.target.value))}
              placeholder="Enter bank account balance"
              className="form-control"
              style={{ width: '100%' }}
            />
          </div>
        </div>
        <br />


        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <label htmlFor="savings" className="form-label">Savings</label>
            <input 
              type="number" 
              id="savings"
              name="savings"
              value={savings}
              onChange={(e) => setSavings(Number(e.target.value))}
              placeholder="Enter savings"
              className="form-control"
              style={{ width: '100%' }}
            />
          </div>
        </div>
        <br />
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 ">
            <button className="btn btn-primary ml-2" onClick={totalBalance} >Set Balance</button>
            <button className="btn btn-warning ml-2 " onClick={resetFields} >Reset</button>
          </div>
        </div>
        <br />
        <br />

        <h5>Account Overview</h5>

        <div className="table-responsive">
        <table className={`table table-striped table-hover table-bordered ${darkMode ? 'table-dark' : 'table-light table-light-bordered'} table-rounded`}>
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
                      <td className="d-none d-md-table-cell" data-label="ACC#">{index + 1}</td>
                      <td data-label="Cash on Hand">
                        <input type="number" name="cash_on_hand" value={editBalance.cash_on_hand} onChange={handleEditChange} className="form-control" />
                      </td>
                      <td data-label="Bank Acc Balance">
                        <input type="number" name="bank_account_balance" value={editBalance.bank_account_balance} onChange={handleEditChange} className="form-control" />
                      </td>
                      <td data-label="Savings">
                        <input type="number" name="savings" value={editBalance.savings} onChange={handleEditChange} className="form-control" />
                      </td>
                      <td className="d-none d-md-table-cell">{editBalance.total}</td>
                      <td data-label="Actions">
                        <button onClick={() => handleEditSave(index)} className="btn btn-sm btn-success ml-2">Save</button>
                        <button onClick={() => setEditIndex(null)} className="btn btn-sm btn-secondary ml-2 ">Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="d-none d-md-table-cell" data-label="ACC#">{index + 1}</td>
                      <td data-label="Cash on Hand">{formatCurrency(balance.cash_on_hand)}</td>
                      <td data-label="Bank Acc Balance">{formatCurrency(balance.bank_account_balance)}</td>
                      <td data-label="Savings">{formatCurrency(balance.savings)}</td>
                      <td className="d-none d-md-table-cell">{formatCurrency(balance.total !== undefined ? balance.total : 0)}</td>
                      <td data-label="Actions">
                        <button onClick={() => { setEditIndex(index); setEditBalance(balance); }} className="btn btn-sm btn-primary ml-2">Edit</button>
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