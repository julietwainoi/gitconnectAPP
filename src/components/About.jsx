import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

function About({ name }) {
    const { user } = useContext(UserContext);

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-blue-50 text-gray-800 p-6 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">About Page</h1>
            <p className="text-lg max-w-xl text-center leading-relaxed">
                This is about <span className="font-semibold text-blue-600">{name}</span>, but you're logged in as{' '}
                <span className="font-semibold text-blue-600">{user.name}</span> ({user.role}).
            </p>
        </div>
    );
}

export default About;
