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
import About from "./About.jsx"; // Import the About component
import Categories from "./Categories.jsx";
import LoginForm from "./login.jsx";
import { UserProvider } from "../UserContext";

function App() {
    return (
        <UserProvider>
            <Router>
                <div className="pt-50">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Test />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/article" element={<Article />} />
                            <Route
                                path="/about"
                                element={<About name="John Doe" />} // Passing props here
                            />
                            <Route path="/Categories" element={<Categories />} />
                            <Route path="/LoginForm" element={<LoginForm />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;



