import React, { createContext, useContext, useState } from "react";

// Create context
export const UserContext = createContext();

// Create provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        avatar: "https://via.placeholder.com/150",
        role: "viewer", // Default role
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the context
export const useUser = () => {
    return useContext(UserContext);
};
