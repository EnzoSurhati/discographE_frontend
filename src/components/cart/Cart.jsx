import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  console.log(cart);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
  <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

  {cart.length === 0 ? (
    // When the cart is empty, show "Go Shoppin" button
    <div className="text-center">
      <p className="text-center text-gray-500 mb-6">Your cart is empty.</p>
      <Link to="/albums" className="px-6 py-3 bg-red-400 text-white text-lg font-semibold rounded-lg hover:bg-red-700">
        Go Shoppin
      </Link>
    </div>
  ) : (
    // When there are items in the cart, show cart items and "Proceed to Checkout"
    <div className="bg-white shadow-lg shadow-gray-400/50 rounded-xl p-8 w-3/4 md:w-1/2">
      <ul className="space-y-6">
        {cart.map((album, index) => (
          <li key={index} className="flex items-center justify-between border-b pb-6">
            <div className="flex items-center gap-4">
              <img src={album.product.posterUrl} alt={album.product.title} className="w-24 h-24 object-cover rounded-lg" />
              <div className="flex flex-col flex-grow px-4">
                <h2 className="text-xl font-semibold">{album.product.title}</h2>
                <p className="text-gray-600">Quantity: {album.quantity}</p>
              </div>
            </div>
            <button 
              className="px-5 py-2 bg-red-500 text-black rounded-lg hover:bg-red-600 hover:text-white"
              onClick={() => removeFromCart(album.product.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Show Proceed to Checkout only when cart is NOT empty */}
      <div className="text-center mt-6">
        <Link to="/checkout" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )}
</div>
  );
};

export default Cart;