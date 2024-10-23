import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-gray-800 p-4">
            <nav className="flex justify-end">
                <ul className="flex space-x-4">
                    <li><Link to="/" className="text-white hover:underline">Test</Link></li>
                    <li><Link to="/home" className="text-white hover:underline">Home</Link></li>
                    <li><Link to="/article" className="text-white hover:underline">Article</Link></li>
                    <li><Link to="/about" className="text-white hover:underline">About</Link></li>
                    <li><Link to="/Categories" className="text-white hover:underline">Categories</Link></li>
                    <li><Link to="/LoginForm" className="text-white hover:underline">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
