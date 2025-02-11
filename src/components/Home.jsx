import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetAlbumsQuery } from "../../discographE_frontend/src/components/albumSlice";

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
        placeholder="Search the collection..."
        value={search}
        onChange={(e) => setSearch(e.target.value)} className="mb-4 p-2 border rounded"
      />
      <div className="grid grid-cols-4 gap-4 rtl">
        {filteredAlbums.map((album) => (
          <div key={album.id} className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900 opacity-25 group-hover:opacity-40 rounded-xl"></div>
            <a href={`/albums/${album.id}`} className="block p-4 relative z-10">
              <img
                src={album.coverimage}
                alt={album.title}
                className="w-full h-auto mb-2 max-h-52 object-cover" style={{maxHeight: '400px'}}
              />
              <div className="font-semibold text-lg text-center">{album.title}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;