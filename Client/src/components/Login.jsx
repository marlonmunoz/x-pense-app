import React, { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { api, setToken } from "../config/api";

const MIN_PASSWORD_LENGTH = 8;

// The words shown on the page for each mode.
const COPY = {
    signup: {
        title: 'Create your account',
        subtitle: 'Your expenses, budgets and goals stay private to your account.',
        button: 'Create account',
        busy: 'Creating account...',
    },
    login: {
        title: 'Welcome back',
        subtitle: 'Log in to see your dashboard.',
        button: 'Log in',
        busy: 'Logging in...',
    },
    forgot: {
        title: 'Forgot your password?',
        subtitle: "Enter your email and we'll send you a link to choose a new one.",
        button: 'Send reset link',
        busy: 'Sending...',
    },
    reset: {
        title: 'Choose a new password',
        subtitle: 'Enter a new password for your account.',
        button: 'Update password',
        busy: 'Updating...',
    },
};

function Login({ onAuthenticated, darkMode, toggleDarkMode }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    // The reset link in the email looks like /reset-password?token=...
    const resetToken = searchParams.get('token') || '';

    // 'signup', 'login', 'forgot' (ask for a reset email) or 'reset' (choose a new password).
    const [mode, setMode] = useState(location.pathname === '/reset-password' ? 'reset' : 'signup');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [notice, setNotice] = useState('');
    const [loading, setLoading] = useState(false);

    const isSignup = mode === 'signup';
    const isLogin = mode === 'login';
    const isForgot = mode === 'forgot';
    const isReset = mode === 'reset';
    const copy = COPY[mode];

    const switchTo = (newMode) => {
        setMode(newMode);
        setError('');
        setNotice('');
        setPassword('');
        setConfirmPassword('');
    };

    // Used after a reset (or from the "forgot" screen) to return to a clean log-in page.
    const goToLogin = () => {
        switchTo('login');
        navigate('/login');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (isForgot) {
            if (!email.trim()) {
                setError('Please enter your email');
                return;
            }
            setLoading(true);
            try {
                const response = await api.post('/forgot-password', { email: email.trim() });
                setNotice(response.data.message);
            } catch (err) {
                setError(err.response?.data?.error || 'Could not reach the server. Please try again.');
            }
            setLoading(false);
            return;
        }

        if (isReset) {
            if (!resetToken) {
                setError('This reset link is incomplete. Please request a new one.');
                return;
            }
            if (password.length < MIN_PASSWORD_LENGTH) {
                setError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters`);
                return;
            }
            if (password !== confirmPassword) {
                setError('Passwords do not match');
                return;
            }
            setLoading(true);
            try {
                const response = await api.post('/reset-password', { token: resetToken, password });
                setNotice(response.data.message);
            } catch (err) {
                setError(err.response?.data?.error || 'Could not reach the server. Please try again.');
            }
            setLoading(false);
            return;
        }

        // Sign up or log in.
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
            <h2 className="text-center mb-2">{copy.title}</h2>
            <p className="text-center mb-4">{copy.subtitle}</p>
            <form onSubmit={handleSubmit} className="w-50 mx-auto" style={{ minWidth: '280px', maxWidth: '420px' }}>
                {notice ? (
                    // Success: replace the form fields with the server's message.
                    <div className="text-center">
                        <p role="status">{notice}</p>
                        {isForgot && (
                            <p>
                                <small>
                                    Nothing after a few minutes? Check your spam folder and make sure
                                    the address is spelled correctly.
                                </small>
                            </p>
                        )}
                        <button type="button" className="btn btn-primary w-100" onClick={goToLogin}>
                            {isForgot ? 'Back to log in' : 'Log in'}
                        </button>
                    </div>
                ) : (
                    <>
                        {!isReset && (
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
                        )}
                        {!isForgot && (
                            <div className="form-group mb-3">
                                <label htmlFor="password">{isReset ? 'New password' : 'Password'}</label>
                                <div className="input-group">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete={isLogin ? "current-password" : "new-password"}
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                                {(isSignup || isReset) && (
                                    <small>At least {MIN_PASSWORD_LENGTH} characters.</small>
                                )}
                                {isLogin && (
                                    <div className="text-end">
                                        <button
                                            type="button"
                                            className="btn btn-link p-0 align-baseline"
                                            onClick={() => switchTo('forgot')}
                                        >
                                            Forgot password?
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                        {(isSignup || isReset) && (
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
                            {loading ? copy.busy : copy.button}
                        </button>
                        <div className="text-center mt-3">
                            {(isSignup || isLogin) ? (
                                <>
                                    {isSignup ? 'Already have an account? ' : 'New here? '}
                                    <button
                                        type="button"
                                        className="btn btn-link p-0 align-baseline"
                                        onClick={() => switchTo(isSignup ? 'login' : 'signup')}
                                    >
                                        {isSignup ? 'Log in' : 'Create an account'}
                                    </button>
                                </>
                            ) : (
                                <button type="button" className="btn btn-link p-0 align-baseline" onClick={goToLogin}>
                                    Back to log in
                                </button>
                            )}
                        </div>
                    </>
                )}
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
