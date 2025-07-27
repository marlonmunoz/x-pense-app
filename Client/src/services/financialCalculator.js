// Enhanced Financial Logic Service for Balance Component
export class FinancialCalculator {
  constructor() {
    this.EMERGENCY_FUND_MONTHS = 6; // Recommended months of expenses
    this.SAVINGS_RATE_TARGET = 0.20; // 20% savings rate target
    this.LIQUID_ASSETS_MIN = 0.15; // 15% minimum liquid assets
  }

  // Calculate comprehensive financial metrics
  calculateFinancialMetrics(balances, monthlyIncome = 0, monthlyExpenses = 0) {
    const totalCash = this.getTotalCash(balances);
    const totalBankBalance = this.getTotalBankBalance(balances);
    const totalSavings = this.getTotalSavings(balances);
    const totalAssets = totalCash + totalBankBalance + totalSavings;

    return {
      // Basic totals
      totalCash,
      totalBankBalance,
      totalSavings,
      totalAssets,
      
      // Liquidity analysis
      liquidityRatio: this.calculateLiquidityRatio(totalCash, totalBankBalance, totalAssets),
      liquidAssets: totalCash + totalBankBalance,
      
      // Emergency fund analysis
      emergencyFundStatus: this.analyzeEmergencyFund(totalSavings, monthlyExpenses),
      emergencyFundTarget: monthlyExpenses * this.EMERGENCY_FUND_MONTHS,
      
      // Savings rate analysis
      savingsRate: monthlyIncome > 0 ? (totalSavings / monthlyIncome) : 0,
      savingsRateTarget: this.SAVINGS_RATE_TARGET,
      
      // Financial health score (0-100)
      financialHealthScore: this.calculateFinancialHealthScore(
        totalAssets, monthlyIncome, monthlyExpenses, totalSavings
      ),
      
      // Account distribution
      accountDistribution: this.calculateAccountDistribution(balances),
      
      // Growth projections
      projectedGrowth: this.calculateGrowthProjections(totalAssets, monthlyIncome, monthlyExpenses)
    };
  }

  // Calculate total cash across all accounts
  getTotalCash(balances) {
    return balances.reduce((sum, balance) => sum + (balance.cash_on_hand || 0), 0);
  }

  // Calculate total bank balance across all accounts
  getTotalBankBalance(balances) {
    return balances.reduce((sum, balance) => sum + (balance.bank_account_balance || 0), 0);
  }

  // Calculate total savings across all accounts
  getTotalSavings(balances) {
    return balances.reduce((sum, balance) => sum + (balance.savings || 0), 0);
  }

  // Calculate liquidity ratio (liquid assets / total assets)
  calculateLiquidityRatio(cash, bankBalance, totalAssets) {
    if (totalAssets === 0) return 0;
    return ((cash + bankBalance) / totalAssets) * 100;
  }

  // Analyze emergency fund status
  analyzeEmergencyFund(totalSavings, monthlyExpenses) {
    if (monthlyExpenses === 0) {
      return {
        status: 'unknown',
        months: 0,
        recommendation: 'Set monthly expenses to analyze emergency fund'
      };
    }

    const months = totalSavings / monthlyExpenses;
    
    if (months >= this.EMERGENCY_FUND_MONTHS) {
      return {
        status: 'excellent',
        months: months,
        recommendation: 'Great! Consider investing excess emergency funds'
      };
    } else if (months >= 3) {
      return {
        status: 'good',  
        months: months,
        recommendation: `Add $${((this.EMERGENCY_FUND_MONTHS - months) * monthlyExpenses).toFixed(2)} more`
      };
    } else if (months >= 1) {
      return {
        status: 'needs_improvement',
        months: months,
        recommendation: 'Focus on building emergency fund to 3-6 months'
      };
    } else {
      return {
        status: 'critical',
        months: months,
        recommendation: 'Emergency fund needed! Start with $1000 minimum'
      };
    }
  }

