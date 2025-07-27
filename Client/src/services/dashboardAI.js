// AI-Powered Dashboard Intelligence Service
class DashboardAI {
  constructor() {
    this.insights = [];
    this.alerts = [];
    this.recommendations = [];
    this.userPreferences = this.loadUserPreferences();
    this.spendingPatterns = this.loadSpendingPatterns();
  }

  // Load user preferences from localStorage
  loadUserPreferences() {
    try {
      return JSON.parse(localStorage.getItem('dashboardAI_preferences')) || {
        riskTolerance: 'medium',
        savingsGoal: 20, // percentage
        notificationLevel: 'normal',
        preferredCategories: []
      };
    } catch (error) {
      return {
        riskTolerance: 'medium',
        savingsGoal: 20,
        notificationLevel: 'normal',
        preferredCategories: []
      };
    }
  }

  // Load spending patterns from localStorage
  loadSpendingPatterns() {
    try {
      return JSON.parse(localStorage.getItem('dashboardAI_patterns')) || {};
    } catch (error) {
      return {};
    }
  }

  // Save user preferences
  saveUserPreferences() {
    localStorage.setItem('dashboardAI_preferences', JSON.stringify(this.userPreferences));
  }

  // Save spending patterns
  saveSpendingPatterns() {
    localStorage.setItem('dashboardAI_patterns', JSON.stringify(this.spendingPatterns));
  }

  // 1. SMART FINANCIAL INSIGHTS
  generateFinancialInsights(transactions, balance, budget, goals, investments) {
    const insights = [];
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    // Monthly spending analysis
    const monthlySpending = this.calculateMonthlySpending(transactions);
    const avgMonthlySpending = monthlySpending.reduce((sum, month) => sum + month.amount, 0) / monthlySpending.length;
    
    if (avgMonthlySpending > budget * 0.8) {
      insights.push({
        type: 'warning',
        title: '⚠️ High Spending Alert',
        message: `You're spending ${((avgMonthlySpending / budget) * 100).toFixed(0)}% of your budget monthly. Consider reviewing your expenses.`,
        confidence: 85,
        actionable: true,
        action: 'Review Categories',
        priority: 'high'
      });
    }

    // Spending pattern insights
    const categoryAnalysis = this.analyzeCategorySpending(transactions);
    const topCategory = categoryAnalysis[0];
    if (topCategory && topCategory.percentage > 40) {
      insights.push({
        type: 'info',
        title: '📊 Spending Pattern Insight',
        message: `${topCategory.percentage.toFixed(0)}% of your spending is on ${topCategory.category}. This is higher than recommended.`,
        confidence: 92,
        actionable: true,
        action: 'Set Category Budget',
        priority: 'medium'
      });
    }

    // Investment insights
    if (investments.length > 0) {
      const totalInvestmentValue = investments.reduce((sum, inv) => sum + inv.total_price, 0);
      const investmentRatio = (totalInvestmentValue / (balance + totalInvestmentValue)) * 100;
      
      if (investmentRatio < 20) {
        insights.push({
          type: 'opportunity',
          title: '🚀 Investment Opportunity',
          message: `Only ${investmentRatio.toFixed(0)}% of your portfolio is invested. Consider increasing investments for better returns.`,
          confidence: 78,
          actionable: true,
          action: 'Explore Investments',
          priority: 'low'
        });
      }
    }

    // Goal progress insights
    if (goals.length > 0) {
      const strugglingGoals = goals.filter(goal => (goal.saved / goal.target) < 0.3);
      if (strugglingGoals.length > 0) {
        insights.push({
          type: 'motivation',
          title: '🎯 Goal Achievement Tip',
          message: `You have ${strugglingGoals.length} goals with low progress. Try automated savings to boost progress!`,
          confidence: 88,
          actionable: true,
          action: 'Set Auto-Save',
          priority: 'medium'
        });
      }
    }

    this.insights = insights;
    return insights;
  }

  // 2. PREDICTIVE ANALYTICS
  generatePredictions(transactions, balance, budget) {
    const predictions = {};

    // Predict next month spending
    const recentTransactions = transactions.filter(t => {
      const transactionDate = new Date(t.date);
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      return transactionDate >= threeMonthsAgo;
    });

    const avgWeeklySpending = recentTransactions.reduce((sum, t) => sum + t.amount, 0) / 12; // 3 months = ~12 weeks
    predictions.nextMonthSpending = avgWeeklySpending * 4.33; // weeks in month

    // Budget runway prediction
    if (predictions.nextMonthSpending > 0) {
      predictions.budgetRunway = Math.floor(balance / predictions.nextMonthSpending);
    }

    // Category trend predictions
    predictions.categoryTrends = this.predictCategoryTrends(transactions);

    // Goal completion predictions
    predictions.goalCompletionDates = this.predictGoalCompletion(transactions);

    return predictions;
  }

