import React, { useState } from "react";

function Budget({ balance, budget, setBudget }) {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [newBudget, setNewBudget] = useState("")

    const addItem = () => {
        const itemAmount = parseFloat(amount);
        setItems([...items, { name, amount: itemAmount }]);
        setName("");
        setAmount("");
        setBudget(prevBudget => prevBudget + itemAmount);
    };

    // const totalBudget = items.reduce((total, item) => total + item.amount, 0);

    const handleSetBudget = () => {
        setBudget(newBudget);
    }

    const  resetBudget = () => {
        setItems([]);
        setName("");
        setAmount("");
        setBudget(0);
        setNewBudget("");
    }

    return (
        <div>
            <h5>Set Budget</h5>
            <div>
                <label htmlFor="budget">Amount: </label>
                <input 
                    type="number"
                    id="budget"
                    value={newBudget} 
                    onChange={(e) => setNewBudget(parseFloat(e.target.value))}
                    placeholder="Enter amount"
                    className="form-control"
                />
                <br />
                <button className="btn btn-primary" onClick={handleSetBudget} >Set Budget</button>
                <button className="btn btn-danger ml-2" onClick={resetBudget}>Reset</button>
            </div>
            <br />
            <h5>Add New Budget</h5>
            <div>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="item-name"
                    name="item-name"
                />
                <br />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="form-control"
                    id="item-amount"
                    name="item-amount"
                />
                <br />
                <button className="btn btn-primary" onClick={addItem}>Add Item</button>
            </div>
            <br />
            <h5>New Total Budget : $ {budget.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h5>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name}: $ {item.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </li>
                ))}
            </ul>
            {/* <h2>Total Budget: ${totalBudget.toFixed(2)}</h2> */}
            {/* <h2>Balance: ${balance}</h2> */}
        </div>
    );
}

export default Budget;
