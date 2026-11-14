import { api } from "../config/api";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom'
import { aiCategorizer, suggestCategory, getCategoryIcon, TRANSACTION_CATEGORIES } from '../services/aiCategorization';

// X-PENSE Tab
function AddTransactions( {amount, setAmount, category, setCategory, date, setDate, description, setDescription, darkMode } ) {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errors, setErrors] = useState({});
    const [shake, setShake] = useState(false);
    
    // AI Categorization states
    const [aiSuggestion, setAiSuggestion] = useState(null);
    const [suggestionDismissed, setSuggestionDismissed] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    // The newest amount, readable inside the effect below without making the effect re-run
    // (and ask OpenAI again) on every keystroke in the amount box.
    const amountRef = useRef(amount);
    amountRef.current = amount;
    // Answers we already got from OpenAI, so retyping the same description costs nothing.
    const suggestionCache = useRef(new Map());

    // Ask for a suggestion when the description changes (and only then).
    useEffect(() => {
        const text = description.trim();
        if (text.length <= 2) {
            setAiSuggestion(null);
            setIsAnalyzing(false);
            return undefined;
        }

        setIsAnalyzing(true);
        let outdated = false;

        // Wait until the user pauses typing, so we ask once per pause instead of once per key.
        const timeout = setTimeout(async () => {
            const key = text.toLowerCase();
            let suggestion = suggestionCache.current.get(key);
            if (!suggestion) {
                suggestion = await suggestCategory(text, amountRef.current);
                if (suggestion.source === 'openai') suggestionCache.current.set(key, suggestion);
            }
            // The description changed while we were waiting: this answer is for old text.
            if (outdated) return;
            setAiSuggestion(suggestion);
            setSuggestionDismissed(false);
            setIsAnalyzing(false);
        }, 800);

        return () => {
            outdated = true;
            clearTimeout(timeout);
        };
    }, [description]);

    // The dropdown offers the standard categories plus any this person has used (the server knows both).
    const [categoryNames, setCategoryNames] = useState(TRANSACTION_CATEGORIES);
    useEffect(() => {
        let outdated = false;
        api.get('/categories')
            .then(({ data }) => {
                if (!outdated && Array.isArray(data.categories)) setCategoryNames(data.categories);
            })
            .catch(() => {}); // keep the standard list if the server can't be reached
        return () => { outdated = true; };
    }, []);
    // A category chosen through "Use This" may be brand new, so make sure the dropdown can show it.
    const categoryOptions = category && !categoryNames.includes(category)
        ? [...categoryNames, category]
        : categoryNames;

    // Whether to show the banner is worked out from the current values on every render.
    // "Other" is not a useful suggestion, and rule-based guesses need decent confidence.
    const showAiSuggestion =
        aiSuggestion !== null &&
        !suggestionDismissed &&
        aiSuggestion.category !== category &&
        aiSuggestion.category !== 'Other' &&
        (aiSuggestion.source === 'openai' || aiSuggestion.confidence > 60);

    // Accept AI suggestion (the banner hides itself because the category now matches)
    const acceptAiSuggestion = () => {
        if (aiSuggestion) {
            setCategory(aiSuggestion.category);
        }
    };

    // Dismiss AI suggestion
    const dismissAiSuggestion = () => {
        setSuggestionDismissed(true);
    };

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
            const response = await api.post('/transactions', newTransaction);
            console.log('Transaction added:', response.data);
            
            // Teach the built-in keyword rules when the user overrides one of THEIR guesses.
            // (OpenAI's suggestions are not learned from: the rules are only the backup.)
            // The transaction is already saved at this point, so a problem here must never
            // be reported as a failed save (that would lead to duplicate entries on retry).
            try {
                if (aiSuggestion && aiSuggestion.source === 'rules' && aiSuggestion.category !== category && aiSuggestion.confidence > 50) {
                    aiCategorizer.learnFromCorrection(description, aiSuggestion.category, category);
                    console.log(`AI learned: "${description}" should be categorized as "${category}" not "${aiSuggestion.category}"`);
                }
            } catch (learnError) {
                console.warn('Could not record the category correction:', learnError);
            }
            
            // Show success message
            setShowSuccess(true);
            
            // Reset form fields
            setCategory('');
            setDate('');
            setDescription('');
            setAmount(0);
            setAiSuggestion(null);
            
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

                select.form-control {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    text-align: left;
                    text-align-last: left;
                    line-height: 1.5;
                    vertical-align: middle;
                    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${darkMode ? '%23ffffff' : '%23000000'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
                    background-repeat: no-repeat;
                    background-position: right 15px center;
                    background-size: 18px;
                    padding-right: 50px !important;
                    padding-left: 15px !important;
                    padding-top: 0 !important;
                    padding-bottom: 0 !important;
                    height: 54px !important;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                }

                select.form-control option {
                    color: ${darkMode ? '#ffffff' : '#000000'} !important;
                    background: ${darkMode ? '#2d3748' : '#ffffff'} !important;
                    padding: 12px;
                    font-size: 1rem;
                    font-weight: 500;
                    line-height: 1.5;
                }

                /* Style for placeholder option */
                select.form-control option[value=""] {
                    color: ${darkMode ? '#a0aec0' : '#718096'} !important;
                    font-style: italic;
                }

                select.form-control::-ms-expand {
                    display: none;
                }

                .form-control:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
                    transform: translateY(-2px);
                }

                /* Date input styling for dark mode */
                input[type="date"].form-control {
                    color-scheme: ${darkMode ? 'dark' : 'light'};
                    position: relative;
                    cursor: pointer;
                }

                input[type="date"].form-control::-webkit-calendar-picker-indicator {
                    cursor: pointer;
                    ${darkMode ? `
                        filter: invert(1);
                        opacity: 0.8;
                    ` : ''}
                }

                /* For Firefox */
                input[type="date"].form-control::-moz-calendar-picker-indicator {
                    cursor: pointer;
                    ${darkMode ? `
                        filter: invert(1);
                        opacity: 0.8;
                    ` : ''}
                }

                /* Additional styling for better visibility in dark mode */
                ${darkMode ? `
                input[type="date"].form-control::-webkit-inner-spin-button,
                input[type="date"].form-control::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                
                input[type="date"].form-control::-webkit-datetime-edit {
                    color: #e2e8f0 !important;
                }
                
                input[type="date"].form-control::-webkit-datetime-edit-fields-wrapper {
                    background: transparent !important;
                }
                
                input[type="date"].form-control::-webkit-datetime-edit-text {
                    color: #e2e8f0 !important;
                }
                
                input[type="date"].form-control::-webkit-datetime-edit-year-field,
                input[type="date"].form-control::-webkit-datetime-edit-month-field,
                input[type="date"].form-control::-webkit-datetime-edit-day-field {
                    color: #e2e8f0 !important;
                }
                ` : ''}

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

                /* AI Suggestion Styles */
                .ai-suggestion-banner {
                    margin-top: 10px;
                    border: 2px solid #4299e1;
                    border-radius: 12px;
                    background: ${darkMode ? 
                        'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)' : 
                        'linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%)'
                    };
                    padding: 15px;
                    animation: slideIn 0.3s ease;
                    box-shadow: 0 4px 15px rgba(66, 153, 225, 0.3);
                }

                .ai-suggestion-content {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .ai-icon {
                    font-size: 1.5rem;
                    background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    flex-shrink: 0;
                }

                .ai-text {
                    flex-grow: 1;
                }

                .ai-main-text {
                    font-weight: 600;
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                    margin-bottom: 4px;
                }

                .ai-confidence {
                    font-size: 0.85rem;
                    color: ${darkMode ? '#a0aec0' : '#718096'};
                }

                .ai-actions {
                    display: flex;
                    gap: 8px;
                    flex-shrink: 0;
                }

                .btn-ai-accept,
                .btn-ai-dismiss {
                    padding: 6px 12px;
                    border: none;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .btn-ai-accept {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                }

                .btn-ai-accept:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(56, 161, 105, 0.4);
                }

                .btn-ai-dismiss {
                    background: ${darkMode ? '#4a5568' : '#e2e8f0'};
                    color: ${darkMode ? '#e2e8f0' : '#4a5568'};
                }

                .btn-ai-dismiss:hover {
                    background: ${darkMode ? '#718096' : '#cbd5e0'};
                }

                .ai-analyzing {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 8px;
                    padding: 8px 12px;
                    background: ${darkMode ? '#4a5568' : '#f7fafc'};
                    border-radius: 8px;
                    font-size: 0.9rem;
                    color: ${darkMode ? '#a0aec0' : '#718096'};
                }

                .spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid ${darkMode ? '#718096' : '#cbd5e0'};
                    border-top: 2px solid #4299e1;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes slideIn {
                    from { transform: translateY(-10px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
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
                            style={{
                                color: category === "" ? (darkMode ? '#a0aec0' : '#718096') : (darkMode ? '#ffffff' : '#000000'),
                                backgroundColor: darkMode ? '#2d3748' : '#ffffff',
                                fontSize: '1rem',
                                fontWeight: category === "" ? '400' : '600',
                                fontStyle: category === "" ? 'italic' : 'normal'
                            }}
                            onChange={(e) => {
                                const newCategory = e.target.value;
                                setCategory(newCategory);
                                
                                // The user chose a different category by hand: stop showing the suggestion.
                                if (aiSuggestion && newCategory && newCategory !== aiSuggestion.category) {
                                    setSuggestionDismissed(true);
                                }
                                
                                if (errors.category) {
                                    setErrors(prev => ({ ...prev, category: '' }));
                                }
                            }}
                        > 
                            <option value="">🎯 Select A Category</option> 
                            {categoryOptions.map(cat => (
                                <option key={cat} value={cat}>
                                    {getCategoryIcon(cat) + ' ' + cat}
                                </option>
                            ))}
                        </select>
                        {errors.category && <div className="error-message">❌ {errors.category}</div>}
                        
                        {/* AI Suggestion Banner */}
                        {showAiSuggestion && aiSuggestion && (
                            <div className="ai-suggestion-banner">
                                <div className="ai-suggestion-content">
                                    <div className="ai-icon">🤖</div>
                                    <div className="ai-text">
                                        <div className="ai-main-text">
                                            {aiSuggestion.source === 'openai'
                                                ? (aiSuggestion.isNew ? 'AI suggests a new category' : 'AI suggests')
                                                : 'Suggestion'}: <strong>{aiSuggestion.category}</strong>
                                        </div>
                                        <div className="ai-confidence">
                                            {aiSuggestion.source === 'openai'
                                                ? (aiSuggestion.isNew ? 'Not in your list yet. It will be added if you use it.' : 'Suggested by OpenAI')
                                                : `Based on keywords (${aiSuggestion.confidence}% sure)`}
                                        </div>
                                    </div>
                                    <div className="ai-actions">
                                        <button 
                                            type="button"
                                            className="btn-ai-accept"
                                            onClick={acceptAiSuggestion}
                                        >
                                            ✅ Use This
                                        </button>
                                        <button 
                                            type="button"
                                            className="btn-ai-dismiss"
                                            onClick={dismissAiSuggestion}
                                        >
                                            ❌ Dismiss
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {/* AI Analysis Indicator */}
                        {isAnalyzing && (
                            <div className="ai-analyzing">
                                <div className="spinner"></div>
                                <span>🤖 AI is analyzing...</span>
                            </div>
                        )}
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