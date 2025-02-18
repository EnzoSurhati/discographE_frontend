import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import {useGetAlbumQuery, usePatchAlbumMutation} from './albumSlice';
// import {addToCart} from './context/CartContext'

function SingleAlbum() {
  const { id } = useParams();
  const {data: singleAlbum, isLoading, error} = useGetAlbumQuery(id);
  const [patchAlbum] = usePatchAlbumMutation();
  const [purchaseQuantity, setPurchaseQuantity] = useState(0); 

  if(isLoading){
    return <p className="text-center text-lg">Loading...</p>;
  }
  if(error){
    return <p className="text-center text-red-500">`Error: ${error.message}`</p>
  }

async function purchaseAlbum(id, purchaseQuantity){
  const purchaseId = await patchAlbum({id, purchaseQuantity});
  console.log(purchaseId);
  }

  // const toCart = async (id, purchaseQuantity) => {
  //   await addToCart(id, purchaseQuantity)
  // }

  return (
    <div className="container mx-auto px-6 mt-8">
      {singleAlbum && (
        <div className="flex flex-col items-center">
          <img
            src={singleAlbum.posterUrl}
            alt={singleAlbum.title}
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-4 text-yellow-400">{singleAlbum.title}</h1>
          <p className="text-3xl font-bold mt-4 text-yellow-400">{singleAlbum.description}</p>
          <h3 className="text-lg text-gray-300">Quantity: {singleAlbum.quantity}</h3>

          <div className="mt-4">
            <input
              type="number"
              min="1"
              value={purchaseQuantity}
              onChange={(e) => setPurchaseQuantity(e.target.value)}
              className="p-2 border rounded shadow-md text-black"
            />
            <button onClick={() => purchaseAlbum(singleAlbum.id, purchaseQuantity)}
             className="ml-2 bg-yellow-500 px-4 py-2 rounded shadow-md hover:bg-yellow-600">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleAlbum;