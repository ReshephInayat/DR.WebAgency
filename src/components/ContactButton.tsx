"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ContactButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed md:bottom-20 bottom-4 right-4 md:right-16 z-50">
      <div className="relative group">
        {/* Tooltip */}
        <div
          className={`absolute bottom-full mb-2 right-0 bg-green-500 text-white text-sm py-1 px-3 rounded-lg transition-opacity duration-200 whitespace-nowrap ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative">Chat on WhatsApp</div>
        </div>

        {/* Button */}
        <Link href="https://wa.me/923435306597">
          <button
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transform transition-all duration-200 ease-in-out hover:scale-110 active:scale-95 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Contact on WhatsApp"
          >
            <div className="relative w-[30px] h-[30px]">
              <Image
                src="/whatsapp.svg"
                alt="WhatsApp"
                fill
                className={`transition-transform duration-200 ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
              />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactButton;
