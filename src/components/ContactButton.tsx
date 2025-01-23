"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size and update isMobile state
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640); // Tailwind's sm breakpoint
    };

    // Check initial screen size
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed bottom-10 right-8 sm:bottom-10 sm:right-8 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="group bg-gradient-to-r from-blue-500 to-purple-600 p-3 sm:p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        whileHover={{ rotate: 15 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          ) : (
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          )}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-20 right-4 z-50 w-[95vw] sm:w-96 
              ${
                isMobile
                  ? "h-[70vh] max-h-[800px] inset-x-2.5"
                  : "h-[70vh] max-h-[600px]"
              } 
              bg-white rounded-lg shadow-2xl overflow-hidden`}
          >
            <div className="flex flex-col h-full">
              <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-between">
                <h2 className="text-base sm:text-lg font-semibold text-white">
                  Chat with us
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="sm:hidden text-white hover:bg-blue-600/30 rounded-full p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <iframe
                  src="https://www.chatbase.co/chatbot-iframe/YkzQNqDWQ0eK0Tkhnj_r-"
                  width="100%"
                  height="100%"
                  className="border-0"
                  title="Chat interface"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactButton;
