import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../UserContext"; // Import useUser hook

function Header() {
    const { user } = useUser(); // Get user data
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false); // Profile dropdown

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

    return (
        <header className="bg-black p-6 shadow-lg">
            <nav className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">
                    <Link to="/home">MyBrand</Link>
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
                    ${isMenuOpen ? "block" : "hidden md:flex"}`}
                >
                    <li><Link to="/" className="text-white hover:text-yellow-300">Welcome</Link></li>
                    <li><Link to="/home" className="text-white hover:text-yellow-300">Home</Link></li>
                    <li><Link to="/article" className="text-white hover:text-yellow-300">Article</Link></li>
                    <li><Link to="/about" className="text-white hover:text-yellow-300">About</Link></li>
                    <li><Link to="/Categories" className="text-white hover:text-yellow-300">Categories</Link></li>
                    <li><Link to="/AuthForm" className="text-white hover:text-yellow-300">Login</Link></li>

                    {/* User Profile Dropdown */}
                    <li className="relative">
                        <button
                            onClick={toggleProfile}
                            className="text-white hover:text-yellow-300 flex items-center space-x-2"
                        >
                            <span>profile</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {isProfileOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">
                                    View Profile
                                </Link>
                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                                    Logout
                                </button>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
