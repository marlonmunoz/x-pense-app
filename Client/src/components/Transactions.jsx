import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '/src/App.css'


const Transactions = ({ darkMode, transactions, setTransactions, totalAmount, setTotalAmount }) => {
    // const [transactions, setTransactions] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editTransaction, setEditTransaction] = useState({ category:'', date:'', text:'', amount:'' });
    // const [totalAmount, setTotalAmount] = useState(0);
    
    
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
    
    // const formatAmount = (amount) => {
    //     return parseFloat(amount).toLocaleString();
    // };

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
    
    const validateTransaction = (transaction) => {
        if (!transaction.date) {
            console.error('Transaction date is missing');
            return false;
        }
        return true;
    };
    
    
    // const totalAmount = transactions.reduce((total, transaction) => total + transaction.amount, 0); // the '' will remove the 0 the shows in front of every transaction.

    return (
        <div>
            <h5>New Transactions Added </h5>
            <p style={{color: 'gray'}}> <sup>Tracking History</sup></p>
            <div className="table-responsive">
                <table className={`table table-striped table-hover table-bordered table-responsive ${darkMode ? 'table-dark' : 'table-light table-light-bordered'} table-rounded`}>
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
                                                <button onClick={() => handleEditSave(index)} className="btn btn-sm btn-success ">Save</button>
                                                <button onClick={() => setEditIndex(null)} className="btn btn-sm btn-secondary ml-2 ">Cancel</button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{transaction.description || 'No Description'} </td>
                                            <td>{transaction.category} </td>
                                            <td>{formattedDate} </td>
                                            <td>$ {formatAmount(transaction.amount)}</td>
                                            

                                            <td>
                                                <button onClick={() => { setEditIndex(index); setEditTransaction({ ...transaction, date: formatDateTime(transaction.date) }); }} className="btn btn-sm  btn-primary ml-2">Edit</button>
                                                <button onClick={() => handleDelete(index)} className="btn btn-sm btn-danger ml-2">Delete</button>
                                            </td>
                                        </>
                                    )}
                                </tr>  
                            )
                        })}
                        <tr>
                            <td colSpan="4"><strong>Total :</strong></td>
                            <td>$ {formatAmount(totalAmount)}</td>
                        </tr>
                    </tbody>
                </table>
                <div><sup>Future Impplentations</sup></div>
                <div><sup>1. add reminders for future payments</sup></div>
                <div><sup>2. send notifications when payment is overdue based on date of transaction</sup></div>
                <div><sup>3. implement sort on columns</sup></div>
            </div>
        </div>
    );
};

export default Transactions;

