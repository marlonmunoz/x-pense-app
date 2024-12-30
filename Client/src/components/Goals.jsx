import React, { useState } from "react";

function Goals() {
    const [goalAmount, setGoalAmount] = useState(1000000); // This is an example amount
    const [currentAmount, setCurrentAmount] = useState(0); // This is an example of current amount
    const [inputAmount, setInputAmount] = useState('');
    const [progPercentage, setProgPercentage] = useState(0)
    
    const handleAddAmount = () => {
        setCurrentAmount(currentAmount + Number(inputAmount));
        setInputAmount('');
    };
    
    const progressPercentage = (currentAmount / goalAmount) * 100;

    const handleResetAmount = () => {
        setInputAmount('');
        setCurrentAmount(0);
        setProgPercentage(0);
    }

    return (
        <div>
            <h5>Goals</h5>

            <div className="mb-3">
                <h6>Irynkita's Savings Account: $1,000,000</h6>
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width: `${progressPercentage}%`}} aria-valuemin="0" aria-valuemax="100">
                        {progressPercentage.toFixed(2)}%
                    </div>
                </div>
                <input 
                    type="number" 
                    id="inputAmount"
                    name="inputAmount"
                    value={inputAmount}
                    onChange={(e) => setInputAmount(e.target.value)}
                    className="form-control mt-3"
                    placeholder="Enter amount"
                />
                <br />
                <button onClick={() => handleAddAmount(100)} className="btn btn-primary">Add Amount</button>
                <button onClick={handleResetAmount} className="btn btn-secondary ml-2">Reset Amount</button>
            </div>
        </div>
    )
}

export default Goals;

