import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, Heart } from 'lucide-react'
import Cart from "./cart/Cart";
import Wishlist from "./wishlist/Wishlist"; 
import { useWishlist } from "./context/WishlistContext";

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const { wishlist } = useWishlist();

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0">
      <div className="flex items-center justify-between w-full px-6">
        
        {/* Logo */}
        <div className="flex items-center ">
          <img src="/src/assets/logo.png" alt="Hi-Fidelity Records Logo" 
          className="h-10 w-10 rounded-full object-cover spin-animation" />

          <Link to="/" className="text-2xl font-bold text-gray-900 font-[Montserrat] tracking-wide">
            Hi-Fidelity Records
          </Link>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex space-x-4">
            <Link to="/" className="px-3 py-2 border border-white text-black transform hover:scale-110 transition duration-300 hover:text-red-500">
              Albums
            </Link>
            <Link to="/account" className="px-3 py-2 border border-white text-black transform  hover:scale-110 transition duration-300 hover:text-green-500">
              Account
            </Link>
            <Link to="/login" className="px-3 py-2 border border-white text-black transform hover:scale-110 transition duration-300 hover:text-orange-500">
              Login
            </Link>
            <Link to="/register" className="px-3 py-2 border border-white text-black transform hover:scale-110 transition duration-300 hover:text-purple-500">
              Register
            </Link>
            <Link to="/cart">
              <button className="relative text-gray-900 p-3 hover:text-red-500 transition transform hover:scale-110">
              <ShoppingCart size={23} className="text-gray-900 hover:text-red-500 transition" />
              </button>
            </Link>
          </nav>

          {/* Wishlist Button */}
          <button
            onClick={() => setIsWishlistOpen(!isWishlistOpen)}
            className="relative text-gray-900 p-3 hover:text-red-500 transition transform hover:scale-110"
          >
            <Heart size={23} />
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </button>
          {isWishlistOpen && <Wishlist />} 

          {/* Cart Button */}
          {/* <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative text-gray-900 p-3 hover:text-red-500 transition transform hover:scale-110"
          >
            <ShoppingCart size={23}/>
          </button>
          {isCartOpen && <Cart />}  */}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 right-0 z-50 py-4">
          <nav className="flex flex-col space-y-3 items-center">
            <Link to="/albums" className="px-3 py-2 border border-white text-black transform hover:scale-110 transition duration-300 hover:text-red-500">
              Albums
            </Link>
            <Link to="/account" className="px-3 py-2 border border-white text-black transform hover:scale-110 transition duration-300 hover:text-red-500">
              Account
            </Link>
            <Link to="/login" className="px-3 py-2 border border-white text-black transform hover:scale-110 transition duration-300 hover:text-red-500">
              Login
            </Link>
            <Link to="/register" className="px-3 py-2 border border-white text-black transform hover:scale-110 transition duration-300 hover:text-red-500">
              Register
            </Link>
            <Link to="/cart">
              <button className="relative text-gray-900 p-3 hover:text-red-500 transition transform hover:scale-110">
              <ShoppingCart size={23} className="text-gray-900 hover:text-red-500 transition" />
              </button>
            </Link>
          </nav>

          <div className="flex justify-center mt-4 space-x-4">
            {/* Mobile Wishlist */}
            <button
              onClick={() => setIsWishlistOpen(!isWishlistOpen)}
              className="relative text-gray-900 p-3 hover:text-red-500 transition transform hover:scale-110"
            >
              <Heart size={23} />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Mobile Cart
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative text-gray-900 p-3 hover:text-red-500 transition transform hover:scale-110"
            >
              <ShoppingCart size={23} className="text-gray-900 hover:text-red-500 transition"/>
            </button> */}
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;