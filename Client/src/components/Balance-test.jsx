import React, { useEffect, useState } from "react";
import axios from "axios";

function BalanceTest({ darkMode }) {
  const [balances, setBalances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Simple fetch function to test API
  const fetchBalances = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5001/balance');
      setBalances(response.data);
      console.log('Balances fetched:', response.data);
    } catch (error) {
      console.error('Error fetching balances:', error);
      setError('Failed to fetch balances');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBalances();
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <h2>Balance Test Component</h2>
      
      {loading && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      
      <div>
        <h3>Balances ({balances.length})</h3>
        {balances.length === 0 ? (
          <p>No balances found</p>
        ) : (
          <ul>
            {balances.map((balance, index) => (
              <li key={balance.id || index}>
                Cash: ${balance.cash_on_hand}, 
                Bank: ${balance.bank_account_balance}, 
                Savings: ${balance.savings}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <button onClick={fetchBalances}>Refresh</button>
    </div>
  );
}

export default BalanceTest;
