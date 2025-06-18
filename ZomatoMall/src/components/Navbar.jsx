import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <h1 className="text-xl font-bold flex items-center gap-2">
        🛍️ ZomatoMall
      </h1>
      <ul className="flex gap-6">
        <li><Link to="/welcome" className="hover:underline">Home</Link></li>
        <li><Link to="/products" className="hover:underline">Products</Link></li>
        <li><Link to="/add-seller" className="hover:underline">Add Seller</Link></li>
        <li><Link to="/login" className="hover:underline">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
