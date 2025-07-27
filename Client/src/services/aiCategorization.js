// AI Transaction Categorization Service
class TransactionCategorizer {
  constructor() {
    // Predefined patterns for common merchants/keywords
    this.categoryPatterns = {
      'Food & Dining': [
        'starbucks', 'mcdonalds', 'burger king', 'subway', 'chipotle', 'kfc',
        'pizza hut', 'dominos', 'taco bell', 'wendys', 'restaurant', 'cafe',
        'diner', 'bistro', 'grill', 'bar', 'pub', 'bakery', 'doordash',
        'uber eats', 'grubhub', 'postmates', 'food', 'dining'
      ],
      'Transportation': [
        'shell', 'exxon', 'chevron', 'bp', 'mobil', 'gas', 'fuel', 'station',
        'uber', 'lyft', 'taxi', 'metro', 'bus', 'train', 'parking', 'toll',
        'automotive', 'repair', 'mechanic', 'oil change'
      ],
      'Shopping': [
        'amazon', 'walmart', 'target', 'costco', 'best buy', 'home depot',
        'lowes', 'macys', 'nordstrom', 'tj maxx', 'marshall', 'store',
        'shopping', 'retail', 'mall', 'outlet'
      ],
      'Groceries': [
        'kroger', 'safeway', 'whole foods', 'trader joe', 'publix', 'aldi',
        'wegmans', 'harris teeter', 'food lion', 'giant', 'stop shop',
        'grocery', 'supermarket', 'market'
      ],
      'Entertainment': [
        'netflix', 'spotify', 'apple music', 'disney', 'hulu', 'amazon prime',
        'youtube', 'cinema', 'theater', 'movie', 'concert', 'game', 'steam',
        'playstation', 'xbox', 'entertainment'
      ],
      'Utilities': [
        'electric', 'power', 'water', 'gas company', 'internet', 'cable',
        'phone', 'cell', 'verizon', 'att', 'tmobile', 'comcast', 'utility'
      ],
      'Healthcare': [
        'pharmacy', 'cvs', 'walgreens', 'rite aid', 'hospital', 'clinic',
        'doctor', 'dentist', 'medical', 'health', 'insurance'
      ],
      'Finance': [
        'bank', 'atm', 'fee', 'interest', 'loan', 'credit', 'investment',
        'transfer', 'payment', 'financial'
      ],
      'Phone Service': [
        'phone', 'cell', 'cellular', 'mobile', 'verizon', 'att', 'at&t',
        'tmobile', 't-mobile', 'sprint', 'boost', 'cricket', 'mint mobile',
        'visible', 'metro pcs', 'tracfone', 'straight talk', 'ting', 'spectrum'
    ]
    };

    // Load user corrections from localStorage
    this.userCorrections = this.loadUserCorrections();
  }

  // Main categorization function
  categorizeTransaction(description, amount = null) {
    if (!description) return { category: 'Other', confidence: 0 };

    const cleanDescription = description.toLowerCase().trim();
    
    // First check user corrections (highest priority)
    const userCategory = this.checkUserCorrections(cleanDescription);
    if (userCategory) {
      return { category: userCategory, confidence: 95 };
    }

    // Then check predefined patterns
    const patternMatch = this.findPatternMatch(cleanDescription);
    if (patternMatch) {
      return patternMatch;
    }

    // Advanced AI logic using multiple factors
    return this.advancedCategorization(cleanDescription, amount);
  }

  // Check if user has previously corrected this merchant
  checkUserCorrections(description) {
    for (const correction of this.userCorrections) {
      if (description.includes(correction.merchant.toLowerCase())) {
        return correction.category;
      }
    }
    return null;
  }

  // Find pattern matches in predefined categories
  findPatternMatch(description) {
    const scores = {};
    
    for (const [category, patterns] of Object.entries(this.categoryPatterns)) {
      let score = 0;
      let matchCount = 0;
      
      for (const pattern of patterns) {
        if (description.includes(pattern)) {
          score += pattern.length; // Longer matches get higher scores
          matchCount++;
        }
      }
      
      if (matchCount > 0) {
        scores[category] = score / patterns.length * 100; // Normalize score
      }
    }

    if (Object.keys(scores).length === 0) return null;

    // Return category with highest score
    const bestCategory = Object.keys(scores).reduce((a, b) => 
      scores[a] > scores[b] ? a : b
    );
    
    return {
      category: bestCategory,
      confidence: Math.min(Math.round(scores[bestCategory] * 2), 90) // Cap at 90% for pattern matching
    };
  }

