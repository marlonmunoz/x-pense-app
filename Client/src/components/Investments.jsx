import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import { debounce } from "lodash";
import axios from "axios";
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import CryptoGraph from "./CryptoGraph";

const fetchCryptoData = async (setCryptoData) => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd',
                ids: 'bitcoin,ethereum'
            }
        });
        setCryptoData(response.data);
    } catch (error) {
        console.error('Error fetching crypto data:', error);
    }
};

const Investments = ({ darkMode, onAddInvestment }) => {
    const [investments, setInvestments] = useState([]);
    const [amounts, setAmounts] = useState([]);
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        fetchCryptoData(setCryptoData);
        const interval = setInterval(() => fetchCryptoData(setCryptoData), 60000); // Fetch data every minute
        return () => clearInterval(interval)
    }, []);
    
    useEffect(() => {
        const fetchInvestments = async () => {
            try {
                const responseBitcoin = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
                const responseEthereum = await axios.get('https://api.coinbase.com/v2/prices/ETH-USD/spot');
                const data = [
                    { name: 'Bitcoin', type: 'Cryptocurrency', pricePerUnit: responseBitcoin.data.bpi.USD.rate_float || 0},
                    { name: 'Ethereum', type: 'Cryptocurrency', pricePerUnit: parseFloat(responseEthereum.data.data.amount) }
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
                return <FaBitcoin className="bitcoin-icon"/>;
            case 'ethereum':
                return <FaEthereum className="ethereum-icon"/>;
            default:
                return null;
            }
    };
                
     return (
        <div>
            <h5>Set Your Investments</h5>
            <h6><span className="badge bg-danger">Live</span> Crypto Price Updates</h6>
            <div className="table-responsive">
                <table className={`table table-striped table-hover table-responsive ${darkMode ? 'table-dark' : 'table-light'} table-rounded`}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Live Graph</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {investments.map((investment, index) => (
                            <tr key={index}>
                                <td>{getCryptoIcon(investment.name)} {investment.name}</td>
                                    <td>
                                        {cryptoData && cryptoData.length > 0 && (
                                            <CryptoGraph data={cryptoData}/>
                                        )}
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