import React from "react";

function Budget({ darkMode, budget, setBudget, validated, setValidated, formatCurrency,items, setItems, name, setName, amount, setAmount, newBudget, setNewBudget, error, setError, editingIndex, setEditingIndex, editAmount, setEditAmount }) {

    const addItem = () => {
        if (name && amount) {
            setItems([...items, { name, amount: parseFloat(amount) }]);
            setName('');
            setAmount('');
        } else {
            setError('Please enter both name and amount');
        }
    };

    const editBudget = (index) => {
        setEditingIndex(index);
        setEditAmount(index === 'set' ? budget : items[index].amount);
    };

    const saveBudget = (index) => {
        if (index === 'set') {
            setBudget(parseFloat(editAmount));
        } else {
            const updatedItems = [...items];
            updatedItems[index].amount = parseFloat(editAmount);
            setItems(updatedItems);
        }
        setEditingIndex(null);
        setEditAmount('');
    };

    const cancelEdit = () => {
        setEditingIndex(null);
        setEditAmount('');
    }

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

    const resetBudget = () => {
        setNewBudget('');
        setBudget(0);
        setError('');
        setValidated(false);
    };

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
                {/* <button className="btn btn-danger ml-2" onClick={resetBudget}>Reset</button> */}
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
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <br />
            <h5>Budget Types</h5>
            <div className="table-responsive">
            <table className={`table table-striped table-hover table-bordered  ${darkMode ? 'table-dark' : 'table-light table-light-bordered'} table-rounded`}>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Item Name">Set Budget</td>
                            <td data-label="Amount">
                                {editingIndex === 'set' ? (
                                    <input
                                        type="number"
                                        value={editAmount}
                                        onChange={(e) => setEditAmount(e.target.value)}
                                    />
                                ) : (
                                    `$ ${budget.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                                )}
                            </td>
                            <td data-label="Actions">
                                {editingIndex === 'set' ? (
                                    <>
                                        <button className="btn btn-sm btn-success ml-2" onClick={() => saveBudget('set')}>Save</button>
                                        <button className="btn btn-sm btn-secondary ml-2" onClick={cancelEdit}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                    <button className="btn btn-sm btn-primary ml-2 " onClick={() => editBudget('set')}>Edit</button>
                                    <button className="btn btn-sm btn-warning ml-2" onClick={resetBudget}>Reset</button>
                                    </>
                                )}
                            </td>
                        </tr>
                        {items.length > 0 ? (
                            items.map((item, index) => (
                                <tr key={index}>
                                    <td >
                                        {item.name}
                                    </td>
                                    <td>
                                        {editingIndex === index ? (
                                            <input
                                                type="number"
                                                value={editAmount}
                                                onChange={(e) => setEditAmount(e.target.value)}
                                            />
                                        ) : (
                                            formatCurrency(item.amount)
                                        )}
                                    </td>
                                    <td>
                                        {editingIndex === index ? (
                                            <>
                                                <button className="btn btn-sm btn-success ml-2" onClick={() => saveBudget(index)}>Save</button>
                                                <button className="btn btn-sm btn-secondary ml-2" onClick={cancelEdit}>Cancel</button>
                                            </>
                                        ) : (
                                            <>
                                            <button className="btn btn-sm btn-primary ml-2" onClick={() => editBudget(index)}>Edit</button>
                                            <button className="btn btn-sm btn-danger ml-2">Delete</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No items added yet</td>
                            </tr>
                        )}
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>{formatCurrency(budget + items.reduce((acc, item) => acc + item.amount, 0))} </strong></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Budget;
