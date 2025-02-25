import React from "react";
import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  console.log(wishlist);

  return (
    <div className="w-1/3 bg-white p-4 rounded-lg shadow-lg absolute top-16 right-4">
      <h2 className="text-xl font-semibold mb-2">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Wishlist is empty</p>
      ) : (
        <ul>
          {wishlist.map((album, index) => (
            <li key={index} className="flex justify-between items-center border-b py-2">
              <span>{album.product.title}</span>
              <h3>{album.quantity}</h3>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => removeFromWishlist(album.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;