// components/ProjectCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectTech = {
  name: string;
  color: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  technologies: ProjectTech[];
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  link,
  technologies,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative">
        <Image
          priority
          src={imageUrl}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-82 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            href={link}
            target="_blank"
            className="bg-white/90 px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors"
          >
            View Project
          </Link>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="px-2 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: `${tech.color}20`,
                color: tech.color,
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
