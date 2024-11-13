import React from "react";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
            {/* Hero Section */}
            <div className="max-w-4xl w-full text-center">
                <h1 className="text-5xl font-extrabold mb-4">
                    Welcome to Our Amazing Home Page
                </h1>
                <p className="text-xl leading-relaxed mb-6">
                    Discover incredible content, explore new insights, and dive into a world of endless possibilities.
                    We are here to provide you with the best experience and keep you engaged with our dynamic offerings.
                </p>
                <button
                    className="mt-6 px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 hover:shadow-lg transition duration-300"
                    onClick={() => alert('Getting Started!')}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default Home;
