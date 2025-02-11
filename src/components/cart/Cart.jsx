import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="w-1/3 bg-white p-4 rounded-lg shadow-lg absolute top-16 right-4">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center border-b py-2">
              <span>{item.name}</span>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => removeFromCart(item.id)}
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