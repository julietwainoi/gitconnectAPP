import React, { useEffect, useState } from "react";

function Home() {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setContent({
                title: "Welcome to Our Amazing Home page",
                description:
                    "Discover incredible content, explore new insights, and dive into a world of endless possibilities. We are here to provide you with the best experience and keep you engaged with our dynamic offerings.",
                buttonText: "Get Started",
            });
            setLoading(false);
        }, 1000); // Simulating a 1-second fetch delay
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-6">
            {loading ? (
                <p className="text-2xl animate-pulse">Loading...</p>
            ) : (
                <div className="max-w-4xl w-full text-center">
                    <h1 className="text-5xl font-extrabold mb-4">{content.title}</h1>
                    <p className="text-xl leading-relaxed mb-6">{content.description}</p>
                    <button
                        className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg transition duration-300"
                        onClick={() => alert('Getting Started!')}
                    >
                        {content.buttonText}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Home;
