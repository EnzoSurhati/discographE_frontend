import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-4 bg-gray-500 text-black py-2 px-4 rounded-md hover:bg-gray-600 transition"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;