import React, { createContext, useState } from 'react';


export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'John Doee',
        role: 'admin', // Initial role
    });

    // Function to change the user's role
    const setRole = (newRole) => {
        setUser((prevUser) => ({
            ...prevUser,
            role: newRole, // Update the role in the user state
        }));
    };

    return (
        <UserContext.Provider value={{ user, setUser, setRole }}>
            {children}
        </UserContext.Provider>
    );
};
