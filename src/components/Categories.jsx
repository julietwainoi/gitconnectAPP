import React, { useEffect, useState } from 'react';
import { getCategories } from '../api';

const Categories = () => {
    const [Categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCategories()
            .then(data => setCategories(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false)); // Ensure loading is set to false regardless of success or failure
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Category List</h2>

                {loading ? (
                    <p className="text-blue-500 text-center animate-pulse">Loading categories...</p>
                ) : Categories.length === 0 ? (
                    <p className="text-gray-500 text-center"> categories not available to display.</p>
                ) : (
                    <ul className="divide-y divide-gray-200">
                        {Categories.map(category => (
                            <li
                                key={category.uuid}
                                className="py-3 flex justify-between items-center hover:bg-gray-100 transition"
                            >
                                <span className="text-gray-700 font-medium">{category.category}</span>
                                <span className="text-gray-500 text-sm">ID: {category.uuid}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Categories;
