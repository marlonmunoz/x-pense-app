// Smart Update Service - AI-Powered Update Assistance
class SmartUpdateService {
  constructor() {
    try {
      this.updateHistory = this.loadUpdateHistory();
      this.updatePatterns = this.loadUpdatePatterns();
      this.validationRules = this.initializeValidationRules();
    } catch (error) {
      console.warn('SmartUpdateService initialization warning:', error);
      this.updateHistory = [];
      this.updatePatterns = {};
      this.validationRules = this.getDefaultValidationRules();
    }
  }

  // Get default validation rules if initialization fails
  getDefaultValidationRules() {
    return {
      balance: {
        minimums: { cash: 0, bank: 0, savings: 0 },
        maximums: { cash: 50000, bank: 1000000, savings: 1000000 },
        ratios: {
          cashToTotal: { min: 0.05, max: 0.30 },
          savingsToTotal: { min: 0.10, max: 0.60 }
        },
        warningThresholds: {
          lowCash: 100,
          lowSavings: 1000,
          highCash: 10000
        }
      }
    };
  }

  // Initialize comprehensive validation rules
  initializeValidationRules() {
    return {
      balance: {
        minimums: { cash: 0, bank: 0, savings: 0 },
        maximums: { cash: 50000, bank: 1000000, savings: 1000000 },
        ratios: {
          cashToTotal: { min: 0.05, max: 0.30 }, // 5-30% cash
          savingsToTotal: { min: 0.10, max: 0.60 } // 10-60% savings
        },
        warningThresholds: {
          lowCash: 100,
          lowSavings: 1000,
          highCash: 10000
        }
      },
      budget: {
        categories: {
          'Food & Dining': { minPercent: 10, maxPercent: 30 },
          'Transportation': { minPercent: 5, maxPercent: 20 },
          'Utilities': { minPercent: 5, maxPercent: 15 },
          'Entertainment': { minPercent: 2, maxPercent: 15 },
          'Healthcare': { minPercent: 3, maxPercent: 20 }
        },
        totalBudgetLimits: { min: 100, max: 50000 }
      },
      investments: {
        diversification: {
          maxSingleAsset: 0.40, // Max 40% in single asset
          minAssets: 3, // Minimum 3 different assets recommended
          riskLevels: {
            conservative: { crypto: 0.10, stocks: 0.40 },
            moderate: { crypto: 0.20, stocks: 0.60 },
            aggressive: { crypto: 0.40, stocks: 0.80 }
          }
        }
      }
    };
  }

  // Smart validation with AI recommendations
  validateUpdate(updateType, data, currentData = null) {
    const validation = {
      isValid: true,
      errors: [],
      warnings: [],
      suggestions: [],
      aiRecommendations: []
    };

    switch (updateType) {
      case 'balance':
        return this.validateBalanceUpdate(data, validation, currentData);
      case 'budget':
        return this.validateBudgetUpdate(data, validation, currentData);
      case 'investment':
        return this.validateInvestmentUpdate(data, validation, currentData);
      case 'transaction':
        return this.validateTransactionUpdate(data, validation, currentData);
      default:
        validation.errors.push('Unknown update type');
        validation.isValid = false;
        return validation;
    }
  }

