import React from "react";
import { useUserInfoQuery } from "./accountSlice";
import { useDeleteAlbumMutation } from "./albumSlice";
import DeleteUserButton from './DeleteUserButton';
import LogoutButton from "./LogoutButton";

 function Account() {
  const { data: userInfo, isLoading, error } = useUserInfoQuery();
  const [deleteReservation] = useDeleteAlbumMutation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const returnAlbum = async (id) => {
    const response = await deleteReservation(id);
    console.log(response);
  };

  console.log(userInfo);

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      {/* Profile Section */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="h-20 w-20 rounded-full ring-2 ring-gray-300"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">Profile</h2>
            <p className="text-gray-700"><strong>Email:</strong> {userInfo.email}</p>
            <p className="text-gray-700">Name: {userInfo.firstname} {userInfo.lastname}</p>
            <p className="text-sm text-gray-500">ID: {userInfo.id}</p>
          </div>
          <div className="flex gap-3 mt-4">
            <DeleteUserButton email={userInfo.email} />
            <LogoutButton />
          </div>
        </div>
      </div>

      {/* Reservations */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Reservations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userInfo.albums?.map((album) => (
            <div key={album.id} className="relative bg-white rounded-xl shadow-md overflow-hidden p-5 group">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900 opacity-25 group-hover:opacity-40 rounded-xl"></div>
              <img className="h-32 object-cover rounded-md mb-3" src={album.posterUrl} alt={album.title} />
              <h3 className="text-lg font-semibold">{album.title}</h3>
              <p className="text-xs">{album.description}</p>
              <button
                onClick={() => returnAlbum(album.id)}
                className="mt-4 px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded hover:bg-red-700"
              >
                Cancel Reservation
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Account;