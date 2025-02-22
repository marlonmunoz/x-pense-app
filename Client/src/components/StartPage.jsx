import React from "react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/dashboard');
    };

    return (
        <div className="start-page">
            <h4>Welcome to</h4>
            <h1>X-PENSE</h1>
            <button onClick={handleStartClick} className="btn btn-success">Start</button>
        </div>
    );
};

export default StartPage;
