import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

function About({ name }) {
    const { user } = useContext(UserContext);

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white-50 text-gray-800 p-6 rounded-lg shadow-md">
            {/* Main Title */}
            <h1 className="text-4xl font-bold text-black-600 mb-4">About Us</h1>

            {/* Welcome Text */}
            <p className="text-lg max-w-xl text-center leading-relaxed mb-6">
                This is about <span className="font-semibold text-blue-600">{name}</span>, but you're logged in as{' '}
                <span className="font-semibold text-blue-600">{user.name}</span> ({user.role}).
            </p>

            {/* Mission Section */}
            <div className="max-w-3xl w-full mb-8 text-center">
                <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our mission is to empower individuals and businesses by providing innovative solutions and high-quality services.
                    We strive to create a positive impact in every community we serve, fostering growth, collaboration, and success.
                </p>
            </div>

            {/* Vision Section */}
            <div className="max-w-3xl w-full mb-8 text-center">
                <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our vision is to become a global leader in providing sustainable and cutting-edge technology solutions.
                    We aim to shape a future where innovation drives progress and creates opportunities for everyone.
                </p>
            </div>

            {/* History Section */}
            <div className="max-w-3xl w-full mb-8 text-center">
                <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our History</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Founded in 2010, we began with a small team and a big vision: to revolutionize the industry with forward-thinking solutions.
                    Over the years, we've grown into a trusted partner for clients worldwide, constantly evolving with the times.
                </p>
            </div>

            {/* Call to Action */}
            <div className="mt-8 space-y-4 text-center">
                <button
                    className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow hover:bg-blue-700 transition duration-300"
                    onClick={() => alert('Learn more clicked!')}
                >
                    Learn More
                </button>
                <button
                    className="px-6 py-3 bg-gray-100 text-blue-600 rounded-full font-medium shadow hover:bg-gray-200 transition duration-300"
                    onClick={() => alert('Contact us clicked!')}
                >
                    Contact Us
                </button>
            </div>
        </div>
    );
}

export default About;
