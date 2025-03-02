import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-violet-600 text-white text-xl h-16 fixed w-full shadow-md z-50 flex items-center justify-between px-6 max-w-7xl mx-auto">
      
      {/* Logo */}
      <span className="text-2xl font-bold">Logo</span>

      {/* Navigation Links */}
      <nav className="flex gap-6">
        <Link 
          to="/" 
          className="py-1 px-3 font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-violet-900"
        >
          Home
        </Link>
        <Link 
          to="/create" 
          className="py-1 px-3 font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-violet-900"
        >
          Resume
        </Link>
      </nav>

    </div>
  );
};

export default Header;
