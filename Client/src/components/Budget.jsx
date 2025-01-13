import React, { useState } from "react";

function Budget({ budget, setBudget, validated, setValidated }) {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [newBudget, setNewBudget] = useState("")
    const [error, setError] = useState("");


    const addItem = () => {
        const itemAmount = parseFloat(amount);
        if (isNaN(itemAmount) || itemAmount <= 0) {
            setError("Please enter a valid amount.");
            setValidated(false); //
            return;
        }
        setError("");
        setValidated(true); //
        const newItem = { name, amount: itemAmount };
        setItems([...items, newItem]);
        setBudget(budget + newItem.amount);
        setName('');
        setAmount('');
    };

    


    // const handleSetBudget = () => {
    //     const budgetAmount = parseFloat(newBudget);
    //     if (isNaN(budgetAmount) || budgetAmount <= 0) {
    //         setError("Please enter a valid budget.");
    //         setValidated(false);
    //         return;
    //     }
    //     setError("");
    //     setValidated(true);
    //     setBudget(budgetAmount);
    // };

    const handleSetBudget = () => {
        if (newBudget === '' || isNaN(newBudget)) {
            setError('Please enter a valid budget');
            setValidated(false);
        } else {
            setBudget(parseFloat(newBudget));
            setError('');
            setValidated(true);
        }
    };

    // const  resetBudget = () => {
    //     setItems([]);
    //     setName("");
    //     setAmount("");
    //     setBudget(0);
    //     setNewBudget("");
    //     setError("");
    //     setValidated(false);
    // }
    const resetBudget = () => {
        setNewBudget('');
        setBudget(0);
        setError('');
        setValidated(false);
    };

    

    // return (
    //     <div>
    //         <h5>Set Budget</h5>
    //         <div>
    //             <input 
    //                 type="number"
    //                 id="Set budget"
    //                 value={newBudget} 
    //                 onChange={(e) => {
    //                     const value = e.target.value;
    //                     setNewBudget(value === '' ? '' : parseFloat(value));
    //                 }}
    //                 className={`form-control ${validated ? 'is-valid' : 'is-invalid'}`}
    //             />
    //             <br />
    //             <button className="btn btn-primary" onClick={handleSetBudget} >Set Budget</button>
    //             <button className="btn btn-danger ml-2" onClick={resetBudget}>Reset</button>
    //         </div>
    //         {error && <p style={{ color: 'red' }}>{error}</p>}
    //         <br />
    //         <h5>Add New Budget</h5>
    //         <div>
    //             <input
    //                 type="text"
    //                 placeholder="Item Name"
    //                 value={name}
    //                 onChange={(e) => setName(e.target.value)}
    //                 className="form-control"
    //                 id="item-name"
    //                 name="item-name"
    //             />
    //             <br />
    //             <input
    //                 type="number"
    //                 placeholder="Amount"
    //                 value={amount}
    //                 onChange={(e) => {
    //                     const value = e.target.value;
    //                     setAmount(value === '' ? '' : parseFloat(value));
    //                 }}
    //                 className="form-control"
    //                 id="item-amount"
    //                 name="item-amount"
    //             />
    //             <br />
    //             <button className="btn btn-primary" onClick={addItem}>Add Item</button>
    //         </div>
    //         {error && <p style={{ color: 'red' }}>{error}</p>}
    //         <br />
    //         <h5>New Total Budget : $ {budget.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h5>
    //         <ul>
    //             {items.map((item, index) => (
    //                 <li key={index}>
    //                     {item.name}: $ {item.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // );
    return (
        <div>
            <h5>Set Budget</h5>
            <div>
                <input 
                    type="number"
                    id="Set budget"
                    value={isNaN(newBudget) ? '' : newBudget} 
                    onChange={(e) => {
                        const value = e.target.value;
                        setNewBudget(value === '' ? '' : parseFloat(value));
                    }}
                    className={`form-control ${validated ? 'is-valid' : 'is-invalid'}`}
                />
                <br />
                <button className="btn btn-primary" onClick={handleSetBudget} >Set Budget</button>
                <button className="btn btn-danger ml-2" onClick={resetBudget}>Reset</button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
                    value={isNaN(amount) ? '' : amount}
                    onChange={(e) => {
                        const value = e.target.value;
                        setAmount(value === '' ? '' : parseFloat(value));
                    }}
                    className="form-control"
                    id="item-amount"
                    name="item-amount"
                />
                <br />
                <button className="btn btn-primary" onClick={addItem}>Add Item</button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <br />
            <h5>New Total Budget : $ {budget.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h5>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name}: ${item.amount.toFixed(2)}</li>
                ))}
            </ul>
        </div>
    );
}

export default Budget;
