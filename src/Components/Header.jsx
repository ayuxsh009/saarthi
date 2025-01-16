import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./image-removebg-preview (5).png"
            alt="Saarthi"
            className="h-10 w-auto mr-2"
          />
          <span className="text-gray-800 text-lg font-semibold tracking-wide">
            Saarthi
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-gray-800 hover:scale-110 transition-transform"
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

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium text-sm">
          <li>
            <a href="#about" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="#programs" className="hover:underline">
              Programs
            </a>
          </li>
          <li>
            <a href="#resources" className="hover:underline">
              Resources
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="hover:underline">
              How it Works
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:underline">
              Pricing
            </a>
          </li>
        </ul>

        {/* Enroll Now Button */}
        <button className="hidden md:inline-block border border-gray-800 px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition">
          Enroll Now
        </button>

        {/* Mobile Side Drawer */}
        <motion.div
          className={`fixed top-0 left-0 w-64 bg-white text-gray-800 h-full shadow-md transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
          initial={{ x: '-100%' }}
          animate={{ x: isMenuOpen ? 0 : '-100%' }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-800 focus:outline-none"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-6 p-6 text-sm font-medium">
            <li>
              <a href="#about" className="block hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#programs" className="block hover:underline">
                Programs
              </a>
            </li>
            <li>
              <a href="#resources" className="block hover:underline">
                Resources
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="block hover:underline">
                How it Works
              </a>
            </li>
            <li>
              <a href="#pricing" className="block hover:underline">
                Pricing
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