  // 3. INTELLIGENT ALERTS
  generateSmartAlerts(transactions, balance, budget, goals) {
    const alerts = [];
    const today = new Date();

    // Budget alerts
    const monthlySpending = this.getCurrentMonthSpending(transactions);
    const budgetUsed = (monthlySpending / budget) * 100;

    if (budgetUsed > 90) {
      alerts.push({
        type: 'critical',
        title: '🚨 Budget Almost Exceeded',
        message: `You've used ${budgetUsed.toFixed(0)}% of your monthly budget!`,
        timestamp: today,
        urgent: true
      });
    } else if (budgetUsed > 75) {
      alerts.push({
        type: 'warning',
        title: '⚠️ Budget Alert',
        message: `You've used ${budgetUsed.toFixed(0)}% of your monthly budget. Consider slowing down spending.`,
        timestamp: today,
        urgent: false
      });
    }

    // Unusual spending alerts
    const unusualTransactions = this.detectUnusualSpending(transactions);
    if (unusualTransactions.length > 0) {
      alerts.push({
        type: 'info',
        title: '🔍 Unusual Spending Detected',
        message: `Detected ${unusualTransactions.length} transactions that seem unusual for your spending pattern.`,
        timestamp: today,
        urgent: false,
        details: unusualTransactions
      });
    }

    // Goal deadline alerts
    goals.forEach(goal => {
      if (goal.deadline) {
        const daysUntilDeadline = Math.ceil((new Date(goal.deadline) - today) / (1000 * 60 * 60 * 24));
        const progress = (goal.saved / goal.target) * 100;
        
        if (daysUntilDeadline <= 30 && progress < 80) {
          alerts.push({
            type: 'warning',
            title: '⏰ Goal Deadline Approaching',
            message: `"${goal.name}" has ${daysUntilDeadline} days left but only ${progress.toFixed(0)}% complete.`,
            timestamp: today,
            urgent: daysUntilDeadline <= 7
          });
        }
      }
    });

    this.alerts = alerts;
    return alerts;
  }

  // 4. SMART RECOMMENDATIONS
  generateRecommendations(transactions, balance, budget, goals, investments) {
    const recommendations = [];

    // Budget optimization recommendations
    const categoryAnalysis = this.analyzeCategorySpending(transactions);
    const overspentCategories = categoryAnalysis.filter(cat => cat.percentage > 25);
    
    if (overspentCategories.length > 0) {
      recommendations.push({
        type: 'optimization',
        title: '💡 Budget Optimization',
        description: `Consider reducing spending in ${overspentCategories[0].category} by 10% to free up $${(overspentCategories[0].amount * 0.1).toFixed(2)} monthly.`,
        impact: 'medium',
        effort: 'low',
        category: 'budgeting'
      });
    }

    // Investment diversification
    if (investments.length > 0) {
      const cryptoTypes = [...new Set(investments.map(inv => inv.name))];
      if (cryptoTypes.length < 3) {
        recommendations.push({
          type: 'diversification',
          title: '🚀 Diversify Your Portfolio',
          description: 'Consider adding different crypto assets to reduce risk and increase potential returns.',
          impact: 'high',
          effort: 'medium',
          category: 'investing'
        });
      }
    }

    // Savings recommendations
    const savingsRate = this.calculateSavingsRate(transactions, balance);
    if (savingsRate < 20) {
      recommendations.push({
        type: 'savings',
        title: '💰 Increase Savings Rate',
        description: `Current savings rate is ${savingsRate.toFixed(0)}%. Try to save at least 20% for better financial health.`,
        impact: 'high',
        effort: 'medium',
        category: 'savings'
      });
    }

    this.recommendations = recommendations;
    return recommendations;
  }

  // 5. NATURAL LANGUAGE QUERY PROCESSING
  processNaturalLanguageQuery(query, transactions, balance, budget, goals, investments) {
    const normalizedQuery = query.toLowerCase().trim();
    
    // Spending queries
    if (normalizedQuery.includes('spent') || normalizedQuery.includes('spending')) {
      if (normalizedQuery.includes('month') || normalizedQuery.includes('monthly')) {
        const monthlySpending = this.getCurrentMonthSpending(transactions);
        return {
          type: 'spending',
          answer: `You've spent $${monthlySpending.toFixed(2)} this month.`,
          data: { amount: monthlySpending, period: 'month' }
        };
      }
      if (normalizedQuery.includes('category')) {
        const categoryAnalysis = this.analyzeCategorySpending(transactions);
        return {
          type: 'category_spending',
          answer: `Your top spending category is ${categoryAnalysis[0]?.category} with $${categoryAnalysis[0]?.amount.toFixed(2)}.`,
          data: categoryAnalysis
        };
      }
    }

    // Balance queries
    if (normalizedQuery.includes('balance') || normalizedQuery.includes('money left')) {
      return {
        type: 'balance',
        answer: `Your current balance is $${balance.toFixed(2)}.`,
        data: { balance }
      };
    }

    // Goal queries
    if (normalizedQuery.includes('goal') || normalizedQuery.includes('target')) {
      if (goals.length === 0) {
        return {
          type: 'goals',
          answer: "You haven't set any financial goals yet. Consider adding some!",
          data: { goalsCount: 0 }
        };
      }
      const totalGoalsProgress = goals.reduce((sum, goal) => sum + (goal.saved / goal.target), 0) / goals.length * 100;
      return {
        type: 'goals',
        answer: `You have ${goals.length} goals with an average progress of ${totalGoalsProgress.toFixed(0)}%.`,
        data: { goalsCount: goals.length, avgProgress: totalGoalsProgress }
      };
    }

    // Investment queries
    if (normalizedQuery.includes('investment') || normalizedQuery.includes('crypto') || normalizedQuery.includes('portfolio')) {
      if (investments.length === 0) {
        return {
          type: 'investments',
          answer: "You don't have any investments yet. Consider starting your crypto journey!",
          data: { investmentCount: 0 }
        };
      }
      const totalValue = investments.reduce((sum, inv) => sum + inv.total_price, 0);
      return {
        type: 'investments',
        answer: `Your crypto portfolio is worth $${totalValue.toFixed(2)} across ${investments.length} assets.`,
        data: { totalValue, assetCount: investments.length }
      };
    }

    // Default response
    return {
      type: 'unknown',
      answer: "I'm not sure about that. Try asking about your spending, balance, goals, or investments!",
      data: null
    };
  }

