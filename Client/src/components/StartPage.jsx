import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import intro_01 from '../assets/sounds/intro_01.mp3'

const StartPage = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        const audio = new Audio(intro_01);
        audio.volume = 0.1;
        audio.play().catch(error => {
            console.error("Error playing audio", error)
        })
        navigate('/dashboard');
    };

    return (
        <div className="start-page-container">
            <div className="start-page-content">
                <h6 className="fade-in">Welcome to</h6>
                <h1 className="intro metallic-shadow fade-in">X-PENSE</h1>
                <p className="subtitle fade-in">Your Friendly Budget Tracker</p>
            <button onClick={handleStartClick} className="btn btn-success fade-in">Get Started </button>
            </div>
        </div>
        
    );
};

export default StartPage;
