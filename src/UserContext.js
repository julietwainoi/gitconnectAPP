import React, { createContext, useContext, useState } from "react";

// Create context
export const UserContext = createContext();

// Create provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "John Doe",
        role: "viewer", // Default role
    });

    // Define permissions
    const permissions = {
        admin: ["read", "write", "delete"],
        editor: ["read", "write"],
        viewer: ["read"],
    };

    // Check if user has permission
    const hasPermission = (action) => {
        return permissions[user.role]?.includes(action);
    };

    // Function to change role
    const setRole = (newRole) => {
        setUser((prevUser) => ({
            ...prevUser,
            role: newRole,
        }));
    };

    return (
        <UserContext.Provider value={{ user, setUser, setRole, hasPermission }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the context
export const useUser = () => {
    return useContext(UserContext);
};
