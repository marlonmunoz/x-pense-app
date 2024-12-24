import React, { useState } from "react";

function Budget() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const addItem = () => {
        setItems([...items, { name, amount: parseFloat(amount) }]);
        setName("");
        setAmount("");
    };

    const totalBudget = items.reduce((total, item) => total + item.amount, 0);

    return (
        <div>
            <h1>Budget</h1>
            <div>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="form-control"
                />
                <br />
                <button className="btn btn-primary" onClick={addItem}>Add Item</button>
            </div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name}: ${item.amount.toFixed(2)}
                    </li>
                ))}
            </ul>
            <h2>Total Budget: ${totalBudget.toFixed(2)}</h2>
        </div>
    );
}

export default Budget;
