import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Compa</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-600">
          <a href="#converter" className="hover:text-gray-900">
            Converter
          </a>
          <a href="#services" className="hover:text-gray-900">
            Services
          </a>
          <a href="#works" className="hover:text-gray-900">
            How it works
          </a>
          <a href="#Newsletter" className="hover:text-gray-900">
            Newsletter
          </a>
        </nav>

        {/* Contact Button */}
        <a
          href="#Contact"
          className="hidden md:block bg-cyan-300 text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-cyan-400"
        >
          Contact us
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-gray-600"
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
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="space-y-4 px-6 py-4">
            <a href="#converter" className="block text-gray-600 hover:text-gray-900">
              Converter
            </a>
            <a href="#Services" className="block text-gray-600 hover:text-gray-900">
              Services
            </a>
            <a href="#works" className="block text-gray-600 hover:text-gray-900">
              How it works
            </a>
            <a href="#Newsletter" className="block text-gray-600 hover:text-gray-900">
              Newsletter
            </a>
          </nav>

          <div className="px-6 pb-4">
            <a
              href="#Contact"
              className="block w-full bg-cyan-300 text-gray-800 text-center py-2 rounded-lg shadow hover:bg-cyan-400"
            >
              Contact us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
