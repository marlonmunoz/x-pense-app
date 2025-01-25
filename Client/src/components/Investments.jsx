import React, { useEffect } from "react";
import { debounce } from "lodash";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
// CRYPTO Symbols
// import xrpIcon from '../assets/xrp.png'
import bitcoinIcon from '../assets/bitcoin.png'
import ethereumIcon from '../assets/ethereum.png'
import usdcIcon from '../assets/usdc.png'

const Investments = ({ darkMode, onAddInvestment, investments, setInvestments, amounts, setAmounts, marketCaps, setMarketCaps, formatCurrency }) => {
    const navigate = useNavigate();
    // const [investments, setInvestments] = useState([]);
    // const [amounts, setAmounts] = useState([]);  
    // const [marketCaps, setMarketCaps] = useState({})
    
    useEffect(() => {
        const fetchInvestments = async () => {
            try {
                const responseBitcoin = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
                const responseEthereum = await axios.get('https://api.coinbase.com/v2/prices/ETH-USD/spot');
                const responseUSDC = await axios.get('https://api.coinbase.com/v2/prices/USDC-USD/spot');
                // const responseXRP = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd');

                const data = [
                    { id: 'bitcoin', name: 'Bitcoin', type: 'Cryptocurrency', pricePerUnit: responseBitcoin.data.bpi.USD.rate_float || 0},
                    { id: 'ethereum', name: 'Ethereum', type: 'Cryptocurrency', pricePerUnit: parseFloat(responseEthereum.data.data.amount) },
                    { id: 'usd-coin', name: 'USDC', type: 'Stablecoin', pricePerUnit: parseFloat(responseUSDC.data.data.amount) || 1.00},
                    // { id: 'ripple', name: 'Ripple', type: 'Cryptocurrency', pricePerUnit: responseXRP.data.ripple.usd || 0 }, // Added XRP
                ];
                setInvestments(data);
                setAmounts(data.map(() => 0))
            } catch (error) {
                console.error("Error fetching investments", error);
            }
        };
        
        fetchInvestments();
    }, []);

    useEffect(() => {
        const fetchMarketCaps = async () => {
            try {
                const ids = investments.map(investment => investment.id).join(',');
                const response = await axios.get(`http://localhost:5001/api/coins/markets`, {
                    params: { ids }
                });
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

    const handleAddClick = (index) => {
        const investment = investments[index];
        const amount = amounts[index];
        const totalPrice = calculatePrice(amount, investment.pricePerUnit);
        onAddInvestment({...investment, amount, totalPrice})
        navigate('/dashboard')
    };

    const handleResetClick = (index) => {
        const newAmounts = [...amounts];
        newAmounts[index] = 0;
        setAmounts(newAmounts)
    }

    const getCryptoIcon = (name) => {
        if(!name) return null;
        switch (name.toLowerCase()) {
            case 'bitcoin':
                return <img src={bitcoinIcon} alt="XRP" className="xrp-icon" style={{ width: '20px', height: '20px' }} />;
            case 'ethereum':
                return <img src={ethereumIcon} alt="XRP" className="xrp-icon" style={{ width: '20px', height: '20px' }} />;
            case 'usdc':
                return <img src={usdcIcon} alt="XRP" className="xrp-icon" style={{ width: '20px', height: '20px' }} />;
            // case 'ripple':
            //     return <img src={xrpIcon} alt="XRP" className="xrp-icon" style={{ width: '20px', height: '20px' }} />;
            default:
                return null;
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
                
     return (
        <div>
            <h5>Set Your Investments</h5>
            <p style={{color: 'gray'}}> <sup>Make Informed Decisions With Live Crypto Updates</sup></p>
            <h6><span className="badge bg-danger" style={{ color: 'white' }} >Live</span> Updates</h6>
           
            <div className="table-responsive">
                <table className={`table table-striped table-hover table-bordered ${darkMode ? 'table-dark' : 'table-light table-light-bordered'} table-rounded`}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Market Cap</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {investments.map((investment, index) => (
                            <tr key={index}>
                                <td data-label="Name" className="investment-name-cell text-end"> 
                                    <span className="investment-name">
                                        {investment.name}  
                                    </span>
                                </td>
                                <td data-label="Symbol">
                                    {getCryptoIcon(investment.name)}
                                </td>
                                
                                <td data-label="Type">
                                    {investment.type}
                                </td>
                                <td data-label="Price">
                                    {formatCurrency(investment.pricePerUnit)}
                                </td>
                                <td data-label="Market Cap">
                                    {marketCaps[investment.id] ? `$ ${formatMarketCap(marketCaps[investment.id])}` : 'Loading...'}
                                </td>
                                <td>
                                    <input 
                                        type="number" 
                                        className="form-control"
                                        value={amounts[index]}
                                        placeholder="enter amount"
                                        name={`investment-amount-${index}`}
                                        onChange={(e) => handleAmountChange(index, e.target.value)}
                                        style={{width: '60px'}} // Set your width here
                                    />
                                </td>
                                <td data-label="Actions">
                                    <button
                                        className="btn btn-sm btn-success ml-1 "
                                        onClick={() => handleAddClick(index)}
                                    >
                                        Add
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger ml-1"
                                        onClick={() => handleResetClick(index)}
                                    >
                                        Reset
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
           
        </div>
    );
};

export default Investments;