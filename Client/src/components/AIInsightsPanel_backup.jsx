import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dashboardAI, formatInsight, prioritizeAlerts } from '../services/dashboardAI';
import './AIInsightsPanel.css';

const AIInsightsPanel = ({ transactions, balance, budget, goals, investments, darkMode }) => {
  const navigate = useNavigate();
  const [insights, setInsights] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [predictions, setPredictions] = useState({});
  const [nlQuery, setNlQuery] = useState('');
  const [nlResponse, setNlResponse] = useState(null);
  const [activeTab, setActiveTab] = useState('insights');
  const [isLoading, setIsLoading] = useState(false);

  // Handle action button clicks
  const handleActionClick = (action) => {
    switch(action) {
      case 'Set Category Budget':
      case 'Review Budget':
      case 'Monitor Spending':
        navigate('/budget');
        break;
      case 'View Category Details':
      case 'Review Expenses':
      case 'Review Categories':
        navigate('/transactions');
        break;
      case 'Explore Investments':
      case 'Invest Surplus':
      case 'Explore Diversification':
        navigate('/investments');
        break;
      case 'Set New Goal':
      case 'Boost Savings':
      case 'Optimize Savings':
      case 'Review Goal Strategy':
        navigate('/goals');
        break;
      case 'Analyze Trend':
        navigate('/transactions');
        break;
      default:
        console.log('Action not implemented:', action);
        // For unimplemented actions, navigate to appropriate page based on action content
        if (action.toLowerCase().includes('budget')) {
          navigate('/budget');
        } else if (action.toLowerCase().includes('investment')) {
          navigate('/investments');
        } else if (action.toLowerCase().includes('goal')) {
          navigate('/goals');
        } else {
          navigate('/transactions');
        }
    }
  };

  // Generate AI insights when data changes
  useEffect(() => {
    const generateAllInsights = async () => {
      setIsLoading(true);
      
      try {
        // Generate insights
        const newInsights = dashboardAI.generateFinancialInsights(
          transactions, balance, budget, goals, investments
        );
        setInsights(newInsights);

        // Generate alerts
        const newAlerts = prioritizeAlerts(
          dashboardAI.generateSmartAlerts(transactions, balance, budget, goals)
        );
        setAlerts(newAlerts);

        // Generate recommendations
        const newRecommendations = dashboardAI.generateRecommendations(
          transactions, balance, budget, goals, investments
        );
        setRecommendations(newRecommendations);

        // Generate predictions
        const newPredictions = dashboardAI.generatePredictions(
          transactions, balance, budget
        );
        setPredictions(newPredictions);

      } catch (error) {
        console.error('Error generating AI insights:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (transactions.length > 0) {
      generateAllInsights();
    }
  }, [transactions, balance, budget, goals, investments]);

  // Handle natural language queries
  const handleNLQuery = () => {
    if (nlQuery.trim()) {
      const response = dashboardAI.processNaturalLanguageQuery(
        nlQuery, transactions, balance, budget, goals, investments
      );
      setNlResponse(response);
      setNlQuery('');
    }
  };

  // Handle Enter key for NL queries
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNLQuery();
    }
  };

  return (
    <div className={`ai-insights-panel ${darkMode ? 'ai-dark' : 'ai-light'}`}>
      <style>{`
        .ai-insights-panel {
          text-align: center;
          margin-bottom: 25px;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        .ai-header h4 {
          margin: 0;
          font-size: 1.2rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .ai-tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 25px;
          background: ${darkMode ? '#4a5568' : '#e2e8f0'};
          border-radius: 12px;
          padding: 5px;
        }

        .ai-tab {
          flex: 1;
          padding: 12px 20px;
          text-align: center;
          border: none;
          background: none;
          color: ${darkMode ? '#a0aec0' : '#718096'};
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .ai-tab.active {
          background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(66, 153, 225, 0.4);
        }

        .ai-tab:hover:not(.active) {
          background: ${darkMode ? '#718096' : '#cbd5e0'};
          color: ${darkMode ? '#e2e8f0' : '#2d3748'};
        }

        .nl-query-section {
          margin-bottom: 25px;
          padding: 20px;
          background: ${darkMode ? '#4a5568' : '#ffffff'};
          border-radius: 12px;
          border: 2px solid ${darkMode ? '#718096' : '#e2e8f0'};
        }

        .nl-query-input {
          width: 100%;
          padding: 15px;
          border: 2px solid ${darkMode ? '#718096' : '#e2e8f0'};
          border-radius: 10px;
          font-size: 1rem;
          background: ${darkMode ? '#2d3748' : '#ffffff'};
          color: ${darkMode ? '#e2e8f0' : '#2d3748'};
          margin-bottom: 10px;
        }

        .nl-query-input:focus {
          outline: none;
          border-color: #4299e1;
          box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.3);
        }

        .nl-query-btn {
          background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .nl-query-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(66, 153, 225, 0.6);
        }

        .nl-response {
          margin-top: 15px;
          padding: 15px;
          background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
          color: white;
          border-radius: 10px;
          font-weight: 600;
        }

        .insight-card, .alert-card, .recommendation-card {
          background: ${darkMode ? '#4a5568' : '#ffffff'};
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 15px;
          border-left: 5px solid;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .insight-card:hover, .alert-card:hover, .recommendation-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .insight-card.warning {
          border-left-color: #f59e0b;
        }

        .insight-card.info {
          border-left-color: #3b82f6;
        }

        .insight-card.opportunity {
          border-left-color: #10b981;
        }

        .insight-card.motivation {
          border-left-color: #8b5cf6;
        }

        .alert-card.critical {
          border-left-color: #ef4444;
          background: ${darkMode ? 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)' : 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)'};
        }

        .alert-card.warning {
          border-left-color: #f59e0b;
          background: ${darkMode ? 'linear-gradient(135deg, #78350f 0%, #92400e 100%)' : 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)'};
        }

        .alert-card.info {
          border-left-color: #3b82f6;
          background: ${darkMode ? 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)' : 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)'};
        }

        .recommendation-card {
          border-left-color: #6366f1;
          background: ${darkMode ? 'linear-gradient(135deg, #312e81 0%, #3730a3 100%)' : 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'};
        }

        .card-header {
          display: flex;
          justify-content: between;
          align-items: center;
          margin-bottom: 10px;
        }

        .card-title {
          font-weight: 700;
          font-size: 1.1rem;
          color: ${darkMode ? '#e2e8f0' : '#2d3748'};
          margin: 0;
        }

        .confidence-badge {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .priority-badge {
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .priority-high {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
        }

        .priority-medium {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
        }

        .priority-low {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
        }

        .card-content {
          color: ${darkMode ? '#cbd5e0' : '#4a5568'};
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .action-btn {
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .predictions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .prediction-card {
          background: ${darkMode ? '#4a5568' : '#ffffff'};
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .prediction-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .prediction-value {
          font-size: 2rem;
          font-weight: 700;
          color: #4299e1;
          margin: 10px 0;
        }

        .prediction-label {
          color: ${darkMode ? '#a0aec0' : '#718096'};
          font-weight: 600;
        }

        .loading-spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid ${darkMode ? '#4a5568' : '#e2e8f0'};
          border-top: 4px solid #4299e1;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .empty-state {
          text-align: center;
          padding: 40px;
          color: ${darkMode ? '#a0aec0' : '#718096'};
        }

        .empty-state-icon {
          font-size: 3rem;
          margin-bottom: 15px;
        }

        @media (max-width: 768px) {
          .ai-tabs {
            flex-direction: column;
          }
          
          .ai-tab {
            margin-bottom: 5px;
          }
          
          .predictions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="ai-header">
        <h4>AI Financial Assistant</h4>
        <p style={{ margin: '2px 0 0 0', opacity: 0.9, fontSize: '15px' }}>
          Powered by intelligent insights and predictive analytics
        </p>
      </div>

      {/* Natural Language Query Section */}
      <div className="nl-query-section">
        <h5 style={{ 
          color: darkMode ? '#e2e8f0' : '#2d3748', 
          marginBottom: '15px',
          fontWeight: '700'
        }}>
          💬 Ask Your AI Assistant
        </h5>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input
            type="text"
            className="nl-query-input"
            placeholder="Ask me anything... 'How much did I spend this month?' or 'What's my investment performance?'"
            value={nlQuery}
            onChange={(e) => setNlQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="nl-query-btn" onClick={handleNLQuery}>
            🔍 Ask AI
          </button>
        </div>
        {nlResponse && (
          <div className="nl-response">
            <strong>🤖 AI Assistant:</strong> {nlResponse.answer}
          </div>
        )}
      </div>

      {/* AI Tabs */}
      <div className="ai-tabs">
        <button 
          className={`ai-tab ${activeTab === 'insights' ? 'active' : ''}`}
          onClick={() => setActiveTab('insights')}
        >
          💡 Insights ({insights.length})
        </button>
        <button 
          className={`ai-tab ${activeTab === 'alerts' ? 'active' : ''}`}
          onClick={() => setActiveTab('alerts')}
        >
          🚨 Alerts ({alerts.length})
        </button>
        <button 
          className={`ai-tab ${activeTab === 'recommendations' ? 'active' : ''}`}
          onClick={() => setActiveTab('recommendations')}
        >
          💡 Tips ({recommendations.length})
        </button>
        <button 
          className={`ai-tab ${activeTab === 'predictions' ? 'active' : ''}`}
          onClick={() => setActiveTab('predictions')}
        >
          🔮 Predictions
        </button>
      </div>

      {isLoading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}

      {/* Tab Content */}
      {!isLoading && (
        <>
          {/* Insights Tab */}
          {activeTab === 'insights' && (
            <div>
              {insights.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-state-icon">💡</div>
                  <h5>No insights yet</h5>
                  <p>Add more transactions to get personalized insights!</p>
                </div>
              ) : (
                insights.map((insight, index) => (
                  <div key={index} className={`insight-card ${insight.type}`}>
                    <div className="card-header">
                      <h6 className="card-title">{insight.title}</h6>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span className="confidence-badge">
                          {insight.confidence}% confident
                        </span>
                        {insight.priority && (
                          <span className={`priority-badge priority-${insight.priority}`}>
                            {insight.priority}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="card-content">
                      {insight.message}
                    </div>
                    {insight.actionable && (
                      <button 
                        className="action-btn"
                        onClick={() => handleActionClick(insight.action)}
                      >
                        {insight.action}
                      </button>
                    )}
                  </div>
                ))
              )}
            </div>
          )}

          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <div>
              {alerts.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-state-icon">🚨</div>
                  <h5>No alerts</h5>
                  <p>You're doing great! No urgent alerts at the moment.</p>
                </div>
              ) : (
                alerts.map((alert, index) => (
                  <div key={index} className={`alert-card ${alert.type}`}>
                    <div className="card-header">
                      <h6 className="card-title">{alert.title}</h6>
                      <small style={{ color: darkMode ? '#a0aec0' : '#718096' }}>
                        {alert.timestamp.toLocaleDateString()}
                      </small>
                    </div>
                    <div className="card-content">
                      {alert.message}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Recommendations Tab */}
          {activeTab === 'recommendations' && (
            <div>
              {recommendations.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-state-icon">💡</div>
                  <h5>No recommendations yet</h5>
                  <p>Keep using the app to get personalized recommendations!</p>
                </div>
              ) : (
                recommendations.map((rec, index) => (
                  <div key={index} className="recommendation-card">
                    <div className="card-header">
                      <h6 className="card-title">{rec.title}</h6>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <span className={`priority-badge priority-${rec.impact === 'high' ? 'high' : rec.impact === 'medium' ? 'medium' : 'low'}`}>
                          {rec.impact} impact
                        </span>
                        <span className={`priority-badge priority-${rec.effort === 'high' ? 'high' : rec.effort === 'medium' ? 'medium' : 'low'}`}>
                          {rec.effort} effort
                        </span>
                      </div>
                    </div>
                    <div className="card-content">
                      {rec.description}
                    </div>
                    <small style={{ color: darkMode ? '#a0aec0' : '#718096' }}>
                      Category: {rec.category}
                    </small>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Predictions Tab */}
          {activeTab === 'predictions' && (
            <div className="predictions-grid">
              <div className="prediction-card">
                <div className="prediction-label">Next Month Spending</div>
                <div className="prediction-value">
                  ${predictions.nextMonthSpending?.toFixed(2) || '0.00'}
                </div>
                <small style={{ color: darkMode ? '#a0aec0' : '#718096' }}>
                  Based on your recent patterns
                </small>
              </div>
              
              <div className="prediction-card">
                <div className="prediction-label">Budget Runway</div>
                <div className="prediction-value">
                  {predictions.budgetRunway || 0} months
                </div>
                <small style={{ color: darkMode ? '#a0aec0' : '#718096' }}>
                  At current spending rate
                </small>
              </div>
              
              <div className="prediction-card">
                <div className="prediction-label">Savings Trend</div>
                <div className="prediction-value" style={{ 
                  color: predictions.nextMonthSpending < budget * 0.8 ? '#10b981' : '#ef4444' 
                }}>
                  {predictions.nextMonthSpending < budget * 0.8 ? '📈 Good' : '📉 Review'}
                </div>
                <small style={{ color: darkMode ? '#a0aec0' : '#718096' }}>
                  Based on budget vs spending
                </small>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AIInsightsPanel;
