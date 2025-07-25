import React, { useEffect, useState } from 'react';
import axios from 'axios'
import '/src/App.css'
import { parseISO, format } from 'date-fns';


const Transactions = ({ darkMode, transactions, setTransactions, totalAmount, setTotalAmount, editIndex, setEditIndex, editTransaction, setEditTransaction, formatCurrency, reminderDate, setSuccessMessage, successMessage, parseDate }) => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('date');
    const [sortOrder, setSortOrder] = useState('desc');
    const [filterCategory, setFilterCategory] = useState('');
    const [animateRow, setAnimateRow] = useState(null);
    
    useEffect(() => {
        console.log('TRANSACTIONS COMPONENT');
        
        console.log('Fetching transactions...'); // logs 01
        setIsLoading(true);
        axios.get('http://127.0.0.1:5001/transactions')
        .then(response => {
            console.log('Fetched transactions:', response.data); // log 02
            setTransactions(response.data)
        })
        .catch(error => console.log('Error fetching transactions', error))
        .finally(() => setIsLoading(false));
    }, []);
    
    useEffect(() => {
        const total = transactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
        setTotalAmount(total);
    }, [transactions]);
    
    const formatDateTime = (dataString) => {
        const date = new Date(dataString);
        const formattedDate = date.toISOString().split('T')[0];
        return formattedDate
    }

    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const year = d.getFullYear();
        // return `${year}-${month}-${day}`;
        return `${month}-${day}-${year}`;
    };

    // DELETE 
    const handleDelete = (index) => {
        const transaction = transactions[index];
        setIsLoading(true);
        axios.delete(`http://127.0.0.1:5001/transactions/${transaction.id}`)
        .then (() => {
            const newTransactions = transactions.filter((_, i) => i !== index);
            setTransactions(newTransactions);
            setAnimateRow(index);
            setTimeout(() => setAnimateRow(null), 500);
            setSuccessMessage('🗑️ Transaction deleted successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
        })
        .catch(error => console.error('Error deleting transaction:', error))
        .finally(() => {
            setIsLoading(false);
            setDeleteConfirm(null);
        });
    };

    const handleDeleteClick = (index) => {
        setDeleteConfirm(index);
    };
    
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditTransaction({ ...editTransaction,[name]: value || ''});
    };

    const handleEditSave = async (index) => {
        let formattedDate;
        try {
            formattedDate = formatDateTime(editTransaction.date);
        } catch (error) {
            console.error('Invalid date format:', editTransaction.date);
            return;
        }

        const updatedTransaction = { ...editTransaction, date: formattedDate };
        setIsLoading(true);

        try {
            await axios.put(`http://127.0.0.1:5001/transactions/${transactions[index].id}`, updatedTransaction);
            const newTransactions = transactions.map((t, i) =>
                i === index ? { ...t, ...updatedTransaction } : t
            );
            setTransactions(newTransactions);
            setEditIndex(null);
            setEditTransaction({ category: '', date: '', description: '', amount: '' });
            setSuccessMessage('✅ Transaction updated successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
        } catch (error) {
            console.error('Error updating transaction:', error);
            setSuccessMessage('❌ Failed to update transaction. Please try again.');
            setTimeout(() => setSuccessMessage(''), 3000);
        } finally {
            setIsLoading(false);
        }
    };

    const handleReminder = (transaction, reminderDate, amount) => {
        const currentDate = new Date();
        const reminderTime = new Date(reminderDate) - currentDate;

        if (reminderTime > 0) {
            setTimeout(() => {
                alert(`🔔 Reminder: You need to make a payment of ${amount} for ${transaction.description} on ${transaction.date}`);
            },  reminderTime);
            setSuccessMessage(`⏰ Payment Reminder set for ${transaction.description} on ${reminderDate}`);
            setTimeout(() => setSuccessMessage(''), 5000);
        } else {
            alert('⚠️ Reminder date must be in the future.')
        }
    }

    const handleSetReminderClick = (transaction) => {
        const reminderDate = prompt('📅 Enter the reminder date (MM-DD-YYYY):');
        const amount = prompt('💰 Enter the amount that needs to be paid:');
        if (reminderDate && amount) {
            handleReminder(transaction, reminderDate, amount)
        }
    }

    // Filter and sort functions
    const getFilteredAndSortedTransactions = () => {
        let filtered = transactions.filter(transaction => {
            const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                transaction.category.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = filterCategory === '' || transaction.category === filterCategory;
            return matchesSearch && matchesCategory;
        });

        filtered.sort((a, b) => {
            let aValue = a[sortBy];
            let bValue = b[sortBy];
            
            if (sortBy === 'amount') {
                aValue = parseFloat(aValue);
                bValue = parseFloat(bValue);
            } else if (sortBy === 'date') {
                aValue = new Date(aValue);
                bValue = new Date(bValue);
            }
            
            if (sortOrder === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });

        return filtered;
    };

    const getUniqueCategories = () => {
        return [...new Set(transactions.map(t => t.category))];
    };

    const getCategoryIcon = (category) => {
        const icons = {
            'Cable': '📺',
            'Child Support': '👶',
            'Clothes': '👔',
            'Debt': '💳',
            'Entertainment': '🎬',
            'Food': '🍕',
            'Housing': '🏠',
            'Insurance': '🛡️',
            'Medical & Healthcare': '🏥',
            'Mortgage': '🏘️',
            'Personal Care': '💄',
            'Pets': '🐕',
            'Restaurants': '🍽️',
            'Savings & Investments': '💰',
            'Shopping': '🛍️',
            'Transportation': '🚗',
            'Utilities': '⚡'
        };
        return icons[category] || '📄';
    };
    
    
    return (
        <div className="transactions-container">
            <style jsx>{`
                .transactions-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }

                .transactions-header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 30px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                }

                .transactions-header h5 {
                    font-size: 2.5rem;
                    margin: 0 0 10px 0;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                .transactions-subtitle {
                    font-size: 1.1rem;
                    opacity: 0.9;
                    margin: 0;
                }

                .controls-section {
                    background: ${darkMode ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'};
                    border-radius: 15px;
                    padding: 25px;
                    margin-bottom: 25px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr 1fr;
                    gap: 15px;
                    align-items: end;
                }

                .control-group {
                    display: flex;
                    flex-direction: column;
                }

                .control-label {
                    font-weight: 600;
                    margin-bottom: 8px;
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                    font-size: 0.9rem;
                }

                .control-input {
                    padding: 12px;
                    border: 2px solid ${darkMode ? '#4a5568' : '#e2e8f0'};
                    border-radius: 8px;
                    background: ${darkMode ? '#2d3748' : '#ffffff'};
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                }

                .control-input:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
                }

                .success-alert {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    padding: 15px 20px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    font-weight: 600;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                    animation: slideIn 0.5s ease;
                }

                @keyframes slideIn {
                    from { transform: translateY(-20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .table-container {
                    background: ${darkMode ? '#2d3748' : '#ffffff'};
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${darkMode ? '2px solid #4a5568' : '2px solid #e2e8f0'};
                }

                .no-transactions {
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
                }

                .loading-spinner {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid #667eea;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-bottom: 15px;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .enhanced-table {
                    width: 100%;
                    border-collapse: collapse;
                    background: ${darkMode ? '#2d3748' : '#ffffff'};
                }

                .enhanced-table th {
                    background: ${darkMode ? '#4a5568' : '#667eea'};
                    color: white;
                    padding: 18px 15px;
                    text-align: left;
                    font-weight: 600;
                    font-size: 1rem;
                    border-bottom: 3px solid ${darkMode ? '#2d3748' : '#5a67d8'};
                }

                .enhanced-table td {
                    padding: 15px;
                    border-bottom: 1px solid ${darkMode ? '#4a5568' : '#e2e8f0'};
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                    transition: all 0.3s ease;
                }

                .table-row {
                    transition: all 0.3s ease;
                }

                .table-row:hover {
                    background: ${darkMode ? '#4a5568' : '#f7fafc'};
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .table-row.animate-delete {
                    animation: fadeOut 0.5s ease;
                    background: #ff6b6b !important;
                }

                @keyframes fadeOut {
                    to { opacity: 0; transform: translateX(-100%); }
                }

                .category-cell {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .amount-cell {
                    font-weight: 700;
                    font-size: 1.1rem;
                    color: ${darkMode ? '#68d391' : '#38a169'};
                }

                .total-row {
                    background: ${darkMode ? '#4a5568' : '#667eea'};
                    color: white;
                    font-weight: 700;
                    font-size: 1.1rem;
                }

                .action-buttons {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                }

                .btn-modern {
                    padding: 8px 16px;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.85rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                }

                .btn-edit {
                    background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(66, 153, 225, 0.4);
                }

                .btn-edit:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.6);
                }

                .btn-delete {
                    background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(245, 101, 101, 0.4);
                }

                .btn-delete:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(245, 101, 101, 0.6);
                }

                .btn-reminder {
                    background: linear-gradient(135deg, #38b2ac 0%, #319795 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(56, 178, 172, 0.4);
                }

                .btn-reminder:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(56, 178, 172, 0.6);
                }

                .btn-save {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(56, 161, 105, 0.4);
                }

                .btn-cancel {
                    background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(160, 174, 192, 0.4);
                }

                .edit-input {
                    width: 100%;
                    padding: 8px 12px;
                    border: 2px solid #667eea;
                    border-radius: 6px;
                    background: ${darkMode ? '#2d3748' : '#ffffff'};
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                    font-size: 0.9rem;
                }

                .delete-confirm {
                    background: rgba(245, 101, 101, 0.1);
                    border: 2px solid #f56565;
                    border-radius: 8px;
                    padding: 10px;
                    margin: 5px 0;
                }

                .confirm-text {
                    color: #e53e3e;
                    font-weight: 600;
                    margin-bottom: 10px;
                }

                @media (max-width: 768px) {
                    .controls-section {
                        grid-template-columns: 1fr;
                        gap: 15px;
                    }
                    
                    .action-buttons {
                        flex-direction: column;
                    }
                    
                    .btn-modern {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>

            <div className="transactions-header">
                <h5>💼 Transaction History</h5>
                <p className="transactions-subtitle">Track your financial journey with style</p>
            </div>

            {successMessage && (
                <div className="success-alert">
                    {successMessage}
                </div>
            )}

            <div className="controls-section">
                <div className="control-group">
                    <label className="control-label">🔍 Search Transactions</label>
                    <input
                        type="text"
                        className="control-input"
                        placeholder="Search by description or category..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="control-group">
                    <label className="control-label">📂 Filter by Category</label>
                    <select
                        className="control-input"
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        {getUniqueCategories().map(category => (
                            <option key={category} value={category}>
                                {getCategoryIcon(category)} {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="control-group">
                    <label className="control-label">🔄 Sort By</label>
                    <select
                        className="control-input"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="date">📅 Date</option>
                        <option value="amount">💰 Amount</option>
                        <option value="category">📂 Category</option>
                        <option value="description">📝 Description</option>
                    </select>
                </div>
                <div className="control-group">
                    <label className="control-label">⬆️⬇️ Order</label>
                    <select
                        className="control-input"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="desc">Descending</option>
                        <option value="asc">Ascending</option>
                    </select>
                </div>
            </div>

            <div className="table-container">
                {isLoading ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>Loading transactions...</p>
                    </div>
                ) : transactions.length === 0 ? (
                    <div className="no-transactions">
                        📊 No Transactions Have Been Added Yet!
                        <br />
                        <small>Start tracking your expenses by adding your first transaction.</small>
                    </div>
                ) : (
                    <div className="table-responsive">
                        <table className="enhanced-table">
                            <thead>
                                <tr>
                                    <th>📝 Description</th>
                                    <th>📂 Category</th>
                                    <th>📅 Date</th>
                                    <th>💰 Amount</th>
                                    <th>⚙️ Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getFilteredAndSortedTransactions().map((transaction, index) => {
                                    const originalIndex = transactions.findIndex(t => t.id === transaction.id);
                                    return (
                                        <tr key={transaction.id || index} className={`table-row ${animateRow === originalIndex ? 'animate-delete' : ''}`}>
                                            {editIndex === originalIndex ? (
                                                <>
                                                    <td>
                                                        <input 
                                                            type="text" 
                                                            name='description' 
                                                            value={editTransaction.description} 
                                                            onChange={handleEditChange} 
                                                            className="edit-input" 
                                                            placeholder="Enter description..."
                                                        />
                                                    </td>
                                                    <td>
                                                        <input 
                                                            type="text" 
                                                            name='category' 
                                                            value={editTransaction.category} 
                                                            onChange={handleEditChange} 
                                                            className="edit-input"
                                                            placeholder="Enter category..."
                                                        />
                                                    </td>
                                                    <td>
                                                        <input 
                                                            type="date" 
                                                            name='date' 
                                                            value={editTransaction.date} 
                                                            onChange={handleEditChange} 
                                                            className="edit-input"
                                                        />
                                                    </td>
                                                    <td>
                                                        <input 
                                                            type="number" 
                                                            name='amount' 
                                                            value={editTransaction.amount} 
                                                            onChange={handleEditChange} 
                                                            className="edit-input"
                                                            step="0.01"
                                                            min="0"
                                                            placeholder="0.00"
                                                        />
                                                    </td>
                                                    <td>
                                                        <div className="action-buttons">
                                                            <button 
                                                                onClick={() => handleEditSave(originalIndex)} 
                                                                className="btn-modern btn-save"
                                                                disabled={isLoading}
                                                            >
                                                                ✅ Save
                                                            </button>
                                                            <button 
                                                                onClick={() => setEditIndex(null)} 
                                                                className="btn-modern btn-cancel"
                                                            >
                                                                ❌ Cancel
                                                            </button>
                                                        </div>
                                                    </td>
                                                </>
                                            ) : (
                                                <>
                                                    <td data-label="Description">
                                                        {transaction.description || 'No Description'} 
                                                    </td>
                                                    <td data-label="Category">
                                                        <div className="category-cell">
                                                            <span>{getCategoryIcon(transaction.category)}</span>
                                                            <span>{transaction.category}</span>
                                                        </div>
                                                    </td>
                                                    <td data-label="Date">
                                                        {formatDate(parseDate(transaction.date))}
                                                    </td>
                                                    <td data-label="Amount" className="amount-cell">
                                                        {formatCurrency(transaction.amount)}
                                                    </td>
                                                    <td data-label="Actions">
                                                        {deleteConfirm === originalIndex ? (
                                                            <div className="delete-confirm">
                                                                <div className="confirm-text">⚠️ Confirm deletion?</div>
                                                                <div className="action-buttons">
                                                                    <button 
                                                                        onClick={() => handleDelete(originalIndex)} 
                                                                        className="btn-modern btn-delete"
                                                                        disabled={isLoading}
                                                                    >
                                                                        🗑️ Yes, Delete
                                                                    </button>
                                                                    <button 
                                                                        onClick={() => setDeleteConfirm(null)} 
                                                                        className="btn-modern btn-cancel"
                                                                    >
                                                                        ↩️ Cancel
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div className="action-buttons">
                                                                <button 
                                                                    onClick={() => { 
                                                                        setEditIndex(originalIndex); 
                                                                        setEditTransaction({ 
                                                                            ...transaction, 
                                                                            date: formatDateTime(transaction.date) 
                                                                        }); 
                                                                    }} 
                                                                    className="btn-modern btn-edit"
                                                                >
                                                                    ✏️ Edit
                                                                </button>
                                                                <button 
                                                                    onClick={() => handleDeleteClick(originalIndex)} 
                                                                    className="btn-modern btn-delete"
                                                                >
                                                                    🗑️ Delete
                                                                </button>
                                                                <button 
                                                                    onClick={() => handleSetReminderClick(transaction)} 
                                                                    className="btn-modern btn-reminder"
                                                                >
                                                                    ⏰ Remind
                                                                </button>
                                                            </div>
                                                        )}
                                                    </td>
                                                </>
                                            )}
                                        </tr>  
                                    )
                                })}
                                <tr className="total-row">
                                    <td colSpan="4"><strong>💰 Total Expenses:</strong></td>
                                    <td className="amount-cell"><strong>{formatCurrency(totalAmount)}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Transactions;

