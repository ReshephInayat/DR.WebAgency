"use client";
import React, { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  const cursorRef = useRef({ x: 0, y: 0 });
  const displayedCursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };

    const animateCursor = () => {
      displayedCursorRef.current.x +=
        (cursorRef.current.x - displayedCursorRef.current.x) * 0.1;
      displayedCursorRef.current.y +=
        (cursorRef.current.y - displayedCursorRef.current.y) * 0.1;

      // Update trail
      setTrail((prev) => {
        const newTrail = [
          ...prev,
          { x: displayedCursorRef.current.x, y: displayedCursorRef.current.y },
        ];
        return newTrail.slice(-10); // Keep last 10 positions for a smoother trail
      });

      requestAnimationFrame(animateCursor);
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

    // Start cursor animation
    animateCursor();

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
          transition-transform duration-200 ease-out`}
        style={{
          transform: `translate(${
            displayedCursorRef.current.x - (isHovering ? 32 : 16)
          }px, ${displayedCursorRef.current.y - (isHovering ? 32 : 16)}px)`,
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border-2 border-white animate-pulse" />
        </div>
      </div>

      {/* Center dot */}
      <div
        id="cursor-dot"
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${displayedCursorRef.current.x - 1}px, ${
            displayedCursorRef.current.y - 1
          }px)`,
        }}
      />

      {/* Trailing dots */}
      {trail.map((pos, index) => (
        <div
          key={index}
          className="fixed w-1 h-1 bg-white rounded-full pointer-events-none z-40 mix-blend-difference"
          style={{
            transform: `translate(${pos.x - 0.5}px, ${pos.y - 0.5}px)`,
            opacity: (index + 1) / trail.length,
            transition: "opacity 0.3s ease-out",
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
