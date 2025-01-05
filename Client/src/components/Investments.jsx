import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin, faEthereum } from '@fortawesome/free-brands-svg-icons';

function Investments({ darkMode, formatAmount }) {
    const [investments, setInvestments] = useState([]);

    

    useEffect(() => {
        const fetchInvestments = async () => {
            try {
                const responseBitcoin = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
                const responseEthereum = await axios.get('https://api.coinbase.com/v2/prices/ETH-USD/spot');
                const data = [
                    { type: 'Bitcoin', amount: responseBitcoin.data.bpi.USD.rate_float },
                    { type: 'Ethereum', amount: parseFloat(responseEthereum.data.data.amount) }
                ];
                setInvestments(data);
            } catch (error) {
                console.error("Error fetching investments data", error);
            }
        };

        fetchInvestments();
    }, []);

    const getCryptoIcon = (name) => {
        switch (name) {
            case 'Bitcoin':
                return <FontAwesomeIcon icon={faBitcoin} />;
            case 'Ethereum':
                return <FontAwesomeIcon icon={faEthereum} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h5>Set Your Investments</h5>
            <p> Crypto Updates <span className="badge bg-danger">Live</span></p>
            <div className="table-responsive">
                <table className={`table table-striped table-hover table-responsive ${darkMode ? 'table-dark' : 'table-light'} table-rounded`}>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Cryptocurrency</th>
                            <th>Amount</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {investments.map((investment, index) => (
                            <tr key={index}>
                                <td>{getCryptoIcon(investment.name)} {investment.name}</td>
                                <td>{investment.type}</td>
                                <td>{investment.name}</td>
                                <td>$ {formatAmount(investment.amount)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Investments;