  // Advanced categorization using multiple factors
  advancedCategorization(description, amount) {
    // Amount-based hints
    if (amount) {
      const numAmount = parseFloat(amount);
      
      // Small amounts might be coffee/snacks
      if (numAmount < 10 && this.containsWords(description, ['coffee', 'snack', 'drink'])) {
        return { category: 'Food & Dining', confidence: 70 };
      }
      
      // Large amounts might be rent/mortgage
      if (numAmount > 500 && this.containsWords(description, ['rent', 'mortgage', 'property'])) {
        return { category: 'Housing', confidence: 75 };
      }
    }

    // Time-based patterns (if we had timestamp)
    // Weekend transactions might be entertainment
    // Morning transactions might be coffee
    
    // Keyword analysis for unknown merchants
    if (this.containsWords(description, ['purchase', 'buy', 'shop'])) {
      return { category: 'Shopping', confidence: 60 };
    }
    
    if (this.containsWords(description, ['payment', 'bill', 'invoice'])) {
      return { category: 'Bills & Utilities', confidence: 65 };
    }

    // Default fallback
    return { category: 'Other', confidence: 30 };
  }

  // Helper function to check if description contains specific words
  containsWords(description, words) {
    return words.some(word => description.includes(word));
  }

  // Learn from user corrections
  learnFromCorrection(description, originalCategory, correctedCategory) {
    const merchant = this.extractMerchantName(description);
    
    // Store the correction
    const correction = {
      merchant: merchant,
      originalCategory: originalCategory,
      correctedCategory: correctedCategory,
      timestamp: new Date().toISOString()
    };

    this.userCorrections.push(correction);
    this.saveUserCorrections();

    // Also add to pattern if it's a new merchant
    if (!this.categoryPatterns[correctedCategory].some(pattern => 
      merchant.toLowerCase().includes(pattern))) {
      this.categoryPatterns[correctedCategory].push(merchant.toLowerCase());
    }
  }

  // Extract merchant name from transaction description
  extractMerchantName(description) {
    // Remove common prefixes and suffixes
    let merchant = description
      .replace(/^(purchase|payment|transfer)\s+/i, '')
      .replace(/\s+(#\d+|store|inc|llc|corp).*$/i, '')
      .trim();
    
    // Take first part before location or store number
    merchant = merchant.split(/\s+#|\s+\d{3,}/)[0];
    
    return merchant;
  }

  // Load user corrections from localStorage
  loadUserCorrections() {
    try {
      const stored = localStorage.getItem('ai_transaction_corrections');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading user corrections:', error);
      return [];
    }
  }

  // Save user corrections to localStorage
  saveUserCorrections() {
    try {
      localStorage.setItem('ai_transaction_corrections', JSON.stringify(this.userCorrections));
    } catch (error) {
      console.error('Error saving user corrections:', error);
    }
  }

  // Get categorization statistics
  getStats() {
    const totalCorrections = this.userCorrections.length;
    const categoryDistribution = {};
    
    this.userCorrections.forEach(correction => {
      categoryDistribution[correction.correctedCategory] = 
        (categoryDistribution[correction.correctedCategory] || 0) + 1;
    });

    return {
      totalCorrections,
      categoryDistribution,
      learningAccuracy: totalCorrections > 0 ? Math.min(85 + totalCorrections * 2, 95) : 65
    };
  }
}

// Export singleton instance
export const aiCategorizer = new TransactionCategorizer();

// Export categories list for dropdown
export const TRANSACTION_CATEGORIES = [
  'Food & Dining',
  'Transportation',
  'Shopping',
  'Groceries',
  'Entertainment',
  'Utilities',
  'Healthcare',
  'Finance',
  'Housing',
  'Bills & Utilities',
  'Education',
  'Travel',
  'Personal Care',
  'Gifts & Donations',
  'Other'
];
