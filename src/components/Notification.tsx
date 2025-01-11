"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Notification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay initial render to prevent SSR issues
    const hasSeenNotification = sessionStorage.getItem("hasSeenNotification");

    if (!hasSeenNotification) {
      // Slight delay to ensure smooth entrance
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("hasSeenNotification", "true");
      }, 500);

      // Auto-close the notification after 8 seconds
      const closeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 20000);

      // Cleanup timers
      return () => {
        clearTimeout(timeoutId);
        clearTimeout(closeTimer);
      };
    }
  }, []);

  // Early return if not visible to optimize rendering
  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className=" hidden md:block fixed top-4 left-1/4 transform -translate-x-1/2 bg-gradient-to-b from-blue-800 to-black text-white z-50 shadow-2xl rounded-xl w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] max-w-2xl"
        initial={{ y: -50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -50, opacity: 0, scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="p-4 sm:p-6 flex items-center justify-between space-x-4">
          {/* Icon and Text Container */}
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Website Under Development
              </h3>
              <p className="text-sm sm:text-base text-white/80 mt-1">
                We are actively improving our site. Some features are still in
                development. if you see any responsiveness issue, please let us
                know
                <a
                  target="_blank"
                  href="mailto:reshephinayatofficial@gmail.com"
                  className="text-white underline font-bold pl-2"
                >
                  Email Us Here
                </a>
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Close notification"
            className="hover:bg-white/20 rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <X size={20} className="text-white" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Notification;