  // Validate balance updates with AI insights
  validateBalanceUpdate(data, validation, currentData) {
    const { cash_on_hand, bank_account_balance, savings } = data;
    const total = cash_on_hand + bank_account_balance + savings;
    const rules = this.validationRules.balance;

    // Basic validation
    if (cash_on_hand < rules.minimums.cash) {
      validation.errors.push(`Cash amount cannot be negative`);
      validation.isValid = false;
    }

    if (bank_account_balance < rules.minimums.bank) {
      validation.errors.push(`Bank balance cannot be negative`);
      validation.isValid = false;
    }

    if (savings < rules.minimums.savings) {
      validation.errors.push(`Savings cannot be negative`);
      validation.isValid = false;
    }

    // AI-powered ratio analysis
    if (total > 0) {
      const cashRatio = cash_on_hand / total;
      const savingsRatio = savings / total;

      if (cashRatio > rules.ratios.cashToTotal.max) {
        validation.warnings.push(`High cash percentage (${(cashRatio * 100).toFixed(1)}%). Consider moving some to savings or investments.`);
        validation.aiRecommendations.push({
          type: 'reallocation',
          message: `Move $${((cash_on_hand - (total * rules.ratios.cashToTotal.max)).toFixed(2))} from cash to savings`,
          suggestedAllocation: {
            cash: Math.round(total * rules.ratios.cashToTotal.max),
            bank: bank_account_balance,
            savings: savings + (cash_on_hand - Math.round(total * rules.ratios.cashToTotal.max))
          }
        });
      }

      if (savingsRatio < rules.ratios.savingsToTotal.min) {
        validation.warnings.push(`Low savings percentage (${(savingsRatio * 100).toFixed(1)}%). Consider increasing your emergency fund.`);
        validation.suggestions.push('Aim for at least 3-6 months of expenses in savings');
      }
    }

    // Pattern-based suggestions
    this.addPatternBasedSuggestions(validation, 'balance', data, currentData);

    return validation;
  }

  // Validate budget updates with smart recommendations
  validateBudgetUpdate(data, validation, currentData) {
    const { item_name, amount, date } = data;
    const rules = this.validationRules.budget;

    // Basic validation
    if (!item_name || item_name.trim().length === 0) {
      validation.errors.push('Budget item name is required');
      validation.isValid = false;
    }

    if (!amount || amount <= 0) {
      validation.errors.push('Budget amount must be positive');
      validation.isValid = false;
    }

    if (!date) {
      validation.errors.push('Budget date is required');
      validation.isValid = false;
    }

    // AI category suggestions
    const suggestedCategory = this.suggestBudgetCategory(item_name);
    if (suggestedCategory && suggestedCategory !== item_name) {
      validation.suggestions.push(`Consider categorizing as "${suggestedCategory}" for better tracking`);
    }

    // Budget optimization suggestions
    const optimizationSuggestion = this.suggestBudgetOptimization(item_name, amount, currentData);
    if (optimizationSuggestion) {
      validation.aiRecommendations.push(optimizationSuggestion);
    }

    return validation;
  }

  // Validate investment updates with portfolio analysis
  validateInvestmentUpdate(data, validation, currentData) {
    const { name, amount, pricePerUnit, total_price } = data;
    const rules = this.validationRules.investments;

    // Basic validation
    if (!name || name.trim().length === 0) {
      validation.errors.push('Investment name is required');
      validation.isValid = false;
    }

    if (!amount || amount <= 0) {
      validation.errors.push('Investment amount must be positive');
      validation.isValid = false;
    }

    // Portfolio diversification analysis
    if (currentData && currentData.portfolio) {
      const portfolioAnalysis = this.analyzePortfolioDiversification(data, currentData.portfolio);
      
      if (portfolioAnalysis.riskLevel === 'high') {
        validation.warnings.push(`High risk detected: ${portfolioAnalysis.reason}`);
        validation.aiRecommendations.push({
          type: 'diversification',
          message: 'Consider diversifying your portfolio to reduce risk',
          suggestions: portfolioAnalysis.suggestions
        });
      }

      if (portfolioAnalysis.concentration > rules.diversification.maxSingleAsset) {
        validation.warnings.push(`High concentration in ${name} (${(portfolioAnalysis.concentration * 100).toFixed(1)}%)`);
      }
    }

    // Market timing suggestions (simplified)
    const marketSuggestion = this.getMarketTimingSuggestion(name, amount);
    if (marketSuggestion) {
      validation.suggestions.push(marketSuggestion);
    }

    return validation;
  }

  // Smart bulk update validation
  validateBulkUpdate(updateType, updates) {
    const bulkValidation = {
      isValid: true,
      validUpdates: [],
      invalidUpdates: [],
      warnings: [],
      suggestions: [],
      aiRecommendations: []
    };

    updates.forEach((update, index) => {
      const validation = this.validateUpdate(updateType, update.data, update.currentData);
      
      if (validation.isValid) {
        bulkValidation.validUpdates.push({ ...update, index, validation });
      } else {
        bulkValidation.invalidUpdates.push({ ...update, index, validation });
        bulkValidation.isValid = false;
      }

      // Aggregate warnings and suggestions
      bulkValidation.warnings.push(...validation.warnings);
      bulkValidation.suggestions.push(...validation.suggestions);
      bulkValidation.aiRecommendations.push(...validation.aiRecommendations);
    });

    // Add bulk-specific recommendations
    this.addBulkRecommendations(bulkValidation, updateType, updates);

    return bulkValidation;
  }

