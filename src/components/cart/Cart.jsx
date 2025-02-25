import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  console.log(cart);

  return (
    <div className="w-1/3 bg-white p-4 rounded-lg shadow-lg absolute top-16 right-4">
      <h2 className="text-xl font-semibold mb-2">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <ul>
          {cart.map((album, index) => (
            <li key={index} className="flex justify-between items-center border-b py-2">
              <span>{album.product.title}</span>
              <h3>{album.quantity}</h3>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => removeFromCart(album.id)}
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

export default Cart;