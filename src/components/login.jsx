import React, { useState } from 'react';
import { login, register } from '../api';  // Import the login and register functions from api.js

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);  // Toggle between login and register
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!isLogin && password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            if (isLogin) {
                const response = await login(email, password);
                console.log('Login successful:', response);
                // Handle login success
            } else {
                const response = await register(email, password);
                console.log('Registration successful:', response);
                // Handle registration success
            }
        } catch (error) {
            console.error(`${isLogin ? 'Login' : 'Registration'} failed:`, error);
            setError(`${isLogin ? 'Login' : 'Registration'} failed. Please try again.`);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    {isLogin ? 'Login' : 'Register'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Confirm Password Input (only for registration) */}
                    {!isLogin && (
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                placeholder="Confirm your password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    )}

                    {/* Error Message */}
                    {error && <p className="text-red-600 text-sm">{error}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
                    >
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>

                {/* Toggle between Login and Register */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-blue-600 hover:underline font-medium"
                    >
                        {isLogin ? 'Register' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default AuthForm;
