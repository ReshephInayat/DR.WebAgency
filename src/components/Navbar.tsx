"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full backdrop-filter backdrop-blur-md bg-opacity-90 shadow-lg fixed top-0 z-50 overflow-hidden px-8 ">
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
          {/* whatsapp */}
          <div className="flex items-center">
            <a
              href="https://wa.me/923435306597"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600"
            >
              <span className="hidden md:inline font-medium">Whatsapp</span>
              <span className="md:hidden">Whatsapp</span>
              <div className="md:w-16 h-1 bg-gradient-to-r  from-green-700 mx-auto rounded-full"></div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
