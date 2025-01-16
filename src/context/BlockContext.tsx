"use client";

import React, { useEffect, createContext, ReactNode } from "react";

const BlockContext = createContext({});

export const BlockProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable specific key combinations
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" || // Developer tools
        (e.ctrlKey && e.shiftKey && e.key === "I") || // Inspect element
        (e.ctrlKey && e.key === "U") || // View source
        (e.ctrlKey && e.key === "S") || // Save page
        (e.ctrlKey && e.key === "C") || // Copy
        (e.ctrlKey && e.key === "V") // Paste
      ) {
        e.preventDefault();
      }
    };

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup event listeners
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <BlockContext.Provider value={{}}>{children}</BlockContext.Provider>;
};
