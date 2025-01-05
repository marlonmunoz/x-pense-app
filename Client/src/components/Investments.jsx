import React, { useState, useEffect } from "react";
import axios from "axios";

function Investments({ darkMode }) {
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

    return (
        <div>
            <h5>Set Your Investments</h5>
            <h6>CRYPTO</h6>
            <div className="table-responsive">
                <table className={`table table-striped table-hover ${darkMode ? 'table-dark' : 'table-light'}`}>
                    <thead>
                        <tr>
                            <th>Coin</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {investments.map((investment, index) => (
                            <tr key={index}>
                                <td>{investment.type}</td>
                                <td>${investment.amount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Investments;