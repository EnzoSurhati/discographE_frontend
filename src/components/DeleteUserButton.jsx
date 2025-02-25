import React from 'react';
import { useDeleteUserMutation } from './api';
import { useNavigate } from 'react-router-dom';

const DeleteUserButton = ({ email }) => {
  const navigate = useNavigate();
  const [deleteUser, { isLoading }] = useDeleteUserMutation();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to permanently delete this user?")) {
      try {
        await deleteUser(email).unwrap();
        alert('User deleted successfully!');
        navigate('/registration');
      } catch (error) {
        alert(`Error deleting user: ${error.data.error}`);
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isLoading}
      className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
    >
      {isLoading ? "Deleting..." : "Delete User"}
    </button>
  );
};

export default DeleteUserButton;