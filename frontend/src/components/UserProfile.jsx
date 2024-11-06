// src/components/UserProfile.jsx
import React from 'react';
import { useSelector } from 'react-redux'; // Import the useSelector hook

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user); // Access global user state

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8">Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default UserProfile;
