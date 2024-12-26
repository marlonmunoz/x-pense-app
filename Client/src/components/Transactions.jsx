import React, { useState } from 'react';
import '/src/App.css'

const Transactions = ({ transactions, setTransactions }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editTransaction, setEditTransaction] = useState({ category: '', text: '', amount:'' });

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

    const totalAmount = transactions.reduce((total, transaction) => total + transaction.amount, 0);
    return (
        <div>
            <h5>New Transactions Added</h5>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Category</th>
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
                                    <td><input type="text" name='category' value={editTransaction.category} onChange={handleEditChange} className="form-control" /></td>
                                    <td><input type="text" name='text' value={editTransaction.text} onChange={handleEditChange} className="form-control" /></td>
                                    <td><input type="number" name='amount' value={editTransaction.amount} onChange={handleEditChange} className="form-control" /></td>
                                    <td>
                                        <button onClick={() => handleEditSave(index)} className="btn btn-success">Save</button>
                                        <button onClick={() => setEditIndex(null)} className="btn btn-secondary">Cancel</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{transaction.category}</td>
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
                        <td colSpan="3">Total</td>
                        <td>$ {totalAmount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;

