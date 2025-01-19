// import React, {useState, useEffect} from "react";
// import axios from "axios";

// function Balance({ darkMode }) {
//   const [cashOnHand, setCashOnHand] = useState(0);
//   const [bankAccountBalance , setBankAccountBalance] = useState(0);
//   const [savings, setSavings] = useState(0);
//   const [total , setTotal] = useState(0);
//   const [isEditingCash, setIsEditingCash] = useState(false);
//   const [isEditingBank, setIsEditingBank] = useState(false);
//   const [isEditingSavings, setIsEditingSavings] = useState(false);
//   const [balanceId, setBalanceId] = useState(null)
//   const [balances, setBalances] = useState([]);
  
//   useEffect(() => {
//     axios.get('http://localhost:5001/balance')
//     .then(response => {
//       const balance = response.data;
//       setBalanceId(balance.id)
//       setCashOnHand(balance.cash_on_hand);
//       setBankAccountBalance(balance.bank_account_balance);
//       setSavings(balance.savings);
//       setTotal(balance.cash_on_hand + balance.bank_account_balance + balance.savings);
//     })
//     .catch(error => {
//       console.error('There was an error fetching the balance!', error);
//     });
//   },[]);
  
//   const updateBalance = (id, updatedValues) => {
//     console.log(`Updating balance with  ID ${id}values:`, updatedValues); // Add logging
//     axios.put(`http://localhost:5001/balance/${id}`, updatedValues)
//     .then(response => {
//       console.log('Balance updated:', response.data);
//     })
//     .catch(error => {
//       console.error('There was an error updating your balance!', error);
//     });
//   }
  
//   const deleteBalance = () => {
//     console.log('Deleting balance');
//     axios.delete(`http://localhost:5001/balance/${balanceId}`)
//     .then(response => {
//       console.log('Balance deleted:', response.data);
//     })
//     .catch(error => {
//       console.error('There was an error deleting your balance', error);
//     })
    
//   }
  
//   const resetFields = () => {
//     const updatedValues = {
//       cash_on_hand: 0,
//       bank_account_balance: 0,
//       savings: 0,
//       total: 0
//     }
    
//     setCashOnHand(0);
//     setBankAccountBalance(0);
//     setSavings(0);
//     setTotal(0);
    
//     updateBalance(balanceId, updatedValues)
//   }

//   const totalBalance = () => {
//     const newTotal = cashOnHand + bankAccountBalance + savings;
//     setTotal(newTotal);

//     const newBalance = {
//       cash_on_hand: cashOnHand,
//       bank_account_balance: bankAccountBalance,
//       savings: savings,
//       total: newTotal
//     };

//     setBalances([...balances, newBalance]);

//     axios.post('http://localhost:5001/balance', newBalance)
//       .then(response => {
//         console.log('Balance saved:', response.data);
//       })
//       .catch(error => {
//         console.error('There was an error saving your balance!', error);
//       });
//   }
  
//   const formatAmount = (amount) => {
//     return parseFloat(amount).toLocaleString();
//   }




//   return (
//     <div>
//       <h5>Set Balance</h5>
//       <div className="container">
//         <label htmlFor="cashOnHand" className="form-label">Cash on Hand : </label>
//           <div className="input-group mb-3">
//           <input 
//             type="number" 
//             id="cashOnHand"
//             name="cashOnHand"
//             value={cashOnHand}
//             onChange={(e) => setCashOnHand(Number(e.target.value))}
//             placeholder="Enter cash on hand"
//             className="form-control"
//             // disabled={!isEditingCash}
//           />
//           {/* <div className="input-group-append">
//             {isEditingCash ? (
//               <>
//                 <button className="btn btn-success" onClick={() => { updateBalance(balanceId, { cash_on_hand: cashOnHand}); setIsEditingCash(false); }}>Save</button>
//                 <button className="btn btn-secondary" onClick={() => setIsEditingCash(false)}>Cancel</button>
//               </>
//             ) : (
//             <button className="btn btn-primary" onClick={() => setIsEditingCash(true)}>Edit</button>
//             )}
//           </div> */}
//         </div>
//         <br />


//         <label htmlFor="bankAccountBalance" className="form-label">Bank Account Balance</label>
//         <div className="input-group mb-3">
//           <input 
//             type="number" 
//             id="bankAccountBalance"
//             name="bankAccountBalance"
//             value={bankAccountBalance}
//             onChange={(e) => setBankAccountBalance(Number(e.target.value))}
//             placeholder="Enter bank account balance"
//             className="form-control"
//           />
//           {/* <div className="input-group-append">
//             {isEditingBank ? (
//               <>
//                 <button className="btn btn-success" onClick={() => { updateBalance(balanceId, {bank_account_balance: bankAccountBalance}); setIsEditingBank(false); }}>Save</button>
//                 <button className="btn btn-primary" onClick={() => setIsEditingBank(false)}>Cancel</button>
//               </>
//             ) : (
//             <button className="btn btn-primary" onClick={() => setIsEditingBank(true)}>Edit</button>
//             )} 
//           </div> */}
//         </div>
//         <br />


//         <label htmlFor="savings" className="form-label">Savings</label>
//         <div className="input-group mb-3">
//           <input 
//             type="number" 
//             id="savings"
//             name="savings"
//             value={savings}
//             onChange={(e) => setSavings(Number(e.target.value))}
//             placeholder="Enter savings"
//             className="form-control"
//           />
//           {/* <div className="input-group-append">
//             {isEditingSavings ? (
//               <>
//                 <button className="btn btn-success" onClick={() => { updateBalance(balanceId, {savings: savings}); setIsEditingSavings(false); }}>Save</button>
//                 <button className="btn btn-primary" onClick={() => setIsEditingSavings(false)}>Cancel</button>
//               </>
//             ) : (
//             <button className="btn btn-primary" onClick={() => setIsEditingSavings(true)}>Edit</button>
//             )}
//           </div> */}
//         </div>
//         <br />
//         <button className="btn btn-primary " onClick={totalBalance} >Set Balance</button>
//         <button className="btn btn-warning ml-2 " onClick={resetFields} >Reset</button>
//         <br />
//         <br />


