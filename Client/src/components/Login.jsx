import React, { useState } from "react";
import axios from "axios";

function Login( {setLoggedIn, darkMode, toggleDarkMode} ) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // No Authetification
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Please fill in all fields');
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post('http://127.0.0.1:5001/login', 
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
                    <label htmlFor="username">Username :</label>
                    <input 
                        type="text" 
                        id="username"
                        name="username"
                        className="form-control"
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        autoComplete="on"
                        // required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password :</label>
                    <div className="input-group">
                        <input 
                            type={showPassword ? "text" : "password" }
                            id="password"
                            name="password"
                            className="form-control"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            autoComplete="on"
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
                        name="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.value)}
                        autoComplete="on"
                    />
                    <label className="form-checked-label" htmlFor="rememberMe">Remember Me</label>
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button 
                    type="submit" 
                    className="btn btn-primary btn-block" 
                    disabled={loading}
                >
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


/*
JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.

Structure of a JWT
A JWT is composed of three parts:

1. Header: Typically consists of two parts: the type of the token (JWT) and the signing algorithm being used (e.g., HMAC SHA256 or RSA).
2. Payload: Contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.
3. Signature: To create the signature part, you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

Example of a JWT

Header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Payload: eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
Signature: SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
How JWT Works
Client Authentication: The client sends a request with credentials (e.g., username and password) to the server.
Token Generation: The server verifies the credentials and generates a JWT, which is then sent back to the client.
Token Storage: The client stores the JWT (typically in local storage or cookies).
Authenticated Requests: For subsequent requests, the client sends the JWT in the Authorization header.
Token Verification: The server verifies the JWT and processes the request if the token is valid.
*/