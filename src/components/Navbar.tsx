"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const navLinks = [
  //   { name: "Home", href: "#" },
  //   { name: "About", href: "#" },
  //   { name: "Customer", href: "#" },
  //   { name: "Services", href: "#services" },
  // ];

  return (
    <header className="w-full backdrop-filter backdrop-blur-md bg-opacity-90 shadow-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#" className="flex items-center">
              <span className="text-blue-600 text-2xl md:text-4xl font-bold">
                Dr.
              </span>
              <span className="text-xl md:text-2xl font-bold">WebAgency</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav> */}

          {/* Contact Button */}
          {/* <div className="hidden md:block">
            <Link
              href="mailto:resheph.inayat7@gmail.com"
              target="_blank"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
             
              Email
            </Link>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {/* <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#"
            className="block w-full text-center px-4 py-2 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div> */}
    </header>
  );
};

export default Navbar;
