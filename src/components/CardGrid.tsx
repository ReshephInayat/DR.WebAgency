"use client";
import React, { useState } from "react";
import ThreeDCard from "./Card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CardGrid = () => {
  const cards = [
    {
      title: "Ecommerce Website",
      description: "Successful Ecommerce Brand",
      imageUrl: "/images/p3.png",
      link: "https://stylor.vercel.app",
      linkLabel: "Visit →",
      // buttonLabel: "Github",
    },
    {
      title: "Golden Sports Events",
      description: "Golden Sports Events Sport Company",
      imageUrl: "/images/p1.png",
      link: "https://goldensportsevents.com",

      linkLabel: "Visit →",
      // buttonLabel: "Github",
    },
    {
      title: "Organizational Portfolio",
      description: "The Salvation Army Pakistan",
      imageUrl: "/images/p4.png",
      link: "https://tsa-sahiwal-division.vercel.app/",
      linkLabel: "Visit →",
      // buttonLabel: "Github",
    },
    {
      title: "Personal Portfolio",
      description: "Personal Portfolio (Arif Sabir)",
      imageUrl: "/images/p2.png",
      link: "https://www.worshiper-arifsabir.com/",
      linkLabel: "Visit →",
      // buttonLabel: "Github",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full">
      <div id="services" className="text-center mt-24">
        <p className="text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-full inline-block">
          Our Projects
        </p>
        <h2 className="mt-8 pb-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Transforming Ideas
          <br />
          Into Digital Reality
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto mt-12">
        <div className="overflow-hidden">
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="flex">
              {cards.map((card, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <ThreeDCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
