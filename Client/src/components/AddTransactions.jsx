import axios from "axios";
import React from "react";
import { useNavigate } from 'react-router-dom'

// X-PENSE Tab
function AddTransactions( {amount, setAmount, category, setCategory, date, setDate, description, setDescription, darkMode } ) {

    const navigate = useNavigate();

    const handleAmountChange = (e) => {
        const value = parseFloat(e.target.value);
        setAmount(isNaN(value) ? 0 : value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTransaction = { 
            category, 
            date: new Date(date).toISOString().split('T')[0], // Format date to YYYY-MM-DD
            description,
            amount
        };

        try {
            const response = await axios.post('http://127.0.0.1:5001/transactions', newTransaction);
            console.log('Transaction added:', response.data);
            // Reset form fields
            setCategory('');
            setDate('');
            setDescription('');
            setAmount(0);
            navigate('/transactions')
        } catch (error) {
            console.error('Error adding transaction:', error);
        }
    };
    

    return (
        <div >
            <h5>Set X-Penses</h5>
            <div className={`border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="category"><p>Category </p></label>
                        <select 
                            id="category"
                            name="category"
                            className="form-control" 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        > 
                            <option value="">Select A Category</option> 
                            <option value="Cable">Cable</option>
                            <option value="Child Support">Child Support</option>
                            <option value="Clothes">Clothes</option>
                            <option value="Debt">Debt</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Food">Food</option>
                            <option value="Housing">Housing</option>
                            <option value="Insurance">Insurance</option>
                            <option value="Medical & Healthcare">Medical & Healthcare</option>
                            <option value="Mortgage">Mortgage</option>
                            <option value="Personal Care">Personal Care</option>
                            <option value="Pets">Pets</option>
                            <option value="Restaurants">Restaurants</option>
                            <option value="Savings & Investments">Savings & Investments</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Utilities">Utilities</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="text"><p>Description</p></label>
                        <input 
                            type="text" 
                            className="form-control"
                            id="text" 
                            name="text"
                            value={description} 
                            placeholder="Description"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount"><p>Amount</p></label>
                        <input 
                            type="text" 
                            id="amount" 
                            name="amount"
                            className="form-control" 
                            value={amount} 
                            placeholder="Amount"
                            onChange={handleAmountChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date"><p >Date</p></label>
                        <input 
                            type="date" 
                            id="date"
                            name="date"
                            className="form-control"
                            value={date ? new Date(date).toISOString().split('T')[0] : ''}
                            onChange={handleDateChange}
                        />

                    </div>
                    <div>
                        <button type="submit" className="btn btn-success"> Add Transaction</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddTransactions;