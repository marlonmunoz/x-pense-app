import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { parseISO, format } from 'date-fns';



function Dashboard({ transactions =[], balance = 0, totalAmount, darkMode,formatCurrency, formatDate, goalsProgress, setGoalsProgress, totalBudgetAmount, parseDate, setItems, setBalances, setCashOnHand, setBankAccountBalance, setSavings, setTransactions, setAmounts, addedInvestments, setAddedInvestments }) {
    const navigate = useNavigate();
    const [investments, setInvestments] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const [editIndex, setEditIndex] = useState(null);
    const [editAmount, setEditAmount] = useState("");


    
    const totalInvestments = addedInvestments.reduce((sum, investment) => sum + parseFloat(investment.total_price), 0).toFixed(2);
    const overviewTotal = totalBudgetAmount + parseFloat(totalPrice) + balance - totalAmount;
    const sortedTransactions = transactions.sort((a, b) => new Date(a.date) - new Date(b.date));

    const formattedTransactions = sortedTransactions.map(transaction => ({
      ...transaction,
      date: formatDate(parseDate(transaction.date))
    }))


    // FETCHING DATA FOR OVERVIEW TABLE
    // GOAL.jsx ==============================================>>>>
    useEffect(() => {
        // Fetch goals from the backend
        console.log('Loaded from Goal.jsx component');
        axios.get('http://localhost:5001/goals')
          .then(response => {
            const goals = response.data.map(goal => ({
              ...goal,
              progress: (goal.saved / goal.target) * 100
            }));
            setGoalsProgress(goals);
          })
          .catch(error => {
            console.error('Error fetching goals:', error);
          });
    }, []);

    // BUDGET.jsx =============================================>>>>
    useEffect (() => {
      console.log('Loaded from Budget.jsx component');
      axios.get('http://localhost:5001/budgets')
        .then(response => {
          const adjustedBudgets = response.data.map(budget => ({
            ...budget,
            date: parseDate(budget.date)
          }));
          setItems(adjustedBudgets);
        })
        .catch(error => {
          console.error('Error fetching budgets:', error)
        })
    },[])

    // BALANCE.jsx =============================================>>>>
    useEffect(() => {
      // Fetch balances from the backend
      console.log('Loaded from Balance.jsx component');
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
          console.error('Error fetching balances:', error);
        });
    }, []);

    // TRANSACTIONS.jsx =============================================>>>>
    // useEffect(() => {
    //   console.log('Loaded from Transactions.jsx component');
    //   axios.get('http://127.0.0.1:5001/transactions')
    //   .then(response => {
    //       setTransactions(response.data)
    //   })
    //   .catch(error => console.log('Error fetching transactions', error));
    // }, []);
    useEffect(() => {
      console.log('TRANSACTIONS COMPONENT');
      
      console.log('Fetching transactions...'); // logs 01
      axios.get('http://127.0.0.1:5001/transactions')
      .then(response => {
          console.log('Fetched transactions:', response.data); // log 02
          setTransactions(response.data)
      })
      .catch(error => console.log('Error fetching transactions', error));
    }, []);

    // INVESTMENTS.jsx =============================================>>>>
    useEffect(() => {
      axios.get('http://localhost:5001/investments')
          .then(response => {
            console.log('Fetched from Investments:', response.data);
              // setInvestments(response.data);
              setAddedInvestments(response.data);
              calculateTotalPrice(response.data);
          })
          .catch(error => console.log('Error fetching investments', error));
    }, []);


    const calculateTotalPrice = (investments) => {
      const total = investments.reduce((sum, investment) => sum + investment.total_price, 0);
      setTotalPrice(total);
    };

    useEffect(() => {
      // const calculateTotalPrice = (investments) => {
      //     const total = investments.reduce((sum, investment) => sum + parseFloat(investment.totalPrice), 0);
      //     setTotalPrice(total);
      // };
  
      calculateTotalPrice(addedInvestments);
    }, [addedInvestments]);
    
  const CustomTooltip = ({ active, payload}) => {
      if (active && payload && payload.length) {
          const { date, amount, description } = payload[0].payload;
          return (
              <div style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000', padding: '10px', border: '1px solid #ccc'}} >
                  <p>{`Date: ${date}`}</p>
                  <p>{`Amount: ${amount}`}</p>
                  <p>{`Description: ${description}`}</p>
              </div>
          );
      }
      return null;
  }

  const handleRemoveInvestment = (index) => {
    if (!addedInvestments || !addedInvestments[index]) {
        console.error('Investment not found');
        return;
    }

    const investmentId = addedInvestments[index].id; // Assuming each investment has an 'id' property

    axios.delete(`http://localhost:5001/investments/${investmentId}`)
        .then(response => {
            if (response.status === 204) {
                const newInvestments = addedInvestments.filter((_, i) => i !== index);
                setAddedInvestments(newInvestments);
            } else {
                console.error('Failed to delete the investment');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
  };

  // EDIT AMOUNT 
  const handleEditInvestment = (index) => {
    setEditIndex(index);
    setEditAmount(addedInvestments[index].amount);
  };

  const handleSaveInvestment = (index) => {
    const updatedInvestments = [ ...addedInvestments];
    const investment = updatedInvestments[index];
    const amount = parseFloat(editAmount);
    if (!isNaN(amount)) {
        investment.amount = amount;
        if (investment.pricePerUnit) {
            investment.total_price = amount * investment.pricePerUnit;
        } else {
            console.error('pricePerUnit is not defined for investment:', investment);
        }

        // Make PUT request to update investment in the backend
        axios.put(`http://localhost:5001/investments/${investment.id}`, {
            amount: investment.amount,
            totalPrice: investment.total_price
        })
        .then(response => {
            setAddedInvestments(updatedInvestments);
            setEditIndex(null);
            setEditAmount("");
        })
        .catch(error => {
            console.error('Error updating investment:', error);
        });
    } else {
        console.error('Invalid amount:', editAmount);
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditAmount("");
  }

    return (
        <div className={`container-fluid ${darkMode ? 'dark-mode' : 'light-mode'}`} >
          <div className="row"  >
            <div className="col-12" >
                <div className="summary">
                    <h5>Recent Transactions</h5>
                    <br />
                    <button onClick={() => navigate('/transactions')} className={`btn ${darkMode ? 'btn-light' : 'btn-dark'}`}> View All Transactions</button>
                </div>
                <br />
                <div className={`charts border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
                    <h6>Spending Over Time</h6>
                    <p style={{color: 'gray'}}><sup>Tracking All X-PENSE Transactions</sup></p>
                    <LineChart width={390} height={350} data={formattedTransactions}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#444' : '#ccc'} />
                      <XAxis dataKey="date" stroke={darkMode ? '#fff' : '#000'} label={{ value: 'Date', angle: -0, position: 'insideBottomLeft', offset: -10 }}/>
                      <YAxis dataKey="amount" stroke={darkMode ? '#fff' : '#000'} label={{ value: 'Amount', angle: -90, position: 'insideLeft', offset: 0 }}  />
                      <Tooltip content={<CustomTooltip />}/>
                      <Legend wrapperStyle={{ color: darkMode ? '#fff' : '#000' }} />
                      <Line 
                        type="monotone"     
                        dataKey="amount"   
                        label={{ position: 'top', fill: darkMode ? '#fff' : '#000' }}
                        stroke={darkMode ? '#08fa00' : '#8884d8'} 
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                </div>
                <br />

                <div className={`table-responsive border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
                  <h6>Added Investments</h6>
                  <p style={{ color: 'gray' }}><sup>Tracking All CRYPTO Transactions</sup></p>
                  {addedInvestments.length === 0 ? (
                    <p className="border border-danger rounded p-2 ml-7 text-danger">No Investments Have Been Added !</p>
                  ) : (
                    <table className={`table table-bordered table-hover ${darkMode ? 'table-dark' : 'table-light table-light-bordered'} table-rounded`}>
                      <thead>
                        <tr>
                          <th className="hidden"> ID</th>
                          <th>Name</th>
                          <th>Amount</th>
                          <th>Price</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {addedInvestments.map((investment, index) => (
                          <tr key={index}>
                            <td data-label="ID" className="hidden">{index + 1}</td>
                            <td data-label="Name"><strong>{investment.name}</strong></td>
                            {/* <td data-label="Amount">{investment.amount}</td> */}
                            <td data-label="Amount">
                              {editIndex === index ? (
                                <input
                                type="number"
                                value={editAmount}
                                onChange={(e) => setEditAmount(e.target.value)}
                                />
                              ) : (
                                investment.amount
                              )}
                            </td>

                            <td data-label="Price">{formatCurrency(investment.total_price)}</td>
                            <td data-label="Actions">
                              {editIndex === index ? (
                                <>
                                  <button onClick={() => handleSaveInvestment(index)} className="btn btn-sm btn-success">Save</button>
                                  <button onClick={handleCancelEdit} className="btn btn-sm btn-secondary ml-1">Cancel</button>
                                </>
                              ) : (
                                <>
                                  <button onClick={() => handleRemoveInvestment(index)} className="btn btn-sm btn-danger">Remove</button>
                                  <button onClick={() => handleEditInvestment(index)} className="btn btn-sm btn-primary ml-1">Edit Amount</button>
                                </>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              
                <br />
                <div className={`table-responsive border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
                  <h6>Goals Progress</h6>
                  <p style={{ color: 'gray' }}><sup>Tracking</sup></p>
                  {goalsProgress.length === 0 ? (
                    <p className="border border-danger rounded p-2 ml-7 text-danger">No Goals Have Been Added !</p>
                  ) : (
                    <div className="goals-progress rounded px-5 border border-info rounded p-2 ml-6" style={{ maxWidth: '600px', borderWidth: '2px' }} >
                      <div className="d-flex flex-column align-items-center">
                        {goalsProgress.map((goal, index) => (
                          <div key={index} className="d-flex align-items-center mb-2 rounded" style={{ width: '120%' }}>
                            <span className="mr-2" style={{ whiteSpace: 'nowrap' }}>{goal.name}:</span>
                            <div className="progress flex-grow-1 custom-progress-height border border-info " style={{ color: 'black' }}>
                              {/* <div className="progress-bar bg-success custom-progress-height" role="progressbar" style={{ width: `${goal.progress}%` }} aria-valuemin="0" aria-valuemax="100"> */}
                              <div className={`progress-bar ${darkMode ? 'bg-info' : 'bg-success'} custom-progress-height`} role="progressbar" style={{ width: `${goal.progress}%` }} aria-valuemin="0" aria-valuemax="100">  
                                {goal.progress.toFixed(2)}%
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <br />
                <div className={`table-responsive border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
                    <h6>Overview</h6>
                    <p style={{ color: 'gray' }}><sup>Total Summary</sup></p>
                    <table className={`table table-bordered table-hover ${darkMode ? 'table-dark' : 'table-light table-light-bordered'} table-rounded`}>
                        <tbody>
                            <tr>
                                <th scope="row">Balance</th>
                                <td className="text-left" >{formatCurrency(balance)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Investments</th>
                                <td className="text-left" >{formatCurrency(totalPrice)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Budget</th>
                                <td className="text-left" >{formatCurrency(totalBudgetAmount)}</td>
                            </tr>
                            <tr>
                                <th scope="row">X-penses</th>
                                <td className="text-left" >{formatCurrency(totalAmount)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Overview Total</th>
                                <td className="text-left" >{formatCurrency(overviewTotal)}</td>
                            </tr>
                        </tbody>
                     </table>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;