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
