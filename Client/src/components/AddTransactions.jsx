import React, { useState } from "react";


function AddTransactions() {
    const [text, setText] = useState('');
    const [amount , setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [transactions, setTransactions] = useState([]);

    const handleAmountChange = (e) => {
        const value = parseFloat(e.target.value);
        setAmount(isNaN(value) ? 0 : value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = { text, amount, category};
        setTransactions([...transactions, newTransaction]);
        setText('');
        setAmount(0);
        setCategory('');
    };



    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="category">Category :</label>
                <select 
                    id="category"
                    className="form-control" 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                > 
                    <option value="">Select A Category</option> 
                    <option value="Cable">Cable</option>
                    <option value="Child Support">Child Support</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Debt">Debt</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Food">Food</option>
                    <option value="Housing">Housing</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Medical & Healthcare">Medical & Healthcare</option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Pets">Pets</option>
                    <option value="Restaurants">Restaurants</option>
                    <option value="Savings & Investments">Savings & Investments</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Utilities">Utilities</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="text">Description :</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="amount">Amount :</label>
                <input 
                    type="text" 
                    id="amount" 
                    className="form-control" 
                    value={amount} 
                    onChange={handleAmountChange}
                />
            </div>
            <div>
                <button type="submit" className="btn btn-primary"> Add Transaction</button>
            </div>
            <div>
                <ul>
                    {transactions.map((transaction, index) => (
                        <li key={index}>
                            {transaction.text}: ${transaction.amount} - {transaction.category}
                        </li>
                    ))}
                </ul>
            </div>
        </form>
    );
}

export default AddTransactions;