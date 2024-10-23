import React, { useEffect, useState } from 'react';
import { getCategories } from '../api';

const Categories = () => {
    const [Categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(data => setCategories(data)).catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Category List</h2>
            <ul>
                {Categories.map(Categories => (
                    <li key={Categories.uuid}>{Categories.category}</li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
