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
  const [showPopup, setShowPopup] = useState(false);
  const token = localStorage.getItem("token");

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
    <div className="container mx-auto px-6 mt-20">
      {singleAlbum && (
        <div className="flex flex-col items-center justify-center">
          <img
            src={singleAlbum.posterUrl}
            alt={singleAlbum.title}
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
          <h1 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{singleAlbum.title}</h1>
          <p className="mt-2 text-gray-900">{singleAlbum.description}</p>
          {/* <h3 className="text-lg text-red-600">Quantity: {singleAlbum.quantity}</h3> */}

          <div className="mt-4">
            <input
              type="number"
              min="1"
              value={purchaseQuantity}
              onChange={(e) => setPurchaseQuantity(e.target.value)}
              className="p-2 border rounded shadow-md text-black mr-4"
            />

            <button onClick={() => addToCart(singleAlbum, purchaseQuantity)}  // add to cart
             className="px-4 py-2 bg-blue-500 text-black text-sm font-semibold rounded hover:bg-red-600 mr-4">
              Add to Cart
            </button>

            <button onClick={() => { 
              if(!token) {
              setShowPopup(true);
            } else {
              addToWishlist(singleAlbum);  //add to wishlist
            }
          }}
             className="px-4 py-2 bg-red-500 text-black text-sm font-semibold rounded hover:bg-blue-600">
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
      {showPopup && (
  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg shadow-red-500/50">
      <h2 className="text-xl font-bold text-red-600">
        First login/register to add to a wishlist
      </h2>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setShowPopup(false)}
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );

}

export default SingleAlbum;