import React from "react";

function Article() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-r from-blue-50 to-purple-100 p-6">
            <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-4xl w-full border border-gray-200">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
                    Welcome to the Article Page
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    This is a sample article page. Here you can find insightful content on various topics ranging from
                    <span className="text-blue-600 font-semibold"> technology</span>,
                    <span className="text-green-600 font-semibold"> lifestyle</span>, and more. We aim to bring you
                    well-researched and engaging articles to enhance your knowledge and keep you informed about the
                    latest trends and developments. Stay tuned for thought-provoking stories and expert opinions.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-6 bg-blue-50 p-4 rounded-md">
                    "The art of writing is the art of discovering what you believe." – Gustave Flaubert
                </blockquote>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Whether you're here to dive into deep discussions or simply explore new ideas, our articles cater to
                    curious minds like yours. We believe that continuous learning and staying updated is key to personal
                    and professional growth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Latest in Technology</h3>
                        <p className="text-gray-600 text-md">Discover the latest innovations, tech reviews, and expert insights on emerging technologies.</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Lifestyle Tips</h3>
                        <p className="text-gray-600 text-md">Explore tips on wellness, productivity, and ways to enhance your everyday life.</p>
                    </div>
                </div>
                <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md hover:shadow-lg transition duration-300">
                    Read More Articles
                </button>
            </div>
        </div>
    );
}

export default Article;
