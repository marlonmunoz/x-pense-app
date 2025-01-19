import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'


function Dashboard({ transactions =[], balance = 0, goals =[], budget = 0, totalAmount, darkMode, addedInvestments }) {
    const navigate = useNavigate();
    
    const recentTransactions = transactions.slice(-5);
    const totalInvestments = addedInvestments.reduce((sum, investment) => sum + parseFloat(investment.totalPrice), 0).toFixed(2);
    const [goalsProgress, setGoalsProgress] = useState(goals.map(goal => ({
        ...goal,
        progress: (goal.saved / goal.target) * 100
      })));
    const overviewTotal = budget + parseFloat(totalInvestments) + balance - totalAmount;
    console.log('THIS IS THE TOTAL BALANCE OVERview', overviewTotal);

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

    const addGoal = (newGoal) => {
      setGoalsProgress([...goalsProgress, newGoal]);
    };

    const deleteGoal = (goalId) => {
      setGoalsProgress(goalsProgress.filter(goal => goal.id !== goalId));
    };

    return (
        <div className="large-container">
            <div className="summary">
                <h5>Recent Transactions</h5>
                <button onClick={() => navigate('/transactions')} className="btn btn-primary"> View All Transactions</button>
            </div>
            <br />
            <div>
                <h6>Added Investments</h6>
                <ul className={`list-group ${darkMode ? 'list-group-dark' : ''} table-rounded`}>
                    {addedInvestments.map((investment, index) => (
                        <li key={index} className="list-group-item">
                            {investment.name} | {investment.amount} units | ${investment.totalPrice}
                        </li>
                    ))}
                </ul>
            </div>
            <br />
            <br />
            <div className="goals-progress">
                <h6>Goals Progress</h6>
                <ul className="d-flex flex-column align-items-center">
                    {goalsProgress.map((goal, index) => (
                    <li key={index} className="d-flex align-items-center mb-2" style={{ width: '150%'}}>
                    <span className="mr-2" style={{ whiteSpace: 'nowrap' }}>{goal.name}:</span>
                    <div className="progress flex-grow-1 custom-progress-height" >
                      <div className="progress-bar bg-success custom-progress-height" role="progressbar" style={{ width: `${goal.progress}%`}} aria-valuemin="0" aria-valuemax="100">
                        {goal.progress.toFixed(2)}%
                      </div>
                    </div>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="charts">
                <h6>Spending Over Time</h6>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={transactions}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date"/>
                        <YAxis />
                        <Tooltip/>
                        <Legend />
                        <Line 
                            type="monotone"     
                            dataKey="amount"    
                            stroke="#08fa00" 
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <br />
            <div className="table-responsive">
                <h6>Overview</h6>
                <table className={`table table-bordered table-hover ${darkMode ? 'table-dark' : 'table-light'} table-rounded`}>
                    <tbody>
                        <tr>
                            <th scope="row">Current Balance</th>
                            {console.log('THIS IS THE TOTAL BALANCE', balance)} 
                            <td>${balance}</td>
                        </tr>
                        <tr>
                            <th scope="row">Total Investments</th>
                            <td>$ {totalInvestments.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <th scope="row">Budget</th>
                            <td>$ {budget.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <th scope="row">X-penses</th>
                            <td>$ {totalAmount.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <th scope="row">Overview Total</th>
                            <td>$ {overviewTotal.toLocaleString()}</td>
                        </tr>
                    </tbody>
                 </table>
            </div>
        </div>
    );
}

export default Dashboard;