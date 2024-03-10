import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div className="max-w-md mx-auto mt-8 p-7 border rounded-lg shadow-lg bg-white">
        <div className="flex items-center justify-center mb-4 p-10">
          <img
            src={user.picture}
            alt={user.name}
            className="rounded-full h-20 w-20 object-cover"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <div className="mt-4">
          <p className="text-gray-700">
            <strong>Account info last updated:</strong>{" "}
            {new Date(user.updated_at).toLocaleDateString()}
          </p>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </div>
    )
  );
};

export default Profile;
