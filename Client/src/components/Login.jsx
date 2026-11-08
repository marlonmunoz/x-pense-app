import React, { useState } from "react";
import { api, setToken } from "../config/api";

const MIN_PASSWORD_LENGTH = 8;

function Login({ onAuthenticated, darkMode, toggleDarkMode }) {
    // 'signup' = create a new account, 'login' = sign in to an existing one.
    const [mode, setMode] = useState('signup');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const isSignup = mode === 'signup';

    const switchMode = () => {
        setMode(isSignup ? 'login' : 'signup');
        setError('');
        setPassword('');
        setConfirmPassword('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email.trim() || !password) {
            setError('Please fill in all fields');
            return;
        }
        if (isSignup) {
            if (password.length < MIN_PASSWORD_LENGTH) {
                setError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters`);
                return;
            }
            if (password !== confirmPassword) {
                setError('Passwords do not match');
                return;
            }
        }

        setLoading(true);
        try {
            const response = await api.post(isSignup ? '/register' : '/login', {
                email: email.trim(),
                password,
            });
            setToken(response.data.token);
            onAuthenticated(response.data.user);
        } catch (err) {
            setLoading(false);
            setError(err.response?.data?.error || 'Could not reach the server. Please try again.');
        }
    };

    return (
        <div className={`container mt-5 ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <h2 className="text-center mb-2">{isSignup ? 'Create your account' : 'Welcome back'}</h2>
            <p className="text-center mb-4">
                {isSignup
                    ? 'Your expenses, budgets and goals stay private to your account.'
                    : 'Log in to see your dashboard.'}
            </p>
            <form onSubmit={handleSubmit} className="w-50 mx-auto" style={{ minWidth: '280px', maxWidth: '420px' }}>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete={isSignup ? "new-password" : "current-password"}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    {isSignup && (
                        <small>At least {MIN_PASSWORD_LENGTH} characters.</small>
                    )}
                </div>
                {isSignup && (
                    <div className="form-group mb-3">
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="confirmPassword"
                            name="confirmPassword"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            autoComplete="new-password"
                        />
                    </div>
                )}
                {error && <p className="text-danger" role="alert">{error}</p>}
                <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={loading}
                >
                    {loading
                        ? (isSignup ? 'Creating account...' : 'Logging in...')
                        : (isSignup ? 'Create account' : 'Log in')}
                </button>
                <div className="text-center mt-3">
                    {isSignup ? 'Already have an account? ' : 'New here? '}
                    <button type="button" className="btn btn-link p-0 align-baseline" onClick={switchMode}>
                        {isSignup ? 'Log in' : 'Create an account'}
                    </button>
                </div>
                <div className="text-center">
                    <button type="button" onClick={toggleDarkMode} className="btn btn-secondary mt-3">
                        {darkMode ? 'Light' : 'Dark'} Mode
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
