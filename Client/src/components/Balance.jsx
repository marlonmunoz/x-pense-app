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
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .balance-header {
          text-align: center;
          margin-bottom: 30px;
          padding: 30px;
          border-radius: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .balance-header h5 {
          font-size: 1.8rem;
          margin: 0 0 10px 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .balance-subtitle {
          font-size: 1.1rem;
          opacity: 0.9;
          margin: 0;
        }

        .balance-section {
          background: ${darkMode ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'};
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${darkMode ? '2px solid #4a5568' : '2px solid #e2e8f0'};
          transition: all 0.3s ease;
        }

        .balance-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .balance-title {
          color: ${darkMode ? '#e2e8f0' : '#2d3748'};
          font-size: 1.2em;
          font-weight: 700;
          margin-bottom: 30px;
          text-align: center;
        }

        .input-row {
          margin-bottom: 25px;
        }

        .input-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 1.1rem;
          color: ${darkMode ? '#e2e8f0' : '#2d3748'};
          transition: color 0.3s ease;
        }

        .balance-input {
          width: 100%;
          padding: 15px 20px;
          border: 2px solid ${darkMode ? '#4a5568' : '#e2e8f0'};
          border-radius: 12px;
          font-size: 1rem;
          background: ${darkMode ? '#2d3748' : '#ffffff'};
          color: ${darkMode ? '#e2e8f0' : '#2d3748'};
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .balance-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
          transform: translateY(-2px);
        }

        .balance-input.error {
          border-color: #e53e3e;
          box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.3);
        }

        .validation-error {
          color: #e53e3e;
          font-size: 0.875rem;
          margin-top: 5px;
          display: flex;
          align-items: center;
          animation: fadeIn 0.3s ease;
        }

        .btn-balance {
          padding: 12px 20px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        .btn-set-balance {
          background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
        }

        .btn-set-balance:hover:not(.btn-disabled) {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(56, 161, 105, 0.6);
        }

        .btn-reset-balance {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
        }

        .btn-reset-balance:hover:not(.btn-disabled) {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(245, 158, 11, 0.6);
        }

        .btn-disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .alert-success-balance {
          background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
          color: white;
          padding: 15px 20px;
          border-radius: 12px;
          margin-bottom: 20px;
          font-weight: 600;
          text-align: center;
          box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
          animation: slideIn 0.5s ease;
        }

        .alert-error-balance {
          background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
          color: white;
          padding: 15px 20px;
          border-radius: 12px;
          margin-bottom: 20px;
          font-weight: 600;
          text-align: center;
          box-shadow: 0 4px 15px rgba(245, 101, 101, 0.4);
          animation: slideIn 0.5s ease;
        }

        .overview-section {
          background: ${darkMode ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'};
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${darkMode ? '2px solid #4a5568' : '2px solid #e2e8f0'};
          transition: all 0.3s ease;
        }

        .overview-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .overview-title {
          color: ${darkMode ? '#e2e8f0' : '#2d3748'};
          font-size: 1.2em;
          font-weight: 700;
          margin-bottom: 25px;
          text-align: center;
        }

        .balance-table {
          background: ${darkMode ? '#2d3748' : '#ffffff'};
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: ${darkMode ? '2px solid #4a5568' : '2px solid #e2e8f0'};
        }

        .balance-table thead th {
          background: ${darkMode ? '#4a5568' : '#667eea'};
          color: white;
          font-weight: 700;
          padding: 18px 15px;
          border: none;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          font-size: 0.9rem;
          border-bottom: 3px solid ${darkMode ? '#2d3748' : '#5a67d8'};
        }

        .balance-table tbody tr {
          transition: all 0.3s ease;
          border-bottom: 1px solid ${darkMode ? '#4a5568' : '#e2e8f0'};
        }

        .balance-table tbody tr:hover {
          background: ${darkMode ? '#4a5568' : '#f7fafc'};
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .balance-table tbody td {
          padding: 18px 15px;
          vertical-align: middle;
          border: none;
          color: ${darkMode ? '#e2e8f0' : '#2d3748'};
          transition: all 0.3s ease;
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
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
        }

        .currency-amount {
          font-weight: 700;
          font-size: 1.1em;
          color: ${darkMode ? '#68d391' : '#38a169'};
        }

        .total-amount {
          background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
          color: white;
          padding: 8px 15px;
          border-radius: 12px;
          font-weight: 700;
          display: inline-block;
          box-shadow: 0 2px 8px rgba(56, 161, 105, 0.4);
        }

        .btn-table {
          padding: 8px 12px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 2px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
          min-width: auto;
        }

        .btn-edit {
          background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
          color: white;
          box-shadow: 0 2px 8px rgba(66, 153, 225, 0.4);
        }

        .btn-edit:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(66, 153, 225, 0.6);
        }

        .btn-delete {
          background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
          color: white;
          box-shadow: 0 2px 8px rgba(245, 101, 101, 0.4);
        }

        .btn-delete:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(245, 101, 101, 0.6);
        }

        .btn-save {
          background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
          color: white;
          box-shadow: 0 2px 8px rgba(56, 161, 105, 0.4);
        }

        .btn-save:hover:not(.btn-disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(56, 161, 105, 0.6);
        }

        .btn-cancel {
          background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
          color: white;
          box-shadow: 0 2px 8px rgba(160, 174, 192, 0.4);
        }

        .btn-cancel:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(160, 174, 192, 0.6);
        }

        .confirm-delete {
          background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
          animation: pulse 1s infinite;
          border: 2px solid #e53e3e;
        }

        .loading-spinner-balance {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 8px;
        }

        .no-balances {
          text-align: center;
          padding: 60px 20px;
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          color: white;
          border-radius: 15px;
          font-size: 1.2rem;
          font-weight: 600;
          box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
        }

        .edit-input-table {
          width: 100%;
          padding: 8px 12px;
          border: 2px solid #667eea;
          border-radius: 6px;
          background: ${darkMode ? '#2d3748' : '#ffffff'};
          color: ${darkMode ? '#e2e8f0' : '#2d3748'};
          font-size: 0.9rem;
        }

        .edit-input-table:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
        }

        .loading-container {
          text-align: center;
          padding: 40px;
          color: ${darkMode ? '#e2e8f0' : '#2d3748'};
        }

        .large-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid ${darkMode ? '#4a5568' : '#e2e8f0'};
          border-top: 4px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 15px;
        }

        @keyframes slideIn {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
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
            padding: 10px 16px;
            font-size: 0.9rem;
            margin: 5px 4px;
          }
          
          .balance-section, .overview-section {
            padding: 20px;
          }
          
          .btn-table {
            padding: 4px 8px;
            font-size: 0.7rem;
            gap: 2px;
          }
        }
      `}</style>
      
      {/* Balance Header */}
      <div className="balance-header">
        <h5>💰 Balance Management</h5>
        <p className="balance-subtitle">Track your financial accounts in one place</p>
      </div>

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
        <h5 className="balance-title">� Add New Balance Account</h5>
        
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

        <div style={{ textAlign: 'center', marginTop: '25px', display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'nowrap', alignItems: 'center' }}>
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
          <div className="loading-container">
            <div className="large-spinner"></div>
            <p>Loading your account data...</p>
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
                        <h4>🎯 Start Your Financial Journey!</h4>
                        <p>Create your first balance account above to begin tracking your finances</p>
                        <small>💡 Pro tip: Separate your money into different categories for better organization</small>
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
                            <div style={{ display: 'flex', gap: '6px', flexWrap: 'nowrap', alignItems: 'center' }}>
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
                            </div>
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
                            <div style={{ display: 'flex', gap: '6px', flexWrap: 'nowrap', alignItems: 'center' }}>
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
                            </div>
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