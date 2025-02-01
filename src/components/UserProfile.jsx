import React from "react";
import { useUser } from "../UserContext";

const UserProfile = () => {
    const { user, setRole, hasPermission } = useUser();

    return (
        <div>
            <h2>Welcome, {user.name}!</h2>
            <p>Current Role: {user.role}</p>

            {/* Conditionally render buttons based on permissions */}
            {hasPermission("write") && <button>Edit Content</button>}
            {hasPermission("delete") && <button>Delete Content</button>}

            <h3>Change Role:</h3>
            <button onClick={() => setRole("viewer")}>Set to Viewer</button>
            <button onClick={() => setRole("editor")}>Set to Editor</button>
            <button onClick={() => setRole("admin")}>Set to Admin</button>
        </div>
    );
};

export default UserProfile;
