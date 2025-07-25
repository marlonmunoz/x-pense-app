import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar'


const Goals = ( {newGoalName, setNewGoalName, newGoalAmount, setNewGoalAmount, goals, setGoals, inputAmounts, setInputAmounts, validated, setValidated, editingGoalId, setEditingGoalId, editedGoalName, setEditedGoalName, formatCurrency, darkMode } ) => {

    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [celebrateGoal, setCelebrateGoal] = useState(null);
    const [animateProgress, setAnimateProgress] = useState({});

    // Retrieve goals from the backend when the component mounts
    useEffect(() => {
        console.log('GOALS COMPONENT');
        
        console.log('Fetching goals from backend'); // Debug log
        setIsLoading(true);
        fetch('http://localhost:5001/goals')
            .then(response => response.json())
            .then(data => {
                console.log('Retrieved goals from backend:', data); // Debug log
                setGoals(data);
            })
            .catch(error => console.error('Error fetching goals:', error))
            .finally(() => setIsLoading(false));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setValidated(true);
        
        if (newGoalName && newGoalAmount) {
            setIsLoading(true);
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
                setSuccessMessage('🎯 Goal added successfully!');
                setTimeout(() => setSuccessMessage(''), 3000);
            })
            .catch(error => {
                console.error('Error adding goal:', error);
                setSuccessMessage('❌ Failed to add goal. Please try again.');
                setTimeout(() => setSuccessMessage(''), 3000);
            })
            .finally(() => setIsLoading(false));
        }
    };

    const handleAddAmount = (goalId) => {
        const amountToAdd = Number(inputAmounts[goalId] || 0);
        if (amountToAdd <= 0) {
            setSuccessMessage('⚠️ Please enter a valid amount greater than 0');
            setTimeout(() => setSuccessMessage(''), 3000);
            return;
        }

        setInputAmounts({ ...inputAmounts, [goalId]: '' });
        setIsLoading(true);

        // Update the goals array
        const updatedGoals = goals.map(goal => {
            if (goal.id === goalId) {
                const newSaved = goal.saved + amountToAdd;
                const wasCompleted = goal.saved >= goal.target;
                const isNowCompleted = newSaved >= goal.target;
                
                // Trigger celebration if goal is newly completed
                if (!wasCompleted && isNowCompleted) {
                    setCelebrateGoal(goalId);
                    setTimeout(() => setCelebrateGoal(null), 3000);
                    setSuccessMessage('🎉 Congratulations! Goal completed!');
                    setTimeout(() => setSuccessMessage(''), 5000);
                }
                
                return { ...goal, saved: newSaved };
            }
            return goal;
        });
        setGoals(updatedGoals);

        // Animate progress update
        setAnimateProgress({ ...animateProgress, [goalId]: true });
        setTimeout(() => {
            setAnimateProgress({ ...animateProgress, [goalId]: false });
        }, 1000);

        // Update the goal in the backend
        const goalToUpdate = updatedGoals.find(goal => goal.id === goalId);
        fetch(`http://localhost:5001/goals/${goalId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(goalToUpdate)
        })
        .then(() => {
            setSuccessMessage('💰 Amount added successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
        })
        .catch(error => {
            console.error('Error updating goal:', error);
            setSuccessMessage('❌ Failed to update goal. Please try again.');
            setTimeout(() => setSuccessMessage(''), 3000);
        })
        .finally(() => setIsLoading(false));
    };

    const handleResetAmount = (goalId) => {
        // Reset the input amount for the specific goal
        setInputAmounts({ ...inputAmounts, [goalId]: '' });
        setIsLoading(true);
    
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
        .then(() => {
            setSuccessMessage('🔄 Goal progress reset successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
        })
        .catch(error => {
            console.error('Error resetting goal amount:', error);
            setSuccessMessage('❌ Failed to reset goal. Please try again.');
            setTimeout(() => setSuccessMessage(''), 3000);
        })
        .finally(() => setIsLoading(false));
    };

    const handleDeleteGoal = (goalId) => {
        setIsLoading(true);
        const updateGoals = goals.filter(goal => goal.id !== goalId);
        setGoals(updateGoals);

        // Delete the goal from the backend
        fetch(`http://localhost:5001/goals/${goalId}`, {
            method: 'DELETE'
        })
        .then(() => {
            setSuccessMessage('🗑️ Goal deleted successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
        })
        .catch(error => {
            console.error('Error deleting goal:', error);
            setSuccessMessage('❌ Failed to delete goal. Please try again.');
            setTimeout(() => setSuccessMessage(''), 3000);
        })
        .finally(() => {
            setIsLoading(false);
            setDeleteConfirm(null);
        });
    };

    const handleDeleteClick = (goalId) => {
        setDeleteConfirm(goalId);
    };


    // Functions for EDIT, SAVE and CANCEL
    const handleEdit = (goalId, currentName) => {
        setEditingGoalId(goalId)
        setEditedGoalName(currentName)
    };

    const handleSave = (goalId) => {
        if (!editedGoalName.trim()) {
            setSuccessMessage('⚠️ Goal name cannot be empty');
            setTimeout(() => setSuccessMessage(''), 3000);
            return;
        }

        setIsLoading(true);
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
            setSuccessMessage('✅ Goal updated successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
        })
        .catch(error => {
            console.error('Error updating goal:', error);
            setSuccessMessage('❌ Failed to update goal. Please try again.');
            setTimeout(() => setSuccessMessage(''), 3000);
        })
        .finally(() => setIsLoading(false));
    }

    const handleCancel = () => {
        setEditingGoalId(null);
        setEditedGoalName('');
    }

    const getProgressColor = (percentage) => {
        if (percentage >= 100) return '#10b981'; // Green for completed
        if (percentage >= 75) return '#f59e0b'; // Amber for almost there
        if (percentage >= 50) return '#3b82f6'; // Blue for halfway
        if (percentage >= 25) return '#8b5cf6'; // Purple for getting started
        return '#ef4444'; // Red for just started
    };

    const getProgressMessage = (goal) => {
        const percentage = (goal.saved / goal.target) * 100;
        if (percentage >= 100) return '🎉 Goal Completed!';
        if (percentage >= 75) return '🔥 Almost there!';
        if (percentage >= 50) return '💪 Halfway there!';
        if (percentage >= 25) return '🚀 Great start!';
        return '🎯 Let\'s begin!';
    };

    return (
        <div className='goals-container'>
            <style jsx>{`
                .goals-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }

                .goals-header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 30px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                }

                .goals-header h5 {
                    font-size: 2.5rem;
                    margin: 0 0 10px 0;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                .goals-subtitle {
                    font-size: 1.1rem;
                    opacity: 0.9;
                    margin: 0;
                }

                .form-container {
                    background: ${darkMode ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'};
                    border-radius: 20px;
                    padding: 30px;
                    margin-bottom: 30px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${darkMode ? '2px solid #4a5568' : '2px solid #e2e8f0'};
                }

                .form-subtitle {
                    color: ${darkMode ? '#a0aec0' : '#718096'};
                    font-size: 0.9rem;
                    margin-bottom: 20px;
                    text-align: center;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 25px;
                }

                .form-group {
                    position: relative;
                }

                .form-input {
                    width: 100%;
                    padding: 15px 20px;
                    border: 2px solid ${darkMode ? '#4a5568' : '#e2e8f0'};
                    border-radius: 12px;
                    font-size: 1rem;
                    background: ${darkMode ? '#2d3748' : '#ffffff'};
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .form-input:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
                    transform: translateY(-2px);
                }

                .form-input.is-invalid {
                    border-color: #e53e3e;
                    box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.3);
                }

                .invalid-feedback {
                    color: #e53e3e;
                    font-size: 0.875rem;
                    margin-top: 5px;
                    display: block;
                }

                .submit-button {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    border: none;
                    padding: 15px 30px;
                    border-radius: 12px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                    display: block;
                    margin: 0 auto;
                }

                .submit-button:hover:not(:disabled) {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(56, 161, 105, 0.6);
                }

                .submit-button:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .success-message {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    padding: 15px 20px;
                    border-radius: 12px;
                    margin-bottom: 20px;
                    font-weight: 600;
                    text-align: center;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                    animation: slideIn 0.5s ease;
                }

                @keyframes slideIn {
                    from { transform: translateY(-20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .goals-list-header {
                    text-align: center;
                    margin: 40px 0 20px 0;
                    color: ${darkMode ? '#a0aec0' : '#718096'};
                    font-size: 1.1rem;
                    font-weight: 600;
                }

                .no-goals {
                    text-align: center;
                    padding: 60px 20px;
                    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
                    color: white;
                    border-radius: 15px;
                    font-size: 1.2rem;
                    font-weight: 600;
                    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
                }

                .goal-card {
                    background: ${darkMode ? 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)'};
                    border-radius: 20px;
                    padding: 30px;
                    margin-bottom: 25px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${darkMode ? '2px solid #4a5568' : '2px solid #e2e8f0'};
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .goal-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
                }

                .goal-card.celebrate {
                    animation: celebrate 2s ease-in-out;
                    border-color: #10b981;
                    box-shadow: 0 0 30px rgba(16, 185, 129, 0.6);
                }

                @keyframes celebrate {
                    0%, 100% { transform: scale(1); }
                    25% { transform: scale(1.05) rotate(1deg); }
                    75% { transform: scale(1.05) rotate(-1deg); }
                }

                .goal-header {
                    text-align: center;
                    margin-bottom: 25px;
                }

                .goal-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                    margin-bottom: 10px;
                }

                .goal-target {
                    font-size: 1.2rem;
                    color: #667eea;
                    font-weight: 600;
                }

                .progress-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 30px 0;
                    position: relative;
                }

                .progress-circle {
                    width: 280px;
                    height: 280px;
                    transition: transform 0.5s ease;
                }

                .progress-circle.animate {
                    transform: scale(1.1);
                }

                .progress-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                }

                .progress-percentage {
                    font-size: 2rem;
                    font-weight: 700;
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                    margin-bottom: 5px;
                }

                .progress-message {
                    font-size: 0.9rem;
                    font-weight: 600;
                    opacity: 0.8;
                }

                .goal-stats {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 25px;
                    text-align: center;
                }

                .stat-item {
                    background: ${darkMode ? '#4a5568' : '#f7fafc'};
                    padding: 15px;
                    border-radius: 12px;
                    border: ${darkMode ? '1px solid #6b7280' : '1px solid #e2e8f0'};
                }

                .stat-label {
                    font-size: 0.9rem;
                    color: ${darkMode ? '#a0aec0' : '#718096'};
                    margin-bottom: 5px;
                    font-weight: 600;
                }

                .stat-value {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                }

                .amount-input {
                    width: 100%;
                    padding: 15px 20px;
                    border: 2px solid ${darkMode ? '#4a5568' : '#e2e8f0'};
                    border-radius: 12px;
                    font-size: 1rem;
                    background: ${darkMode ? '#2d3748' : '#ffffff'};
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                    transition: all 0.3s ease;
                    margin-bottom: 20px;
                    text-align: center;
                }

                .amount-input:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
                }

                .action-buttons {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                    gap: 15px;
                }

                .btn-modern {
                    padding: 12px 20px;
                    border: none;
                    border-radius: 10px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }

                .btn-add {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                }

                .btn-add:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(56, 161, 105, 0.6);
                }

                .btn-reset {
                    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
                }

                .btn-reset:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(245, 158, 11, 0.6);
                }

                .btn-delete {
                    background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(245, 101, 101, 0.4);
                }

                .btn-delete:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(245, 101, 101, 0.6);
                }

                .btn-edit {
                    background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(66, 153, 225, 0.4);
                }

                .btn-edit:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(66, 153, 225, 0.6);
                }

                .btn-save {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                }

                .btn-cancel {
                    background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(160, 174, 192, 0.4);
                }

                .btn-modern:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                    transform: none !important;
                }

                .edit-input {
                    width: 100%;
                    padding: 15px 20px;
                    border: 2px solid #667eea;
                    border-radius: 12px;
                    font-size: 1.2rem;
                    background: ${darkMode ? '#2d3748' : '#ffffff'};
                    color: ${darkMode ? '#e2e8f0' : '#2d3748'};
                    text-align: center;
                    margin-bottom: 20px;
                    font-weight: 600;
                }

                .edit-actions {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                }

                .delete-confirm {
                    background: rgba(245, 101, 101, 0.1);
                    border: 2px solid #f56565;
                    border-radius: 12px;
                    padding: 20px;
                    text-align: center;
                    margin-bottom: 20px;
                }

                .confirm-text {
                    color: #e53e3e;
                    font-weight: 600;
                    margin-bottom: 15px;
                    font-size: 1.1rem;
                }

                .confirm-actions {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                }

                .loading-spinner {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border: 2px solid transparent;
                    border-top: 2px solid currentColor;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-right: 8px;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                @media (max-width: 768px) {
                    .form-row {
                        grid-template-columns: 1fr;
                    }
                    
                    .goal-stats {
                        grid-template-columns: 1fr;
                    }
                    
                    .action-buttons {
                        grid-template-columns: 1fr;
                    }
                    
                    .progress-circle {
                        width: 240px;
                        height: 240px;
                    }
                }
            `}</style>

            <div className="goals-header">
                <h5>🎯 Financial Goals</h5>
                <p className="goals-subtitle">Turn your dreams into achievable targets</p>
            </div>

            {successMessage && (
                <div className="success-message">
                    {successMessage}
                </div>
            )}

            <div className="form-container">
                <div className="form-subtitle">✨ Create a new financial goal to track your progress</div>
                <form noValidate onSubmit={handleSubmit} className={`needs-validation ${validated ? 'was-validated' : ''}`}>
                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="text"
                                id="newGoalName"
                                value={newGoalName}
                                onChange={(e) => setNewGoalName(e.target.value)}
                                className={`form-input ${validated && !newGoalName ? 'is-invalid' : ''}`}
                                placeholder="🎯 Goal Name (e.g., New Car, Vacation)"
                                required
                            />
                            <div className="invalid-feedback">
                                Please provide a goal name
                            </div>
                        </div>

                        <div className="form-group">
                            <input
                                type="number"
                                id="newGoalAmount"
                                value={newGoalAmount}
                                onChange={(e) => setNewGoalAmount(e.target.value)}
                                className={`form-input ${validated && !newGoalAmount ? 'is-invalid' : ''}`}
                                placeholder="💰 Target Amount ($)"
                                min="0"
                                step="0.01"
                                required
                            />
                            <div className="invalid-feedback">
                                Please provide a goal amount
                            </div>
                        </div>
                    </div>
                    
                    <button type="submit" className="submit-button" disabled={isLoading}>
                        {isLoading ? <span className="loading-spinner"></span> : ''}
                        {isLoading ? 'Adding Goal...' : '🚀 Create Goal'}
                    </button>
                </form>
            </div>
            
            <div className="goals-list-header">
                💎 YOUR FINANCIAL JOURNEY
            </div>
            
            {isLoading && goals.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                    <div className="loading-spinner" style={{ width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid #667eea' }}></div>
                    <p>Loading your goals...</p>
                </div>
            ) : goals.length === 0 ? (
                <div className="no-goals">
                    🎯 No Goals Have Been Added Yet!
                    <br />
                    <small>Start your financial journey by creating your first goal above.</small>
                </div>
            ) : (
                goals.map((goal) => {
                    const percentage = (goal.saved / goal.target) * 100;
                    const progressColor = getProgressColor(percentage);
                    
                    return (
                        <div key={goal.id} className={`goal-card ${celebrateGoal === goal.id ? 'celebrate' : ''}`}>
                            {editingGoalId === goal.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editedGoalName}
                                        onChange={(e) => setEditedGoalName(e.target.value)}
                                        className="edit-input"
                                        placeholder="Enter new goal name..."
                                    />
                                    <div className="edit-actions">
                                        <button 
                                            onClick={() => handleSave(goal.id)} 
                                            className="btn-modern btn-save"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? <span className="loading-spinner"></span> : ''}
                                            ✅ Save
                                        </button>
                                        <button 
                                            onClick={handleCancel} 
                                            className="btn-modern btn-cancel"
                                        >
                                            ❌ Cancel
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="goal-header">
                                        <div className="goal-title">{goal.name}</div>
                                        <div className="goal-target">Target: {formatCurrency(goal.target)}</div>
                                    </div>

                                    <div className="progress-container">
                                        <div className={`progress-circle ${animateProgress[goal.id] ? 'animate' : ''}`}>
                                            <CircularProgressbar
                                                value={Math.min(percentage, 100)}
                                                strokeWidth={8}
                                                styles={buildStyles({
                                                    textColor: darkMode ? 'white' : 'black',
                                                    pathColor: progressColor,
                                                    trailColor: darkMode ? '#4a5568' : '#e2e8f0',
                                                    pathTransitionDuration: 1.5,
                                                })}
                                            />
                                        </div>
                                        <div className="progress-text">
                                            <div className="progress-percentage" style={{ color: progressColor }}>
                                                {percentage.toFixed(1)}%
                                            </div>
                                            <div className="progress-message" style={{ color: progressColor }}>
                                                {getProgressMessage(goal)}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="goal-stats">
                                        <div className="stat-item">
                                            <div className="stat-label">💰 Saved</div>
                                            <div className="stat-value" style={{ color: '#38a169' }}>
                                                {formatCurrency(goal.saved)}
                                            </div>
                                        </div>
                                        <div className="stat-item">
                                            <div className="stat-label">🎯 Remaining</div>
                                            <div className="stat-value" style={{ color: '#f59e0b' }}>
                                                {formatCurrency(Math.max(0, goal.target - goal.saved))}
                                            </div>
                                        </div>
                                    </div>

                                    <input 
                                        type="number"
                                        id={`inputAmount-${goal.id}`}
                                        name={`inputAmount-${goal.id}`}
                                        value={inputAmounts[goal.id] || ''}
                                        onChange={(e) => setInputAmounts({ ...inputAmounts, [goal.id]: e.target.value })}
                                        className="amount-input"
                                        placeholder="💵 Enter amount to add..."
                                        min="0"
                                        step="0.01"
                                    />

                                    {deleteConfirm === goal.id ? (
                                        <div className="delete-confirm">
                                            <div className="confirm-text">
                                                ⚠️ Are you sure you want to delete "{goal.name}"?
                                            </div>
                                            <div className="confirm-actions">
                                                <button 
                                                    onClick={() => handleDeleteGoal(goal.id)} 
                                                    className="btn-modern btn-delete"
                                                    disabled={isLoading}
                                                >
                                                    {isLoading ? <span className="loading-spinner"></span> : ''}
                                                    🗑️ Yes, Delete
                                                </button>
                                                <button 
                                                    onClick={() => setDeleteConfirm(null)} 
                                                    className="btn-modern btn-cancel"
                                                >
                                                    ↩️ Cancel
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="action-buttons">
                                            <button 
                                                onClick={() => handleAddAmount(goal.id)} 
                                                className="btn-modern btn-add"
                                                disabled={isLoading}
                                            >
                                                {isLoading ? <span className="loading-spinner"></span> : ''}
                                                💰 Add Amount
                                            </button>
                                            <button 
                                                onClick={() => handleResetAmount(goal.id)} 
                                                className="btn-modern btn-reset"
                                                disabled={isLoading}
                                            >
                                                {isLoading ? <span className="loading-spinner"></span> : ''}
                                                🔄 Reset
                                            </button>
                                            <button 
                                                onClick={() => handleDeleteClick(goal.id)} 
                                                className="btn-modern btn-delete"
                                            >
                                                🗑️ Delete
                                            </button>
                                            <button 
                                                onClick={() => handleEdit(goal.id, goal.name)} 
                                                className="btn-modern btn-edit"
                                            >
                                                ✏️ Edit
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    )
                })
            )}
        </div>
    );
};

export default Goals;