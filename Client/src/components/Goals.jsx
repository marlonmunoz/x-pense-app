import React, { useState, useEffect } from 'react';

const Goals = () => {
    const [newGoalName, setNewGoalName] = useState('');
    const [newGoalAmount, setNewGoalAmount] = useState('');
    const [validated, setValidated] = useState(false);
    const [goals, setGoals] = useState([]);
    const [inputAmounts, setInputAmounts] = useState({});

    // Retrieve goals from the backend when the component mounts
    useEffect(() => {
        console.log('Fetching goals from backend'); // Debug log
        fetch('http://localhost:5001/goals')
            .then(response => response.json())
            .then(data => {
                console.log('Retrieved goals from backend:', data); // Debug log
                setGoals(data);
            })
            .catch(error => console.error('Error fetching goals:', error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newGoalName && newGoalAmount) {
            const newGoal = {
                name: newGoalName,
                target: Number(newGoalAmount),
                saved: 0
            };
            console.log('Adding new goal:', newGoal); // Debug log
            fetch('http://localhost:5001/goals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newGoal)
            })
            .then(response => response.json())
            .then(data => {
                setGoals([...goals, data]);
                setNewGoalName('');
                setNewGoalAmount('');
                setValidated(false);
            })
            .catch(error => console.error('Error adding goal:', error));
        } else {
            console.log('Goal name or amount is missing'); // Debug log
        }
    };

    const handleAddAmount = (goalId) => {
        const amountToAdd = Number(inputAmounts[goalId] || 0);
        setInputAmounts({ ...inputAmounts, [goalId]: '' });

        // Update the goals array
        const updatedGoals = goals.map(goal => 
            goal.id === goalId ? { ...goal, saved: goal.saved + amountToAdd } : goal
        );
        setGoals(updatedGoals);

        // Update the goal in the backend
        const goalToUpdate = updatedGoals.find(goal => goal.id === goalId);
        fetch(`http://localhost:5001/goals/${goalId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(goalToUpdate)
        })
        .catch(error => console.error('Error updating goal:', error));
    };

    const handleResetAmount = (goalId) => {
        // Reset the input amount for the specific goal
        setInputAmounts({ ...inputAmounts, [goalId]: '' });
    
        // Reset the saved amount for the specific goal
        const updatedGoals = goals.map(goal => 
            goal.id === goalId ? { ...goal, saved: 0 } : goal
        );
        setGoals(updatedGoals);
    
        // Update the specific goal in the backend
        const goalToUpdate = updatedGoals.find(goal => goal.id === goalId);
        fetch(`http://localhost:5001/goals/${goalId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(goalToUpdate)
        })
        .catch(error => console.error('Error resetting goal amount:', error));
    };

    const handleDeleteGoal = (goalId) => {
        const updateGoals = goals.filter(goal => goal.id !== goalId);
        setGoals(updateGoals);

        // Delete the goal from the backend
        fetch(`http://localhost:5001/goals/${goalId}`, {
            method: 'DELETE'
        })
        .catch(error => console.error('Error deleting goal:', error));
    };

    return (
        <div>
            <h5>Set Your Goals</h5>
            <form noValidate onSubmit={handleSubmit} className={`needs-validation ${validated ? 'was-validated' : ''}`}>
                <div className="mt-4">
                    <input
                        type="text"
                        id="newGoalName"
                        value={newGoalName}
                        onChange={(e) => setNewGoalName(e.target.value)}
                        className={`form-control ${validated && !newGoalName ? 'is-invalid' : ''}`}
                        placeholder="Goal Name"
                        required
                    />
                    <div className="invalid-feedback">
                        Please provide a goal name
                    </div>

                    <input
                        type="number"
                        id="newGoalAmount"
                        value={newGoalAmount}
                        onChange={(e) => setNewGoalAmount(e.target.value)}
                        className={`form-control mt-2 ${validated && !newGoalAmount ? 'is-invalid' : ''}`}
                        placeholder="Goal Amount"
                        required
                    />
                    <div className="invalid-feedback">
                        Please provide a goal amount
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Add Goal</button>
            </form>
            <div className="mt-4">
            <p style={{color: 'gray'}}><sup>Add All Your Goals Here</sup></p>
                {goals.map(goal => (
                    <div key={goal.id} className="mb-3">
                        <h6>{goal.name}: $ {goal.target.toLocaleString()}</h6>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: `${(goal.saved / goal.target) * 100}%`}} aria-valuemin="0" aria-valuemax="100">
                                {(goal.saved / goal.target * 100).toFixed(2)}%
                            </div>
                        </div>
                        <input 
                            type="number" 
                            id={`inputAmount-${goal.id}`}
                            name="inputAmount"
                            value={inputAmounts[goal.id] || ''}
                            onChange={(e) => setInputAmounts({ ...inputAmounts, [goal.id]: e.target.value })}
                            className="form-control mt-3"
                            placeholder="Enter amount"
                        />
                        <br />
                        <button onClick={() => handleAddAmount(goal.id)} className="btn btn-primary ">Add Amount</button>
                        <button onClick={() => handleResetAmount(goal.id)} className="btn btn-warning ml-2">Reset Amount</button>
                        <button onClick={() => handleDeleteGoal(goal.id)} className="btn btn-danger ml-2">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Goals;