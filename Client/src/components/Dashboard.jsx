import React from "react";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'


function Dashboard({ transactions =[], balance =0, goals =[], investments= [], budget = 0, totalAmount, darkMode, addedInvestments }) {
    const navigate = useNavigate();
    
    const recentTransactions = transactions.slice(-5);
    const totalInvestments = addedInvestments.reduce((sum, investment) => sum + parseFloat(investment.totalPrice), 0).toFixed(2);
    const goalsProgress = goals.map(goal => ({
        ...goal,
        progress: (goal.saved / goal.target) * 100
    }));
    const overviewTotal = budget + parseFloat(totalInvestments) - balance - totalAmount;

    return (
        <div>
            <div className="summary">
                <h5>Recent Transactions</h5>
                <button onClick={() => navigate('/transactions')} className="btn btn-primary"> View All Transactions</button>
            </div>
            <br />
            <div className="table-responsive">
                <table className={`table table-bordered table-hover ${darkMode ? 'table-dark' : 'table-light'} table-rounded`}>
                    <tbody>
                        <tr>
                            <th scope="row">Current Balance</th>
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
            <div>
                <h6>Added Investments</h6>
                <ul>
                    {addedInvestments.map((investment, index) => (
                        <li key={index}>
                            {investment.name} - {investment.amount} units - ${investment.totalPrice}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="goals-progress">
                <h5>Goals Progress</h5>
                <ul>
                    {goalsProgress.map((goal, index) => (
                      <li key={index} className="d-flex align-items-center mb-2" style={{ width: '100%' }}>
                      <span className="mr-2" style={{ whiteSpace: 'nowrap' }}>{goal.name}:</span>
                      <div className="progress flex-grow-1" >
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: `${goal.progress}%`}} aria-valuemin="0" aria-valuemax="100">
                          {goal.progress.toFixed(2)}%
                        </div>
                      </div>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="charts">
                <h5>Spending Over Time</h5>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={transactions}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date"/>
                        <YAxis />
                        <Tooltip/>
                        <Legend />
                        <Line type="monotone" dataKey="amount" stroke="#08fa00" activeDot={{ r: 8 }}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Dashboard;