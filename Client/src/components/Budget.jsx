import axios from "axios";
import React, { useState, useEffect } from "react";

function Budget({ darkMode, budget, setBudget, validated, setValidated, formatCurrency,items, setItems, name, setName, amount, setAmount, newBudget, setNewBudget, error, setError, editingIndex, setEditingIndex, editAmount, setEditAmount, date, setDate, totalBudgetAmount, parseDate }) {

    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const year = d.getFullYear();
        return `${month}-${day}-${year}`;
    };

    const [editDate, setEditDate] = useState((new Date()));
    const [budgetDate, setBudgetDate] = useState('');
    const [budgetAmount, setBudgetAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [deleteConfirm, setDeleteConfirm] = useState(null);

    useEffect(() => {
        fetchBudgets();
    }, []);

    // Clear messages after 3 seconds
    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => setSuccess(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(''), 5000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const showSuccess = (message) => {
        setSuccess(message);
        setError('');
    };

    const showError = (message) => {
        setError(message);
        setSuccess('');
    };


    const fetchBudgets = async () => {
        try {
            setLoading(true);
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
            showError('Failed to load budgets. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const addItem = async () => {
        if (!name || !amount || !date) {
            showError('Please fill in all fields: name, amount, and date');
            return;
        }

        if (isNaN(amount) || parseFloat(amount) <= 0) {
            showError('Please enter a valid positive amount');
            return;
        }

        const newBudgetItem = {
            item_name: name.trim(),
            amount: parseFloat(amount),
            date: date
        };

        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5001/budgets', newBudgetItem);
            setItems([...items, response.data]);
            setName('');
            setAmount('');
            setDate('');
            showSuccess(`Successfully added "${name}" to budget!`);
        } catch (error) {
            console.error('Error adding budget:', error);
            showError('Failed to add budget item. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const editBudget = (index) => {
        setEditingIndex(index);
        setEditAmount(items[index].amount);
        setEditDate(items[index].date);
    };

    const saveBudget = async (index) => {
        if (!editAmount || isNaN(editAmount) || parseFloat(editAmount) <= 0) {
            showError('Please enter a valid positive amount');
            return;
        }

        if (!editDate) {
            showError('Please select a valid date');
            return;
        }

        const updatedBudget = {
            item_name: items[index].item_name,
            amount: parseFloat(editAmount),
            date: new Date(editDate).toISOString().split('T')[0]
        };

        try {
            setLoading(true);
            await axios.put(`http://localhost:5001/budgets/${items[index].id}`, updatedBudget);
            const updatedItems = items.map((item, i) => 
                i === index ? { ...item, ...updatedBudget, date: formatDate(updatedBudget.date) } : item
            );
            setItems(updatedItems);
            showSuccess(`Successfully updated "${items[index].item_name}"!`);
            setEditingIndex(null);
        } catch (error) {
            console.error('Error saving budget:', error);
            showError('Failed to save budget changes. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const cancelEdit = () => {
        setEditingIndex(null);
        setEditAmount('');
        setEditDate(formatDate(new Date()));
        showSuccess('Edit cancelled');
    };

    const handleSetBudget = async () => {
        if (!newBudget || !budgetDate) {
            showError('Please enter both budget amount and date');
            setValidated(false);
            return;
        }

        if (isNaN(newBudget) || parseFloat(newBudget) <= 0) {
            showError('Please enter a valid positive budget amount');
            setValidated(false);
            return;
        }

        const newBudgetData = {
            item_name: 'Set Budget',
            amount: parseFloat(newBudget),
            date: budgetDate
        };

        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5001/budgets', newBudgetData);
            console.log('Response data:', response.data);
            setItems([...items, response.data]);
            setBudget(newBudget);
            setBudgetDate(budgetDate);
            setValidated(true);
            showSuccess(`Main budget of ${formatCurrency(newBudget)} has been set!`);
        } catch (error) {
            console.error('Error adding budget:', error);
            showError('Failed to set main budget. Please try again.');
            setValidated(false);
        } finally {
            setLoading(false);
        }
    };

    // const resetBudget = async () => {
    //     const setBudgetItem = items.find(item => item.item_name === 'Set Budget');
    //     if (setBudgetItem) {
    //         const updatedItem = { ...setBudgetItem, amount: '', date: '' };
    //         console.log('Updated Item:', updatedItem); // Debugging log
    //         try {
    //             const response = await axios.put(`http://localhost:5001/budgets/${setBudgetItem.id}`, updatedItem);
    //             console.log('Response from server:', response.data); // Debugging log
    //             setItems(items.map(item => 
    //                 item.item_name === 'Set Budget' ? updatedItem : item
    //             ));
    //             console.log('Items after reset:', items); // Debugging log
    //         } catch (error) {
    //             console.log('Error resetting budget:', error);
    //         }
    //     } else {
    //         console.log('Set Budget item not found');
    //     }
    // };

    const resetBudget = async () => {
        const setBudgetItem = items.find(item => item.item_name === 'Set Budget');
        if (setBudgetItem) {
            const updatedItem = { ...setBudgetItem, amount: '', date: '' };
            console.log('Updated Item:', updatedItem);
            try {
                setLoading(true);
                const response = await axios.put(`http://localhost:5001/budgets/${setBudgetItem.id}`, updatedItem);
                console.log('Response from server:', response.data);
                setItems(items.map(item => 
                    item.item_name === 'Set Budget' ? updatedItem : item
                ));
                setNewBudget('');
                setBudgetDate('');
                setBudget(0);
                setValidated(false);
                showSuccess('Main budget has been reset!');
                console.log('Items after reset:', items);
            } catch (error) {
                console.log('Error resetting budget:', error);
                showError('Failed to reset budget. Please try again.');
            } finally {
                setLoading(false);
            }
        } else {
            showError('No main budget found to reset');
            console.log('Set Budget item not found');
        }
    };

    const deleteItem = async (index) => {
        if (deleteConfirm === index) {
            try {
                setLoading(true);
                await axios.delete(`http://localhost:5001/budgets/${items[index].id}`);
                const updatedItems = items.filter((_, i) => i !== index);
                setItems(updatedItems);
                showSuccess(`Successfully deleted "${items[index].item_name}"!`);
                setDeleteConfirm(null);
            } catch(error) {
                console.log('Error deleting budget:', error);
                showError('Failed to delete budget item. Please try again.');
            } finally {
                setLoading(false);
            }
        } else {
            setDeleteConfirm(index);
            setTimeout(() => setDeleteConfirm(null), 3000); // Auto-cancel after 3 seconds
        }
    };

    return (
        <div className="budget-container">
            <style>{`
                .budget-container {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }

                .budget-section {
                    background: ${darkMode ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
                    border-radius: 15px;
                    padding: 25px;
                    margin-bottom: 25px;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(4px);
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .budget-section:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
                }

                .budget-title {
                    color: white;
                    font-size: 1.4em;
                    font-weight: 600;
                    margin-bottom: 20px;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                }

                .input-group {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                    flex-wrap: wrap;
                }

                .enhanced-input {
                    border: 2px solid transparent;
                    border-radius: 8px;
                    padding: 12px 15px;
                    font-size: 14px;
                    transition: all 0.3s ease;
                    background-color: rgba(255, 255, 255, 0.9);
                    color: #333;
                }

                .enhanced-input:focus {
                    border-color: #4CAF50;
                    box-shadow: 0 0 15px rgba(76, 175, 80, 0.3);
                    outline: none;
                    transform: scale(1.02);
                }

                .enhanced-input.is-valid {
                    border-color: #28a745;
                    background-color: rgba(40, 167, 69, 0.1);
                }

                .enhanced-input.is-invalid {
                    border-color: #dc3545;
                    background-color: rgba(220, 53, 69, 0.1);
                }

                .btn-enhanced {
                    padding: 12px 24px;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    position: relative;
                    overflow: hidden;
                }

                .btn-enhanced:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transition: left 0.5s;
                }

                .btn-enhanced:hover:before {
                    left: 100%;
                }

                .btn-primary-enhanced {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                }

                .btn-primary-enhanced:hover {
                    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
                }

                .btn-warning-enhanced {
                    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                    color: white;
                }

                .btn-warning-enhanced:hover {
                    background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(245, 87, 108, 0.4);
                }

                .btn-success-enhanced {
                    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                    color: white;
                }

                .btn-success-enhanced:hover {
                    background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(79, 172, 254, 0.4);
                }

                .btn-danger-enhanced {
                    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
                    color: #d63384;
                }

                .btn-danger-enhanced:hover {
                    background: linear-gradient(135deg, #fecfef 0%, #ff9a9e 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(255, 154, 158, 0.4);
                }

                .btn-secondary-enhanced {
                    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
                    color: #6c757d;
                }

                .btn-secondary-enhanced:hover {
                    background: linear-gradient(135deg, #fed6e3 0%, #a8edea 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(168, 237, 234, 0.4);
                }

                .btn-disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                    pointer-events: none;
                }

                .alert-success {
                    background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
                    color: #155724;
                    border: 1px solid #c3e6cb;
                    border-radius: 8px;
                    padding: 12px 20px;
                    margin: 10px 0;
                    animation: slideInRight 0.5s ease-out;
                }

                .alert-danger {
                    background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
                    color: #721c24;
                    border: 1px solid #f5c6cb;
                    border-radius: 8px;
                    padding: 12px 20px;
                    margin: 10px 0;
                    animation: shake 0.5s ease-out;
                }

                .table-enhanced {
                    background: ${darkMode ? 'rgba(33, 37, 41, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
                    backdrop-filter: blur(10px);
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                }

                .table-enhanced thead th {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    font-weight: 600;
                    padding: 15px;
                    border: none;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .table-enhanced tbody tr {
                    transition: all 0.3s ease;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                }

                .table-enhanced tbody tr:hover {
                    background: ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)'};
                    transform: scale(1.01);
                }

                .table-enhanced tbody td {
                    padding: 15px;
                    vertical-align: middle;
                    border: none;
                }

                .loading-spinner {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border: 3px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    border-top-color: white;
                    animation: spin 1s linear infinite;
                    margin-right: 10px;
                }

                .confirm-delete {
                    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
                    animation: pulse 1s infinite;
                }

                .total-row {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    font-weight: 600;
                }

                .no-items {
                    text-align: center;
                    padding: 40px;
                    color: #6c757d;
                    font-style: italic;
                    background: ${darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
                    border-radius: 8px;
                    margin: 20px 0;
                }

                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }

                @media (max-width: 768px) {
                    .input-group {
                        flex-direction: column;
                        align-items: stretch;
                    }
                    
                    .enhanced-input, .btn-enhanced {
                        margin-bottom: 10px;
                    }
                }
            `}</style>
            
            {/* Success/Error Messages */}
            {success && (
                <div className="alert-success">
                    <strong>✅ Success!</strong> {success}
                </div>
            )}
            
            {error && (
                <div className="alert-danger">
                    <strong>❌ Error!</strong> {error}
                </div>
            )}

            {/* Set Main Budget Section */}
            <div className="budget-section">
                <h5 className="budget-title">💰 Set Main Budget</h5>
                <div className="input-group">
                    <input 
                        type="number"
                        id="Set budget"
                        value={isNaN(newBudget) ? '' : newBudget} 
                        onChange={(e) => {
                            const value = e.target.value;
                            setNewBudget(value === '' ? '' : parseFloat(value));
                        }}
                        className={`enhanced-input ${validated ? 'is-valid' : 'is-invalid'}`}
                        placeholder="💵 Enter Budget Amount"
                        disabled={loading}
                    />
                    <input 
                        type="date" 
                        value={budgetDate}
                        onChange={(e) => setBudgetDate(e.target.value)}
                        className="enhanced-input"
                        id="budget-date"
                        name="budget-date"
                        disabled={loading}
                    />
                    <button 
                        className={`btn-enhanced btn-primary-enhanced ${loading ? 'btn-disabled' : ''}`} 
                        onClick={handleSetBudget}
                        disabled={loading}
                    >
                        {loading ? <span className="loading-spinner"></span> : ''}
                        🎯 Set Budget
                    </button>
                    <button 
                        className={`btn-enhanced btn-warning-enhanced ${loading ? 'btn-disabled' : ''}`} 
                        onClick={resetBudget}
                        disabled={loading}
                    >
                        {loading ? <span className="loading-spinner"></span> : ''}
                        🔄 Reset
                    </button>
                </div>
            </div>

            {/* Add New Budget Section */}
            <div className="budget-section">
                <h5 className="budget-title">➕ Add New Budget Item</h5>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="📝 Item Name (e.g., Groceries, Entertainment)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="enhanced-input"
                        id="item-name"
                        name="item-name"
                        disabled={loading}
                    />
                    <input
                        type="number"
                        placeholder="💵 Amount"
                        value={isNaN(amount) ? '' : amount}
                        onChange={(e) => {
                            const value = e.target.value;
                            setAmount(value === '' ? '' : parseFloat(value));
                        }}
                        className="enhanced-input"
                        id="item-amount"
                        name="item-amount"
                        disabled={loading}
                    />
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="enhanced-input"
                        id="item-date"
                        name="item-date"
                        disabled={loading}
                    />
                    <button 
                        className={`btn-enhanced btn-success-enhanced ${loading ? 'btn-disabled' : ''}`} 
                        onClick={addItem}
                        disabled={loading}
                    >
                        {loading ? <span className="loading-spinner"></span> : ''}
                        ✨ Add Item
                    </button>
                </div>
            </div>
            {/* Budget Items Table */}
            <div className="budget-section">
                <h5 className="budget-title">📊 Budget Overview</h5>
                {loading && items.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '40px' }}>
                        <span className="loading-spinner" style={{ width: '40px', height: '40px' }}></span>
                        <p style={{ color: 'white', marginTop: '10px' }}>Loading your budget data...</p>
                    </div>
                ) : (
                    <div className="table-enhanced">
                        <table className="table table-striped table-hover table-bordered responsive-table">
                            <thead>
                                <tr>
                                    <th>📝 Item Name</th>
                                    <th>💰 Amount</th>
                                    <th>📅 Date</th>
                                    <th>⚙️ Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.length > 0 ? (
                                    items.map((item, index) => (
                                        <tr key={index}>
                                            <td data-label="Item Name">
                                                <strong style={{ color: item.item_name === 'Set Budget' ? '#28a745' : 'inherit' }}>
                                                    {item.item_name === 'Set Budget' ? '🎯 ' : '📌 '}
                                                    {item.item_name}
                                                </strong>
                                            </td>
                                            <td data-label="Amount">
                                                {editingIndex === index ? (
                                                    <input
                                                        type="number"
                                                        value={editAmount}
                                                        onChange={(e) => setEditAmount(e.target.value)}
                                                        className="enhanced-input"
                                                        style={{ width: '120px' }}
                                                    />
                                                ) : (
                                                    <span style={{ 
                                                        fontWeight: 'bold', 
                                                        color: item.item_name === 'Set Budget' ? '#28a745' : '#667eea' 
                                                    }}>
                                                        {formatCurrency(item.amount)}
                                                    </span>
                                                )}
                                            </td>
                                            <td data-label="Date">
                                                {editingIndex === index ? (
                                                    <input
                                                        type="date"
                                                        value={editDate}
                                                        onChange={(e) => setEditDate(e.target.value)}
                                                        className="enhanced-input"
                                                        style={{ width: '150px' }}
                                                    />
                                                ) : (
                                                    <span style={{ color: '#6c757d' }}>
                                                        📅 {item.date || 'No date set'}
                                                    </span>
                                                )}
                                            </td>
                                            <td data-label="Actions">
                                                {editingIndex === index ? (
                                                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                                        <button 
                                                            className={`btn-enhanced btn-success-enhanced ${loading ? 'btn-disabled' : ''}`} 
                                                            onClick={() => saveBudget(index)}
                                                            disabled={loading}
                                                            style={{ fontSize: '12px', padding: '8px 12px' }}
                                                        >
                                                            {loading ? <span className="loading-spinner" style={{ width: '12px', height: '12px' }}></span> : ''}
                                                            💾 Save
                                                        </button>
                                                        <button 
                                                            className="btn-enhanced btn-secondary-enhanced" 
                                                            onClick={cancelEdit}
                                                            style={{ fontSize: '12px', padding: '8px 12px' }}
                                                        >
                                                            ❌ Cancel
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                                        <button 
                                                            className="btn-enhanced btn-primary-enhanced" 
                                                            onClick={() => editBudget(index)}
                                                            style={{ fontSize: '12px', padding: '8px 12px' }}
                                                        >
                                                            ✏️ Edit
                                                        </button>
                                                        <button 
                                                            className={`btn-enhanced ${deleteConfirm === index ? 'confirm-delete' : 'btn-danger-enhanced'}`}
                                                            onClick={() => deleteItem(index)}
                                                            style={{ fontSize: '12px', padding: '8px 12px' }}
                                                        >
                                                            {deleteConfirm === index ? '⚠️ Confirm?' : '🗑️ Delete'}
                                                        </button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="no-items">
                                            <div>
                                                <h4>📋 No Budget Items Yet</h4>
                                                <p>Start by setting your main budget above, then add specific budget items!</p>
                                                <small>💡 Tip: Add categories like groceries, entertainment, utilities, etc.</small>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                                {items.length > 0 && (
                                    <tr className="total-row">
                                        <td><strong>🏆 TOTAL BUDGET</strong></td>
                                        <td><strong>{formatCurrency(totalBudgetAmount)}</strong></td>
                                        <td colSpan="2">
                                            <small>💡 This represents your complete budget allocation</small>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Budget;
