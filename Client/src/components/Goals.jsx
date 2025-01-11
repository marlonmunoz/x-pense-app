import React from "react";
import { useNavigate } from 'react-router-dom'

function Goals({ goalAmount, currentAmount, inputAmount, progPercentage, setGoalAmount, setCurrentAmount, setInputAmount, setProgPercentage, goals, setGoals, newGoalName, setNewGoalName, newGoalAmount, setNewGoalAmount, validated, setValidated}) {
    const navigate = useNavigate();
    const handleAddGoal = () => {
        if (!newGoalName || !newGoalAmount) {
            setValidated(true);
            return; 
        }
        const newGoal = {name: newGoalName, saved: 0, target: parseFloat(newGoalAmount)};
        setGoals([...goals, newGoal]);
        setNewGoalName('');
        setNewGoalAmount(0);
        setValidated(false);
        navigate('/dashboard')
    };
    
    const handleAddAmount = (goalName) => {
        const amountToAdd = Number(inputAmount)
        setInputAmount('');

        // Update the goals array
        const updatedGoals = goals.map(goal => 
            goal.name === goalName ? { ...goal, saved: goal.saved + amountToAdd} : goal
        );
        setGoals(updatedGoals);
    };

    const progressPercentage = (currentAmount / goalAmount) * 100;

    const handleResetAmount = () => {
        setInputAmount('');
        setCurrentAmount(0);
        setProgPercentage(0);

        // Reset the goals array
        const updatedGoals = goals.map(goal => ({ ... goal, saved: 0}));
        setGoals(updatedGoals);
    };


    const handleDeleteGoal = (goalName) => {
        const updateGoals = goals.filter(goal => goal.name != goalName);
        setGoals(updateGoals);
    }


    return (
        <div>
            <h5>Set Your Goals</h5>
            <div className="mt-4">
                {/* <label htmlFor="goalName">Goal Name</label> */}
                <input 
                    type="text" 
                    id="goalName"
                    value={newGoalName}
                    onChange={(e) => setNewGoalName(e.target.value)}
                    className={`form-control ${validated && !newGoalName ? 'is-invalid' : ''}`}
                    placeholder="Goal Name"
                />
                
                <div className="invalid-feedback">
                    Please provide a goal name
                </div>

                {/* <label htmlFor="goalAmount">Goal Amount</label> */}
                <input 
                    type="number" 
                    id="goalAmount"
                    value={newGoalAmount}
                    onChange={(e) => setNewGoalAmount(e.target.value)}
                    className={`form-control mt-2 ${validated && !newGoalAmount ? 'is-invalid' : ''}`}
                    placeholder="Goal Amount"
                />
                <div className="invalid-feedback">
                    Please provide a goal amount
                </div>
                <button onClick={handleAddGoal} className="btn btn-success mt-2">Add Goal</button>
            </div>
            <br />

            {goals.map((goal, index) => (
                <div key={index} className="mb-3">
                    <h6>{goal.name}: ${goal.target.toLocaleString()}</h6>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: `${(goal.saved / goal.target) * 100}%`}} aria-valuemin="0" aria-valuemax="100">
                            {(goal.saved / goal.target * 100).toFixed(2)}%
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
                    <button onClick={() => handleAddAmount(goal.name)} className="btn btn-primary">Add Amount</button>
                    <button onClick={handleResetAmount} className="btn btn-warning ml-2">Reset Amount</button>
                    <button onClick={() => handleDeleteGoal(goal.name)} className="btn btn-danger ml-2">Delete</button>
                </div>
            ))}

        </div>
    )
}

export default Goals;

