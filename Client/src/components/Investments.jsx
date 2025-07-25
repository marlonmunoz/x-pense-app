import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
// CRYPTO Symbols
// import xrpIcon from '../assets/xrp.png'
import bitcoinIcon from '../assets/bitcoin.png'
import ethereumIcon from '../assets/ethereum.png'
import usdcIcon from '../assets/usdc.png'

const Investments = ({ darkMode, investments, setInvestments, amounts, setAmounts, marketCaps, setMarketCaps, formatCurrency, addedInvestments, setAddedInvestments }) => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [priceChanges, setPriceChanges] = useState({});
    const [animateRows, setAnimateRows] = useState({});
    const [refreshing, setRefreshing] = useState(false);

    
    useEffect(() => {
        const fetchInvestments = async () => {
            try {
                setIsLoading(true);
                const responseBitcoin = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
                const responseEthereum = await axios.get('https://api.coinbase.com/v2/prices/ETH-USD/spot');
                const responseUSDC = await axios.get('https://api.coinbase.com/v2/prices/USDC-USD/spot');
                // const responseXRP = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd');

                const bitcoinPrice = responseBitcoin.data?.bitcoin?.usd || 0;
                const ethereumPrice = parseFloat(responseEthereum.data?.data?.amount) || 0;
                const usdcPrice = parseFloat(responseUSDC.data?.data?.amount) || 1.00;

                // Track price changes
                const oldPrices = investments.reduce((acc, inv) => {
                    acc[inv.id] = inv.pricePerUnit;
                    return acc;
                }, {});

                const data = [
                    { id: 'bitcoin', name: 'Bitcoin', type: 'Cryptocurrency', pricePerUnit: bitcoinPrice },
                    { id: 'ethereum', name: 'Ethereum', type: 'Cryptocurrency', pricePerUnit: ethereumPrice },
                    { id: 'usd-coin', name: 'USDC', type: 'Stablecoin', pricePerUnit: usdcPrice },
                    // { id: 'ripple', name: 'Ripple', type: 'Cryptocurrency', pricePerUnit: responseXRP.data.ripple.usd || 0 }, // Added XRP
                ];

                // Calculate price changes
                const changes = {};
                data.forEach(investment => {
                    const oldPrice = oldPrices[investment.id];
                    if (oldPrice && oldPrice !== investment.pricePerUnit) {
                        changes[investment.id] = investment.pricePerUnit > oldPrice ? 'up' : 'down';
                    }
                });
                setPriceChanges(changes);

                setInvestments(data);
                setAmounts(data.map(() => 0));
                
                // Clear price change indicators after 3 seconds
                setTimeout(() => setPriceChanges({}), 3000);
                
            } catch (error) {
                console.error("Error fetching investments", error);
                setSuccessMessage('❌ Failed to fetch live prices. Please try again.');
                setTimeout(() => setSuccessMessage(''), 3000);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInvestments();
    }, [setInvestments, setAmounts]);

    useEffect(() => {
        const fetchMarketCaps = async () => {
            try {
                const ids = investments.map(investment => investment.id).join(',');
                const response = await axios.get(`http://localhost:5001/api/coins/markets`, {
                    params: { ids }
                });
                console.log('INVESTMENTS COMPONENTS');
                console.log('Market cap response:', response.data); // Log the response data
    
                if (Array.isArray(response.data)) {
                    const marketCapData = response.data.reduce((acc, coin) => {
                        acc[coin.id] = coin.market_cap;
                        return acc;
                    }, {});
                    console.log('Market cap data:', marketCapData); // Log the market cap data
                    setMarketCaps(marketCapData);
                } else {
                    console.error('Expected an array but got:', response.data);
                }
            } catch (error) {
                console.error('Error fetching market cap data:', error);
            }
        };
    
        if (investments.length > 0) {
            fetchMarketCaps();
        }
    }, [investments]);

    const handleAmountChange = debounce((index, value) => {
        const newAmounts = [...amounts];
        const parsedValue = parseFloat(value);
        if (!isNaN(parsedValue)) {
            newAmounts[index] = parsedValue;
            setAmounts(newAmounts);
        }
    }, 300);

    const calculatePrice = (amount, pricePerUnit) => {
        const price = amount * pricePerUnit;
        return price.toFixed(2);
    };

    const handleAddClick = async (index) => {
        const investment = investments[index];
        const amount = amounts[index];
    
        if (!amount || amount <= 0) {
            setSuccessMessage('⚠️ Please enter a valid amount greater than 0');
            setTimeout(() => setSuccessMessage(''), 3000);
            return;
        }
    
        setIsLoading(true);
        const totalPrice = calculatePrice(amount, investment.pricePerUnit);
        const newInvestment = { ...investment, amount, totalPrice };
    
        try {
            // Check if the investment already exists in the addedInvestments array
            const existingInvestmentIndex = addedInvestments.findIndex(inv => inv.name === newInvestment.name);
    
            if (existingInvestmentIndex !== -1) {
                // Update the existing investment using PUT
                const existingInvestment = addedInvestments[existingInvestmentIndex];
                const updatedAmount = existingInvestment.amount + amount;
                const updatedTotalPrice = calculatePrice(updatedAmount, investment.pricePerUnit);
                const response = await axios.put(`http://localhost:5001/investments/${existingInvestment.id}`, {
                    amount: updatedAmount,
                    totalPrice: updatedTotalPrice
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
    
                const updatedInvestments = [...addedInvestments];
                updatedInvestments[existingInvestmentIndex] = {
                    ...existingInvestment,
                    amount: updatedAmount,
                    totalPrice: updatedTotalPrice
                };
                setAddedInvestments(updatedInvestments);
                setSuccessMessage(`💰 Updated ${investment.name} investment successfully!`);
            } else {
                // Add the new investment using POST
                const response = await axios.post('http://localhost:5001/investments', newInvestment, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setAddedInvestments([...addedInvestments, newInvestment]);
                setSuccessMessage(`🚀 Added ${investment.name} investment successfully!`);
            }

            // Animate the row
            setAnimateRows({ ...animateRows, [index]: true });
            setTimeout(() => {
                setAnimateRows({ ...animateRows, [index]: false });
            }, 1000);

            // Reset the amount
            const newAmounts = [...amounts];
            newAmounts[index] = 0;
            setAmounts(newAmounts);

            setTimeout(() => setSuccessMessage(''), 3000);            
            setTimeout(() => navigate('/dashboard'), 2000);
        } catch (error) {
            console.error('Error adding/updating investment:', error);
            setSuccessMessage('❌ Failed to add investment. Please try again.');
            setTimeout(() => setSuccessMessage(''), 3000);
        } finally {
            setIsLoading(false);
        }
    };



    const handleResetClick = (index) => {
        const newAmounts = [...amounts];
        newAmounts[index] = 0;
        setAmounts(newAmounts);
        setSuccessMessage(`🔄 Reset ${investments[index]?.name} amount`);
        setTimeout(() => setSuccessMessage(''), 2000);
    }

    const handleRefresh = async () => {
        setRefreshing(true);
        try {
            // Re-fetch investment data
            const responseBitcoin = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
            const responseEthereum = await axios.get('https://api.coinbase.com/v2/prices/ETH-USD/spot');
            const responseUSDC = await axios.get('https://api.coinbase.com/v2/prices/USDC-USD/spot');

            const bitcoinPrice = responseBitcoin.data?.bitcoin?.usd || 0;
            const ethereumPrice = parseFloat(responseEthereum.data?.data?.amount) || 0;
            const usdcPrice = parseFloat(responseUSDC.data?.data?.amount) || 1.00;

            const data = [
                { id: 'bitcoin', name: 'Bitcoin', type: 'Cryptocurrency', pricePerUnit: bitcoinPrice },
                { id: 'ethereum', name: 'Ethereum', type: 'Cryptocurrency', pricePerUnit: ethereumPrice },
                { id: 'usd-coin', name: 'USDC', type: 'Stablecoin', pricePerUnit: usdcPrice },
            ];

            setInvestments(data);
            setSuccessMessage('🔄 Prices refreshed successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
        } catch (error) {
            console.error('Error refreshing prices:', error);
            setSuccessMessage('❌ Failed to refresh prices. Please try again.');
            setTimeout(() => setSuccessMessage(''), 3000);
        } finally {
            setRefreshing(false);
        }
    };

    const getCryptoIcon = (name) => {
        if(!name) return null;
        switch (name.toLowerCase()) {
            case 'bitcoin':
                return <img src={bitcoinIcon} alt="Bitcoin" className="crypto-icon" style={{ width: '24px', height: '24px' }} />;
            case 'ethereum':
                return <img src={ethereumIcon} alt="Ethereum" className="crypto-icon" style={{ width: '24px', height: '24px' }} />;
            case 'usdc':
                return <img src={usdcIcon} alt="USDC" className="crypto-icon" style={{ width: '24px', height: '24px' }} />;
            // case 'ripple':
            //     return <img src={xrpIcon} alt="XRP" className="crypto-icon" style={{ width: '24px', height: '24px' }} />;
            default:
                return <div className="crypto-placeholder">💰</div>;
            }
    };

    const formatMarketCap = (marketCap) => {
        if (marketCap >= 1e12) {
            return `${(marketCap/ 1e12).toFixed(2)} Trillion`
        } else if (marketCap >= 1e9) {
            return `${(marketCap/ 1e9).toFixed(2)} Billion`
        } else {
            return marketCap.toLocaleString();
        }
    }

    const getPriceChangeIndicator = (investmentId) => {
        const change = priceChanges[investmentId];
        if (change === 'up') return '📈';
        if (change === 'down') return '📉';
        return '';
    };

    const getPriceChangeClass = (investmentId) => {
        const change = priceChanges[investmentId];
        if (change === 'up') return 'price-up';
        if (change === 'down') return 'price-down';
        return '';
    };
                
     return (
        <div className="investments-container">
            <style jsx>{`
                .investments-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }

                .investments-header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 30px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    position: relative;
                    overflow: hidden;
                }

                .investments-header::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
                    animation: shimmer 3s infinite;
                }

                @keyframes shimmer {
                    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
                    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
                }

                .investments-header h5 {
                    font-size: 1.8rem;
                    margin: 0 0 10px 0;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                    position: relative;
                    z-index: 1;
                }

                .investments-subtitle {
                    font-size: 1.1rem;
                    opacity: 0.9;
                    margin: 0;
                    position: relative;
                    z-index: 1;
                }

                .control-section {
                    background: ${darkMode ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'};
                    border-radius: 15px;
                    padding: 25px;
                    margin-bottom: 25px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 15px;
                }

                .live-indicator {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-weight: 600;
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                }

                .live-badge {
                    background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
                    color: white;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    box-shadow: 0 2px 8px rgba(229, 62, 62, 0.4);
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }

                .refresh-button {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    border: none;
                    padding: 12px 20px;
                    border-radius: 10px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .refresh-button:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(56, 161, 105, 0.6);
                }

                .refresh-button:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .loading-spinner {
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    border: 2px solid transparent;
                    border-top: 2px solid currentColor;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                .success-message {
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

                @keyframes slideIn {
                    from { transform: translateY(-20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .table-container {
                    background: ${darkMode ? '#2d3748' : '#ffffff'};
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${darkMode ? '2px solid #4a5568' : '2px solid #e2e8f0'};
                }

                .enhanced-table {
                    width: 100%;
                    border-collapse: collapse;
                    background: ${darkMode ? '#2d3748' : '#ffffff'};
                    table-layout: fixed;
                }

                .enhanced-table th {
                    background: ${darkMode ? '#4a5568' : '#667eea'};
                    color: white;
                    padding: 18px 15px;
                    text-align: left;
                    font-weight: 600;
                    font-size: 1rem;
                    border-bottom: 3px solid ${darkMode ? '#2d3748' : '#5a67d8'};
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .enhanced-table th:nth-child(1) { width: 22%; } /* Name */
                .enhanced-table th:nth-child(2) { width: 10%; } /* Symbol */
                .enhanced-table th:nth-child(3) { width: 12%; } /* Type */
                .enhanced-table th:nth-child(4) { width: 15%; } /* Price */
                .enhanced-table th:nth-child(5) { width: 17%; } /* Market Cap */
                .enhanced-table th:nth-child(6) { width: 10%; } /* Amount */
                .enhanced-table th:nth-child(7) { width: 14%; } /* Actions */

                .enhanced-table td {
                    padding: 15px;
                    border-bottom: 1px solid ${darkMode ? '#4a5568' : '#e2e8f0'};
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                    transition: all 0.3s ease;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .table-row {
                    transition: all 0.3s ease;
                    position: relative;
                }

                .table-row:hover {
                    background: ${darkMode ? '#4a5568' : '#f7fafc'};
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .table-row.animate {
                    animation: rowSuccess 1s ease;
                }

                @keyframes rowSuccess {
                    0%, 100% { background: ${darkMode ? '#2d3748' : '#ffffff'}; }
                    50% { background: rgba(56, 161, 105, 0.2); }
                }

                .crypto-name-cell {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-weight: 600;
                    font-size: 1.1rem;
                }

                .crypto-icon {
                    border-radius: 50%;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                }

                .crypto-icon:hover {
                    transform: scale(1.1);
                }

                .crypto-placeholder {
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
                    border-radius: 50%;
                    font-size: 12px;
                }

                .type-badge {
                    padding: 4px 8px;
                    border-radius: 12px;
                    font-size: 0.7rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.3px;
                    display: inline-block;
                    white-space: nowrap;
                }

                .type-crypto {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                }

                .type-stablecoin {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                }

                .price-cell {
                    font-weight: 700;
                    font-size: 0.95rem;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    transition: all 0.3s ease;
                }

                .price-up {
                    color: #38a169;
                    animation: priceFlash 0.5s ease;
                }

                .price-down {
                    color: #e53e3e;
                    animation: priceFlash 0.5s ease;
                }

                @keyframes priceFlash {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.6; transform: scale(1.05); }
                }

                .market-cap-cell {
                    font-weight: 600;
                    font-size: 0.9rem;
                    color: ${darkMode ? '#68d391' : '#38a169'};
                }

                .amount-input {
                    width: 100%;
                    max-width: 80px;
                    padding: 8px 10px;
                    border: 2px solid ${darkMode ? '#4a5568' : '#e2e8f0'};
                    border-radius: 8px;
                    background: ${darkMode ? '#2d3748' : '#ffffff'};
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                    font-size: 0.85rem;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .amount-input:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
                    transform: scale(1.05);
                }

                .action-buttons {
                    display: flex;
                    gap: 6px;
                    flex-wrap: nowrap;
                    justify-content: center;
                    align-items: center;
                }

                .btn-modern {
                    padding: 6px 10px;
                    border: none;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 0.7rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 3px;
                    min-width: 55px;
                    justify-content: center;
                    white-space: nowrap;
                }

                .btn-add {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(56, 161, 105, 0.4);
                }

                .btn-add:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(56, 161, 105, 0.6);
                }

                .btn-reset {
                    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.4);
                }

                .btn-reset:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.6);
                }

                .btn-modern:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                    transform: none !important;
                }

                .loading-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 15px;
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

                @media (max-width: 768px) {
                    .control-section {
                        flex-direction: column;
                        text-align: center;
                    }
                    
                    .action-buttons {
                        flex-wrap: nowrap;
                        gap: 4px;
                    }
                    
                    .btn-modern {
                        font-size: 0.65rem;
                        padding: 8px 10px;
                        min-width: 50px;
                    }
                    
                    .amount-input {
                        width: 100%;
                        max-width: none;
                    }

                    .enhanced-table th,
                    .enhanced-table td {
                        padding: 10px 6px;
                        font-size: 0.85rem;
                    }

                    .crypto-name-cell {
                        font-size: 1rem;
                    }

                    .price-cell {
                        font-size: 0.9rem;
                    }

                    .type-badge {
                        font-size: 0.65rem;
                        padding: 3px 6px;
                    }
                }
            `}</style>

            <div className="investments-header">
                <h5>🚀 Crypto Investments</h5>
                <p className="investments-subtitle">Invest in the future with real-time market data</p>
            </div>

            {successMessage && (
                <div className="success-message">
                    {successMessage}
                </div>
            )}

            <div className="control-section">
                <div className="live-indicator">
                    <span className="live-badge">Live</span>
                    <span>📊 Make Informed Decisions With Live Crypto Updates</span>
                </div>
                <button 
                    className="refresh-button" 
                    onClick={handleRefresh}
                    disabled={refreshing}
                >
                    {refreshing ? <span className="loading-spinner"></span> : '🔄'}
                    {refreshing ? 'Refreshing...' : 'Refresh Prices'}
                </button>
            </div>

            <div className="table-container">
                {isLoading && investments.length === 0 ? (
                    <div className="loading-container">
                        <div className="large-spinner"></div>
                        <p>Loading investment data...</p>
                    </div>
                ) : (
                    <>
                        {isLoading && <div className="loading-overlay"><div className="large-spinner"></div></div>}
                        <table className="enhanced-table">
                            <thead>
                                <tr>
                                    <th>🪙&nbsp;Name</th>
                                    <th>🔗&nbsp;Symbol</th>
                                    <th>📈&nbsp;Type</th>
                                    <th>💰&nbsp;Price</th>
                                    <th>📊&nbsp;Market&nbsp;Cap</th>
                                    <th>💵&nbsp;Amount</th>
                                    <th>⚙️&nbsp;Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {investments.map((investment, index) => (
                                    <tr key={investment.id} className={`table-row ${animateRows[index] ? 'animate' : ''}`}>
                                        <td className="crypto-name-cell">
                                            {getCryptoIcon(investment.name)}
                                            <span>{investment.name}</span>
                                        </td>
                                        <td>
                                            <span style={{ fontWeight: '600', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                                                {investment.id === 'bitcoin' ? 'BTC' : 
                                                 investment.id === 'ethereum' ? 'ETH' : 
                                                 investment.id === 'usd-coin' ? 'USDC' : 
                                                 investment.name.substring(0, 3).toUpperCase()}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`type-badge ${investment.type === 'Cryptocurrency' ? 'type-crypto' : 'type-stablecoin'}`}>
                                                {investment.type === 'Cryptocurrency' ? 'Crypto' : 'Stable'}
                                            </span>
                                        </td>
                                        <td className={`price-cell ${getPriceChangeClass(investment.id)}`}>
                                            <span>{formatCurrency(investment.pricePerUnit)}</span>
                                            <span>{getPriceChangeIndicator(investment.id)}</span>
                                        </td>
                                        <td className="market-cap-cell">
                                            {marketCaps[investment.id] ? 
                                                `$${formatMarketCap(marketCaps[investment.id])}` : 
                                                <span style={{ opacity: 0.7 }}>Loading...</span>
                                            }
                                        </td>
                                        <td>
                                            <input 
                                                type="number" 
                                                className="amount-input"
                                                value={amounts[index] || ''}
                                                placeholder="0.00"
                                                name={`investment-amount-${index}`}
                                                onChange={(e) => handleAmountChange(index, e.target.value)}
                                                step="0.01"
                                                min="0"
                                            />
                                        </td>
                                        <td>
                                            <div className="action-buttons">
                                                <button 
                                                    className="btn-modern btn-add" 
                                                    onClick={() => handleAddClick(index)}
                                                    disabled={isLoading || !amounts[index] || amounts[index] <= 0}
                                                >
                                                    {isLoading ? <span className="loading-spinner"></span> : '💰'}
                                                    Add
                                                </button>
                                                <button 
                                                    className="btn-modern btn-reset" 
                                                    onClick={() => handleResetClick(index)}
                                                    disabled={isLoading}
                                                >
                                                    🔄 Reset
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </div>
    );
};

export default Investments;