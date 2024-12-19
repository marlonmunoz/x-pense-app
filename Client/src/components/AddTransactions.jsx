import React, { useState } from "react";


function AddTransactions() {
    const [text, setText] = useState('');
    const [amount , setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="text">Description</label>
                <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input type="text" id="amount" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
            </div>
            <div>
                <button type="submit"> Add Transaction</button>
            </div>
        </form>
    );
}

export default AddTransactions;