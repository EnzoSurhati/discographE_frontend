import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetAlbumsQuery } from "./albumSlice";

function Home() {
  const [search, setSearch] = useState(""); 
  const {data: albums =[], isLoading, error} = useGetAlbumsQuery(); 

  if(isLoading){
    return <p className="text-center text-lg">Loading...</p>
  }

  if(error){
    return <p className="text-center text-red-500">Error: {error.message}</p>
  }
  console.log(albums);
  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-bold my-4">Albums</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)} className="mb-4 p-2 border rounded"
      />
      <div className="grid grid-cols-4 gap-6 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredAlbums.map((album) => (
          <div key={album.id} className="bg-white rounded-md shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900 opacity-25 group-hover:opacity-40 rounded-xl"></div> */}
            <a href={`/albums/${album.id}`} className="block relative">
              <img
                src={album.posterUrl}
                alt={album.title}
                className="w-full h-[250px] object-cover rounded-md" 
              />
              <h3>Price: ${album.price}</h3>
              <div className="text-sm text-center font-medium mt-2">{album.title}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;