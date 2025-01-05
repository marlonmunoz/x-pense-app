import React from "react";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'


function Dashboard({ transactions =[], balance =0, goals =[], investments= [], budget = 0, totalAmount, darkMode }) {
    const navigate = useNavigate();
    
    const recentTransactions = transactions.slice(-5);
    const totalInvestments = investments.reduce((total, investment) => total + investment.amount, 0);
    const goalsProgress = goals.map(goal => ({
        ...goal,
        progress: (goal.saved / goal.target) * 100
    }));
    const overviewTotal = budget + totalInvestments - balance - totalAmount;

    return (
        <div>
            <div className="summary">
                <h5>Recent Transactions</h5>
                <button onClick={() => navigate('/transactions')} className="btn btn-primary"> View All Transactions</button>
            </div>
            <br />
            <div className="table-responsive">
                <table className={`table table-bordered table-hover ${darkMode ? 'table-dark' : 'table-light'}`}>
                    <tbody>
                        <tr>
                            <th scope="row">Current Balance</th>
                            <td>${balance}</td>
                        </tr>
                        <tr>
                            <th scope="row">Total Investments</th>
                            <td>${totalInvestments}</td>
                        </tr>
                        <tr>
                            <th scope="row">Budget</th>
                            <td>${budget}</td>
                        </tr>
                        <tr>
                            <th scope="row">X-penses</th>
                            <td>${totalAmount}</td>
                        </tr>
                        <tr>
                            <th scope="row">Overview Total</th>
                            <td>${overviewTotal}</td>
                        </tr>
                    </tbody>
                 </table>
            </div>
            <div className="goals-progress">
                <h5>Goals Progress</h5>
                <ul>
                    {goalsProgress.map((goal, index) => (
                        <li key={index}>
                            {goal.name}: {goal.progress.toFixed(2)}%
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