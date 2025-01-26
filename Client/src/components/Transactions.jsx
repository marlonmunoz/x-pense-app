import React, { useEffect } from 'react';
import axios from 'axios'
import '/src/App.css'


const Transactions = ({ darkMode, transactions, setTransactions, totalAmount, setTotalAmount, editIndex, setEditIndex, editTransaction, setEditTransaction, formatCurrency, reminderDate, setSuccessMessage, successMessage }) => {
    
    useEffect(() => {
        axios.get('http://127.0.0.1:5001/transactions')
        .then(response => {
            setTransactions(response.data)
        })
        .catch(error => console.log('Error fetching transactions', error));
    }, []);
    
    useEffect(() => {
        const total = transactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
        setTotalAmount(total);
    }, [transactions]);
    
    const formatAmount = (amount) => {
        const [integerPart, decimalPart] = parseFloat(amount).toFixed(2).split('.');
        return (
            <>
                {integerPart}
                <sup>.{decimalPart}</sup>
            </>
        );
    };
    const formatDateTime = (dataString) => {
        const date = new Date(dataString);
        const formattedDate = date.toISOString().split('T')[0];
        return formattedDate
    }

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
    
    // const validateTransaction = (transaction) => {
    //     if (!transaction.date) {
    //         console.error('Transaction date is missing');
    //         return false;
    //     }
    //     return true;
    // };

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
                                                {formattedDate} 
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
                <div><sup>Future Impplentations</sup></div>
                {/* <div><sup>1. add reminders for future payments</sup></div> */}
                <div><sup>2. send notifications when payment is overdue based on date of transaction</sup></div>
                <div><sup>3. implement sort on columns</sup></div>
            </div>
        </div>
    );
};

export default Transactions;

