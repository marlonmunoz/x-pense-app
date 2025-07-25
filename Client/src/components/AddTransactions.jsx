import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

// X-PENSE Tab
function AddTransactions( {amount, setAmount, category, setCategory, date, setDate, description, setDescription, darkMode } ) {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errors, setErrors] = useState({});
    const [shake, setShake] = useState(false);

    const handleAmountChange = (e) => {
        const value = parseFloat(e.target.value);
        setAmount(isNaN(value) ? 0 : value);
        // Clear amount error when user starts typing
        if (errors.amount) {
            setErrors(prev => ({ ...prev, amount: '' }));
        }
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
        // Clear date error when user selects a date
        if (errors.date) {
            setErrors(prev => ({ ...prev, date: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!category) {
            newErrors.category = 'Please select a category';
        }
        
        if (!description.trim()) {
            newErrors.description = 'Description is required';
        }
        
        if (!amount || amount <= 0) {
            newErrors.amount = 'Please enter a valid amount';
        }
        
        if (!date) {
            newErrors.date = 'Please select a date';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            setShake(true);
            setTimeout(() => setShake(false), 500);
            return;
        }

        setIsLoading(true);
        setErrors({});

        const newTransaction = { 
            category, 
            date: new Date(date).toISOString().split('T')[0], // Format date to YYYY-MM-DD
            description,
            amount
        };

        try {
            const response = await axios.post('http://127.0.0.1:5001/transactions', newTransaction);
            console.log('Transaction added:', response.data);
            
            // Show success message
            setShowSuccess(true);
            
            // Reset form fields
            setCategory('');
            setDate('');
            setDescription('');
            setAmount(0);
            
            // Navigate after showing success
            setTimeout(() => {
                setShowSuccess(false);
                navigate('/transactions');
            }, 2000);
            
        } catch (error) {
            console.error('Error adding transaction:', error);
            setErrors({ submit: 'Failed to add transaction. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <div className="add-transactions-container">
            <style jsx>{`
                .add-transactions-container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }

                .form-header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 20px;
                    border-radius: 15px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                }

                .form-header h5 {
                    font-size: 1.8rem;
                    margin: 0;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                .form-container {
                    background: ${darkMode ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'};
                    border-radius: 20px;
                    padding: 40px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                    border: ${darkMode ? '2px solid #4a5568' : '2px solid #e2e8f0'};
                    transition: all 0.3s ease;
                    ${shake ? 'animation: shake 0.5s;' : ''}
                }

                .form-container:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-10px); }
                    75% { transform: translateX(10px); }
                }

                .form-group {
                    margin-bottom: 25px;
                    position: relative;
                }

                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 600;
                    font-size: 1.1rem;
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                    transition: color 0.3s ease;
                }

                .form-control {
                    width: 100%;
                    padding: 15px;
                    border: 2px solid ${darkMode ? '#4a5568' : '#e2e8f0'};
                    border-radius: 12px;
                    font-size: 1rem;
                    background: ${darkMode ? '#2d3748' : '#ffffff'};
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .form-control:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
                    transform: translateY(-2px);
                }

                .form-control.error {
                    border-color: #e53e3e;
                    box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.3);
                }

                .error-message {
                    color: #e53e3e;
                    font-size: 0.875rem;
                    margin-top: 5px;
                    display: flex;
                    align-items: center;
                    animation: fadeIn 0.3s ease;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .submit-button {
                    width: 100%;
                    padding: 18px;
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    border: none;
                    border-radius: 12px;
                    font-size: 1.2rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                    position: relative;
                    overflow: hidden;
                }

                .submit-button:hover:not(:disabled) {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(56, 161, 105, 0.6);
                }

                .submit-button:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .loading-spinner {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border: 2px solid #ffffff;
                    border-radius: 50%;
                    border-top-color: transparent;
                    animation: spin 1s ease-in-out infinite;
                    margin-right: 10px;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                .success-message {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    padding: 20px;
                    border-radius: 12px;
                    text-align: center;
                    margin-bottom: 20px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    animation: slideDown 0.5s ease;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                }

                @keyframes slideDown {
                    from { transform: translateY(-100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .category-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 10px;
                    margin-top: 10px;
                }

                .amount-input-container {
                    position: relative;
                }

                .currency-symbol {
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-weight: bold;
                    color: #667eea;
                    font-size: 1.2rem;
                }

                .amount-input {
                    padding-left: 40px !important;
                }
            `}</style>

            <div className="form-header">
                <h5>💰 Set X-Penses</h5>
            </div>

            {showSuccess && (
                <div className="success-message">
                    ✅ Transaction added successfully! Redirecting...
                </div>
            )}

            {errors.submit && (
                <div className="error-message" style={{ marginBottom: '20px', justifyContent: 'center' }}>
                    ❌ {errors.submit}
                </div>
            )}

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="category">📂 Category</label>
                        <select 
                            id="category"
                            name="category"
                            className={`form-control ${errors.category ? 'error' : ''}`}
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                                if (errors.category) {
                                    setErrors(prev => ({ ...prev, category: '' }));
                                }
                            }}
                        > 
                            <option value="">🎯 Select A Category</option> 
                            <option value="Cable">📺 Cable</option>
                            <option value="Child Support">👶 Child Support</option>
                            <option value="Clothes">👔 Clothes</option>
                            <option value="Debt">💳 Debt</option>
                            <option value="Entertainment">🎬 Entertainment</option>
                            <option value="Food">🍕 Food</option>
                            <option value="Housing">🏠 Housing</option>
                            <option value="Insurance">🛡️ Insurance</option>
                            <option value="Medical & Healthcare">🏥 Medical & Healthcare</option>
                            <option value="Mortgage">🏘️ Mortgage</option>
                            <option value="Personal Care">💄 Personal Care</option>
                            <option value="Pets">🐕 Pets</option>
                            <option value="Restaurants">🍽️ Restaurants</option>
                            <option value="Savings & Investments">💰 Savings & Investments</option>
                            <option value="Shopping">🛍️ Shopping</option>
                            <option value="Transportation">🚗 Transportation</option>
                            <option value="Utilities">⚡ Utilities</option>
                        </select>
                        {errors.category && <div className="error-message">❌ {errors.category}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="text">📝 Description</label>
                        <input 
                            type="text" 
                            className={`form-control ${errors.description ? 'error' : ''}`}
                            id="text" 
                            name="text"
                            value={description} 
                            placeholder="💭 Enter transaction description..."
                            onChange={(e) => {
                                setDescription(e.target.value);
                                if (errors.description) {
                                    setErrors(prev => ({ ...prev, description: '' }));
                                }
                            }}
                        />
                        {errors.description && <div className="error-message">❌ {errors.description}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="amount">💵 Amount</label>
                        <div className="amount-input-container">
                            <span className="currency-symbol">$</span>
                            <input 
                                type="number" 
                                id="amount" 
                                name="amount"
                                className={`form-control amount-input ${errors.amount ? 'error' : ''}`}
                                value={amount} 
                                placeholder="0.00"
                                min="0"
                                step="0.01"
                                onChange={handleAmountChange}
                            />
                        </div>
                        {errors.amount && <div className="error-message">❌ {errors.amount}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">📅 Date</label>
                        <input 
                            type="date" 
                            id="date"
                            name="date"
                            className={`form-control ${errors.date ? 'error' : ''}`}
                            value={date ? new Date(date).toISOString().split('T')[0] : ''}
                            onChange={handleDateChange}
                        />
                        {errors.date && <div className="error-message">❌ {errors.date}</div>}
                    </div>

                    <div>
                        <button 
                            type="submit" 
                            className="submit-button"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <span className="loading-spinner"></span>
                                    Adding Transaction...
                                </>
                            ) : (
                                '✨ Add Transaction'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddTransactions;