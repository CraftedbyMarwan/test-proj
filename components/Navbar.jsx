// components/Navbar.jsx
// Mark as client component if you need interactivity (e.g., mobile menu toggle)
// For a static navbar, it can remain a Server Component by default.
// Let's make it a client component to show how to use 'use client'
'use client';

import Link from 'next/link'; // Use Next.js Link component for client-side navigation
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Site Title */}
        <Link href="/" className="text-white text-2xl font-bold">
          Testing Project
        </Link>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Contact
          </Link>
          <Link href="/counter" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" > Counter
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-2 space-y-2 px-2 pt-2 pb-3">
          <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
          <Link href="/counter" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium" >
            Counter
          </Link>
        </div>
      )}
    </nav>
  );
}