import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


function Dashboard({ transactions =[], balance = 0, goals, budget = 0, totalAmount, darkMode, addedInvestments,formatCurrency, formatDate, handleRemoveInvestment, goalsProgress, setGoalsProgress, totalBudgetAmount}) {
    const navigate = useNavigate();
    
    // const recentTransactions = transactions.slice(-5);
    const totalInvestments = addedInvestments.reduce((sum, investment) => sum + parseFloat(investment.totalPrice), 0).toFixed(2);
    const overviewTotal = budget + parseFloat(totalInvestments) + balance - totalAmount;
    const sortedTransactions = transactions.sort((a, b) => new Date(a.date) - new Date(b.date));

    const formattedTransactions = sortedTransactions.map(transaction => ({
      ...transaction,
      date: formatDate(transaction.date)
    }))


    // FETCHING DATA FOR OVERVIEW TABLE
    useEffect(() => {
        // Fetch goals from the backend
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


    // const addGoal = (newGoal) => {
    //   setGoalsProgress([...goalsProgress, newGoal]);
    // };

    // const deleteGoal = (goalId) => {
    //   setGoalsProgress(goalsProgress.filter(goal => goal.id !== goalId));
    // };

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
                <div>
                  <h6>Added Investments</h6>
                  <p style={{ color: 'gray' }}><sup>Tracking All CRYPTO Transactions</sup></p>
                  <ul className={`list-group ${darkMode ? 'list-group-dark' : ''} table-rounded`}>
                    {addedInvestments.length === 0 ? (
                      <li className="list-group-item">No Investments Have Been Added</li>
                    ) : (
                      addedInvestments.map((investment, index) => (
                        <li key={index} className="list-group-item">
                          {investment.name} | {investment.amount} units | ${investment.totalPrice}
                          <button onClick={() => handleRemoveInvestment(index)} className="btn btn-sm btn-danger ml-2">Remove</button>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              
                <br />
                <div className="goals-progress  rounded px-5 " style={{ maxWidth: '600px'}}>
                    <h6 >Goals Progress</h6>
                    <p style={{color: 'gray'}}><sup>Tracking </sup></p>
                    <ul className="d-flex flex-column align-items-center">
                        {goalsProgress.map((goal, index) => (
                            <li key={index} className="d-flex align-items-center mb-2  rounded " style={{ width: '150%'}}>
                                <span className="mr-2" style={{ whiteSpace: 'nowrap' }}>{goal.name}:</span>
                                <div className="progress flex-grow-1 custom-progress-height border" style={{color: 'black'}}>
                                    <div className="progress-bar bg-success custom-progress-height" role="progressbar" style={{ width: `${goal.progress}%`}} aria-valuemin="0" aria-valuemax="100">
                                        {goal.progress.toFixed(2)}%
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
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
                                <td className="text-left" >{formatCurrency(totalInvestments)}</td>
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