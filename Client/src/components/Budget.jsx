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
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }

                .budget-header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 30px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                }

                .budget-header h5 {
                    font-size: 1.8rem;
                    margin: 0 0 10px 0;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                .budget-subtitle {
                    font-size: 1.1rem;
                    opacity: 0.9;
                    margin: 0;
                }

                .budget-section {
                    background: ${darkMode ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'};
                    border-radius: 20px;
                    padding: 40px;
                    margin-bottom: 30px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                    border: ${darkMode ? '2px solid #4a5568' : '2px solid #e2e8f0'};
                    transition: all 0.3s ease;
                }

                .budget-section:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                .budget-title {
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                    font-size: 1.2em;
                    font-weight: 700;
                    margin-bottom: 30px;
                    text-align: center;
                }

                .input-group {
                    display: flex;
                    gap: 15px;
                    align-items: center;
                    flex-wrap: nowrap;
                    justify-content: center;
                }

                .enhanced-input {
                    flex: 1;
                    min-width: 200px;
                    padding: 15px 20px;
                    border: 2px solid ${darkMode ? '#4a5568' : '#e2e8f0'};
                    border-radius: 12px;
                    font-size: 1rem;
                    background: ${darkMode ? '#2d3748' : '#ffffff'};
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .enhanced-input:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
                    transform: translateY(-2px);
                }

                .enhanced-input::placeholder {
                    color: ${darkMode ? '#a0aec0' : '#718096'};
                    font-weight: 500;
                }

                .enhanced-input.is-valid {
                    border-color: #38a169;
                    box-shadow: 0 0 0 3px rgba(56, 161, 105, 0.3);
                }

                .enhanced-input.is-invalid {
                    border-color: #e53e3e;
                    box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.3);
                }

                .btn-enhanced {
                    padding: 12px 20px;
                    border: none;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin: 0 5px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    position: relative;
                    overflow: hidden;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    white-space: nowrap;
                    min-width: auto;
                }

                .btn-primary-enhanced {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                }

                .btn-primary-enhanced:hover:not(.btn-disabled) {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(56, 161, 105, 0.6);
                }

                .btn-warning-enhanced {
                    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
                }

                .btn-warning-enhanced:hover:not(.btn-disabled) {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(245, 158, 11, 0.6);
                }

                .btn-success-enhanced {
                    background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(66, 153, 225, 0.4);
                }

                .btn-success-enhanced:hover:not(.btn-disabled) {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(66, 153, 225, 0.6);
                }

                .btn-danger-enhanced {
                    background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(245, 101, 101, 0.4);
                }

                .btn-danger-enhanced:hover:not(.btn-disabled) {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(245, 101, 101, 0.6);
                }

                .btn-secondary-enhanced {
                    background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(160, 174, 192, 0.4);
                }

                .btn-secondary-enhanced:hover:not(.btn-disabled) {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(160, 174, 192, 0.6);
                }

                .btn-disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .alert-success {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    padding: 15px 20px;
                    border-radius: 12px;  
                    margin-bottom: 20px;
                    font-weight: 600;
                    text-align: center;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                    animation: slideIn 0.5s ease;
                }

                .alert-danger {
                    background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
                    color: white;
                    padding: 15px 20px;
                    border-radius: 12px;
                    margin-bottom: 20px;
                    font-weight: 600;
                    text-align: center;
                    box-shadow: 0 4px 15px rgba(245, 101, 101, 0.4);
                    animation: slideIn 0.5s ease;
                }

                .table-enhanced {
                    background: ${darkMode ? '#2d3748' : '#ffffff'};
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${darkMode ? '2px solid #4a5568' : '2px solid #e2e8f0'};
                }

                .table-enhanced thead th {
                    background: ${darkMode ? '#4a5568' : '#667eea'};
                    color: white;
                    font-weight: 700;
                    padding: 18px 15px;
                    border: none;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    font-size: 0.9rem;
                    border-bottom: 3px solid ${darkMode ? '#2d3748' : '#5a67d8'};
                }

                .table-enhanced tbody tr {
                    transition: all 0.3s ease;
                    border-bottom: 1px solid ${darkMode ? '#4a5568' : '#e2e8f0'};
                }

                .table-enhanced tbody tr:hover {
                    background: ${darkMode ? '#4a5568' : '#f7fafc'};
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .table-enhanced tbody td {
                    padding: 18px 15px;
                    vertical-align: middle;
                    border: none;
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                    transition: all 0.3s ease;
                }

                .loading-spinner {
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    border: 2px solid transparent;
                    border-top: 2px solid currentColor;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-right: 8px;
                }

                .confirm-delete {
                    background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%) !important;
                    animation: pulse 1s infinite;
                    border: 2px solid #e53e3e;
                }

                .total-row {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    font-weight: 700;
                }

                .total-row td {
                    color: white !important;
                    font-size: 1.1rem;
                }

                .no-items {
                    text-align: center;
                    padding: 60px 20px;
                    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
                    color: white;
                    border-radius: 15px;
                    font-size: 1.2rem;
                    font-weight: 600;
                    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
                }

                .loading-container {
                    text-align: center;
                    padding: 40px;
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                }

                .large-spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid ${darkMode ? '#4a5568' : '#e2e8f0'};
                    border-top: 4px solid #667eea;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 15px;
                }

                .item-name-badge {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-weight: 600;
                    display: inline-block;
                    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
                }

                .main-budget-badge {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-weight: 600;
                    display: inline-block;
                    box-shadow: 0 2px 8px rgba(56, 161, 105, 0.4);
                }

                .amount-display {
                    font-weight: 700;
                    font-size: 1.1em;
                    color: ${darkMode ? '#68d391' : '#38a169'};
                }

                .date-display {
                    color: ${darkMode ? '#a0aec0' : '#718096'};
                    font-weight: 500;
                }

                .btn-table {
                    padding: 8px 12px;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin: 2px;
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    white-space: nowrap;
                    min-width: auto;
                }

                .btn-edit-table {
                    background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(66, 153, 225, 0.4);
                }

                .btn-edit-table:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.6);
                }

                .btn-delete-table {
                    background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(245, 101, 101, 0.4);
                }

                .btn-delete-table:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(245, 101, 101, 0.6);
                }

                .btn-save-table {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(56, 161, 105, 0.4);
                }

                .btn-save-table:hover:not(.btn-disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(56, 161, 105, 0.6);
                }

                .btn-cancel-table {
                    background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(160, 174, 192, 0.4);
                }

                .btn-cancel-table:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(160, 174, 192, 0.6);
                }

                @keyframes slideIn {
                    from { transform: translateY(-20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
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
                    
                    .enhanced-input {
                        min-width: unset;
                        margin-bottom: 10px;
                    }
                    
                    .btn-enhanced {
                        width: 100%;
                        margin: 5px 0;
                        padding: 10px 16px;
                        font-size: 0.9rem;
                    }
                    
                    .budget-section {
                        padding: 20px;
                    }
                    
                    .btn-table {
                        padding: 4px 8px;
                        font-size: 0.7rem;
                        gap: 2px;
                    }
                }
            `}</style>
            
            {/* Budget Header */}
            <div className="budget-header">
                <h5>💰 Budget Management</h5>
                <p className="budget-subtitle">Plan and track your financial allocations</p>
            </div>

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
                <h5 className="budget-title">🎯 Set Main Budget</h5>
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
                <h5 className="budget-title">📝 Add New Budget Item</h5>
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
                    <div className="loading-container">
                        <div className="large-spinner"></div>
                        <p>Loading your budget data...</p>
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
                                                {item.item_name === 'Set Budget' ? (
                                                    <span className="main-budget-badge">
                                                        🎯 {item.item_name}
                                                    </span>
                                                ) : (
                                                    <span className="item-name-badge">
                                                        📌 {item.item_name}
                                                    </span>
                                                )}
                                            </td>
                                            <td data-label="Amount">
                                                {editingIndex === index ? (
                                                    <input
                                                        type="number"
                                                        value={editAmount}
                                                        onChange={(e) => setEditAmount(e.target.value)}
                                                        className="enhanced-input"
                                                        style={{ width: '150px', padding: '8px 12px' }}
                                                    />
                                                ) : (
                                                    <span className="amount-display">
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
                                                        style={{ width: '170px', padding: '8px 12px' }}
                                                    />
                                                ) : (
                                                    <span className="date-display">
                                                        📅 {item.date || 'No date set'}
                                                    </span>
                                                )}
                                            </td>
                                            <td data-label="Actions">
                                                {editingIndex === index ? (
                                                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap', alignItems: 'center' }}>
                                                        <button 
                                                            className={`btn-table btn-save-table ${loading ? 'btn-disabled' : ''}`} 
                                                            onClick={() => saveBudget(index)}
                                                            disabled={loading}
                                                        >
                                                            {loading ? <span className="loading-spinner" style={{ width: '12px', height: '12px' }}></span> : ''}
                                                            💾 Save
                                                        </button>
                                                        <button 
                                                            className="btn-table btn-cancel-table" 
                                                            onClick={cancelEdit}
                                                        >
                                                            ❌ Cancel
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap', alignItems: 'center' }}>
                                                        <button 
                                                            className="btn-table btn-edit-table" 
                                                            onClick={() => editBudget(index)}
                                                        >
                                                            ✏️ Edit
                                                        </button>
                                                        <button 
                                                            className={`btn-table ${deleteConfirm === index ? 'confirm-delete' : 'btn-delete-table'}`}
                                                            onClick={() => deleteItem(index)}
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
                                                <h4>🎯 Start Your Budget Journey!</h4>
                                                <p>Set your main budget above, then add specific budget categories!</p>
                                                <small>💡 Pro tip: Create categories like groceries, entertainment, utilities, savings</small>
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
