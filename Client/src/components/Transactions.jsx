import React, { useEffect } from 'react';
import axios from 'axios'
import '/src/App.css'
import { parseISO, format } from 'date-fns';


const Transactions = ({ darkMode, transactions, setTransactions, totalAmount, setTotalAmount, editIndex, setEditIndex, editTransaction, setEditTransaction, formatCurrency, reminderDate, setSuccessMessage, successMessage, parseDate }) => {
    
    useEffect(() => {
        console.log('TRANSACTIONS COMPONENT');
        
        console.log('Fetching transactions...'); // logs 01
        axios.get('http://127.0.0.1:5001/transactions')
        .then(response => {
            console.log('Fetched transactions:', response.data); // log 02
            setTransactions(response.data)
        })
        .catch(error => console.log('Error fetching transactions', error));
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
        axios.delete(`http://127.0.0.1:5001/transactions/${transaction.id}`)
        .then (() => {
            const newTransactions = transactions.filter((_, i) => i !== index);
            setTransactions(newTransactions)
        })
        .catch(error => console.error('Error deleting transaction:', error));
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

        try {
            await axios.put(`http://127.0.0.1:5001/transactions/${transactions[index].id}`, updatedTransaction);
            const newTransactions = transactions.map((t, i) =>
                i === index ? { ...t, ...updatedTransaction } : t
            );
            setTransactions(newTransactions);
            setEditIndex(null);
            setEditTransaction({ category: '', date: '', description: '', amount: '' });
        } catch (error) {
            console.error('Error updating transaction:', error);
        }
    };

    const handleReminder = (transaction, reminderDate, amount) => {
        const currentDate = new Date();
        const reminderTime = new Date(reminderDate) - currentDate;

        if (reminderTime > 0) {
            setTimeout(() => {
                alert(`Reminder: You need to make a payment of ${amount} for ${transaction.description} on ${transaction.date}`);
            },  reminderTime);
            setSuccessMessage(`Payment Reminder set for ${transaction.description} on ${reminderDate}`);
        } else {
            alert('Reminder date must in the future.')
        }
    }

    const handleSetReminderClick = (transaction) => {
        const reminderDate = prompt('Enter the reminder date (YYYY-MM-DD)');
        const amount = prompt('Enter the amount that needs to be paid:');
        if (reminderDate && amount) {
            handleReminder(transaction, reminderDate, amount)
        }
    }
    
    
    return (
        <div className="container">
            <h5>New Transactions Added </h5>
            <p style={{color: 'gray'}}> <sup>Tracking History</sup></p>
            {successMessage && <div className='alert alert-success'>{successMessage}</div>}
            <div className="table-responsive">
                <table className={`table table-striped table-hover table-bordered ${darkMode ? 'table-dark' : 'table-light table-light-bordered'} table-rounded`}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => {
                             const  formattedDate  = formatDateTime(transaction.date)
                             return (
                                <tr key={index}>
                                    {editIndex === index ? (
                                        <>
                                            <td>
                                                <label htmlFor={`category-${index}`}>Category</label>
                                                <input type="text" id={`category-${index}`} name='category' value={editTransaction.category} onChange={handleEditChange} className="form-control" />
                                            </td>
                                            <td>
                                                <label htmlFor={`date-${index}`}>Date</label>
                                                <input type="date" id={`date-${index}`} name='date' value={editTransaction.date} onChange={handleEditChange} className="form-control"/>
                                            </td>
                                            <td>
                                                <label htmlFor={`description-${index}`}>Description</label>
                                                <input type="text" id={`description-${index}`} name='description' value={editTransaction.description} onChange={handleEditChange} className="form-control" />
                                            </td>
                                            <td>
                                                <label htmlFor={`amount-${index}`}>Amount</label>
                                                <input type="number" id={`amount-${index}`} name='amount' value={editTransaction.amount} onChange={handleEditChange} className="form-control" />
                                            </td>
                                            <td>
                                                <button onClick={() => handleEditSave(index)} className="btn btn-sm btn-success ml-1 ">Save</button>
                                                <button onClick={() => setEditIndex(null)} className="btn btn-sm btn-secondary ml-1 ">Cancel</button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td data-label="Description">
                                                {transaction.description || 'No Description'} 
                                            </td>
                                            <td data-label="Category">
                                                {transaction.category} 
                                            </td>
                                            <td data-label="Date">
                                                {/* {formattedDate}  */}
                                                {formatDate(parseDate(transaction.date))}
                                            </td>
                                            <td data-label="Amount">
                                                {formatCurrency(transaction.amount)}
                                            </td>
                                            <td data-label="Actions">
                                                <button onClick={() => { setEditIndex(index); setEditTransaction({ ...transaction, date: formatDateTime(transaction.date) }); }} className="btn btn-sm  btn-primary ml-1">Edit</button>
                                                <button onClick={() => handleDelete(index)} className="btn btn-sm btn-danger ml-1">Delete</button>
                                                <button onClick={() => handleSetReminderClick(transaction, reminderDate)} className='btn btn-sm btn-info ml-1'>Set Reminder</button>
                                                
                                            </td>
                                        </>
                                    )}
                                </tr>  
                            )
                        })}
                        <tr>
                            <td colSpan="4"><strong>Total :</strong></td>
                            <td>{formatCurrency(totalAmount)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transactions;

