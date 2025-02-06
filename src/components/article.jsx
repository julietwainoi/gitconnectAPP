import React from "react";

function Article() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                    Welcome to the Article Page
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    This is a sample article page. Here you can find insightful content on various topics ranging from
                    technology, lifestyle, and more. We aim to bring you well-researched and engaging articles to enhance your
                    knowledge and keep you informed about the latest trends and developments.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4">
                    "The art of writing is the art of discovering what you believe." – Gustave Flaubert
                </blockquote>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                    Read More Articles
                </button>
            </div>
        </div>
    );
}


export default Article;
