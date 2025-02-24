import React, { useEffect } from 'react';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar'


const Goals = ( {newGoalName, setNewGoalName, newGoalAmount, setNewGoalAmount, goals, setGoals, inputAmounts, setInputAmounts, validated, setValidated, editingGoalId, setEditingGoalId, editedGoalName, setEditedGoalName, formatCurrency, darkMode } ) => {

    // Retrieve goals from the backend when the component mounts
    useEffect(() => {
        console.log('GOALS COMPONENT');
        
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
            alert('Goal name or amount is missing'); // Debug log
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


    // Functions for EDIT, SAVE and CANCEL
    const handleEdit = (goalId, currentName) => {
        setEditingGoalId(goalId)
        setEditedGoalName(currentName)
    };

    const handleSave = (goalId) => {
        const updatedGoals = goals.map(goal => 
            goal.id === goalId ? { ...goal, name: editedGoalName} : goal
        );
        setGoals(updatedGoals);

        fetch(`http://localhost:5001/goals/${goalId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: editedGoalName })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Updated goal:', data); // Debug log
            setEditingGoalId(null);
            setEditedGoalName('');
        })
        .catch(error => console.error('Error updating goal:', error));
    }

    const handleCancel = () => {
        setEditingGoalId(null);
        setEditedGoalName('');
    }

    return (
        <div className='container'>
            <h5>Set Your Goals</h5>
            <div className={`table-responsive border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
                <sup style={{ color: 'grey' }}>Your Future Goals Here</sup>
                <form noValidate onSubmit={handleSubmit} className={`needs-validation ${validated ? 'was-validated' : ''}`}>
                    <div className="row mt-4">
                        <div className="col-md-6">
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
                        </div>


                        <div className="col-md-6">
                            <input
                                type="number"
                                id="newGoalAmount"
                                value={newGoalAmount}
                                onChange={(e) => setNewGoalAmount(e.target.value)}
                                className={`form-control ${validated && !newGoalAmount ? 'is-invalid' : ''}`}
                                placeholder="Goal Amount"
                                required
                            />
                            <div className="invalid-feedback">
                                Please provide a goal amount
                            </div>
                        </div>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary mt-3">Add Goal</button>
                </form>
            </div>
            
            <div className="mt-4">
            <p style={{color: 'gray'}}><sup>YOUR ADDED GOALS</sup></p>
            {goals.length === 0 ? (
                <p className="text-danger border border-danger rounded mc p-2 ">No Goals Have Been Added Yet !</p>
            ) : (

                goals.map((goal) => (
                    <div key={goal.id} className="mb-3">
                    {editingGoalId === goal.id ? (
                        <>
                            <input
                                type="text"
                                value={editedGoalName}
                                onChange={(e) => setEditedGoalName(e.target.value)}
                                className="form-control mt-3"
                                />
                            <br />
                            <button onClick={() => handleSave(goal.id)} className="btn btn-primary btn-sm  ml-2">Save</button>
                            <button onClick={handleCancel} className="btn btn-secondary btn-sm  ml-2">Cancel</button>
                        </>
                    ) : (
                        // <>
                        //     <div className={`border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
                        //         <h6>{goal.name}: $ {goal.target.toLocaleString()}</h6>
                        //         <div className={`progress ${darkMode ? 'progress-dark' : 'progress-light'}`}>
                        //             <div className={`progress-bar border border-success ${darkMode ? 'bg-info' : 'bg-success'} progress-bar-thick `} role="progressbar" style={{width: `${(goal.saved / goal.target) * 100}%`}} aria-valuemin="0" aria-valuemax="100">
                        //                 {(goal.saved / goal.target * 100).toFixed(2)}%
                        //             </div>
                        //         </div>
                        //         <div >
                        //             <br />
                        //             <span>
                        //                 <sup>Saved: <span className='amounts'> {formatCurrency(goal.saved)}</span>  Remaining: <span className='amounts'>{formatCurrency(goal.target - goal.saved)}</span></sup>
                        //             </span>
                        //         </div>
                        //         <input 
                        //             type="number" 
                        //             id={`inputAmount-${goal.id}`}
                        //             name={`inputAmount-${goal.id}`}
                        //             // name="inputAmount"
                        //             value={inputAmounts[goal.id] || ''}
                        //             onChange={(e) => setInputAmounts({ ...inputAmounts, [goal.id]: e.target.value })}
                        //             className="form-control mt-3"
                        //             placeholder="Enter amount"
                        //             />
                        //         <br />
                        //         <div className="d-flex flex-column flex-md-row justify-content-center">
                        //             <button onClick={() => handleAddAmount(goal.id)} className="btn btn-success ml-2">Add Amount</button>
                        //             <button onClick={() => handleResetAmount(goal.id)} className="btn btn-warning ml-2">Reset Amount</button>
                        //             <button onClick={() => handleDeleteGoal(goal.id)} className="btn btn-danger ml-2">Delete</button>
                        //             <button onClick={() => handleEdit(goal.id, goal.name)} className="btn btn-primary ml-2">Edit</button>
                        //         </div>
                        //     </div>
                        // </>
                    <>
                        <div className={`border border-info rounded p-3 ml-7 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
                            <h6>{goal.name}: $ {goal.target.toLocaleString()}</h6>
                            <br />
                            <div style={{ width: 230, height: 230, margin: '0 auto', position: 'relative' }}>
                              <CircularProgressbar
                                value={(goal.saved / goal.target) * 100}
                                strokeWidth={20}
                                styles={buildStyles({
                                  textColor: darkMode ? 'white' : 'black',
                                  pathColor: 'url(#gradient)', // Use the gradient
                                  trailColor: darkMode ? '#343a40' : '#d6d6d6',
                                  pathTransitionDuration: 0.9,
                               
                                })}
                              />
                              <svg style={{ height: 0 }}>
                                <defs>
                                  <linearGradient id="gradient" gradientTransform="rotate(10)">
                                    <stop offset="0%" stopColor="#17a2b8" />
                                    <stop offset="25%" stopColor="#17a2b8" />
                                    {/* <stop offset="50%" stopColor="#28a745" /> */}
                                    {/* <stop offset="75%" stopColor="#28a745" /> */}
                                    <stop offset="100%" stopColor="red" />
                                    {/* <stop offset="75%" stopColor="yellow" /> */}
                                    {/* <stop offset="100%" stopColor="green" /> */}
                                    
                                  </linearGradient>
                                </defs>
                              </svg>
                              
                              <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '19px',
                                color: darkMode ? 'white' : 'black',
                              }}>
                                {(goal.saved / goal.target * 100).toFixed(2)}%
                              </div>
                            </div>
                            <div>
                              <br />
                              <span>
                                <sup>Saved: <span className='amounts'> {formatCurrency(goal.saved)}</span>  Remaining: <span className='amounts'>{formatCurrency(goal.target - goal.saved)}</span></sup>
                              </span>
                            </div>
                            <input 
                              type="number" 
                              id={`inputAmount-${goal.id}`}
                              name={`inputAmount-${goal.id}`}
                              value={inputAmounts[goal.id] || ''}
                              onChange={(e) => setInputAmounts({ ...inputAmounts, [goal.id]: e.target.value })}
                              className="form-control mt-3"
                              placeholder="Enter amount"
                            />
                            <br />
                            <div className="d-flex flex-column flex-md-row justify-content-center">
                              <button onClick={() => handleAddAmount(goal.id)} className="btn btn-success ml-2">Add Amount</button>
                              <button onClick={() => handleResetAmount(goal.id)} className="btn btn-warning ml-2">Reset Amount</button>
                              <button onClick={() => handleDeleteGoal(goal.id)} className="btn btn-danger ml-2">Delete</button>
                              <button onClick={() => handleEdit(goal.id, goal.name)} className="btn btn-primary ml-2">Edit</button>
                            </div>
                        </div>
                    </>
                    )}
                </div>
                ))
            )}
            </div>
        </div>
    );
};

export default Goals;