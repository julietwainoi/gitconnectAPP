import React, { useState } from 'react';
import { login } from '../api';  // Import the login function from the api.js file

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent the form from refreshing the page
        try {
            const response = await login(email, password);
            console.log('Login successful:', response);
            // Handle the login success (e.g., store token, redirect)
        } catch (error) {
            console.error('Login failed:', error);
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default LoginForm;
