import React, { useState, useEffect } from 'react';
import SmartUpdateService from '../services/smartUpdateService';

function BulkUpdatePanel({ darkMode, updateType, items, onBulkUpdate, onClose }) {
  const [smartUpdateService] = useState(() => {
    try {
      return new SmartUpdateService();
    } catch (error) {
      console.warn('Failed to initialize SmartUpdateService:', error);
      return null;
    }
  });
  const [selectedItems, setSelectedItems] = useState([]);
  const [bulkUpdateData, setBulkUpdateData] = useState({});
  const [validation, setValidation] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState({ priority: [], optimization: [], maintenance: [] });

  useEffect(() => {
    // Generate AI suggestions for bulk update
    if (smartUpdateService) {
      try {
        const suggestions = smartUpdateService.generateUpdateSuggestions(updateType, items);
        setAiSuggestions(suggestions);
      } catch (error) {
        console.warn('Failed to generate AI suggestions:', error);
        setAiSuggestions({ priority: [], optimization: [], maintenance: [] });
      }
    }
  }, [items, updateType, smartUpdateService]);

  const handleItemSelection = (itemId, selected) => {
    if (selected) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    }
  };

  const handleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map(item => item.id));
    }
  };

  const handleBulkUpdateChange = (field, value) => {
    setBulkUpdateData({
      ...bulkUpdateData,
      [field]: value
    });
  };

  const validateBulkUpdate = () => {
    const updates = selectedItems.map(itemId => {
      const item = items.find(i => i.id === itemId);
      if (!item) return null;
      
      // Calculate the updated data based on bulk operations
      const updatedItem = { ...item };
      
      // Apply balance operations
      if (updateType === 'balance') {
        if (bulkUpdateData.cashOperation && bulkUpdateData.cashAmount) {
          switch (bulkUpdateData.cashOperation) {
            case 'add':
              updatedItem.cash_on_hand = (item.cash_on_hand || 0) + bulkUpdateData.cashAmount;
              break;
            case 'subtract':
              updatedItem.cash_on_hand = Math.max(0, (item.cash_on_hand || 0) - bulkUpdateData.cashAmount);
              break;
            case 'set':
              updatedItem.cash_on_hand = bulkUpdateData.cashAmount;
              break;
            case 'percentage':
              updatedItem.cash_on_hand = (item.cash_on_hand || 0) * (1 + bulkUpdateData.cashAmount / 100);
              break;
          }
        }
        
        if (bulkUpdateData.bankOperation && bulkUpdateData.bankAmount) {
          switch (bulkUpdateData.bankOperation) {
            case 'add':
              updatedItem.bank_account_balance = (item.bank_account_balance || 0) + bulkUpdateData.bankAmount;
              break;
            case 'subtract':
              updatedItem.bank_account_balance = Math.max(0, (item.bank_account_balance || 0) - bulkUpdateData.bankAmount);
              break;
            case 'set':
              updatedItem.bank_account_balance = bulkUpdateData.bankAmount;
              break;
            case 'percentage':
              updatedItem.bank_account_balance = (item.bank_account_balance || 0) * (1 + bulkUpdateData.bankAmount / 100);
              break;
          }
        }
        
        if (bulkUpdateData.savingsOperation && bulkUpdateData.savingsAmount) {
          switch (bulkUpdateData.savingsOperation) {
            case 'add':
              updatedItem.savings = (item.savings || 0) + bulkUpdateData.savingsAmount;
              break;
            case 'subtract':
              updatedItem.savings = Math.max(0, (item.savings || 0) - bulkUpdateData.savingsAmount);
              break;
            case 'set':
              updatedItem.savings = bulkUpdateData.savingsAmount;
              break;
            case 'percentage':
              updatedItem.savings = (item.savings || 0) * (1 + bulkUpdateData.savingsAmount / 100);
              break;
          }
        }
        
        // Recalculate total
        updatedItem.total = (updatedItem.cash_on_hand || 0) + (updatedItem.bank_account_balance || 0) + (updatedItem.savings || 0);
      }
      
      return {
        id: itemId,
        data: updatedItem,
        currentData: item
      };
    }).filter(Boolean);

    if (!smartUpdateService) {
      // Basic validation without smart service
      const basicValidation = {
        isValid: updates.length > 0,
        validUpdates: updates,
        invalidUpdates: [],
        warnings: [],
        suggestions: [],
        aiRecommendations: []
      };
      setValidation(basicValidation);
      return basicValidation;
    }

    try {
      const validation = smartUpdateService.validateBulkUpdate(updateType, updates);
      setValidation(validation);
      return validation;
    } catch (error) {
      console.warn('Bulk validation failed:', error);
      const fallbackValidation = {
        isValid: updates.length > 0,
        validUpdates: updates,
        invalidUpdates: [],
        warnings: ['Smart validation unavailable - using basic validation'],
        suggestions: [],
        aiRecommendations: []
      };
      setValidation(fallbackValidation);
      return fallbackValidation;
    }
  };

  const handlePreview = () => {
    const validation = validateBulkUpdate();
    if (validation.isValid || validation.validUpdates.length > 0) {
      setShowPreview(true);
    }
  };

  const handleBulkUpdate = async () => {
    setIsProcessing(true);
    try {
      const validation = validateBulkUpdate();
      
      if (validation.validUpdates.length > 0) {
        await onBulkUpdate(validation.validUpdates.map(update => ({
          id: update.id,
          data: update.data
        })));

        // Track the bulk update
        if (smartUpdateService) {
          try {
            smartUpdateService.trackUpdate('bulk_' + updateType, {
              count: validation.validUpdates.length,
              updateData: bulkUpdateData
            }, { success: true });
          } catch (error) {
            console.warn('Failed to track bulk update:', error);
          }
        }
      }
    } catch (error) {
      console.error('Bulk update failed:', error);
      if (smartUpdateService) {
        try {
          smartUpdateService.trackUpdate('bulk_' + updateType, bulkUpdateData, { success: false, error: error.message });
        } catch (trackError) {
          console.warn('Failed to track bulk update error:', trackError);
        }
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const renderUpdateForm = () => {
    switch (updateType) {
      case 'balance':
        return (
          <div className="bulk-update-form">
            <h6>💰 Bulk Balance Update</h6>
            <div className="row">
              <div className="col-md-4">
                <label className="form-label">💵 Cash Adjustment</label>
                <div className="input-group">
                  <select 
                    className="form-select"
                    onChange={(e) => handleBulkUpdateChange('cashOperation', e.target.value)}
                  >
                    <option value="">No Change</option>
                    <option value="add">Add Amount</option>
                    <option value="subtract">Subtract Amount</option>
                    <option value="set">Set Amount</option>
                    <option value="percentage">Percentage Change</option>
                  </select>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Amount"
                    onChange={(e) => handleBulkUpdateChange('cashAmount', parseFloat(e.target.value) || 0)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">🏦 Bank Adjustment</label>
                <div className="input-group">
                  <select 
                    className="form-select"
                    onChange={(e) => handleBulkUpdateChange('bankOperation', e.target.value)}
                  >
                    <option value="">No Change</option>
                    <option value="add">Add Amount</option>
                    <option value="subtract">Subtract Amount</option>
                    <option value="set">Set Amount</option>
                    <option value="percentage">Percentage Change</option>
                  </select>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Amount"
                    onChange={(e) => handleBulkUpdateChange('bankAmount', parseFloat(e.target.value) || 0)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">🐷 Savings Adjustment</label>
                <div className="input-group">
                  <select 
                    className="form-select"
                    onChange={(e) => handleBulkUpdateChange('savingsOperation', e.target.value)}
                  >
                    <option value="">No Change</option>
                    <option value="add">Add Amount</option>
                    <option value="subtract">Subtract Amount</option>
                    <option value="set">Set Amount</option>
                    <option value="percentage">Percentage Change</option>
                  </select>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Amount"
                    onChange={(e) => handleBulkUpdateChange('savingsAmount', parseFloat(e.target.value) || 0)}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'budget':
        return (
          <div className="bulk-update-form">
            <h6>📊 Bulk Budget Update</h6>
            <div className="row">
              <div className="col-md-6">
                <label className="form-label">💰 Amount Adjustment</label>
                <div className="input-group">
                  <select 
                    className="form-select"
                    onChange={(e) => handleBulkUpdateChange('amountOperation', e.target.value)}
                  >
                    <option value="">No Change</option>
                    <option value="add">Increase by Amount</option>
                    <option value="subtract">Decrease by Amount</option>
                    <option value="multiply">Multiply by Factor</option>
                    <option value="percentage">Percentage Change</option>
                  </select>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Value"
                    step="0.01"
                    onChange={(e) => handleBulkUpdateChange('amountValue', parseFloat(e.target.value) || 0)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">📅 Date Update</label>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => handleBulkUpdateChange('newDate', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 'investment':
        return (
          <div className="bulk-update-form">
            <h6>📈 Bulk Investment Update</h6>
            <div className="row">
              <div className="col-md-6">
                <label className="form-label">📊 Amount Adjustment</label>
                <div className="input-group">
                  <select 
                    className="form-select"
                    onChange={(e) => handleBulkUpdateChange('amountOperation', e.target.value)}
                  >
                    <option value="">No Change</option>
                    <option value="add">Add to Position</option>
                    <option value="subtract">Reduce Position</option>
                    <option value="rebalance">Rebalance Portfolio</option>
                  </select>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Amount"
                    step="0.01"
                    onChange={(e) => handleBulkUpdateChange('amountValue', parseFloat(e.target.value) || 0)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">💡 Rebalancing Strategy</label>
                <select 
                  className="form-select"
                  onChange={(e) => handleBulkUpdateChange('rebalanceStrategy', e.target.value)}
                >
                  <option value="">Manual Updates</option>
                  <option value="equal_weight">Equal Weight</option>
                  <option value="market_cap">Market Cap Weighted</option>
                  <option value="risk_parity">Risk Parity</option>
                </select>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Update form not available for this type</div>;
    }
  };

  const renderAiSuggestions = () => {
    if (!aiSuggestions || (aiSuggestions.priority.length === 0 && aiSuggestions.optimization.length === 0)) {
      return null;
    }

    return (
      <div className="ai-suggestions-panel mb-4">
        <h6>🤖 AI Recommendations</h6>
        
        {aiSuggestions.priority.length > 0 && (
          <div className="mb-3">
            <h6 className="text-danger">🔥 Priority Actions</h6>
            {aiSuggestions.priority.map((suggestion, index) => (
              <div key={index} className="alert alert-warning">
                <strong>{suggestion.message}</strong>
                <br />
                <small>{suggestion.action}</small>
              </div>
            ))}
          </div>
        )}

        {aiSuggestions.optimization.length > 0 && (
          <div className="mb-3">
            <h6 className="text-info">⚡ Optimization Opportunities</h6>
            {aiSuggestions.optimization.map((suggestion, index) => (
              <div key={index} className="alert alert-info">
                <strong>{suggestion.message}</strong>
                <br />
                <small>{suggestion.action}</small>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderValidationResults = () => {
    if (!validation) return null;

    return (
      <div className="validation-results mb-4">
        <h6>✅ Validation Results</h6>
        
        {validation.validUpdates.length > 0 && (
          <div className="alert alert-success">
            <strong>✅ {validation.validUpdates.length} items ready for update</strong>
          </div>
        )}

        {validation.invalidUpdates.length > 0 && (
          <div className="alert alert-danger">
            <strong>❌ {validation.invalidUpdates.length} items have validation errors</strong>
            <ul className="mt-2 mb-0">
              {validation.invalidUpdates.slice(0, 3).map((update, index) => (
                <li key={index}>
                  Item {update.index + 1}: {update.validation.errors.join(', ')}
                </li>
              ))}
            </ul>
          </div>
        )}

        {validation.warnings.length > 0 && (
          <div className="alert alert-warning">
            <strong>⚠️ Warnings:</strong>
            <ul className="mt-2 mb-0">
              {validation.warnings.slice(0, 3).map((warning, index) => (
                <li key={index}>{warning}</li>
              ))}
            </ul>
          </div>
        )}

        {validation.aiRecommendations.length > 0 && (
          <div className="alert alert-info">
            <strong>🤖 AI Recommendations:</strong>
            <ul className="mt-2 mb-0">
              {validation.aiRecommendations.slice(0, 3).map((rec, index) => (
                <li key={index}>{rec.message}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bulk-update-panel">
      <style>{`
        .bulk-update-panel {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
        }

        .bulk-update-content {
          background: ${darkMode ? '#2d3748' : '#ffffff'};
          border-radius: 15px;
          max-width: 90%;
          max-height: 90%;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          color: ${darkMode ? '#e2e8f0' : '#2d3748'};
        }

        .bulk-update-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 20px;
          border-radius: 15px 15px 0 0;
        }

        .bulk-update-body {
          padding: 20px;
        }

        .bulk-update-form {
          background: ${darkMode ? '#4a5568' : '#f8f9fa'};
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .item-selection-list {
          max-height: 300px;
          overflow-y: auto;
          border: 1px solid ${darkMode ? '#4a5568' : '#e2e8f0'};
          border-radius: 8px;
          padding: 10px;
        }

        .item-selection-item {
          display: flex;
          align-items: center;
          padding: 8px;
          border-radius: 6px;
          margin-bottom: 5px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .item-selection-item:hover {
          background: ${darkMode ? '#4a5568' : '#f1f5f9'};
        }

        .item-selection-item.selected {
          background: ${darkMode ? '#667eea30' : '#667eea20'};
          border: 1px solid #667eea;
        }

        .ai-suggestions-panel {
          background: ${darkMode ? '#4a5568' : '#f8f9fa'};
          border-radius: 10px;
          padding: 15px;
          border-left: 4px solid #667eea;
        }

        .bulk-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        }

        .btn-bulk {
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary-bulk {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-success-bulk {
          background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
          color: white;
        }

        .btn-secondary-bulk {
          background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
          color: white;
        }

        .btn-bulk:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .btn-bulk:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
      `}</style>

      <div className="bulk-update-content" style={{ width: '800px' }}>
        <div className="bulk-update-header">
          <div className="d-flex justify-content-between align-items-center">
            <h4>🔄 Bulk Update - {updateType.charAt(0).toUpperCase() + updateType.slice(1)}</h4>
            <button 
              className="btn btn-link text-white p-0"
              onClick={onClose}
              style={{ fontSize: '1.5rem', textDecoration: 'none' }}
            >
              ✕
            </button>
          </div>
        </div>

        <div className="bulk-update-body">
          {/* AI Suggestions */}
          {renderAiSuggestions()}

          {/* Item Selection */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6>📋 Select Items to Update ({selectedItems.length}/{items.length})</h6>
              <button 
                className="btn btn-sm btn-outline-primary"
                onClick={handleSelectAll}
              >
                {selectedItems.length === items.length ? 'Deselect All' : 'Select All'}
              </button>
            </div>

            <div className="item-selection-list">
              {items.map((item) => (
                <div 
                  key={item.id}
                  className={`item-selection-item ${selectedItems.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => handleItemSelection(item.id, !selectedItems.includes(item.id))}
                >
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => {}}
                    className="form-check-input me-2"
                  />
                  <div className="flex-grow-1">
                    <strong>
                      {updateType === 'balance' && `Account #${items.indexOf(item) + 1}`}
                      {updateType === 'budget' && item.item_name}
                      {updateType === 'investment' && item.name}
                    </strong>
                    <br />
                    <small className="text-muted">
                      {updateType === 'balance' && `Total: $${(item.cash_on_hand + item.bank_account_balance + item.savings).toFixed(2)}`}
                      {updateType === 'budget' && `Amount: $${item.amount.toFixed(2)}`}
                      {updateType === 'investment' && `Value: $${item.total_price.toFixed(2)}`}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Update Form */}
          {selectedItems.length > 0 && renderUpdateForm()}

          {/* Validation Results */}
          {renderValidationResults()}

          {/* Actions */}
          <div className="bulk-actions">
            <div>
              <small className="text-muted">
                {selectedItems.length} items selected for bulk update
              </small>
            </div>
            <div className="d-flex gap-2">
              <button 
                className="btn-bulk btn-secondary-bulk"
                onClick={onClose}
              >
                ❌ Cancel
              </button>
              <button 
                className="btn-bulk btn-primary-bulk"
                onClick={handlePreview}
                disabled={selectedItems.length === 0}
              >
                👁️ Preview Changes
              </button>
              <button 
                className="btn-bulk btn-success-bulk"
                onClick={handleBulkUpdate}
                disabled={selectedItems.length === 0 || isProcessing}
              >
                {isProcessing ? '⏳ Processing...' : '✅ Apply Updates'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BulkUpdatePanel;
