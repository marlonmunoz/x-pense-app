import axios from "axios";
import React, { useState, useEffect } from "react";

function Budget({ darkMode, budget, setBudget, validated, setValidated, formatCurrency,items, setItems, name, setName, amount, setAmount, newBudget, setNewBudget, error, setError, editingIndex, setEditingIndex, editAmount, setEditAmount, date, setDate, totalBudgetAmount, parseDate }) {

    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const year = d.getFullYear();
        // return `${year}-${month}-${day}`;
        return `${month}-${day}-${year}`;
    };

    const [editDate, setEditDate] = useState((new Date()));
    const [budgetDate, setBudgetDate] = useState('');

    useEffect(() => {
        fetchBudgets();
    }, []);


    const fetchBudgets = async () => {
        try {
            console.log('BUDGET COMPONENT');
            console.log('Fetching budgets...');
            const response = await axios.get('http://localhost:5001/budgets');
            const adjustedBudgets = response.data.map(budget => ({
                ...budget,
                date: formatDate(parseDate(budget.date))
            }));
            console.log('Adjusted budgets:', adjustedBudgets);
            setItems(adjustedBudgets);
        } catch (error) {
            console.error('Error fetching budgets:', error);
        }
    };

    const addItem = async () => {
        if (!name || !amount) {
            setError('Please enter both name and amount');
            return;
        }

        const newBudget = {
            item_name: name,
            amount: parseFloat(amount),
            date: date
        };

        try {
            const response = await axios.post('http://localhost:5001/budgets', newBudget);
            setItems([...items, response.data]);
            setName('');
            setAmount('');
            setDate('');
            setError('');
        } catch (error) {
            console.error('Error adding budget:', error);
            setError('Failed to add budget');
        }
    };

    const editBudget = (index) => {
        setEditingIndex(index);
        setEditAmount(index === 0 ? budget : items[index].amount);
        setEditDate(index === 0 ? budgetDate : formatDate(items[index].date));
    };

    const saveBudget = async (index) => {
        const updatedBudget = {
            item_name: index === 0 ? 'Set Budget' : items[index].item_name,
            amount: parseFloat(editAmount),
            date: new Date(editDate).toISOString().split('T')[0]
        };

        if (index === 0) {
            setBudget(parseFloat(editAmount));
            setBudgetDate(editDate);
        }

        try {
            await axios.put(`http://localhost:5001/budgets/${items[index].id}`, updatedBudget);
            const updatedItems = items.map((item, i) => i === index ? updatedBudget : item);
            setItems(updatedItems);
            setError('');
        } catch (error) {
            console.error('Error saving budget:', error);
            setError('Failed to save budget');
        }

        setEditingIndex(null);
    };

    const cancelEdit = () => {
        setEditingIndex(null);
        setEditAmount('');
        setEditDate(formatDate(new Date()));
    }

    const handleSetBudget = async () => {
        if (newBudget && budgetDate) {
            const newBudgetData = {
                item_name: 'Set Budget',
                amount: parseFloat(newBudget),
                date: budgetDate
            };
    
            try {
                const response = await axios.post('http://localhost:5001/budgets', newBudgetData);
                console.log('Response data:', response.data); // Log the response data
                setItems([...items, response.data]);
                setBudget(newBudget);
                setBudgetDate(budgetDate);
                setValidated(true);
                setError('');
            } catch (error) {
                console.error('Error adding budget:', error);
                setError('Failed to add budget');
            }
        } else {
            setValidated(false);
            setError('Please enter both budget amount and date');
        }
    };

    const resetBudget = async () => {
        const setBudgetItem = items.find(item => item.item_name === 'Set Budget');
        if (setBudgetItem) {
            const updatedItem = { ...setBudgetItem, amount: '', date: '' };
            try {
                await axios.put(`http://localhost:5001/budgets/${setBudgetItem.id}`, updatedItem);
                setItems(items.map(item => 
                    item.item_name === 'Set Budget' ? updatedItem : item
                ));
            } catch (error) {
                console.log('Error resetting budget:', error);
            }
        } else {
            console.log('Set Budget item not found');
        }
    };

    const deleteItem = async (index) => {
        try {
            await axios.delete(`http://localhost:5001/budgets/${items[index].id}`);
            const updatedItems = items.filter((_, i) => i !== index);
            setItems(updatedItems);
        } catch(error) {
            console.log('Error deleting budget:', error);
        }
    };

    return (
        <div>
            <h5>Set Main Budget</h5>
            <div className={`table-responsive border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
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
                        value={(budgetDate)}
                        onChange={(e) => setBudgetDate(e.target.value)}
                        className="form-control"
                        id="budget-date"
                        name="budget-date"
                    />
                    <br />
                    <button className="btn btn-primary" onClick={handleSetBudget} >Set</button>
                    <button className="btn btn btn-warning" onClick={resetBudget}>Reset</button>
                </div>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <br />

            <h5>Add New Budget</h5>
            <div className={`table-responsive border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
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
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="form-control"
                        id="item-date"
                        name="item-date"
                    />
                    <br />
                    <button className="btn btn-primary" onClick={addItem}>Add</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
            <br />
            <h5>Budget Types</h5>
            <div className={`table-responsive border border-info rounded p-2 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
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
                        {items.length > 0 ? (
                            items.map((item, index) => (
                                <tr key={index}>
                                    <td data-label="Item Name">{item.item_name}</td>
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
                            <td colSpan="3">{formatCurrency(totalBudgetAmount)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Budget;