  // Generate smart update suggestions based on AI analysis
  generateUpdateSuggestions(updateType, currentData, userProfile = null) {
    const suggestions = {
      priority: [],
      optimization: [],
      maintenance: []
    };

    switch (updateType) {
      case 'balance':
        return this.generateBalanceSuggestions(currentData, suggestions, userProfile);
      case 'budget':
        return this.generateBudgetSuggestions(currentData, suggestions, userProfile);
      case 'investment':
        return this.generateInvestmentSuggestions(currentData, suggestions, userProfile);
      default:
        return suggestions;
    }
  }

  // Generate balance-specific suggestions
  generateBalanceSuggestions(balances, suggestions, userProfile) {
    if (!balances || balances.length === 0) return suggestions;

    const totalBalance = balances.reduce((sum, b) => sum + b.cash_on_hand + b.bank_account_balance + b.savings, 0);
    const avgBalance = totalBalance / balances.length;

    // Priority suggestions
    if (totalBalance < 1000) {
      suggestions.priority.push({
        type: 'emergency_fund',
        message: 'Build emergency fund to at least $1,000',
        action: 'Increase savings gradually',
        priority: 'high'
      });
    }

    // Optimization suggestions
    const lowBalanceAccounts = balances.filter(b => (b.cash_on_hand + b.bank_account_balance + b.savings) < avgBalance * 0.5);
    if (lowBalanceAccounts.length > 1) {
      suggestions.optimization.push({
        type: 'consolidation',
        message: `Consider consolidating ${lowBalanceAccounts.length} low-balance accounts`,
        action: 'Merge accounts to reduce maintenance overhead',
        priority: 'medium'
      });
    }

    return suggestions;
  }

  // Track update history for pattern analysis
  trackUpdate(updateType, data, result) {
    try {
      const updateRecord = {
        timestamp: new Date().toISOString(),
        type: updateType,
        data: data,
        result: result,
        success: result.success || false
      };

      this.updateHistory.push(updateRecord);
      this.saveUpdateHistory();

      // Analyze patterns
      this.analyzeUpdatePatterns();
    } catch (error) {
      console.warn('Error tracking update:', error);
    }
  }

  // Analyze update patterns for insights
  analyzeUpdatePatterns() {
    if (this.updateHistory.length < 5) return;

    const recent = this.updateHistory.slice(-20); // Last 20 updates
    const patterns = {
      frequency: {},
      timing: {},
      amounts: {},
      success_rate: 0
    };

    // Analyze frequency by type
    recent.forEach(update => {
      patterns.frequency[update.type] = (patterns.frequency[update.type] || 0) + 1;
    });

    // Calculate success rate
    const successful = recent.filter(u => u.success).length;
    patterns.success_rate = (successful / recent.length) * 100;

    // Store patterns for future use
    this.updatePatterns = patterns;
    this.saveUpdatePatterns();
  }

  // Utility functions for pattern-based suggestions
  addPatternBasedSuggestions(validation, updateType, data, currentData) {
    const userPatterns = this.getUserUpdatePatterns(updateType);
    
    if (userPatterns.frequency > 5) { // User has updated this type frequently
      if (updateType === 'balance' && userPatterns.averageAmount) {
        if (data.cash_on_hand > userPatterns.averageAmount * 1.5) {
          validation.suggestions.push('This is higher than your usual cash amount. Consider if this allocation is intentional.');
        }
      }
    }
  }