  // Calculate financial health score (0-100)
  calculateFinancialHealthScore(totalAssets, monthlyIncome, monthlyExpenses, totalSavings) {
    let score = 0;
    
    // Asset base (30 points)
    if (totalAssets > 0) {
      score += Math.min(30, (totalAssets / 10000) * 30); // $10k = full points
    }
    
    // Emergency fund (25 points)
    if (monthlyExpenses > 0) {
      const emergencyMonths = totalSavings / monthlyExpenses;
      score += Math.min(25, (emergencyMonths / this.EMERGENCY_FUND_MONTHS) * 25);
    }
    
    // Savings rate (25 points)
    if (monthlyIncome > 0) {
      const savingsRate = totalSavings / monthlyIncome;
      score += Math.min(25, (savingsRate / this.SAVINGS_RATE_TARGET) * 25);
    }
    
    // Expense management (20 points)
    if (monthlyIncome > 0 && monthlyExpenses > 0) {
      const expenseRatio = monthlyExpenses / monthlyIncome;
      if (expenseRatio <= 0.5) score += 20;
      else if (expenseRatio <= 0.7) score += 15;
      else if (expenseRatio <= 0.8) score += 10;
      else if (expenseRatio <= 0.9) score += 5;
    }
    
    return Math.min(100, Math.round(score));
  }

  // Calculate account distribution percentages
  calculateAccountDistribution(balances) {
    const totalCash = this.getTotalCash(balances);
    const totalBank = this.getTotalBankBalance(balances);
    const totalSavings = this.getTotalSavings(balances);
    const totalAssets = totalCash + totalBank + totalSavings;
    
    if (totalAssets === 0) {
      return { cash: 0, bank: 0, savings: 0 };
    }
    
    return {
      cash: (totalCash / totalAssets) * 100,
      bank: (totalBank / totalAssets) * 100,
      savings: (totalSavings / totalAssets) * 100
    };
  }

  // Calculate growth projections
  calculateGrowthProjections(totalAssets, monthlyIncome, monthlyExpenses) {
    const netMonthly = monthlyIncome - monthlyExpenses;
    
    return {
      oneMonth: totalAssets + netMonthly,
      threeMonth: totalAssets + (netMonthly * 3),
      sixMonth: totalAssets + (netMonthly * 6),
      oneYear: totalAssets + (netMonthly * 12),
      monthlyNetFlow: netMonthly
    };
  }

  // Validate account balance inputs
  validateBalanceInputs(cashOnHand, bankBalance, savings) {
    const errors = {};
    
    if (cashOnHand < 0) {
      errors.cashOnHand = 'Cash amount cannot be negative';
    }
    if (cashOnHand > 50000) {
      errors.cashOnHand = 'Consider depositing large cash amounts in bank for security';
    }
    
    if (bankBalance < 0) {
      errors.bankBalance = 'Bank balance cannot be negative';
    }
    
    if (savings < 0) {
      errors.savings = 'Savings cannot be negative';
    }
    
    if (cashOnHand === 0 && bankBalance === 0 && savings === 0) {
      errors.general = 'Please enter at least one balance amount';
    }
    
    // Financial logic warnings
    const totalAssets = cashOnHand + bankBalance + savings;
    if (totalAssets > 0) {
      const cashRatio = (cashOnHand / totalAssets) * 100;
      if (cashRatio > 30) {
        errors.warning = `${cashRatio.toFixed(0)}% in cash - consider banking for safety`;
      }
    }
    
    return errors;
  }

  // Suggest optimal account allocation
  suggestOptimalAllocation(totalAmount) {
    const suggestions = {
      cash: 0,
      bank: 0,
      savings: 0,
      reasoning: []
    };
    
    if (totalAmount <= 1000) {
      // Small amounts - keep accessible
      suggestions.cash = totalAmount * 0.2;
      suggestions.bank = totalAmount * 0.8;
      suggestions.savings = 0;
      suggestions.reasoning.push('Keep small amounts liquid and accessible');
    } else if (totalAmount <= 10000) {
      // Medium amounts - start emergency fund
      suggestions.cash = Math.min(500, totalAmount * 0.1);
      suggestions.bank = totalAmount * 0.4;
      suggestions.savings = totalAmount * 0.5;
      suggestions.reasoning.push('Build emergency fund in savings');
      suggestions.reasoning.push('Keep some funds liquid for daily expenses');
    } else {
      // Large amounts - balanced approach
      suggestions.cash = Math.min(1000, totalAmount * 0.05);
      suggestions.bank = totalAmount * 0.35;
      suggestions.savings = totalAmount * 0.6;
      suggestions.reasoning.push('Maximize savings for emergency fund and goals');
      suggestions.reasoning.push('Maintain liquidity for unexpected expenses');
    }
    
    return suggestions;
  }