  // Helper Methods
  calculateMonthlySpending(transactions) {
    const monthlySpending = {};
    
    transactions.forEach(transaction => {
      const date = new Date(transaction.date);
      const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
      
      if (!monthlySpending[monthKey]) {
        monthlySpending[monthKey] = 0;
      }
      monthlySpending[monthKey] += transaction.amount;
    });

    return Object.entries(monthlySpending).map(([month, amount]) => ({ month, amount }));
  }

  getCurrentMonthSpending(transactions) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    return transactions
      .filter(transaction => {
        const transactionDate = new Date(transaction.date);
        return transactionDate.getMonth() === currentMonth && 
               transactionDate.getFullYear() === currentYear;
      })
      .reduce((sum, transaction) => sum + transaction.amount, 0);
  }

  analyzeCategorySpending(transactions) {
    const categorySpending = {};
    const totalSpending = transactions.reduce((sum, t) => sum + t.amount, 0);

    transactions.forEach(transaction => {
      if (!categorySpending[transaction.category]) {
        categorySpending[transaction.category] = 0;
      }
      categorySpending[transaction.category] += transaction.amount;
    });

    return Object.entries(categorySpending)
      .map(([category, amount]) => ({
        category,
        amount,
        percentage: (amount / totalSpending) * 100
      }))
      .sort((a, b) => b.amount - a.amount);
  }

  detectUnusualSpending(transactions) {
    const recentTransactions = transactions.slice(-30); // Last 30 transactions
    const avgAmount = recentTransactions.reduce((sum, t) => sum + t.amount, 0) / recentTransactions.length;
    const threshold = avgAmount * 2; // 2x average is unusual

    return transactions
      .filter(t => t.amount > threshold)
      .slice(-5); // Return last 5 unusual transactions
  }

  calculateSavingsRate(transactions, balance) {
    const totalSpending = transactions.reduce((sum, t) => sum + t.amount, 0);
    const estimatedIncome = totalSpending + balance; // Simplified calculation
    
    if (estimatedIncome === 0) return 0;
    return (balance / estimatedIncome) * 100;
  }

  predictCategoryTrends(transactions) {
    // Simplified trend prediction based on recent vs older spending
    const categories = {};
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

    transactions.forEach(transaction => {
      const transactionDate = new Date(transaction.date);
      const isRecent = transactionDate >= threeMonthsAgo;
      
      if (!categories[transaction.category]) {
        categories[transaction.category] = { recent: 0, old: 0 };
      }
      
      if (isRecent) {
        categories[transaction.category].recent += transaction.amount;
      } else {
        categories[transaction.category].old += transaction.amount;
      }
    });

    return Object.entries(categories).map(([category, data]) => ({
      category,
      trend: data.recent > data.old ? 'increasing' : 'decreasing',
      change: data.old > 0 ? ((data.recent - data.old) / data.old) * 100 : 0
    }));
  }

  predictGoalCompletion(transactions) {
    // Simplified goal completion prediction
    const avgMonthlySavings = this.calculateMonthlySpending(transactions)
      .reduce((sum, month) => sum + month.amount, 0) / 12 * 0.2; // Assume 20% savings rate
    
    return {
      avgMonthlySavings,
      estimatedMonthsToGoal: (goalAmount) => Math.ceil(goalAmount / avgMonthlySavings)
    };
  }
}

// Export singleton instance
export const dashboardAI = new DashboardAI();

// Export additional utility functions
export const formatInsight = (insight) => {
  const icons = {
    warning: '⚠️',
    info: 'ℹ️',
    opportunity: '🚀',
    motivation: '🎯'
  };
  
  return {
    ...insight,
    icon: icons[insight.type] || '💡',
    formattedMessage: `${icons[insight.type] || '💡'} ${insight.message}`
  };
};

export const prioritizeAlerts = (alerts) => {
  return alerts.sort((a, b) => {
    const priorityOrder = { critical: 3, warning: 2, info: 1 };
    return (priorityOrder[b.type] || 0) - (priorityOrder[a.type] || 0);
  });
};
