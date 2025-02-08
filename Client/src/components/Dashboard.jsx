import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


function Dashboard({ transactions =[], balance = 0, goals, budget = 0, totalAmount, darkMode,formatCurrency, formatDate, goalsProgress, setGoalsProgress, totalBudgetAmount, parseDate, setItems, setBalances, setCashOnHand, setBankAccountBalance, setSavings, setTransactions, setAmounts }) {
    const navigate = useNavigate();
    const [investments, setInvestments] = useState([]);
    const [addedInvestments, setAddedInvestments] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


    
    const totalInvestments = addedInvestments.reduce((sum, investment) => sum + parseFloat(investment.totalPrice), 0).toFixed(2);
    const overviewTotal = totalBudgetAmount + parseFloat(totalPrice) + balance - totalAmount;
    const sortedTransactions = transactions.sort((a, b) => new Date(a.date) - new Date(b.date));

    const formattedTransactions = sortedTransactions.map(transaction => ({
      ...transaction,
      date: formatDate(transaction.date)
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
    useEffect(() => {
      console.log('Loaded from Transactions.jsx component');
      axios.get('http://127.0.0.1:5001/transactions')
      .then(response => {
          setTransactions(response.data)
      })
      .catch(error => console.log('Error fetching transactions', error));
    }, []);

    // INVESTMENTS.jsx =============================================>>>>
    useEffect(() => {
      axios.get('http://localhost:5001/investments')
          .then(response => {
            console.log('Fetched from Investments:', response.data);
              setInvestments(response.data);
              calculateTotalPrice(response.data);
          })
          .catch(error => console.log('Error fetching investments', error));
    }, []);

    const calculateTotalPrice = (investments) => {
      const total = investments.reduce((sum, investment) => sum + investment.total_price, 0);
      setTotalPrice(total);
  };

    
  
    
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
      if (!investments || !investments[index]) {
          console.error('Investment not found');
          return;
      }

      const investmentId = investments[index].id; // Get the actual investment ID

      axios.delete(`http://localhost:5001/investments/${investmentId}`)
          .then(response => {
              if (response.status === 204) {
                  const newInvestments = investments.filter((_, i) => i !== index);
                  setInvestments(newInvestments);
                  calculateTotalPrice(newInvestments) ///////
              } else {
                  console.error('Failed to delete the investment');
              }
          })
          .catch(error => {
              console.error('Error:', error);
          });
  }

    return (
        <div className="container-fluid" >
          <div className="row"  >
            <div className="col-12" >
                <div className="summary">
                    <h5>Recent Transactions</h5>
                    <br />
                    <button onClick={() => navigate('/transactions')} className="btn btn-info"> View All Transactions</button>
                </div>
                <br />
                <div className="charts">
                    <h6>Spending Over Time</h6>
                    <p style={{color: 'gray'}}><sup>Tracking All X-PENSE Transactions</sup></p>
                    {/* <ResponsiveContainer width="100%" height="100%"> */}
                      <LineChart width={390} height={350} data={formattedTransactions}>
                        <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#444' : '#ccc'} />
                        <XAxis dataKey="date" stroke={darkMode ? '#fff' : '#000'} label={{ value: 'Date', angle: -0, position: 'insideBottomCEnter', offset: 0 }}/>
                        <YAxis dataKey="amount" vstroke={darkMode ? '#fff' : '#000'} label={{ value: 'Amount', angle: -90, position: 'insideLeft', offset: 0 }}  />
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
                    {/* </ResponsiveContainer> */}
                </div>
                <br />
                <div className="table-responsive">
                  <h6>Added Investments</h6>
                  <p style={{ color: 'gray' }}><sup>Tracking All CRYPTO Transactions</sup></p>
                  {investments.length === 0 ? (
                    <p>No Investments Have Been Added</p>
                  ) : (
                    <table className={`table table-bordered table-hover ${darkMode ? 'table-dark' : 'table-light table-light-bordered'} table-rounded`}>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Amount</th>
                          <th>Price</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {investments.map((investment, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{investment.name}</td>
                            <td>{investment.amount}</td>
                            <td>{formatCurrency(investment.total_price)}</td>
                            <td>
                            <button onClick={() => handleRemoveInvestment(index)} className="btn btn-sm btn-danger">Remove</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              
                <br />
                <div className="goals-progress rounded px-5" style={{ maxWidth: '600px' }}>
                    <h6>Goals Progress</h6>
                    <p style={{ color: 'gray' }}><sup>Tracking</sup></p>
                    <div className="d-flex flex-column align-items-center">
                        {goalsProgress.map((goal, index) => (
                            <div key={index} className="d-flex align-items-center mb-2 rounded" style={{ width: '150%' }}>
                                <span className="mr-2" style={{ whiteSpace: 'nowrap' }}>{goal.name}:</span>
                                <div className="progress flex-grow-1 custom-progress-height border" style={{ color: 'black' }}>
                                    <div className="progress-bar bg-success custom-progress-height" role="progressbar" style={{ width: `${goal.progress}%` }} aria-valuemin="0" aria-valuemax="100">
                                        {goal.progress.toFixed(2)}%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <br />
                <div className="table-responsive ">
                    <h6>Overview</h6>
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