  // Calculate account consolidation opportunities
  analyzeAccountConsolidation(balances) {
    if (balances.length <= 1) return null;
    
    const duplicateTypes = [];
    const lowBalanceAccounts = [];
    const consolidationSavings = 0;
    
    // Find accounts with similar purposes or low balances
    balances.forEach((account, index) => {
      const total = account.cash_on_hand + account.bank_account_balance + account.savings;
      if (total < 100) {
        lowBalanceAccounts.push({ index, total, account });
      }
    });
    
    const recommendations = [];
    
    if (lowBalanceAccounts.length > 1) {
      const totalLowBalance = lowBalanceAccounts.reduce((sum, acc) => sum + acc.total, 0);
      recommendations.push({
        type: 'consolidate_low_balance',
        message: `Consider consolidating ${lowBalanceAccounts.length} low-balance accounts (${totalLowBalance.toFixed(2)})`,
        accounts: lowBalanceAccounts,
        potentialSavings: lowBalanceAccounts.length * 5 // Assume $5 monthly fee per account
      });
    }
    
    return recommendations.length > 0 ? recommendations : null;
  }

  // Generate financial insights and recommendations
  generateFinancialInsights(metrics, balances) {
    const insights = [];
    
    // Liquidity insights
    if (metrics.liquidityRatio < 15) {
      insights.push({
        type: 'warning',
        category: 'liquidity',
        title: 'Low Liquidity Warning',
        message: `Only ${metrics.liquidityRatio.toFixed(1)}% of assets are liquid. Consider keeping more in cash/checking.`,
        priority: 'high'
      });
    } else if (metrics.liquidityRatio > 80) {
      insights.push({
        type: 'opportunity',
        category: 'liquidity',
        title: 'Excess Liquidity',
        message: `${metrics.liquidityRatio.toFixed(1)}% of assets are liquid. Consider moving some to higher-yield savings.`,
        priority: 'medium'
      });
    }
    
    // Emergency fund insights
    const emergencyStatus = metrics.emergencyFundStatus;
    if (emergencyStatus.status === 'critical') {
      insights.push({
        type: 'critical',
        category: 'emergency_fund',
        title: 'Emergency Fund Critical',
        message: emergencyStatus.recommendation,
        priority: 'high'
      });
    } else if (emergencyStatus.status === 'excellent') {
      insights.push({
        type: 'success',
        category: 'emergency_fund',
        title: 'Emergency Fund Complete',
        message: `Great! You have ${emergencyStatus.months.toFixed(1)} months of expenses saved.`,
        priority: 'low'
      });
    }
    
    // Financial health insights
    if (metrics.financialHealthScore >= 80) {
      insights.push({
        type: 'success',
        category: 'health',
        title: 'Excellent Financial Health',
        message: `Your financial health score is ${metrics.financialHealthScore}/100. Keep it up!`,
        priority: 'low'
      });
    } else if (metrics.financialHealthScore < 40) {
      insights.push({
        type: 'warning',
        category: 'health',
        title: 'Financial Health Needs Attention',
        message: `Your financial health score is ${metrics.financialHealthScore}/100. Focus on building emergency fund and reducing expenses.`,
        priority: 'high'
      });
    }
    
    // Account consolidation insights
    const consolidation = this.analyzeAccountConsolidation(balances);
    if (consolidation) {
      insights.push({
        type: 'opportunity',
        category: 'consolidation',
        title: 'Account Consolidation Opportunity',
        message: consolidation[0].message,
        priority: 'medium'
      });
    }
    
    return insights;
  }
}
