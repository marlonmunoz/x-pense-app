import React, { useEffect, useState } from "react";
import axios from "axios";

function Balance({ darkMode, cashOnHand, setCashOnHand, bankAccountBalance, setBankAccountBalance, savings, setSavings, setTotal, formatCurrency, balanceId, setBalanceId, balances, setBalances, editIndex, setEditIndex, editBalance, setEditBalance, balanceError, setBalanceError}) {

  // Enhanced state variables for better UX
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  // Helper functions for better UX
  const showSuccess = (message) => {
    setSuccess(message);
    setBalanceError('');
  };

  const showError = (message) => {
    setBalanceError(message);
    setSuccess('');
  };

  const validateInputs = () => {
    const errors = {};
    
    if (cashOnHand < 0) {
      errors.cashOnHand = 'Cash on hand cannot be negative';
    }
    if (bankAccountBalance < 0) {
      errors.bankAccountBalance = 'Bank account balance cannot be negative';
    }
    if (savings < 0) {
      errors.savings = 'Savings cannot be negative';
    }
    if (cashOnHand === 0 && bankAccountBalance === 0 && savings === 0) {
      errors.general = 'Please enter at least one balance amount';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    console.log('BALANCE COMPONENT');
    console.log('Fetching balances...');
    setLoading(true);
    
    axios.get('http://localhost:5001/balance')
      .then(response => {
        console.log('Response received:', response.data);
        if (Array.isArray(response.data)) {
          const fetchedBalances = response.data.map(balance => ({
            ...balance,
            total: balance.cash_on_hand + balance.bank_account_balance + balance.savings,
            id: balance.id
          }));
          console.log('Fetched balances:', fetchedBalances);
          setBalances(fetchedBalances);
          if (fetchedBalances.length > 0) {
            const firstBalance = fetchedBalances[0];
            setCashOnHand(firstBalance.cash_on_hand);
            setBankAccountBalance(firstBalance.bank_account_balance);
            setSavings(firstBalance.savings);
          }
        } else if (response.data && typeof response.data === 'object') {
          const balance = {
            ...response.data,
            total: response.data.cash_on_hand + response.data.bank_account_balance + response.data.savings
          };
          console.log('Fetched single balance:', balance);
          setBalances([balance]);
          setCashOnHand(balance.cash_on_hand);
          setBankAccountBalance(balance.bank_account_balance);
          setSavings(balance.savings);
        } else {
          console.error('Fetched data is not an array or object:', response.data);
        }
        setBalanceError(null);
      })
      .catch(error => {
        console.error('There was an error fetching the balances!', error);
        showError('Failed to load balance data. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setBalances, setCashOnHand, setBankAccountBalance, setSavings, setBalanceError]);

  // Auto-clear messages after 3-5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  useEffect(() => {
    if (balanceError) {
      const timer = setTimeout(() => setBalanceError(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [balanceError]);

  useEffect(() => {
    setTotal(cashOnHand + bankAccountBalance + savings);
  }, [cashOnHand, bankAccountBalance, savings, setTotal]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    const numValue = Number(value);
    
    // Validate input
    if (numValue < 0) {
      showError('Values cannot be negative');
      return;
    }
    
    setEditBalance({ ...editBalance, [name]: numValue });
  };

  const handleEditSave = async (index) => {
    // Validate edit balance
    if (editBalance.cash_on_hand < 0 || editBalance.bank_account_balance < 0 || editBalance.savings < 0) {
      showError('All values must be non-negative');
      return;
    }

    const updatedBalance = {
      ...editBalance,
      total: editBalance.cash_on_hand + editBalance.bank_account_balance + editBalance.savings
    };
  
    try {
      setLoading(true);
      await axios.put(`http://localhost:5001/balance/${updatedBalance.id}`, updatedBalance);
      
      const updatedBalances = balances.map((balance, i) => (i === index ? updatedBalance : balance));
      setBalances(updatedBalances);
      setEditIndex(null);
      
      showSuccess(`Successfully updated account #${index + 1}!`);
      console.log('Balance updated:', updatedBalance);
    } catch (error) {
      console.error('There was an error updating the balance!', error);
      showError('Failed to update balance. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (index) => {
    if (deleteConfirm === index) {
      const balance = balances[index];
      if (!balance || !balance.id) {
        console.error('Balance or balance.id is undefined');
        showError('Unable to delete: Invalid balance data');
        return;
      }
      
      try {
        setLoading(true);
        await axios.delete(`http://localhost:5001/balance/${balance.id}`);
        const newBalances = balances.filter((_, i) => i !== index);
        setBalances(newBalances);
        showSuccess(`Successfully deleted account #${index + 1}!`);
        setDeleteConfirm(null);
      } catch (error) {
        console.error('Error deleting balance:', error);
        showError('Failed to delete balance. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      setDeleteConfirm(index);
      setTimeout(() => setDeleteConfirm(null), 3000); // Auto-cancel after 3 seconds
    }
  };

  const updateBalance = (id, updatedValues) => {
    axios.put(`http://localhost:5001/balance/${id}`, updatedValues)
    .then(response => {
      console.log('Balance updated:', response.data);
    })
    .catch(error => {
      console.error('There was an error updating your balance!', error);
      setBalanceError('There was an error updating your balance!');
    })
  };

  const resetFields = () => {
    setCashOnHand(0);
    setBankAccountBalance(0);
    setSavings(0);
    setTotal(0);
    setValidationErrors({});
    showSuccess('Fields have been reset!');
  };

  const totalBalance = async () => {
    if (!validateInputs()) {
      return;
    }

    const newTotal = cashOnHand + bankAccountBalance + savings;
    setTotal(newTotal);

    const newBalance = {
      cash_on_hand: cashOnHand,
      bank_account_balance: bankAccountBalance,
      savings: savings,
      total: newTotal
    };

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5001/balance', newBalance);
      console.log('Balance saved:', response.data);
      
      setBalances([...balances, { ...response.data, total: newTotal }]);
      resetFields();
      showSuccess(`Successfully added new balance account! Total: ${formatCurrency(newTotal)}`);
    } catch (error) {
      console.error('There was an error saving your balance!', error);
      showError('Failed to save balance. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="balance-container">
      <style>{`
        .balance-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .balance-section {
          background: ${darkMode ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .balance-section:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
        }

        .balance-title {
          color: white;
          font-size: 1.5em;
          font-weight: 700;
          margin-bottom: 25px;
          text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
          text-align: center;
        }

        .input-row {
          margin-bottom: 25px;
        }

        .balance-input {
          border: 3px solid transparent;
          border-radius: 12px;
          padding: 15px 20px;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.95);
          color: #333;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .balance-input:focus {
          border-color: #28a745;
          box-shadow: 0 0 20px rgba(40, 167, 69, 0.4);
          outline: none;
          transform: scale(1.02);
          background: rgba(255, 255, 255, 1);
        }

        .balance-input.error {
          border-color: #dc3545;
          background: rgba(220, 53, 69, 0.1);
        }

        .input-label {
          color: white;
          font-weight: 600;
          margin-bottom: 10px;
          display: block;
          font-size: 1.1em;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .btn-balance {
          padding: 15px 30px;
          border: none;
          border-radius: 12px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          overflow: hidden;
          margin: 0 10px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .btn-balance:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }

        .btn-balance:hover:before {
          left: 100%;
        }

        .btn-set-balance {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
        }

        .btn-set-balance:hover {
          background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(79, 172, 254, 0.5);
        }

        .btn-reset-balance {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }

        .btn-reset-balance:hover {
          background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(245, 87, 108, 0.5);
        }

        .btn-disabled {
          opacity: 0.6;
          cursor: not-allowed;
          pointer-events: none;
        }

        .alert-success-balance {
          background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
          color: #155724;
          border: 2px solid #c3e6cb;
          border-radius: 12px;
          padding: 15px 25px;
          margin: 15px 0;
          font-weight: 600;
          animation: slideInLeft 0.5s ease-out;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .alert-error-balance {
          background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
          color: #721c24;
          border: 2px solid #f5c6cb;
          border-radius: 12px;
          padding: 15px 25px;
          margin: 15px 0;
          font-weight: 600;
          animation: shake 0.6s ease-out;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .validation-error {
          color: #dc3545;
          font-size: 14px;
          margin-top: 5px;
          font-weight: 500;
          animation: fadeIn 0.3s ease-out;
        }

        .overview-section {
          background: ${darkMode ? 'rgba(33, 37, 41, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .overview-title {
          color: ${darkMode ? '#ffffff' : '#333333'};
          font-size: 1.4em;
          font-weight: 700;
          margin-bottom: 20px;
          text-align: center;
        }

        .balance-table {
          background: transparent;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .balance-table thead th {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: 700;
          padding: 18px 15px;
          border: none;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          font-size: 14px;
        }

        .balance-table tbody tr {
          transition: all 0.3s ease;
          border-bottom: 2px solid rgba(0, 0, 0, 0.05);
        }

        .balance-table tbody tr:hover {
          background: ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)'};
          transform: scale(1.01);
        }

        .balance-table tbody td {
          padding: 18px 15px;
          vertical-align: middle;
          border: none;
          font-weight: 500;
        }

        .account-number {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 15px;
          border-radius: 20px;
          font-weight: 700;
          display: inline-block;
          min-width: 50px;
          text-align: center;
        }

        .currency-amount {
          font-weight: 700;
          font-size: 1.1em;
          color: #28a745;
        }

        .total-amount {
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
          color: white;
          padding: 8px 15px;
          border-radius: 12px;
          font-weight: 700;
          display: inline-block;
        }

        .btn-table {
          padding: 8px 15px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 2px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .btn-edit {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
        }

        .btn-edit:hover {
          background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
        }

        .btn-delete {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
          color: white;
        }

        .btn-delete:hover {
          background: linear-gradient(135deg, #ee5a52 0%, #ff6b6b 100%);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
        }

        .btn-save {
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
          color: white;
        }

        .btn-save:hover {
          background: linear-gradient(135deg, #20c997 0%, #28a745 100%);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(40, 167, 69, 0.4);
        }

        .btn-cancel {
          background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
          color: white;
        }

        .btn-cancel:hover {
          background: linear-gradient(135deg, #495057 0%, #6c757d 100%);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(108, 117, 125, 0.4);
        }

        .confirm-delete {
          background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
          animation: pulse 1s infinite;
        }

        .loading-spinner-balance {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s linear infinite;
          margin-right: 8px;
        }

        .no-balances {
          text-align: center;
          padding: 50px;
          color: #6c757d;
          font-style: italic;
          background: ${darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
          border-radius: 15px;
          margin: 20px 0;
        }

        .edit-input-table {
          border: 2px solid #4facfe;
          border-radius: 6px;
          padding: 8px 12px;
          width: 100%;
          font-weight: 500;
        }

        .edit-input-table:focus {
          outline: none;
          border-color: #28a745;
          box-shadow: 0 0 10px rgba(40, 167, 69, 0.3);
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          .btn-balance {
            width: 100%;
            margin: 5px 0;
          }
          
          .balance-section {
            padding: 20px;
          }
          
          .btn-table {
            padding: 6px 10px;
            font-size: 11px;
          }
        }
      `}</style>
      
      {/* Success/Error Messages */}
      {success && (
        <div className="alert-success-balance">
          <strong>✅ Success!</strong> {success}
        </div>
      )}
      
      {balanceError && (
        <div className="alert-error-balance">
          <strong>❌ Error!</strong> {balanceError}
        </div>
      )}

      {/* Set Balance Section */}
      <div className="balance-section">
        <h5 className="balance-title">💰 Set Your Balance</h5>
        
        <div className="input-row">
          <label htmlFor="cashOnHand" className="input-label">💵 Cash On Hand</label>
          <input 
            type="number" 
            id="cashOnHand"
            name="cashOnHand"
            value={cashOnHand}
            onChange={(e) => {
              const value = Number(e.target.value);
              setCashOnHand(value >= 0 ? value : 0);
              setValidationErrors({...validationErrors, cashOnHand: ''});
            }}
            placeholder="Enter cash amount"
            className={`balance-input ${validationErrors.cashOnHand ? 'error' : ''}`}
            disabled={loading}
          />
          {validationErrors.cashOnHand && (
            <div className="validation-error">{validationErrors.cashOnHand}</div>
          )}
        </div>

        <div className="input-row">
          <label htmlFor="bankAccountBalance" className="input-label">🏦 Bank Account Balance</label>
          <input 
            type="number" 
            id="bankAccountBalance"
            name="bankAccountBalance"
            value={bankAccountBalance}
            onChange={(e) => {
              const value = Number(e.target.value);
              setBankAccountBalance(value >= 0 ? value : 0);
              setValidationErrors({...validationErrors, bankAccountBalance: ''});
            }}
            placeholder="Enter bank account balance"
            className={`balance-input ${validationErrors.bankAccountBalance ? 'error' : ''}`}
            disabled={loading}
          />
          {validationErrors.bankAccountBalance && (
            <div className="validation-error">{validationErrors.bankAccountBalance}</div>
          )}
        </div>

        <div className="input-row">
          <label htmlFor="savings" className="input-label">🐷 Savings</label>
          <input 
            type="number" 
            id="savings"
            name="savings"
            value={savings}
            onChange={(e) => {
              const value = Number(e.target.value);
              setSavings(value >= 0 ? value : 0);
              setValidationErrors({...validationErrors, savings: ''});
            }}
            placeholder="Enter savings amount"
            className={`balance-input ${validationErrors.savings ? 'error' : ''}`}
            disabled={loading}
          />
          {validationErrors.savings && (
            <div className="validation-error">{validationErrors.savings}</div>
          )}
        </div>

        {validationErrors.general && (
          <div className="validation-error" style={{textAlign: 'center', fontSize: '16px'}}>
            {validationErrors.general}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '25px' }}>
          <button 
            className={`btn-balance btn-set-balance ${loading ? 'btn-disabled' : ''}`} 
            onClick={totalBalance}
            disabled={loading}
          >
            {loading ? <span className="loading-spinner-balance"></span> : ''}
            🎯 Set Balance
          </button>
          <button 
            className={`btn-balance btn-reset-balance ${loading ? 'btn-disabled' : ''}`} 
            onClick={resetFields}
            disabled={loading}
          >
            🔄 Reset Fields
          </button>
        </div>
      </div>
      {/* Account Overview Section */}
      <div className="overview-section">
        <h5 className="overview-title">📊 Account Overview</h5>

        {loading && balances.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <span className="loading-spinner-balance" style={{ width: '40px', height: '40px' }}></span>
            <p style={{ marginTop: '15px', color: '#6c757d' }}>Loading your account data...</p>
          </div>
        ) : (
          <div className="balance-table">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>🔢 ACC#</th>
                  <th>💵 Cash on Hand</th>
                  <th>🏦 Bank Balance</th>
                  <th>🐷 Savings</th>
                  <th>💰 Total</th>
                  <th>⚙️ Actions</th>
                </tr>
              </thead>
              <tbody>
                {balances.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="no-balances">
                      <div>
                        <h4>📋 No Balance Records Yet</h4>
                        <p>Set your first balance using the form above!</p>
                        <small>💡 Tip: Track your cash, bank account, and savings separately</small>
                      </div>
                    </td>
                  </tr>
                ) : (
                  balances.map((balance, index) => (
                    <tr key={index}>
                      {editIndex === index ? (
                        <>
                          <td className="d-none d-md-table-cell" data-label="ACC#">
                            <span className="account-number">{index + 1}</span>
                          </td>
                          <td data-label="Cash on Hand">
                            <input 
                              type="number" 
                              name="cash_on_hand" 
                              value={editBalance.cash_on_hand} 
                              onChange={handleEditChange} 
                              className="edit-input-table"
                              min="0"
                            />
                          </td>
                          <td data-label="Bank Acc Balance">
                            <input 
                              type="number" 
                              name="bank_account_balance" 
                              value={editBalance.bank_account_balance} 
                              onChange={handleEditChange} 
                              className="edit-input-table"
                              min="0"
                            />
                          </td>
                          <td data-label="Savings">
                            <input 
                              type="number" 
                              name="savings" 
                              value={editBalance.savings} 
                              onChange={handleEditChange} 
                              className="edit-input-table"
                              min="0"
                            />
                          </td>
                          <td className="d-none d-md-table-cell">
                            <span className="total-amount">
                              {formatCurrency(editBalance.cash_on_hand + editBalance.bank_account_balance + editBalance.savings)}
                            </span>
                          </td>
                          <td data-label="Actions">
                            <button 
                              onClick={() => handleEditSave(index)} 
                              className={`btn-table btn-save ${loading ? 'btn-disabled' : ''}`}
                              disabled={loading}
                            >
                              {loading ? <span className="loading-spinner-balance"></span> : ''}
                              💾 Save
                            </button>
                            <button 
                              onClick={() => {
                                setEditIndex(null);
                                showSuccess('Edit cancelled');
                              }} 
                              className="btn-table btn-cancel"
                            >
                              ❌ Cancel
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="d-none d-md-table-cell" data-label="ACC#">
                            <span className="account-number">{index + 1}</span>
                          </td>
                          <td data-label="Cash on Hand">
                            <span className="currency-amount">{formatCurrency(balance.cash_on_hand)}</span>
                          </td>
                          <td data-label="Bank Acc Balance">
                            <span className="currency-amount">{formatCurrency(balance.bank_account_balance)}</span>
                          </td>
                          <td data-label="Savings">
                            <span className="currency-amount">{formatCurrency(balance.savings)}</span>
                          </td>
                          <td className="d-none d-md-table-cell">
                            <span className="total-amount">
                              {formatCurrency(balance.total !== undefined ? balance.total : 0)}
                            </span>
                          </td>
                          <td data-label="Actions">
                            <button 
                              onClick={() => { 
                                setEditIndex(index); 
                                setEditBalance(balance); 
                              }} 
                              className="btn-table btn-edit"
                            >
                              ✏️ Edit
                            </button>
                            <button 
                              onClick={() => handleDelete(index)} 
                              className={`btn-table ${deleteConfirm === index ? 'confirm-delete' : 'btn-delete'}`}
                            >
                              {deleteConfirm === index ? '⚠️ Confirm?' : '🗑️ Delete'}
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Balance;