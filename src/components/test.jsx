import React, { useContext } from "react";
import { UserContext } from '../UserContext';

function Test({ name }) {
    const { user } = useContext(UserContext);

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800 p-8 rounded-lg shadow-lg">
            <h1 className="text-5xl font-extrabold text-blue-700 mb-6 animate-pulse">
                Welcome!
            </h1>
            <p className="text-2xl max-w-2xl text-center leading-relaxed mb-4">
                Hello, <span className="font-bold text-blue-700">{user.name}</span>!
            </p>
            <p className="text-xl max-w-2xl text-center leading-relaxed bg-white p-4 rounded-lg shadow-md">
                You are logged in as <span className="font-semibold text-green-600">{user.name}</span>,
                holding the role of <span className="font-semibold text-red-600">{user.role}</span>.
            </p>
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transform hover:scale-105 transition-all">
                Explore Dashboard
            </button>
        </div>
    );
}

export default Test;
