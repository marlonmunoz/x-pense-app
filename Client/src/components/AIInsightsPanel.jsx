import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dashboardAI, formatInsight, prioritizeAlerts } from '../services/dashboardAI';
import './AIInsightsPanel.css';

const AIInsightsPanel = ({ transactions, balance, budget, goals, investments, darkMode }) => {
  const navigate = useNavigate();
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [nlQuery, setNlQuery] = useState('');
  const [nlLoading, setNlLoading] = useState(false);
  const [nlResponse, setNlResponse] = useState('');

  useEffect(() => {
    generateInsights();
  }, [transactions, balance, budget, goals, investments]);

  const generateInsights = async () => {
    setLoading(true);
    setError(null);
    try {
      const aiInsights = await dashboardAI.generateInsights({
        transactions,
        balance,
        budget,
        goals,
        investments
      });
      
      if (aiInsights && aiInsights.insights) {
        const prioritized = prioritizeAlerts(aiInsights.insights);
        setInsights(prioritized.slice(0, 3)); // Show top 3 insights
        setPredictions(aiInsights.predictions || []);
      }
    } catch (err) {
      setError('Unable to generate AI insights. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleNLQuery = async () => {
    if (!nlQuery.trim()) return;
    
    setNlLoading(true);
    try {
      const response = await dashboardAI.processNaturalLanguage(nlQuery, {
        transactions,
        balance,
        budget,
        goals,
        investments
      });
      setNlResponse(response);
    } catch (err) {
      setNlResponse('Sorry, I couldn\'t process that request. Please try again.');
    } finally {
      setNlLoading(false);
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
      <div className={`ai-header ${darkMode ? 'ai-dark' : 'ai-light'}`}>
        <h4>AI Financial Assistant</h4>
        <p style={{ margin: '2px 0 0 0', opacity: 0.9, fontSize: '15px' }}>
          Powered by intelligent insights and predictive analytics
        </p>
      </div>

      {/* Natural Language Query Section */}
      <div className={`nl-query-section ${darkMode ? 'ai-dark' : 'ai-light'}`}>
        <h5 style={{ 
          color: darkMode ? '#e2e8f0' : '#2d3748', 
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          🤖 Ask anything about your finances
        </h5>
        <div className="nl-input-container">
          <input
            type="text"
            className={`nl-input ${darkMode ? 'ai-dark' : 'ai-light'}`}
            placeholder="e.g., 'How much did I spend on food last month?' or 'Should I invest more?'"
            value={nlQuery}
            onChange={(e) => setNlQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={nlLoading}
          />
          <button
            className={`ask-btn ${darkMode ? 'ai-dark' : 'ai-light'}`}
            onClick={handleNLQuery}
            disabled={nlLoading || !nlQuery.trim()}
          >
            {nlLoading ? 'Processing...' : 'Ask AI'}
          </button>
        </div>
        {nlResponse && (
          <div style={{
            marginTop: '15px',
            padding: '15px',
            background: darkMode ? 'rgba(56, 161, 105, 0.2)' : 'rgba(104, 211, 145, 0.2)',
            border: `1px solid ${darkMode ? '#38a169' : '#68d391'}`,
            borderRadius: '10px',
            color: darkMode ? '#f0fff4' : '#1a202c'
          }}>
            <strong>AI Response:</strong> {nlResponse}
          </div>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className={`loading-spinner ${darkMode ? 'ai-dark' : 'ai-light'}`}>
          <div style={{ marginRight: '10px' }}>🔄</div>
          Generating AI insights...
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className={`error-message ${darkMode ? 'ai-dark' : 'ai-light'}`}>
          {error}
        </div>
      )}

      {/* Insights */}
      {!loading && !error && insights.length > 0 && (
        <div>
          {insights.map((insight, index) => (
            <div key={index} className={`insight-card ${darkMode ? 'ai-dark' : 'ai-light'}`}>
              <h6 className={darkMode ? 'ai-dark' : 'ai-light'}>
                {insight.type === 'alert' ? '⚠️' : insight.type === 'opportunity' ? '💡' : '📊'} 
                {formatInsight(insight.title)}
              </h6>
              <p>{formatInsight(insight.description)}</p>
              {insight.actionable && (
                <div style={{ marginTop: '10px' }}>
                  <button 
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => {
                      if (insight.action === 'view_budget') navigate('/budget');
                      else if (insight.action === 'view_goals') navigate('/goals');
                      else if (insight.action === 'view_transactions') navigate('/transactions');
                    }}
                  >
                    {insight.actionText || 'Take Action'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Predictions */}
      {!loading && predictions.length > 0 && (
        <div className={`insight-card ${darkMode ? 'ai-dark' : 'ai-light'}`}>
          <h6 className={darkMode ? 'ai-dark' : 'ai-light'}>🔮 Financial Predictions</h6>
          <div className="predictions-grid">
            {predictions.map((prediction, index) => (
              <div key={index} className={`prediction-card ${darkMode ? 'ai-dark' : 'ai-light'}`}>
                <h6 className={darkMode ? 'ai-dark' : 'ai-light'}>{prediction.title}</h6>
                <p>{prediction.description}</p>
                <p><strong>Timeframe:</strong> {prediction.timeframe}</p>
                <span className={`confidence ${darkMode ? 'ai-dark' : 'ai-light'}`}>
                  {prediction.confidence}% confidence
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Smart Recommendations */}
      {!loading && (
        <div className={`insight-card ${darkMode ? 'ai-dark' : 'ai-light'}`}>
          <h6 className={darkMode ? 'ai-dark' : 'ai-light'}>💡 Smart Recommendations</h6>
          <ul className={`recommendations-list ${darkMode ? 'ai-dark' : 'ai-light'}`}>
            {balance > 5000 && (
              <li>Consider increasing your emergency fund or exploring investment opportunities.</li>
            )}
            {transactions?.filter(t => t.amount < 0).length > 20 && (
              <li>You have many small transactions. Consider setting up automatic savings for small amounts.</li>
            )}
            {goals?.some(g => g.progress < 0.5) && (
              <li>Some of your goals are behind schedule. Review and adjust your savings strategy.</li>
            )}
            <li>Regular review of your spending patterns can help identify optimization opportunities.</li>
          </ul>
        </div>
      )}

      {/* Financial Health Metrics */}
      {!loading && (
        <div className={`insight-card ${darkMode ? 'ai-dark' : 'ai-light'}`}>
          <h6 className={darkMode ? 'ai-dark' : 'ai-light'}>📊 Financial Health Score</h6>
          <div className="metrics-grid">
            <div className={`metric-item ${darkMode ? 'ai-dark' : 'ai-light'}`}>
              <div className={`metric-value ${darkMode ? 'ai-dark' : 'ai-light'}`}>
                {balance > 10000 ? 'A+' : balance > 5000 ? 'A' : balance > 1000 ? 'B+' : 'B'}
              </div>
              <div className={`metric-label ${darkMode ? 'ai-dark' : 'ai-light'}`}>Emergency Fund</div>
            </div>
            <div className={`metric-item ${darkMode ? 'ai-dark' : 'ai-light'}`}>
              <div className={`metric-value ${darkMode ? 'ai-dark' : 'ai-light'}`}>
                {goals?.filter(g => g.progress > 0.7).length || 0}
              </div>
              <div className={`metric-label ${darkMode ? 'ai-dark' : 'ai-light'}`}>Goals on Track</div>
            </div>
            <div className={`metric-item ${darkMode ? 'ai-dark' : 'ai-light'}`}>
              <div className={`metric-value ${darkMode ? 'ai-dark' : 'ai-light'}`}>
                {Math.round((investments?.reduce((sum, inv) => sum + inv.currentValue, 0) / balance * 100) || 0)}%
              </div>
              <div className={`metric-label ${darkMode ? 'ai-dark' : 'ai-light'}`}>Investment Ratio</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIInsightsPanel;