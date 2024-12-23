import React, { useState } from "react";


function AddTransactions() {
    const [text, setText] = useState('');
    const [amount , setAmount] = useState(0);
    const [transactions, setTransactions] = useState([]);

    const handleAmountChange = (e) => {
        const value = parseFloat(e.target.value);
        setAmount(isNaN(value) ? 0 : value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = { text, amount};
        setTransactions([...transactions, newTransaction]);
        setText('');
        setAmount(0);
    };



    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="text">Description :</label>
                <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="amount">Amount :</label>
                <input type="text" id="amount" value={amount} onChange={handleAmountChange}/>
            </div>
            <div>
                <button type="submit"> Add Transaction</button>
            </div>
            <div>
                <ul>
                    {transactions.map((transaction, index) => (
                        <li key={index}>
                            {transaction.text}: ${transaction.amount}
                        </li>
                    ))}
                </ul>
            </div>
        </form>
    );
}

export default AddTransactions;