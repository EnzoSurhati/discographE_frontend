import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import {useGetAlbumQuery, usePatchAlbumMutation} from './albumSlice';
import {useCart} from './context/CartContext'
import { useWishlist } from './context/WishlistContext';

function SingleAlbum() {
  const { id } = useParams();
  const {data: singleAlbum, isLoading, error} = useGetAlbumQuery(id);
  const [patchAlbum] = usePatchAlbumMutation();
  const [purchaseQuantity, setPurchaseQuantity] = useState(0); 
  const {addToCart} = useCart();
  const {addToWishlist} = useWishlist();

  if(isLoading){
    return <p className="text-center text-lg">Loading...</p>;
  }
  if(error){
    return <p className="text-center text-red-500">`Error: ${error.message}`</p>
  }

// async function purchaseAlbum(id, purchaseQuantity){
//   const purchaseId = await patchAlbum({id, purchaseQuantity});
//   console.log(purchaseId);
//   }

  return (
    <div className="container mx-auto px-6 mt-8">
      {singleAlbum && (
        <div className="flex flex-col items-center">
          <img
            src={singleAlbum.posterUrl}
            alt={singleAlbum.title}
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
          <h1 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{singleAlbum.title}</h1>
          <p className="mt-2 text-gray-900">{singleAlbum.description}</p>
          <h3 className="text-lg text-red-600">Quantity: {singleAlbum.quantity}</h3>

          <div className="mt-4">
            <input
              type="number"
              min="1"
              value={purchaseQuantity}
              onChange={(e) => setPurchaseQuantity(e.target.value)}
              className="p-2 border rounded shadow-md text-black"
            />
            <button onClick={() => addToCart(singleAlbum, purchaseQuantity)}
             className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600">
              Add to Cart
            </button>
            <button onClick={() => addToWishlist(singleAlbum)}
             className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600">
              Add to Wishlist
            </button>
            <button
              onClick={() => window.history.back()}
              className="ml-4 px-4 py-2 bg-gray-300 text-black text-sm font-semibold rounded hover:bg-gray-400"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );

}

export default SingleAlbum;