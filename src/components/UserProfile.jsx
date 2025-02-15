import React from "react";
import { useUser } from "../UserContext";

const UserProfile = () => {
    const { user } = useUser();

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 text-gray-900">
            <h2 className="text-xl font-bold text-center">User Profile</h2>
            <div className="flex flex-col items-center space-y-3">
                <img src={user.avatar || "default-avatar.png"} alt="User Avatar" className="w-24 h-24 rounded-full border border-gray-300" />
                <p className="text-lg font-semibold">{user.name}</p>
                <p className="text-sm text-gray-600">Email: {user.email}</p>
                <p className="text-sm text-gray-600">Role: {user.role}</p>
            </div>
        </div>
    );
};

export default UserProfile;
