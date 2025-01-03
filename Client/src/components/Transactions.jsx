import React, { useState } from 'react';
import '/src/App.css'

const Transactions = ({ transactions, setTransactions, darkMode }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editTransaction, setEditTransaction] = useState({ category: '', text: '', amount:'', date:'' });

    // DELETE 
    const handleDelete = (index) => {
        const newTransactions = transactions.filter((_, i) => i !== index);
        setTransactions(newTransactions)
    };

    // EDIT
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditTransaction({ ...editTransaction, [name]: value });
    };

    const handleEditSave = (index) => {
        const newTransactions = transactions.map((transaction, i) =>
            i === index ? editTransaction : transaction
        );

        setTransactions(newTransactions);
        setEditIndex(null);
    };

    const totalAmount = transactions.reduce((total, transaction) => total + transaction.amount, 0); // the '' will remove the 0 the shows in front of every transaction.
    return (
        <div>
            <h5>New Transactions Added</h5>
            <div className="table-responsive">
                <table className={`table table-striped table-hover table-responsive ${darkMode ? 'table-dark' : 'table-light'}`}>
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
                                            <label htmlFor={`date-${index}`}></label>
                                            <input type="date" id={`date-${index}`} name='date' value={editTransaction.date} onChange={handleEditChange} className="form-control"/>
                                        </td>
                                        <td>
                                            <label htmlFor={`text-${index}`}></label>
                                            <input type="text" id={`text-${index}`} name='text' value={editTransaction.text} onChange={handleEditChange} className="form-control" />
                                        </td>
                                        <td>
                                            <label htmlFor={`amount-${index}`}></label>
                                            <input type="number" id={`amount-${index}`} name='amount' value={editTransaction.amount} onChange={handleEditChange} className="form-control" />
                                        </td>
                                        <td>
                                            <button onClick={() => handleEditSave(index)} className="btn btn-success">Save</button>
                                            <button onClick={() => setEditIndex(null)} className="btn btn-secondary">Cancel</button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>{transaction.category}</td>
                                        <td>{transaction.date}</td>
                                        <td>{transaction.text}</td>
                                        <td>$ {transaction.amount}</td>
                                        <td>
                                            <button onClick={() => { setEditIndex(index); setEditTransaction(transaction); }} className="btn btn-primary">Edit</button>
                                            <button onClick={() => handleDelete(index)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </>
                                )}
                            </tr>  
                        ))}
                        <tr>
                            <td colSpan="4"><strong>Total</strong></td>
                            <td>$ {totalAmount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transactions;

