import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Menu, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-[#0B0E18]/80 backdrop-blur-md border-b border-white/10 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-purple-500" />
            <span className="text-white font-bold text-xl">Cosmify</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>
            {isAuthenticated && (
              <Link to="/dashboard" className="text-gray-300 hover:text-white transition">
                Dashboard
              </Link>
            )}
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="text-gray-300 hover:text-white transition flex items-center"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </button>
            ) : (
              <Link to="/login" className="text-gray-300 hover:text-white transition">
                Login
              </Link>
            )}
          </div>
          <button className="md:hidden text-gray-300">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;