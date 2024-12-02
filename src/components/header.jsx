import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu visibility on mobile
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-gradient-to-r from-blue-800 to-blue-600 p-6 shadow-lg">
            <nav className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">
                    <Link to="/">MyBrand</Link>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <ul
                    className={`flex md:flex-row flex-col md:space-x-6 space-y-4 md:space-y-0 absolute md:relative bg-blue-600 md:bg-transparent w-full md:w-auto p-6 md:p-0 top-16 left-0 md:top-0 md:left-0 transition-all duration-300 ease-in-out 
                    ${isMenuOpen ? 'block' : 'hidden md:flex'}`} // <-- Key change here
                >
                    <li>
                        <Link
                            to="/"
                            className="text-white hover:text-yellow-300 transition duration-300 ease-in-out text-lg"
                        >
                            Test
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/home"
                            className="text-white hover:text-yellow-300 transition duration-300 ease-in-out text-lg"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/article"
                            className="text-white hover:text-yellow-300 transition duration-300 ease-in-out text-lg"
                        >
                            Article
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="text-white hover:text-yellow-300 transition duration-300 ease-in-out text-lg"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Categories"
                            className="text-white hover:text-yellow-300 transition duration-300 ease-in-out text-lg"
                        >
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/LoginForm"
                            className="text-white hover:text-yellow-300 transition duration-300 ease-in-out text-lg"
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
