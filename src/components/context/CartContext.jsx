import { createContext, useContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Create Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
    </>
  );
};

// Custom Hook to use Cart Context
export const useCart = () => {
  return useContext(CartContext);
};