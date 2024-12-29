import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'

function Dashboard({ transactions =[], balance =0, goals =[], investments= [], budget = 0 }) {
    const navigate = useNavigate();

    const recentTransactions = transactions.slice(-5);
    const totalInvestments = investments.reduce((total, investment) => total + investment.amount, 0);
    const goalsProgress = goals.map(goal => ({
        ...goal,
        progress: (goal.saved / goal.target) * 100
    }));

    return (
        <div>
            {/* <h2>Dashboard</h2> */}
            <div className="summary">
                <h5>Recent Transactions</h5>
                <ul className="list-unstyled">
                    {recentTransactions.map((transaction, index) => (
                        <li key={index}>
                            {transaction.category}: ${transaction.amount} - {transaction.text}
                        </li>
                    ))}
                </ul>
                <button onClick={() => navigate('/transactions')} className="btn btn-primary"> View All Transactions</button>
            </div>
            <br />
            <div className="balance-overview">
                <h5>Balance Overview</h5>
                <p>Current Balance: ${balance}</p>
                <p>Total Investments: ${totalInvestments}</p>
                <p>Budget: ${budget}</p>
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
                        <YAxis/>
                        <Tooltip/>
                        <Legend />
                        <Line type="monotone" dataKey="amount" stroke="8884d8" activeDot={{ r: 8 }}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Dashboard;