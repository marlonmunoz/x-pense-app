import React, { useEffect, useState } from "react";
import axios from "axios";
import { FinancialCalculator } from "../services/financialCalculator";
import SmartUpdateService from "../services/smartUpdateService";
import BulkUpdatePanel from "./BulkUpdatePanel";
import { API_ENDPOINTS, buildApiUrl } from "../config/api";

function Balance({ darkMode, cashOnHand, setCashOnHand, bankAccountBalance, setBankAccountBalance, savings, setSavings, setTotal, formatCurrency, balanceId, setBalanceId, balances, setBalances, editIndex, setEditIndex, editBalance, setEditBalance, balanceError, setBalanceError}) {

  // Enhanced state variables for better UX and financial logic
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [financialMetrics, setFinancialMetrics] = useState(null);
  const [showInsights, setShowInsights] = useState(false);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [showAllocation, setShowAllocation] = useState(false);
  const [allocationSuggestion, setAllocationSuggestion] = useState(null);
  
  // Smart update features
  const [showBulkUpdate, setShowBulkUpdate] = useState(false);
  const [smartValidation, setSmartValidation] = useState(null);
  const [updateSuggestions, setUpdateSuggestions] = useState([]);

  // Local form states (separate from parent Dashboard states)
  const [formCashOnHand, setFormCashOnHand] = useState(0);
  const [formBankAccountBalance, setFormBankAccountBalance] = useState(0);
  const [formSavings, setFormSavings] = useState(0);
  const [formTotal, setFormTotal] = useState(0);

  // Initialize services with error handling
  const financialCalculator = new FinancialCalculator();
  const [smartUpdateService, setSmartUpdateService] = useState(null);
  const [servicesReady, setServicesReady] = useState(false);
  
  // Initialize smart update service safely
  useEffect(() => {
    let service = null;
    try {
      service = new SmartUpdateService();
      setSmartUpdateService(service);
      console.log('SmartUpdateService initialized successfully');
    } catch (error) {
      console.warn('SmartUpdateService failed to initialize:', error);
      setSmartUpdateService(null);
    } finally {
      setServicesReady(true);
    }
  }, []);

  // Reset form fields when component mounts (fixes persistence issue)
  useEffect(() => {
    // Always reset form fields when Balance component mounts to ensure clean state
    setFormCashOnHand(0);
    setFormBankAccountBalance(0);
    setFormSavings(0);
    setFormTotal(0);
    setValidationErrors({});
    setSmartValidation(null);
    setAllocationSuggestion(null);
    console.log('Balance component mounted - fields reset');
  }, []); // Empty dependency array means this runs only on mount

  // Calculate form total when form values change
  useEffect(() => {
    setFormTotal(formCashOnHand + formBankAccountBalance + formSavings);
  }, [formCashOnHand, formBankAccountBalance, formSavings]);

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
    const errors = financialCalculator.validateBalanceInputs(formCashOnHand, formBankAccountBalance, formSavings);
    setValidationErrors(errors);
    return Object.keys(errors).filter(key => key !== 'warning').length === 0;
  };

  // Generate update suggestions when balances change
  useEffect(() => {
    if (balances.length > 0 && smartUpdateService && servicesReady) {
      try {
        const suggestions = smartUpdateService.generateUpdateSuggestions('balance', balances);
        setUpdateSuggestions(suggestions);
      } catch (error) {
        console.warn('Failed to generate update suggestions:', error);
        setUpdateSuggestions([]);
      }
    }
  }, [balances, smartUpdateService, servicesReady]);

  // Calculate financial metrics when balances change
  useEffect(() => {
    if (balances.length > 0) {
      const metrics = financialCalculator.calculateFinancialMetrics(
        balances, 
        monthlyIncome, 
        monthlyExpenses
      );
      setFinancialMetrics(metrics);
    }
  }, [balances, monthlyIncome, monthlyExpenses]);

  // Generate allocation suggestion when amount changes
  useEffect(() => {
    const totalAmount = cashOnHand + bankAccountBalance + savings;
    if (totalAmount > 0) {
      const suggestion = financialCalculator.suggestOptimalAllocation(totalAmount);
      setAllocationSuggestion(suggestion);
    } else {
      setAllocationSuggestion(null);
    }
  }, [cashOnHand, bankAccountBalance, savings]);

  useEffect(() => {
    console.log('BALANCE COMPONENT');
    console.log('Fetching balances...');
    setLoading(true);
    
    axios.get(API_ENDPOINTS.balance)
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
          
          // Update parent App state with the sum of all balances for Dashboard
          if (fetchedBalances.length > 0) {
            const totalCash = fetchedBalances.reduce((sum, balance) => sum + balance.cash_on_hand, 0);
            const totalBank = fetchedBalances.reduce((sum, balance) => sum + balance.bank_account_balance, 0);
            const totalSavings = fetchedBalances.reduce((sum, balance) => sum + balance.savings, 0);
            
            setCashOnHand(totalCash);
            setBankAccountBalance(totalBank);
            setSavings(totalSavings);
          }
        } else if (response.data && typeof response.data === 'object') {
          const balance = {
            ...response.data,
            total: response.data.cash_on_hand + response.data.bank_account_balance + response.data.savings
          };
          console.log('Fetched single balance:', balance);
          setBalances([balance]);
          
          // Update parent App state with the single balance values for Dashboard
          setCashOnHand(balance.cash_on_hand);
          setBankAccountBalance(balance.bank_account_balance);
          setSavings(balance.savings);
        } else {
          console.error('Fetched data is not an array or object:', response.data);
          // Reset parent state if no data
          setCashOnHand(0);
          setBankAccountBalance(0);
          setSavings(0);
        }
        setBalanceError(null);
      })
      .catch(error => {
        console.error('There was an error fetching the balances!', error);
        showError('Failed to load balance data. Please try again.');
        // Reset parent state on error
        setCashOnHand(0);
        setBankAccountBalance(0);
        setSavings(0);
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
    
    // Validate input with smart update service
    if (numValue < 0) {
      showError('Values cannot be negative');
      return;
    }
    
    setEditBalance({ ...editBalance, [name]: numValue });
    
    // Get smart validation suggestions (only if service is available)
    if (smartUpdateService) {
      try {
        const validation = smartUpdateService.validateUpdate('balance', {
          ...editBalance,
          [name]: numValue
        }, editBalance);
        setSmartValidation(validation);
      } catch (error) {
        console.warn('Smart validation failed:', error);
        setSmartValidation(null);
      }
    }
  };

  const handleEditSave = async (index) => {
    // Smart validation before save (only if service is available)
    if (smartUpdateService) {
      try {
        const validation = smartUpdateService.validateUpdate('balance', editBalance, balances[index]);
        
        if (!validation.isValid) {
          showError(`Validation failed: ${validation.errors.join(', ')}`);
          return;
        }

        // Show warnings if any
        if (validation.warnings.length > 0) {
          const confirmWarning = window.confirm(
            `Warning: ${validation.warnings.join(' ')} Do you want to continue?`
          );
          if (!confirmWarning) return;
        }
      } catch (error) {
        console.warn('Smart validation failed:', error);
      }
    }

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
      await axios.put(buildApiUrl(`/balance/${updatedBalance.id}`), updatedBalance);
      
      const updatedBalances = balances.map((balance, i) => (i === index ? updatedBalance : balance));
      setBalances(updatedBalances);
      setEditIndex(null);
      
      // Update parent App state with the sum of all balances for Dashboard
      const totalCash = updatedBalances.reduce((sum, balance) => sum + balance.cash_on_hand, 0);
      const totalBank = updatedBalances.reduce((sum, balance) => sum + balance.bank_account_balance, 0);
      const totalSavings = updatedBalances.reduce((sum, balance) => sum + balance.savings, 0);
      
      setCashOnHand(totalCash);
      setBankAccountBalance(totalBank);
      setSavings(totalSavings);
      
      // Track the update (only if service is available)
      if (smartUpdateService) {
        try {
          smartUpdateService.trackUpdate('balance', updatedBalance, { success: true });
        } catch (error) {
          console.warn('Failed to track update:', error);
        }
      }
      
      showSuccess(`Successfully updated account #${index + 1}!`);
      console.log('Balance updated:', updatedBalance);
    } catch (error) {
      console.error('There was an error updating the balance!', error);
      
      // Track the error (only if service is available)
      if (smartUpdateService) {
        try {
          smartUpdateService.trackUpdate('balance', updatedBalance, { success: false, error: error.message });
        } catch (trackError) {
          console.warn('Failed to track update error:', trackError);
        }
      }
      
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
        await axios.delete(buildApiUrl(`/balance/${balance.id}`));
        const newBalances = balances.filter((_, i) => i !== index);
        setBalances(newBalances);
        
        // Update parent App state with the sum of remaining balances for Dashboard
        if (newBalances.length > 0) {
          const totalCash = newBalances.reduce((sum, balance) => sum + balance.cash_on_hand, 0);
          const totalBank = newBalances.reduce((sum, balance) => sum + balance.bank_account_balance, 0);
          const totalSavings = newBalances.reduce((sum, balance) => sum + balance.savings, 0);
          
          setCashOnHand(totalCash);
          setBankAccountBalance(totalBank);
          setSavings(totalSavings);
        } else {
          // No balances left, reset to 0
          setCashOnHand(0);
          setBankAccountBalance(0);
          setSavings(0);
        }
        
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

  // Bulk update handler
  const handleBulkUpdate = async (updates) => {
    try {
      setLoading(true);
      
      // Process all updates
      const updatePromises = updates.map(update => 
        axios.put(buildApiUrl(`/balance/${update.id}`), update.data)
      );
      
      await Promise.all(updatePromises);
      
      // Update local state
      const updatedBalances = balances.map(balance => {
        const update = updates.find(u => u.id === balance.id);
        return update ? { ...balance, ...update.data } : balance;
      });
      
      setBalances(updatedBalances);
      setShowBulkUpdate(false);
      
      // Track bulk update (only if service is available)
      if (smartUpdateService) {
        try {
          smartUpdateService.trackUpdate('bulk_balance', { count: updates.length }, { success: true });
        } catch (error) {
          console.warn('Failed to track bulk update:', error);
        }
      }
      
      showSuccess(`Successfully updated ${updates.length} accounts!`);
    } catch (error) {
      console.error('Bulk update failed:', error);
      
      // Track bulk update error (only if service is available)
      if (smartUpdateService) {
        try {
          smartUpdateService.trackUpdate('bulk_balance', { count: updates.length }, { success: false, error: error.message });
        } catch (trackError) {
          console.warn('Failed to track bulk update error:', trackError);
        }
      }
      
      showError('Bulk update failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetFields = () => {
    setFormCashOnHand(0);
    setFormBankAccountBalance(0);
    setFormSavings(0);
    setFormTotal(0);
    setValidationErrors({});
    setSmartValidation(null);
    setAllocationSuggestion(null);
    showSuccess('Fields have been reset!');
  };

  const totalBalance = async () => {
    if (!validateInputs()) {
      return;
    }

    const newTotal = formCashOnHand + formBankAccountBalance + formSavings;
    setFormTotal(newTotal);

    const newBalance = {
      cash_on_hand: formCashOnHand,
      bank_account_balance: formBankAccountBalance,
      savings: formSavings,
      total: newTotal,
      created_at: new Date().toISOString()
    };

    try {
      setLoading(true);
      const response = await axios.post(API_ENDPOINTS.balance, newBalance);
      console.log('Balance saved:', response.data);
      
      const updatedBalances = [...balances, { ...response.data, total: newTotal }];
      setBalances(updatedBalances);
      
      // Update parent App state with the sum of all balances for Dashboard
      const totalCash = updatedBalances.reduce((sum, balance) => sum + balance.cash_on_hand, 0);
      const totalBank = updatedBalances.reduce((sum, balance) => sum + balance.bank_account_balance, 0);
      const totalSavings = updatedBalances.reduce((sum, balance) => sum + balance.savings, 0);
      
      setCashOnHand(totalCash);
      setBankAccountBalance(totalBank);
      setSavings(totalSavings);
      
      // Reset form fields after successful save
      setFormCashOnHand(0);
      setFormBankAccountBalance(0);
      setFormSavings(0);
      setFormTotal(0);
      
      setValidationErrors({});
      setSmartValidation(null);
      setAllocationSuggestion(null);
      
      showSuccess(`Successfully added new balance account! Total: ${formatCurrency(newTotal)}`);
    } catch (error) {
      console.error('There was an error saving your balance!', error);
      showError('Failed to save balance. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Apply optimal allocation suggestion
  const applyOptimalAllocation = () => {
    if (!allocationSuggestion) return;
    
    setFormCashOnHand(Math.round(allocationSuggestion.cash));
    setFormBankAccountBalance(Math.round(allocationSuggestion.bank));
    setFormSavings(Math.round(allocationSuggestion.savings));
    showSuccess('Applied optimal allocation suggestion!');
  };

  // Quick balance presets
  const applyQuickPreset = (presetType) => {
    switch(presetType) {
      case 'emergency':
        setFormCashOnHand(500);
        setFormBankAccountBalance(1500);
        setFormSavings(3000);
        showSuccess('Applied emergency fund preset!');
        break;
      case 'student':
        setFormCashOnHand(200);
        setFormBankAccountBalance(800);
        setFormSavings(500);
        showSuccess('Applied student budget preset!');
        break;
      case 'family':
        setFormCashOnHand(1000);
        setFormBankAccountBalance(5000);
        setFormSavings(10000);
        showSuccess('Applied family budget preset!');
        break;
      default:
        break;
    }
  };

  // Bulk account operations
  const consolidateLowBalanceAccounts = () => {
    const lowBalanceAccounts = balances.filter(account => {
      const total = account.cash_on_hand + account.bank_account_balance + account.savings;
      return total < 100;
    });

    if (lowBalanceAccounts.length > 1) {
      const totalCash = lowBalanceAccounts.reduce((sum, acc) => sum + acc.cash_on_hand, 0);
      const totalBank = lowBalanceAccounts.reduce((sum, acc) => sum + acc.bank_account_balance, 0);
      const totalSavings = lowBalanceAccounts.reduce((sum, acc) => sum + acc.savings, 0);
      
      setCashOnHand(totalCash);
      setBankAccountBalance(totalBank);
      setSavings(totalSavings);
      
      showSuccess(`Consolidated ${lowBalanceAccounts.length} accounts. Review and save the combined account.`);
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

        .financial-metrics-section {
          background: ${darkMode ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'};
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${darkMode ? '2px solid #4a5568' : '2px solid #e2e8f0'};
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .metric-card {
          background: ${darkMode ? '#4a5568' : '#ffffff'};
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .metric-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .metric-value {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .metric-label {
          color: ${darkMode ? '#a0aec0' : '#718096'};
          font-size: 0.9rem;
          font-weight: 600;
        }

        .health-score {
          color: #38a169;
        }

        .health-score.warning {
          color: #f59e0b;
        }

        .health-score.critical {
          color: #f56565;
        }

        .allocation-section {
          background: ${darkMode ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'};
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${darkMode ? '2px solid #4a5568' : '2px solid #e2e8f0'};
        }

        .allocation-suggestion {
          background: ${darkMode ? '#4a5568' : '#ffffff'};
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 20px;
          border-left: 4px solid #38a169;
        }

        .preset-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .btn-preset {
          background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-preset:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(66, 153, 225, 0.4);
        }

        .insights-section {
          background: ${darkMode ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'};
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${darkMode ? '2px solid #4a5568' : '2px solid #e2e8f0'};
        }

        .insight-card {
          background: ${darkMode ? '#4a5568' : '#ffffff'};
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 15px;
          border-left: 5px solid;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .insight-card.critical {
          border-left-color: #f56565;
        }

        .insight-card.warning {
          border-left-color: #f59e0b;
        }

        .insight-card.success {
          border-left-color: #38a169;
        }

        .insight-card.opportunity {
          border-left-color: #4299e1;
        }

        .monthly-inputs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
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

          .metrics-grid {
            grid-template-columns: 1fr;
          }

          .monthly-inputs {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .preset-buttons {
            flex-direction: column;
          }
        }
      `}</style>
      
      {/* Balance Header */}
      <div className="balance-header">
        <h5>💰 Balance Management</h5>
        <p className="balance-subtitle">Track your financial accounts in one place</p>
      </div>

      {/* Smart Update Suggestions Section */}
      {updateSuggestions && updateSuggestions.priority && updateSuggestions.optimization && 
       (updateSuggestions.priority.length > 0 || updateSuggestions.optimization.length > 0) && (
        <div className="insights-section">
          <h5 className="balance-title">🤖 Smart Update Recommendations</h5>
          
          {updateSuggestions.priority.length > 0 && (
            <div className="mb-3">
              <h6 style={{color: '#f56565', fontWeight: '700'}}>🔥 High Priority</h6>
              {updateSuggestions.priority.map((suggestion, index) => (
                <div key={index} className="insight-card critical">
                  <strong>{suggestion.message}</strong>
                  <br />
                  <small>{suggestion.action}</small>
                </div>
              ))}
            </div>
          )}

          {updateSuggestions.optimization.length > 0 && (
            <div className="mb-3">
              <h6 style={{color: '#4299e1', fontWeight: '700'}}>⚡ Optimization Opportunities</h6>
              {updateSuggestions.optimization.map((suggestion, index) => (
                <div key={index} className="insight-card opportunity">
                  <strong>{suggestion.message}</strong>
                  <br />
                  <small>{suggestion.action}</small>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Bulk Update Panel */}
      {showBulkUpdate && (
        <BulkUpdatePanel
          darkMode={darkMode}
          updateType="balance"
          items={balances}
          onBulkUpdate={handleBulkUpdate}
          onClose={() => setShowBulkUpdate(false)}
        />
      )}

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
            value={formCashOnHand || ''}
            onChange={(e) => {
              const value = e.target.value === '' ? 0 : Number(e.target.value);
              setFormCashOnHand(value >= 0 ? value : 0);
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
            value={formBankAccountBalance || ''}
            onChange={(e) => {
              const value = e.target.value === '' ? 0 : Number(e.target.value);
              setFormBankAccountBalance(value >= 0 ? value : 0);
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
            value={formSavings || ''}
            onChange={(e) => {
              const value = e.target.value === '' ? 0 : Number(e.target.value);
              setFormSavings(value >= 0 ? value : 0);
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
          {balances.length > 1 && (
            <button 
              className="btn-balance btn-set-balance"
              onClick={() => setShowBulkUpdate(true)}
              disabled={loading}
              title="Update multiple accounts at once"
            >
              ⚡ Bulk Update
            </button>
          )}
        </div>
      </div>

      {/* Financial Metrics Section */}
      {financialMetrics && (
        <div className="financial-metrics-section">
          <h5 className="balance-title">📈 Financial Health Dashboard</h5>
          
          <div className="monthly-inputs">
            <div>
              <label className="input-label">📊 Monthly Income</label>
              <input
                type="number"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                placeholder="Enter monthly income"
                className="balance-input"
              />
            </div>
            <div>
              <label className="input-label">💸 Monthly Expenses</label>
              <input
                type="number"
                value={monthlyExpenses}
                onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                placeholder="Enter monthly expenses"
                className="balance-input"
              />
            </div>
          </div>

          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value" style={{color: '#38a169'}}>
                {formatCurrency(financialMetrics.totalAssets)}
              </div>
              <div className="metric-label">Total Assets</div>
            </div>
            
            <div className="metric-card">
              <div className={`metric-value health-score ${
                financialMetrics.financialHealthScore >= 80 ? '' : 
                financialMetrics.financialHealthScore >= 60 ? 'warning' : 'critical'
              }`}>
                {financialMetrics.financialHealthScore}/100
              </div>
              <div className="metric-label">Health Score</div>
            </div>
            
            <div className="metric-card">
              <div className="metric-value" style={{color: '#4299e1'}}>
                {financialMetrics.liquidityRatio.toFixed(1)}%
              </div>
              <div className="metric-label">Liquidity Ratio</div>
            </div>
            
            <div className="metric-card">
              <div className="metric-value" style={{color: '#8b5cf6'}}>
                {financialMetrics.emergencyFundStatus.months.toFixed(1)}
              </div>
              <div className="metric-label">Emergency Fund (Months)</div>
            </div>
          </div>

          <div style={{textAlign: 'center'}}>
            <button 
              className="btn-balance btn-set-balance"
              onClick={() => setShowInsights(!showInsights)}
            >
              {showInsights ? '🔼 Hide' : '🔽 Show'} Financial Insights
            </button>
          </div>
        </div>
      )}

      {/* Financial Insights Section */}
      {showInsights && financialMetrics && (
        <div className="insights-section">
          <h5 className="balance-title">💡 Financial Insights & Recommendations</h5>
          
          {financialCalculator.generateFinancialInsights(financialMetrics, balances).map((insight, index) => (
            <div key={index} className={`insight-card ${insight.type}`}>
              <h6 style={{fontWeight: '700', marginBottom: '10px'}}>
                {insight.title}
              </h6>
              <p style={{margin: 0}}>{insight.message}</p>
            </div>
          ))}
          
          {financialCalculator.generateFinancialInsights(financialMetrics, balances).length === 0 && (
            <div className="insight-card success">
              <h6 style={{fontWeight: '700', marginBottom: '10px'}}>
                🎉 Great Financial Health!
              </h6>
              <p style={{margin: 0}}>Your financial metrics look healthy. Keep up the good work!</p>
            </div>
          )}
        </div>
      )}

      {/* Smart Allocation Section */}
      {(cashOnHand > 0 || bankAccountBalance > 0 || savings > 0) && (
        <div className="allocation-section">
          <h5 className="balance-title">🎯 Smart Allocation Assistant</h5>
          
          <div className="preset-buttons">
            <button className="btn-preset" onClick={() => applyQuickPreset('emergency')}>
              🚨 Emergency Fund Preset
            </button>
            <button className="btn-preset" onClick={() => applyQuickPreset('student')}>
              🎓 Student Budget Preset
            </button>
            <button className="btn-preset" onClick={() => applyQuickPreset('family')}>
              👨‍👩‍👧‍👦 Family Budget Preset
            </button>
          </div>

          {allocationSuggestion && (
            <div className="allocation-suggestion">
              <h6 style={{fontWeight: '700', marginBottom: '15px'}}>
                💡 Optimal Allocation Suggestion
              </h6>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '15px'}}>
                <div>
                  <strong>💵 Cash: {formatCurrency(allocationSuggestion.cash)}</strong>
                </div>
                <div>
                  <strong>🏦 Bank: {formatCurrency(allocationSuggestion.bank)}</strong>
                </div>
                <div>
                  <strong>🐷 Savings: {formatCurrency(allocationSuggestion.savings)}</strong>
                </div>
              </div>
              <div style={{marginBottom: '15px'}}>
                <strong>Reasoning:</strong>
                <ul style={{margin: '5px 0', paddingLeft: '20px'}}>
                  {allocationSuggestion.reasoning.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </div>
              <button 
                className="btn-balance btn-set-balance"
                onClick={applyOptimalAllocation}
              >
                ✨ Apply Suggestion
              </button>
            </div>
          )}

          {balances.length > 1 && (
            <div style={{textAlign: 'center', marginTop: '20px'}}>
              <button 
                className="btn-balance btn-reset-balance"
                onClick={consolidateLowBalanceAccounts}
              >
                🔄 Consolidate Low Balance Accounts
              </button>
            </div>
          )}
        </div>
      )}

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
                            {smartValidation && smartValidation.warnings && smartValidation.warnings.length > 0 && (
                              <div style={{fontSize: '0.8rem', color: '#f59e0b', marginTop: '2px'}}>
                                ⚠️ {smartValidation.warnings[0]}
                              </div>
                            )}
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
                            {smartValidation && smartValidation.suggestions && smartValidation.suggestions.length > 0 && (
                              <div style={{fontSize: '0.8rem', color: '#4299e1', marginTop: '2px'}}>
                                💡 {smartValidation.suggestions[0]}
                              </div>
                            )}
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