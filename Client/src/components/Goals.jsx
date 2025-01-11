// import React, { useState, useEffect } from 'react';

// const Goals = () => {
//     const [newGoalName, setNewGoalName] = useState('');
//     const [newGoalAmount, setNewGoalAmount] = useState('');
//     const [validated, setValidated] = useState(false);
//     const [goals, setGoals] = useState([]);
//     const [inputAmounts, setInputAmounts] = useState({});
//     const [currentAmount, setCurrentAmount] = useState(0);
//     const [goalAmount, setGoalAmount] = useState(0);
//     const [progPercentage, setProgPercentage] = useState(0);


//     // Retrieve goals from local storage when the component mounts
//     useEffect(() => {
//         const storedGoals = JSON.parse(localStorage.getItem('goals'));
//         if (storedGoals) {
//             setGoals(storedGoals);
//         }
//     }, []);

//     // Save goals to local storage whenever they are updated
//     useEffect(() => {
//         localStorage.setItem('goals', JSON.stringify(goals));
//     }, [goals]);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (newGoalName && newGoalAmount) {
//             const newGoal = {
//                 id: goals.length + 1,
//                 name: newGoalName,
//                 target: Number(newGoalAmount),
//                 saved: 0
//             };
//             setGoals([...goals, newGoal]);
//             setNewGoalName('');
//             setNewGoalAmount('');
//             setValidated(false);
//         } else {
//             setValidated(true);
//         }
//     };

//     // const handleAddAmount = (goalName) => {
//     //     const amountToAdd = Number(inputAmounts);
//     //     setInputAmounts('');

//     //     // Update the goals array
//     //     const updatedGoals = goals.map(goal => 
//     //         goal.name === goalName ? { ...goal, saved: goal.saved + amountToAdd } : goal
//     //     );
//     //     setGoals(updatedGoals);
//     // };

//     const handleAddAmount = (goalId) => {
//         const amountToAdd = Number(inputAmounts[goalId] || 0);
//         setInputAmounts({ ...inputAmounts, [goalId]: '' });

//         // Update the goals array
//         const updatedGoals = goals.map(goal => 
//             goal.id === goalId ? { ...goal, saved: goal.saved + amountToAdd } : goal
//         );
//         setGoals(updatedGoals);
//     };

//     const progressPercentage = (currentAmount / goalAmount) * 100;

//     // const handleResetAmount = () => {
//     //     setInputAmount('');
//     //     setCurrentAmount(0);
//     //     setProgPercentage(0);

//     //     // Reset the goals array
//     //     const updatedGoals = goals.map(goal => ({ ...goal, saved: 0 }));
//     //     setGoals(updatedGoals);
//     // };

//     const handleResetAmount = () => {
//         setInputAmounts({});

//         // Reset the goals array
//         const updatedGoals = goals.map(goal => ({ ...goal, saved: 0 }));
//         setGoals(updatedGoals);
//     };

//     const handleDeleteGoal = (goalId) => {
//         const updateGoals = goals.filter(goal => goal.id !== goalId);
//         setGoals(updateGoals);
//     };

//     return (
//         <div>
//             <h5>Set Your Goals</h5>
//             <form noValidate onSubmit={handleSubmit} className={`needs-validation ${validated ? 'was-validated' : ''}`}>
//                 <div className="mt-4">
//                     <input
//                         type="text"
//                         id="newGoalName"
//                         value={newGoalName}
//                         onChange={(e) => setNewGoalName(e.target.value)}
//                         className={`form-control ${validated && !newGoalName ? 'is-invalid' : ''}`}
//                         placeholder="Goal Name"
//                         required
//                     />
//                     <div className="invalid-feedback">
//                         Please provide a goal name
//                     </div>

//                     <input
//                         type="number"
//                         id="newGoalAmount"
//                         value={newGoalAmount}
//                         onChange={(e) => setNewGoalAmount(e.target.value)}
//                         className={`form-control mt-2 ${validated && !newGoalAmount ? 'is-invalid' : ''}`}
//                         placeholder="Goal Amount"
//                         required
//                     />
//                     <div className="invalid-feedback">
//                         Please provide a goal amount
//                     </div>
//                     <button type="submit" className="btn btn-primary mt-3">Add Goal</button>
//                 </div>
//             </form>
//             <br />
//             <h5>Your Goals List Here:</h5>
//             {goals.map((goal) => (
//                 <div key={goal.id} className="mb-3">
//                     <h6>{goal.name}: ${goal.target.toLocaleString()}</h6>
//                     <div className="progress">
//                         <div className="progress-bar bg-success" role="progressbar" style={{width: `${(goal.saved / goal.target) * 100}%`}} aria-valuemin="0" aria-valuemax="100">
//                             {(goal.saved / goal.target * 100).toFixed(2)}%
//                         </div>
//                     </div>
//                     <input 
//                         type="number" 
//                         id={`inputAmount-${goal.id}`}
//                         name="inputAmount"
//                         value={inputAmounts[goal.id] || ''}
//                         onChange={(e) => setInputAmounts({ ...inputAmounts, [goal.id]: e.target.value })}
//                         className="form-control mt-3"
//                         placeholder="Enter amount"
//                     />
//                     <br />
//                     <button onClick={() => handleAddAmount(goal.name)} className="btn btn-primary">Add Amount</button>
//                     <button onClick={handleResetAmount} className="btn btn-warning ml-2">Reset Amount</button>
//                     <button onClick={() => handleDeleteGoal(goal.id)} className="btn btn-danger ml-2">Delete</button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Goals;


import React, { useState, useEffect } from 'react';

const Goals = () => {
    const [newGoalName, setNewGoalName] = useState('');
    const [newGoalAmount, setNewGoalAmount] = useState('');
    const [validated, setValidated] = useState(false);
    const [goals, setGoals] = useState([]);
    const [inputAmounts, setInputAmounts] = useState({});

    // Retrieve goals from local storage when the component mounts
    useEffect(() => {
        const storedGoals = JSON.parse(localStorage.getItem('goals'));
        console.log('Retrieved goals from local storage:', storedGoals); // Debug log
        if (storedGoals) {
            setGoals(storedGoals);
        }
    }, []);

    // Save goals to local storage whenever they are updated
    useEffect(() => {
        console.log('Saving goals to local storage:', goals); // Debug log
        localStorage.setItem('goals', JSON.stringify(goals));
    }, [goals]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newGoalName && newGoalAmount) {
            const newGoal = {
                id: goals.length + 1,
                name: newGoalName,
                target: Number(newGoalAmount),
                saved: 0
            };
            console.log('Adding new goal:', newGoal); // Debug log
            setGoals([...goals, newGoal]);
            setNewGoalName('');
            setNewGoalAmount('');
            setValidated(false);
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
    };

    const handleResetAmount = () => {
        setInputAmounts({});

        // Reset the goals array
        const updatedGoals = goals.map(goal => ({ ...goal, saved: 0 }));
        setGoals(updatedGoals);
    };

    const handleDeleteGoal = (goalId) => {
        const updateGoals = goals.filter(goal => goal.id !== goalId);
        setGoals(updateGoals);
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
                {goals.map(goal => (
                    <div key={goal.id} className="mb-3">
                        <h6>{goal.name}: ${goal.target.toLocaleString()}</h6>
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
                        <button onClick={() => handleAddAmount(goal.id)} className="btn btn-primary">Add Amount</button>
                        <button onClick={handleResetAmount} className="btn btn-warning ml-2">Reset Amount</button>
                        <button onClick={() => handleDeleteGoal(goal.id)} className="btn btn-danger ml-2">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Goals;