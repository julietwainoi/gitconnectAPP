import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header.jsx";
import Article from "./article.jsx";
import Footer from "./footer.jsx";
import Test from "./test.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx"; // Import the About component
import Categories from "./Categories.jsx";
import UserProfile from "./UserProfile.jsx";
import AuthForm from "./login.jsx";
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
                            <Route path="/about" element={<About />} /> {/*} Passing props here */}

                            <Route path="/Categories" element={<Categories />} />
                            <Route path="/AuthForm" element={<AuthForm />} />
                            <Route path="/profile" element={<UserProfile />} /> {/* Add this */}
                        </Routes>
                    </main>
                    <Footer className="mt-auto" />
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;



