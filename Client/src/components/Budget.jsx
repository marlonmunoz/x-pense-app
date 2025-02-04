import React, { useState } from "react";

function Budget({ darkMode, budget, setBudget, validated, setValidated, formatCurrency,items, setItems, name, setName, amount, setAmount, newBudget, setNewBudget, error, setError, editingIndex, setEditingIndex, editAmount, setEditAmount }) {

    const formatDate = (date) => {
        const d = new Date(date);
        const month = `0${d.getMonth() + 1}`.slice(-2);
        const day = `0${d.getDate()}`.slice(-2);
        const year = d.getFullYear();
        return `${year}-${month}-${day}`;
    };
    const [editDate, setEditDate] = useState(formatDate(new Date()));
    const [budgetDate, setBudgetDate] = useState('');

    const addItem = () => {
        if (name && amount) {
            const date = formatDate(new Date()); // Add this line
            setItems([...items, { name, amount: parseFloat(amount), date }]); // Update this line
            setName('');
            setAmount('');
        } else {
            setError('Please enter both name and amount');
        }
    };

    const editBudget = (index) => {
        setEditingIndex(index);
        setEditAmount(index === 'set' ? budget : items[index].amount);
        setEditDate(index === 'set' ? budgetDate : items[index].date);
    };

    const saveBudget = (index) => {
        if (index === 'set') {
            setBudget(parseFloat(editAmount));
            setBudgetDate(editDate);
        } else {
            const updatedItems = [...items];
            updatedItems[index].amount = parseFloat(editAmount);
            updatedItems[index].date = editDate;
            setItems(updatedItems);
        }
        setEditingIndex(null);
        setEditAmount('');
        setEditDate(formatDate(new Date()));
    };

    const cancelEdit = () => {
        setEditingIndex(null);
        setEditAmount('');
        setEditDate(formatDate(new Date()));
    }

    // const handleSetBudget = () => {
    //     if (newBudget === '' || isNaN(newBudget)) {
    //         setError('Please enter a valid budget');
    //         setValidated(false);
    //     } else {
    //         setBudget(parseFloat(newBudget));
    //         setError('');
    //         setValidated(true);
    //     }
    // };
    const handleSetBudget = () => {
        if (newBudget && budgetDate) {
            setBudget(newBudget);
            setBudgetDate(budgetDate);
            setValidated(true);
            setError('');
        } else {
            setValidated(false);
            setError('Please enter both budget amount and date');
        }
    };

    const resetBudget = () => {
        setNewBudget('');
        setBudgetDate('');
        setBudget('');
        // setError('');
        // setValidated(false);
        // setEditDate(formatDate(new Date()));
    };

    const deleteItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    const totalAmount = items.reduce((total, item) => total + item.amount, 0) + (isNaN(budget) ? 0 : budget);

    return (
        <div>
            <h5>Set Budget</h5>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input 
                    type="number"
                    id="Set budget"
                    value={isNaN(newBudget) ? '' : newBudget} 
                    onChange={(e) => {
                        const value = e.target.value;
                        setNewBudget(value === '' ? '' : parseFloat(value));
                    }}
                    className={`form-control ${validated ? 'is-valid' : 'is-invalid'}`}
                    placeholder="Set Amount"
                />
                <br />
                <input 
                    type="date" 
                    value={budgetDate}
                    onChange={(e) => setBudgetDate(e.target.value)}
                    className="form-control"
                    id="budget-date"
                    name="budget-date"
                />
                <br />
                <button className="btn btn-primary" onClick={handleSetBudget} >Set</button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <br />
            <br />
            <h5>Add New Budget</h5>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
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
                <button className="btn btn-primary" onClick={addItem}>Add</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <br />
            <br />
            <h5>Budget Types</h5>
            <div className="table-responsive">
            <table className={`table table-striped table-hover table-bordered responsive-table  ${darkMode ? 'table-dark' : 'table-light table-light-bordered'} table-rounded`}>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Item Name">Set Budget</td>
                            <td data-label="Amount">
                                {editingIndex === 'set' ? (
                                    <>
                                        <input
                                            type="number"
                                            value={editAmount}
                                            onChange={(e) => setEditAmount(e.target.value)}
                                        />
                                    </>
                                ) : (
                                    formatCurrency(budget)
                                    // `$ ${budget.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                                )}
                            </td>
                            <td data-label="Date">
                                {editingIndex === 'set' ? (
                                    <>

                                        <input
                                            type="date"
                                            value={editDate}
                                            onChange={(e) => setEditDate(e.target.value)}
                                        />
                                    </>
                                ) : (
                                    budgetDate
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
                                        <button className="btn btn-sm btn-primary ml-2" onClick={() => editBudget('set')}>Edit</button>
                                        <button className="btn btn-sm btn-warning ml-2" onClick={resetBudget}>Reset</button>
                                    </>
                                )}
                            </td>
                        </tr>
                        {items.length > 0 ? (
                            items.map((item, index) => (
                                <tr key={index}>
                                    <td data-label="Item Name">{item.name}</td>
                                    <td data-label="Amount">
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
                                    <td data-label="Date">
                                        {editingIndex === index ? (
                                            <input
                                                type="date"
                                                value={editDate}
                                                onChange={(e) => setEditDate(e.target.value)}
                                            />
                                        ) : (
                                            item.date
                                        )}
                                    </td>
                                    <td data-label="Actions">
                                        {editingIndex === index ? (
                                            <>
                                                <button className="btn btn-sm btn-success ml-2" onClick={() => saveBudget(index)}>Save</button>
                                                <button className="btn btn-sm btn-secondary ml-2" onClick={cancelEdit}>Cancel</button>
                                            </>
                                        ) : (
                                            <>
                                                <button className="btn btn-sm btn-primary ml-2" onClick={() => editBudget(index)}>Edit</button>
                                                <button className="btn btn-sm btn-danger ml-2" onClick={() => deleteItem(index)}>Delete</button>
                                            </>
                                        )}
                                    </td>
                                  
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No items added yet</td>
                            </tr>
                        )}
                        <tr>
                            <td colSpan="1"><strong>Total</strong></td>
                            <td colSpan="3">{formatCurrency(totalAmount)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Budget;
