import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Cart from "./cart/Cart";

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md px-4 lg:px-0 shadow-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between">
        {/* Logo / Site Name */}
        <div className="flex items-center space-x-3">
          <img
            src="/src/assets/logo.png"
            alt="Hi-Fidelity Records Logo"
            className="h-10 w-auto"
          />
          <Link to="/" className="text-xl font-bold text-gray-900">
            Hi-Fidelity Records
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-lg font-medium">
          <Link
            to="/albums"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            Albums
          </Link>
          <Link
            to="/account"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            Account
          </Link>
          <Link
            to="/login"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            Register
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            Cart
          </Link>
        </nav>

        {/* Cart Button */}
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          // className="bg-blue-500 text-white px-4 py-2 rounded-md md:ml-4"
          style={{ width: "1.5rem", height: "1.5rem", position: "relative" }}
          variant="outline-primary"
          // className="rounded-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill= "lightblue"
          >
            <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
          </svg>
          Cart
        </button>
        {isCartOpen && <Cart />}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 right-0 z-50 py-4">
          <nav className="flex flex-col space-y-3 items-center">
            <Link
              to="/albums"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Albums
            </Link>
            <Link
              to="/account"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Account
            </Link>
            <Link
              to="/login"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Register
            </Link>
            <Link
              to="/cart"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Cart
            </Link>
          </nav>
        </div>
      )}
    </header>
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

{
  /* Logo */
}
{
  /* <Link to="/" className="flex items-center space-x-2">
          <Music size={24} className="text-white" />
          <span className="text-xl font-bold text-white">Jam</span>
        </Link> */
}
