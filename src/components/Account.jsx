import React from "react";
import { useUserInfoQuery } from "../../../src/components/accountSlice";
import { useDeleteAlbumMutation } from "../../../src/components/albumSlice";

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
    <div className="flex max-w-4xl mx-auto p-4">
      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="h-16 w-16 rounded-full ring-2 ring-white"
          />
          <div>
            <h2 className="text-xl font-bold">Profile</h2>
            <p>Email: {userInfo.email}</p>
            <p>Name: {userInfo.firstName} {userInfo.lastName}</p>
            <p>ID: {userInfo.id}</p>
          </div>
        </div>
      </div>

      {/* Album Reservations */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Your Album Reservations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userInfo.albums.map((album) => (
            <div key={album.id} className="relative bg-white rounded-xl shadow-md overflow-hidden p-5 group">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900 opacity-25 group-hover:opacity-40 rounded-xl"></div>
              <img className="h-32 object-cover rounded-md mb-3" src={album.coverImage} alt={album.title} />
              <h3 className="text-lg font-semibold">{album.title}</h3>
              <p className="text-sm text-gray-500">{album.artist}</p>
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