import React, { useState } from "react";
import axios from "axios";

function Login( {setLoggedIn, darkMode, toggleDarkMode} ) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Please fill in all fields');
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post('http://127.0.0.1:5000/login', 
                { username, password },
                { headers: { 'Content-Type': 'application/json' } }
            );
            if (response.status === 200) {
                setLoggedIn(true);
            }
        } catch (err) {
            setLoading(false);
            setError('Invalid Credentials');
        }
    };
    return (
        <div className={`container mt-5 ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="form-group mb-3">
                    <label>Username :</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        // required
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Password :</label>
                    <div className="input-group">
                        <input 
                            type={showPassword ? "text" : "password" }
                            className="form-control"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            // required
                        />
                        <div className="input-group-append">
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="form-group form-check">
                    <input 
                        type="checkbox"
                        className="form-check-input" 
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.value)}
                    />
                    <label className="form-checked-label" htmlFor="rememberMe">Remember Me</label>
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                    {loading ? 'Logging in ...' : 'Login'}
                </button>
                <div className="text-center mt-3">
                    <a href="/forgot-password">Forgot Password?</a>
                </div>
                <button onClick={toggleDarkMode} className="btn btn-secondary mt-3">
                    {darkMode ? 'Light' : 'Dark'} Mode
                </button>
            </form>
        </div>
        
    );
}

export default Login;