//         {/* <h5>Total balance is: $ {isNaN(total) ? 0 : formatAmount(total)}</h5> */}
//         <h5>Account Overview</h5>

//         <div>
//         <table className={`table table-striped table-hover table-responsive ${darkMode ? 'table-dark' : 'table-light'} table-rounded`}>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Cash on Hand</th>
//                 <th>Bank Account Balance</th>
//                 <th>Savings</th>
//                 <th>Total</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {balances.map((balance, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>${balance.cash_on_hand}</td>
//                   <td>${balance.bank_account_balance}</td>
//                   <td>${balance.savings}</td>
//                   <td>${balance.total}</td>
//                   <td>
//                     <button className="btn btn-primary">Edit</button>
//                     <button className="btn btn-danger ml-2" onClick={deleteBalance}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
       
//       </div>
//     </div>
//   );
// }

// export default Balance;

// Assests
// Liabilities 

// Cash on Hand: Physical cash available.
// Bank Account Balance: The amount of money currently available in a bank account.
// Savings: Money saved in savings accounts.
// Investments: Liquid investments that can be quickly converted to cash.



import React, {useState, useEffect} from "react";
import axios from "axios";

function Balance({ darkMode }) {
  const [cashOnHand, setCashOnHand] = useState(0);
  const [bankAccountBalance , setBankAccountBalance] = useState(0);
  const [savings, setSavings] = useState(0);
  const [total , setTotal] = useState(0);
  const [balanceId, setBalanceId] = useState(null)
  const [balances, setBalances] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editBalance, setEditBalance] = useState({cash_on_hand: 0, bank_account_balance: 0, savings:0, total: 0});
  
  // useEffect(() => {
  //   axios.get('http://localhost:5001/balance')
  //   .then(response => {
  //     const balance = response.data;
  //     setBalanceId(balance.id)
  //     setCashOnHand(balance.cash_on_hand);
  //     setBankAccountBalance(balance.bank_account_balance);
  //     setSavings(balance.savings);
  //     setTotal(balance.cash_on_hand + balance.bank_account_balance + balance.savings);
  //   })
  //   .catch(error => {
  //     console.error('There was an error fetching the balance!', error);
  //   });
  // },[]);
  useEffect(() => {
    axios.get('http://localhost:5001/balance')
      .then(response => {
        console.log('Fetched data:', response.data); // Log the fetched data
        if (Array.isArray(response.data)) {
          const fetchedBalances = response.data.map(balance => ({
            ...balance,
            id: balance.id // Ensure each balance has an id
          }));
          setBalances(fetchedBalances);
        } else if (response.data && typeof response.data === 'object') {
          setBalances([response.data]); // Wrap the single object in an array
        } else {
          console.error('Fetched data is not an array or object:', response.data);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the balances!', error);
      });
  }, []);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditBalance({ ...editBalance, [name]: Number(value) })
  }

  const handleEditSave = async (index) => {
    const updatedBalance = { 
      ...editBalance, 
      total: editBalance.cash_on_hand + editBalance.bank_account_balance + editBalance.savings
    };

    try {
      await axios.put(`http://localhost:5001/balance/${balances[index].id}`, updatedBalance);
      const newBalances = balances.map((b, i) => (i === index ? { ...b, ...updateBalance} : b));
      setBalances(newBalances);
      setEditIndex(null);
      setEditBalance({ cash_on_hand: 0, bank_account_balance: 0, savings: 0, total: 0 });
    } catch (error) {
      console.error('Error updating balance:', error);
    }
  };

  const handleDelete = async (index) => {
    console.log('Balances array:', balances); // Log the balances array
    console.log('Index to delete:', index); // Log the index being passed
    const balance = balances[index];
    console.log('Deleting balance:', balance); // Add logging to debug
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
    console.log(`Updating balance with  ID ${id}values:`, updatedValues); // Add logging
    axios.put(`http://localhost:5001/balance/${id}`, updatedValues)
    .then(response => {
      console.log('Balance updated:', response.data);
    })
    .catch(error => {
      console.error('There was an error updating your balance!', error);
    });
  }
  
  // const deleteBalance = () => {
  //   console.log('Deleting balance');
  //   axios.delete(`http://localhost:5001/balance/${balanceId}`)
  //   .then(response => {
  //     console.log('Balance deleted:', response.data);
  //   })
  //   .catch(error => {
  //     console.error('There was an error deleting your balance', error);
  //   })
    
  // }
  
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
  
  const formatAmount = (amount) => {
    return parseFloat(amount).toLocaleString();
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

        <div>
        <table className={`table table-striped table-hover table-responsive ${darkMode ? 'table-dark' : 'table-light'} table-rounded`}>
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
                        <button onClick={() => handleEditSave(index)} className="btn btn-success">Save</button>
                        <button onClick={() => setEditIndex(null)} className="btn btn-secondary">Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{index + 1}</td>
                      <td>${balance.cash_on_hand}</td>
                      <td>${balance.bank_account_balance}</td>
                      <td>${balance.savings}</td>
                      <td>${balance.total}</td>
                      <td>
                        <button onClick={() => { setEditIndex(index); setEditBalance(balance); }} className="btn btn-primary">Edit</button>
                        <button onClick={() => handleDelete(index)} className="btn btn-danger ml-2">Delete</button>
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