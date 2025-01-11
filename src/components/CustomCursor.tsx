"use client";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });

      // Update trail
      setTrail((prev) => {
        const newTrail = [...prev, { x: clientX, y: clientY }];
        return newTrail.slice(-5); // Keep last 5 positions for trail effect
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll(
      "button, a, input, textarea"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });

      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      {/* Main cursor ring */}
      <div
        id="cursor-ring"
        className={`fixed pointer-events-none z-50 mix-blend-difference
          ${isHovering ? "w-16 h-16" : "w-8 h-8"}
          ${isClicking ? "scale-75" : "scale-100"}
          transition-all duration-200 ease-out`}
        style={{
          transform: `translate(${
            cursorPosition.x - (isHovering ? 32 : 16)
          }px, ${cursorPosition.y - (isHovering ? 32 : 16)}px)`,
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border-2 border-white animate-pulse" />
        </div>
      </div>

      {/* Center dot */}
      <div
        id="cursor-dot"
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          transform: `translate(${cursorPosition.x - 4}px, ${
            cursorPosition.y - 4
          }px)`,
        }}
      />

      {/* Trailing dots */}
      {trail.map((pos, index) => (
        <div
          key={index}
          className="fixed w-1 h-1 bg-white rounded-full pointer-events-none z-40 mix-blend-difference opacity-30"
          style={{
            transform: `translate(${pos.x - 2}px, ${pos.y - 2}px)`,
            transition: "opacity 0.2s",
            opacity: (index / trail.length) * 0.3,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
