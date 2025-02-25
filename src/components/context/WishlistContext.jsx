import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (storedWishlist) {
      setWishlist(storedWishlist);
    }
  }, []);

   const addToWishlist = (product, quantity) => {
    console.log(product);
    setWishlist((prev) => {
      const updatedWishlist = [...prev, { product, quantity }];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => {
      const updatedWishlist = prev.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);