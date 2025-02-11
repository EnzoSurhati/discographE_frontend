import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'
import Cart from "./cart/Cart";

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-gray-800/95 backdrop-blur px-4 lg:px-0 shadow-md">
      <div className="container mx-auto flex h-14 items-center justify-between w-full">
        <h1 className="text-white text-lg font-bold">E-store</h1>
        <div className="relative">
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          🛒 Cart
        </button>
        {isCartOpen && <Cart />}
      </div>
        

        {/* Desktop Menu */}
        <nav className="md:flex hidden items-center space-x-6 text-lg font-medium">
          <Link to="/albums" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
            Albums
          </Link>
          <Link to="/account" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
            Account
          </Link>
          <Link to="/login" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
            Login
          </Link>
          <Link to="/register" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
            Register
          </Link>
          <Link to="/cart" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
            Cart
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden inline-flex items-center justify-center rounded-md text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 shadow-md absolute top-14 left-0 right-0 z-50">
          <div className="space-y-1 px-2 pb-3 pt-2 text-center">
            <Link to="/albums" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700">
              Albums
            </Link>
            <Link to="/account" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700">
              Account
            </Link>
            <Link to="/login" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700">
              Login
            </Link>
            <Link to="/register" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700">
              Register
            </Link>
            <Link to="/cart" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700">
              cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;



//   return (
//     <nav className="bg-gray-800 p-4 shadow-md">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="flex items-center">
//         <span className="text-xl font-bold text-white">Jam</span>
//       </div>

//       <div className="flex space-x-4">
//         <Link to="/albums" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
//           Albums
//         </Link>
//         {/* <Link to="/account" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
//           Account
//         </Link> */}
//         <Link to="/login" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
//           Login
//         </Link>
//         <Link to="/register" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
//           Register
//         </Link>
//       </div>
//       </div>
//     </nav>
//   );
// }

// export default Nav;


{/* Logo */}
        {/* <Link to="/" className="flex items-center space-x-2">
          <Music size={24} className="text-white" />
          <span className="text-xl font-bold text-white">Jam</span>
        </Link> */}