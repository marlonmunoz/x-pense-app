import React from 'react';

const Transactions = ({ transactions = [] }) => {
    return (
        <div>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        {transaction.text}: ${transaction.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Transactions;
