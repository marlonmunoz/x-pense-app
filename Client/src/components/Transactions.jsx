import React from 'react';
import '/src/App.css'

const Transactions = ({ transactions }) => {
    return (
        <div>
            <h5>New Transactions Added</h5>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.category}</td>
                            <td>{transaction.text}</td>
                            <td>$ {transaction.amount}</td>
                        </tr>  
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;