  // Helper functions
  suggestBudgetCategory(itemName) {
    const categoryKeywords = {
      'Food & Dining': ['food', 'restaurant', 'dining', 'grocery', 'coffee', 'lunch', 'dinner'],
      'Transportation': ['gas', 'fuel', 'car', 'transport', 'uber', 'taxi', 'bus'],
      'Utilities': ['electric', 'water', 'gas', 'internet', 'phone', 'utility'],
      'Entertainment': ['movie', 'game', 'concert', 'streaming', 'netflix', 'entertainment'],
      'Healthcare': ['medical', 'doctor', 'pharmacy', 'health', 'insurance']
    };

    const itemLower = itemName.toLowerCase();
    for (const [category, keywords] of Object.entries(categoryKeywords)) {
      if (keywords.some(keyword => itemLower.includes(keyword))) {
        return category;
      }
    }
    return null;
  }

  analyzePortfolioDiversification(newInvestment, currentPortfolio) {
    // Simplified portfolio analysis
    const totalValue = currentPortfolio.reduce((sum, inv) => sum + inv.total_price, 0) + newInvestment.total_price;
    const newConcentration = newInvestment.total_price / totalValue;
    
    return {
      concentration: newConcentration,
      riskLevel: newConcentration > 0.4 ? 'high' : newConcentration > 0.2 ? 'medium' : 'low',
      reason: newConcentration > 0.4 ? `${newInvestment.name} would represent ${(newConcentration * 100).toFixed(1)}% of portfolio` : '',
      suggestions: newConcentration > 0.4 ? ['Consider reducing position size', 'Add other assets for diversification'] : []
    };
  }

  getMarketTimingSuggestion(assetName, amount) {
    // Simplified market timing logic (in real app, would connect to market data)
    const volatileAssets = ['bitcoin', 'ethereum', 'crypto'];
    if (volatileAssets.some(asset => assetName.toLowerCase().includes(asset))) {
      return 'Consider dollar-cost averaging for volatile assets rather than lump sum investment';
    }
    return null;
  }

  // Storage functions with error handling
  loadUpdateHistory() {
    try {
      const stored = localStorage.getItem('smart_update_history');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.warn('Error loading update history:', error);
      return [];
    }
  }

  saveUpdateHistory() {
    try {
      // Keep only last 100 records to prevent storage bloat
      const trimmed = this.updateHistory.slice(-100);
      localStorage.setItem('smart_update_history', JSON.stringify(trimmed));
    } catch (error) {
      console.warn('Error saving update history:', error);
    }
  }

  loadUpdatePatterns() {
    try {
      const stored = localStorage.getItem('smart_update_patterns');
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.warn('Error loading update patterns:', error);
      return {};
    }
  }

  saveUpdatePatterns() {
    try {
      localStorage.setItem('smart_update_patterns', JSON.stringify(this.updatePatterns));
    } catch (error) {
      console.warn('Error saving update patterns:', error);
    }
  }

  getUserUpdatePatterns(updateType) {
    const typeHistory = this.updateHistory.filter(h => h.type === updateType);
    if (typeHistory.length === 0) return { frequency: 0 };

    const amounts = typeHistory
      .filter(h => h.data && typeof h.data.amount === 'number')
      .map(h => h.data.amount);

    return {
      frequency: typeHistory.length,
      averageAmount: amounts.length > 0 ? amounts.reduce((sum, amt) => sum + amt, 0) / amounts.length : null,
      lastUpdate: typeHistory[typeHistory.length - 1]?.timestamp
    };
  }

  // Advanced bulk recommendations
  addBulkRecommendations(bulkValidation, updateType, updates) {
    if (updateType === 'balance' && updates.length > 3) {
      bulkValidation.aiRecommendations.push({
        type: 'bulk_optimization',
        message: 'Multiple balance updates detected. Consider using account consolidation feature.',
        action: 'Review account structure for optimization opportunities'
      });
    }

    if (updateType === 'budget' && updates.length > 5) {
      bulkValidation.suggestions.push('Large budget update detected. Consider using budget templates for consistency.');
    }
  }

  // Generate optimization report
  generateOptimizationReport(updateType, data) {
    const report = {
      summary: '',
      recommendations: [],
      metrics: {},
      nextSteps: []
    };

    // Implementation would analyze the data and generate comprehensive optimization report
    // This is a simplified version

    report.summary = `Analysis complete for ${updateType} updates. Found ${data.length} items for review.`;
    return report;
  }
}

// Export the service
export default SmartUpdateService;
