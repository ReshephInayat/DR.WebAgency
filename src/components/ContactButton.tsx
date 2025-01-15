"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ContactButton = () => {
  const [isHoveredWhatsApp, setIsHoveredWhatsApp] = useState(false);
  const [isHoveredChatbot, setIsHoveredChatbot] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed md:bottom-20 bottom-4 left-4 md:left-16 z-50">
        <div className="relative group">
          {/* Tooltip */}
          <div
            className={`absolute bottom-full mb-2 left-0 bg-green-500 text-white text-sm py-1 px-3 rounded-lg transition-opacity duration-200 whitespace-nowrap ${
              isHoveredWhatsApp ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative">Chat on WhatsApp</div>
          </div>

          {/* Button */}
          <Link href="https://wa.me/923435306597">
            <button
              className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transform transition-all duration-200 ease-in-out hover:scale-110 active:scale-95 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
              onMouseEnter={() => setIsHoveredWhatsApp(true)}
              onMouseLeave={() => setIsHoveredWhatsApp(false)}
              aria-label="Contact on WhatsApp"
            >
              <div className="relative w-[30px] h-[30px]">
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  fill
                  className={`transition-transform duration-200 ${
                    isHoveredWhatsApp ? "scale-110" : "scale-100"
                  }`}
                />
              </div>
            </button>
          </Link>
        </div>
      </div>

      {/* Chatbot Button */}
      <div className="fixed md:bottom-20 bottom-4 right-4 md:right-16 z-50">
        <div className="relative group">
          {/* Tooltip */}
          <div
            className={`absolute bottom-full mb-2 right-0 bg-blue-500 text-white text-sm py-1 px-3 rounded-lg transition-opacity duration-200 whitespace-nowrap ${
              isHoveredChatbot ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative">Open Chatbot</div>
          </div>

          {/* Button */}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transform transition-all duration-200 ease-in-out hover:scale-110 active:scale-95 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            onMouseEnter={() => setIsHoveredChatbot(true)}
            onMouseLeave={() => setIsHoveredChatbot(false)}
            onClick={() => setShowChatbot(!showChatbot)}
            aria-label="Help Chatbot"
          >
            <div className="relative w-[30px] h-[30px]">
              <Image
                src="/bot.svg" // Replace with your chatbot icon
                alt="Chatbot"
                fill
                className={`transition-transform duration-200 ${
                  isHoveredChatbot ? "scale-110" : "scale-100"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Chatbot Iframe */}
      {showChatbot && (
        <div className="fixed bottom-0 right-0 w-full md:w-[400px] h-[70vh] md:h-[90vh] bg-white border-t md:border md:rounded-t-lg shadow-lg z-50">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/YkzQNqDWQ0eK0Tkhnj_r-"
            width="100%"
            height="100%"
            className="rounded-t-lg"
          ></iframe>
          <button
            className="absolute top-[20px] right-16 text-2xl text-blue-500 hover:text-red-700"
            onClick={() => setShowChatbot(false)}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default ContactButton;
