// components/ProjectsGrid.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "./Card";

const ProjectsGrid: React.FC = () => {
  const projects = [
    {
      title: "Ecommerce Website",
      description: "Comprehensive e-commerce platform with modern design",
      imageUrl: "/images/p3.png",
      link: "https://stylor.vercel.app",
      technologies: [
        { name: "Next.js", color: "#000" },
        { name: "Tailwind", color: "#38bdf8" },
        { name: "Stripe", color: "#635BFF" }
      ]
    },
    {
      title: "Golden Sports Events",
      description: "Sports event management platform",
      imageUrl: "/images/p1.png",
      link: "https://goldensportsevents.com",
      technologies: [
        { name: "React", color: "#61DAFB" },
        { name: "Node.js", color: "#68A063" }
      ]
    },
    {
      title: "Organizational Portfolio",
      description: "The Salvation Army Pakistan division website",
      imageUrl: "/images/p4.png",
      link: "https://tsa-sahiwal-division.vercel.app/",
      technologies: [
        { name: "Next.js", color: "#000" },
        { name: "TypeScript", color: "#3178C6" }
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of innovative digital solutions crafted with passion and precision.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              // key={currentIndex}
              // initial={{ opacity: 0, x: 100 }}
              // animate={{ opacity: 1, x: 0 }}
              // exit={{ opacity: 0, x: -100 }}
              // transition={{ duration: 0.2 }}
            >
              <ProjectCard {...projects[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevProject}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={nextProject}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex 
                    ? "bg-gray-800 dark:bg-white" 
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;  