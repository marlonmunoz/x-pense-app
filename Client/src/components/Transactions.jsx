import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '/src/App.css'


const Transactions = ({ transactions, setTransactions, darkMode }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editTransaction, setEditTransaction] = useState({ date:'' });

    useEffect(() => {
        axios.get('http://127.0.0.1:5001/transactions')
        .then(response => {
            console.log('Transactions retrieved:', response.data); // Debug log
            setTransactions(response.data)
        })
        .catch(error => console.log('Error fetching transactions', error));
    }, []);

    const formatAmount = (amount) => {
        return parseFloat(amount).toLocaleString();
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

    // EDIT
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditTransaction({ ...editTransaction, [name]: value || '' });
    };

    const validateTransaction = (transaction) => {
        if (!transaction.date) {
            console.error('Transaction date is missing');
            return false;
        }
        return true;
    };
    const formatDateTime = (dataString) => {
        const date = new Date(dataString);
        const formattedDate = date.toISOString().split('T')[0];
        const formattedTime = date.toTimeString().split(' ')[0];
        return { formattedDate, formattedTime };
    }

    const handleEditSave = async (transaction) => {
        if (!validateTransaction(transaction)) {
            return;
        }
    
        let formattedDate;
        let formattedTime;
        try {
            const { formattedDate: date, formatDateTime: time } = formatDateTime(editTransaction.date);
            formattedDate = date;
            formattedTime = time;
        } catch (error) {
            console.error('Invalid date format:', editTransaction.date);
            return;
        }
    
        const updatedTransaction = { ...editTransaction, date: formattedDate };
    
        try {
            await axios.put(`http://127.0.0.1:5001/transactions/${transaction.id}`, updatedTransaction);
            const newTransactions = transactions.map((t, index) => 
                i === index ? { ...t, ...updatedTransaction , time: formattedTime } : t
            );
            setTransactions(newTransactions);
            setEditIndex(null);
            setEditTransaction({ date: '' });
        } catch (error) {
            console.error('Error updating transaction:', error);
        }
    };

    const totalAmount = transactions.reduce((total, transaction) => total + transaction.amount, 0); // the '' will remove the 0 the shows in front of every transaction.
    return (
        <div>
            <h5>New Transactions Added</h5>
            <div className="table-responsive">
                <table className={`table table-striped table-hover table-responsive ${darkMode ? 'table-dark' : 'table-light'} table-rounded`}>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
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
                                            <label htmlFor={`text-${index}`}>Description</label>
                                            <input type="text" id={`text-${index}`} name='text' value={editTransaction.text} onChange={handleEditChange} className="form-control" />
                                        </td>
                                        <td>
                                            <label htmlFor={`amount-${index}`}>Amount</label>
                                            <input type="number" id={`amount-${index}`} name='amount' value={editTransaction.amount} onChange={handleEditChange} className="form-control" />
                                        </td>
                                        <td>
                                            <button onClick={() => handleEditSave(index)} className="btn btn-success ">Save</button>
                                            <button onClick={() => setEditIndex(null)} className="btn btn-secondary ">Cancel</button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>{transaction.category}</td>
                                        <td>{transaction.date} <sup>{transaction.time}</sup> </td>
                                        <td>{transaction.text}</td>
                                        <td>$ {formatAmount(transaction.amount)}</td>
                                        <td>
                                            <button onClick={() => { setEditIndex(index); setEditTransaction(transaction); }} className="btn btn-primary ml-2">Edit</button>
                                            <button onClick={() => handleDelete(index)} className="btn btn-danger ml-2">Delete</button>
                                        </td>
                                    </>
                                )}
                            </tr>  
                        ))}
                        <tr>
                            <td colSpan="4"><strong>Total</strong></td>
                            {/* <td>$ {totalAmount}</td> */}
                            <td>$ {formatAmount(totalAmount)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transactions;

