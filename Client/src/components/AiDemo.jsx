import React, { useState } from 'react';
import { aiCategorizer } from '../services/aiCategorization';

const AiDemo = ({ darkMode }) => {
  const [testDescription, setTestDescription] = useState('');
  const [result, setResult] = useState(null);
  const [stats, setStats] = useState(aiCategorizer.getStats());

  const testCategorization = () => {
    if (testDescription.trim()) {
      const suggestion = aiCategorizer.categorizeTransaction(testDescription);
      setResult(suggestion);
    }
  };

  const sampleTransactions = [
    'STARBUCKS #1234 NEW YORK',
    'SHELL GAS STATION #567',
    'AMAZON.COM PURCHASE',
    'WALMART SUPERCENTER #890',
    'NETFLIX MONTHLY',
    'ELECTRIC COMPANY BILL',
    'CVS PHARMACY #123'
  ];

  return (
    <div className="ai-demo-container">
      <style jsx>{`
        .ai-demo-container {
          max-width: 800px;
          margin: 20px auto;
          padding: 20px;
          background: ${darkMode ? '#2d3748' : '#f8f9fa'};
          border-radius: 15px;
          border: 2px solid ${darkMode ? '#4a5568' : '#e2e8f0'};
        }

        .demo-header {
          text-align: center;
          margin-bottom: 30px;
          padding: 20px;
          background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
          color: white;
          border-radius: 12px;
        }

        .demo-section {
          margin-bottom: 30px;
          padding: 20px;
          background: ${darkMode ? '#4a5568' : 'white'};
          border-radius: 12px;
          border: 1px solid ${darkMode ? '#718096' : '#e2e8f0'};
        }

        .test-input {
          width: 100%;
          padding: 12px;
          border: 2px solid ${darkMode ? '#718096' : '#e2e8f0'};
          border-radius: 8px;
          background: ${darkMode ? '#2d3748' : 'white'};
          color: ${darkMode ? '#e2e8f0' : '#2d3748'};
          margin-bottom: 10px;
        }

        .test-button {
          background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }

        .test-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(56, 161, 105, 0.4);
        }

        .result-display {
          margin-top: 15px;
          padding: 15px;
          background: ${darkMode ? '#38a169' : '#c6f6d5'};
          color: ${darkMode ? 'white' : '#22543d'};
          border-radius: 8px;
          font-weight: 600;
        }

        .sample-transaction {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          margin: 5px 0;
          background: ${darkMode ? '#2d3748' : '#f7fafc'};
          border-radius: 6px;
          border: 1px solid ${darkMode ? '#4a5568' : '#e2e8f0'};
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }

        .stat-card {
          padding: 15px;
          background: ${darkMode ? '#4a5568' : 'white'};
          border-radius: 8px;
          text-align: center;
          border: 1px solid ${darkMode ? '#718096' : '#e2e8f0'};
        }

        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: #4299e1;
        }

        .confidence-bar {
          width: 100%;
          height: 8px;
          background: ${darkMode ? '#4a5568' : '#e2e8f0'};
          border-radius: 4px;
          overflow: hidden;
          margin-top: 5px;
        }

        .confidence-fill {
          height: 100%;
          background: linear-gradient(90deg, #f56565 0%, #ed8936 50%, #38a169 100%);
          transition: width 0.3s ease;
        }
      `}</style>

      <div className="demo-header">
        <h3>🤖 AI Transaction Categorization Demo</h3>
        <p>Test how our AI categorizes different transaction descriptions</p>
      </div>

      <div className="demo-section">
        <h4>Test AI Categorization</h4>
        <input
          type="text"
          className="test-input"
          placeholder="Enter a transaction description (e.g., 'STARBUCKS #1234')"
          value={testDescription}
          onChange={(e) => setTestDescription(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && testCategorization()}
        />
        <button className="test-button" onClick={testCategorization}>
          🤖 Analyze Transaction
        </button>
        
        {result && (
          <div className="result-display">
            <div>Category: <strong>{result.category}</strong></div>
            <div>Confidence: {result.confidence}%</div>
            <div className="confidence-bar">
              <div 
                className="confidence-fill" 
                style={{ width: `${result.confidence}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      <div className="demo-section">
        <h4>Sample Transactions</h4>
        <p>Click any sample to see how AI categorizes it:</p>
        {sampleTransactions.map((transaction, index) => {
          const suggestion = aiCategorizer.categorizeTransaction(transaction);
          return (
            <div 
              key={index} 
              className="sample-transaction"
              onClick={() => {
                setTestDescription(transaction);
                setResult(suggestion);
              }}
              style={{ cursor: 'pointer' }}
            >
              <span>{transaction}</span>
              <span style={{ 
                background: '#4299e1', 
                color: 'white', 
                padding: '4px 8px', 
                borderRadius: '4px',
                fontSize: '0.8rem'
              }}>
                {suggestion.category} ({suggestion.confidence}%)
              </span>
            </div>
          );
        })}
      </div>

      <div className="demo-section">
        <h4>AI Learning Statistics</h4>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">{stats.totalCorrections}</div>
            <div>User Corrections</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.learningAccuracy}%</div>
            <div>Learning Accuracy</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {Object.keys(stats.categoryDistribution).length}
            </div>
            <div>Categories Learned</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiDemo;
