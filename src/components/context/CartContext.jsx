import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

// Create Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // adds items to a cart
   const addToCart = (product, quantity) => {
    console.log(product);
    setCart((prev) => {
      const updatedCart = [...prev, { product, quantity }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCart((prev) => {
      const updatedCart = prev.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to use Cart Context
export const useCart = () => {
  return useContext(CartContext);
};