import React from "react";

function Test() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            {/* Welcome Message */}
            <h1 className="text-6xl font-extrabold text-blue-600 mb-6 animate-fade-in">
                Welcome to Our Platform!
            </h1>

            {/* Subtext */}
            <p className="text-2xl max-w-3xl text-center leading-relaxed mb-6">
                Discover new features, explore possibilities, and make the most of your experience.
                We're glad to have you here!
            </p>

            {/* Decorative Elements */}
            <div className="flex space-x-6 my-6">
                <div className="bg-blue-100 p-4 rounded-full shadow-md">
                    <i className="fas fa-chart-line text-blue-600 text-4xl"></i>
                </div>
                <div className="bg-indigo-100 p-4 rounded-full shadow-md">
                    <i className="fas fa-cogs text-indigo-600 text-4xl"></i>
                </div>
                <div className="bg-green-100 p-4 rounded-full shadow-md">
                    <i className="fas fa-users text-green-600 text-4xl"></i>
                </div>
            </div>

            {/* Call to Action Button */}
            <button className="mt-8 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all">
                Get Started
            </button>
        </div>
    );
}

export default Test;
