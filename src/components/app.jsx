/*import React, { useEffect, useState } from 'react';
import { functions } from '../appwriteConfig'; // Correct path to appwriteConfig


function App() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const callFunction = async () => {
        try {
            const response = await functions.createExecution('66f2c21500251c6b5919'); // Replace with your actual function ID
            setData(response); // Set the response to state
        } catch (err) {
            console.error('Error calling function:', err);
            setError(err.message); // Set error message
        }
    };

    useEffect(() => {
        callFunction(); // Call the function on component mount
    }, []);

    return (
        <div>
            <h1>Response from Appwrite Function:</h1>
            {error && <p>Error: {error}</p>}
            {data && (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
        </div>
    );
}

export default App;*/






import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header.jsx";
import Article from "./article.jsx";
import Footer from "./footer.jsx";
import Test from "./test.jsx";
import Home from "./Home.jsx";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Test />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/article" element={<Article />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;



