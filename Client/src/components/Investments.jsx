import React, { useEffect } from "react";
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

    
    useEffect(() => {
        const fetchInvestments = async () => {
            try {
                const responseBitcoin = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
                const responseEthereum = await axios.get('https://api.coinbase.com/v2/prices/ETH-USD/spot');
                const responseUSDC = await axios.get('https://api.coinbase.com/v2/prices/USDC-USD/spot');
                // const responseXRP = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd');

                const bitcoinPrice = responseBitcoin.data?.bitcoin?.usd || 0;
                const ethereumPrice = parseFloat(responseEthereum.data?.data?.amount) || 0;
                const usdcPrice = parseFloat(responseUSDC.data?.data?.amount) || 1.00;

                const data = [
                    { id: 'bitcoin', name: 'Bitcoin', type: 'Cryptocurrency', pricePerUnit: bitcoinPrice },
                    { id: 'ethereum', name: 'Ethereum', type: 'Cryptocurrency', pricePerUnit: ethereumPrice },
                    { id: 'usd-coin', name: 'USDC', type: 'Stablecoin', pricePerUnit: usdcPrice },
                    // { id: 'ripple', name: 'Ripple', type: 'Cryptocurrency', pricePerUnit: responseXRP.data.ripple.usd || 0 }, // Added XRP
                ];
                setInvestments(data);
                setAmounts(data.map(() => 0));
            } catch (error) {
                console.error("Error fetching investments", error);
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

    // const handleAddClick = async (index) => {
        // const investment = investments[index];
        // const amount = amounts[index];
    
        // if (!amount) {
        //     alert('AMOUNTS NOT DETECTED!');
        //     return;
        // }
    
        // const totalPrice = calculatePrice(amount, investment.pricePerUnit);
        // const newInvestment = { ...investment, amount, totalPrice };
    
        // try {
        //     // Check if the investment already exists in the addedInvestments array
        //     const existingInvestmentIndex = addedInvestments.findIndex(inv => inv.name === newInvestment.name);
    
        //     if (existingInvestmentIndex !== -1) {
        //         // Update the existing investment using PUT
        //         const existingInvestment = addedInvestments[existingInvestmentIndex];
        //         const response = await axios.put(`http://localhost:5001/investments/${existingInvestment.id}`, {
        //             amount,
        //             totalPrice
        //         }, {
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //         });
    
        //         const updatedInvestments = [...addedInvestments];
        //         updatedInvestments[existingInvestmentIndex] = {
        //             ...existingInvestment,
        //             amount: existingInvestment.amount + amount,
        //             totalPrice: existingInvestment.totalPrice + totalPrice
        //         };
        //         setAddedInvestments(updatedInvestments);
        //     } else {
        //         // Add the new investment using POST
        //         const response = await axios.post('http://localhost:5001/investments', newInvestment, {
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //         });
    
        //         setAddedInvestments([...addedInvestments, { ...newInvestment, id: response.data.id }]);
        //     }
    
        //     navigate('/dashboard');
        // } catch (error) {
        //     console.error('There was a problem with the axios operation:', error);
        // }
    // };

    const handleAddClick = async (index) => {
        const investment = investments[index];
        const amount = amounts[index];
    
        if (!amount) {
            alert('AMOUNTS NOT DETECTED!');
            return;
        }
    
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
            } else {
                // Add the new investment using POST
                const response = await axios.post('http://localhost:5001/investments', newInvestment, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setAddedInvestments([...addedInvestments, newInvestment]);
            }
            navigate('/dashboard');
        } catch (error) {
            console.error('Error adding/updating investment:', error);
        }
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
           
            <div className={`border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
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
                                    <button className="btn btn-sm btn-success ml-1 " onClick={() => handleAddClick(index)}> Add </button>
                                    <button className="btn btn-sm btn-danger ml-1" onClick={() => handleResetClick(index)}> Reset </button>
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