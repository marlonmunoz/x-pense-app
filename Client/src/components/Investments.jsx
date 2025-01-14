import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import axios from "axios";
// import { FaBitcoin, FaEthereum, FaRegMoneyBillAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
// CRYPTO Symbols
import xrpIcon from '../assets/xrp.png'
import ethereumIcon from '../assets/ethereum.png'
import bitcoinIcon from '../assets/bitcoin.png'

const Investments = ({ darkMode, onAddInvestment }) => {
    const navigate = useNavigate();
    const [investments, setInvestments] = useState([]);
    const [amounts, setAmounts] = useState([]);  
    
    useEffect(() => {
        const fetchInvestments = async () => {
            try {
                const responseBitcoin = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
                const responseEthereum = await axios.get('https://api.coinbase.com/v2/prices/ETH-USD/spot');
                const responseXRP = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd');

                const data = [
                    { name: 'Bitcoin', type: 'Cryptocurrency', pricePerUnit: responseBitcoin.data.bpi.USD.rate_float || 0},
                    { name: 'Ethereum', type: 'Cryptocurrency', pricePerUnit: parseFloat(responseEthereum.data.data.amount) },
                    { name: 'Ripple', type: 'Cryptocurrency', pricePerUnit: responseXRP.data.ripple.usd || 0 } // Added XRP
                ];
                setInvestments(data);
                setAmounts(data.map(() => 0))
            } catch (error) {
                console.error("Error fetching investments", error);
            }
        };
        
        fetchInvestments();
    }, []);

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
            case 'ripple':
                return <img src={xrpIcon} alt="XRP" className="xrp-icon" style={{ width: '20px', height: '20px' }} />;
            default:
                return null;
            }
    };
                
     return (
        <div>
            <h5>Set Your Investments</h5>
            <br />
            <h6><span className="badge bg-danger" style={{ color: 'white' }} >Live</span> Crypto Price Updates</h6>
           
            <div className="table-responsive">
                <table className={`table table-striped table-hover table-responsive ${darkMode ? 'table-dark' : 'table-light'} table-rounded`}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {investments.map((investment, index) => (
                            <tr key={index}>
                                <td> 
                                    <span className="investment-name">
                                    {investment.name}  
                                    </span>
                                </td>
                                <td>
                                    {getCryptoIcon(investment.name)}
                                </td>
                                
                                <td>{investment.type}</td>
                                <td>$ {calculatePrice(amounts[index], investment.pricePerUnit)}</td>
                                <td>
                                    <input 
                                        type="number" 
                                        className="form-control"
                                        value={amounts[index]}
                                        placeholder="enter amount"
                                        name={`investment-amount-${index}`}
                                        onChange={(e) => handleAmountChange(index, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <button
                                        className="btn btn-success ml-2"
                                        onClick={() => handleAddClick(index)}
                                    >
                                        Add
                                    </button>
                                    <button
                                        className="btn btn-secondary ml-2"
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