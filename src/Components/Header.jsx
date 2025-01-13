import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center bg-gray-50 sticky top-0 z-50">
      <img
        src=".\image-removebg-preview (5).png"
        alt="Saarthi"
        width="120"
        className="mr-20 ml-10"
      />

      <div className="bg-black rounded-full shadow-lg p-2 w-full max-w-6xl">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white"></div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <motion.ul
            className={`md:flex space-x-6 text-white ${
              isMenuOpen ? 'flex flex-col' : 'hidden md:flex'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <li>
              <a
                href="#about"
                className="px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-indigo-800 hover:text-white"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#programs"
                className="px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-indigo-800 hover:text-white"
              >
                Programs
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-indigo-800 hover:text-white"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-indigo-800 hover:text-white"
              >
                How it works
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-indigo-800 hover:text-white"
              >
                Pricing
              </a>
            </li>
          </motion.ul>

          <button className="bg-red-500 text-white px-6 py-2 rounded-full hidden md:inline-block transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-red-200 hover:to-red-600 hover:text-white">
            Enroll Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;