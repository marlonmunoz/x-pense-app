import React from 'react';

const Transactions = ({ transactions }) => {
    return (
        <div>
            <h5>New Transactions Added</h5>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        {transaction.text}: ${transaction.amount} - ${transaction.category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Transactions;

