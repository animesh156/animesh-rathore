import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import Underline from "./Underline";

const experiences = [
  {
    role: "Frontend Developer",
    company: "WhatBytes",
    logo: "/whatbytes_logo.jpg",
    duration: "Mar 2025 – Apr 2025",
    description: [
      "Developed Authentication, Blog, and Feature pages, enhancing overall functionality.",
      "Improved load times by 15% using dynamic imports for reusable components.",
      "Integrated an RSS feed to automate content distribution and improve accessibility.",
    ],
  },
  {
    role: "Frontend Developer (Open Source)",
    company: "Hacktoberfest",
    logo: "/hacktoberfest.webp",
    duration: "Oct 2022 – Oct 2022",
    description: [
      "Built UI components like Contact Forms, Footers, and Pricing Cards with dark mode.",
      "Resolved bugs in Social Media Icons Footer to enhance usability and responsiveness.",
    ],
  },
];

// Animation variants
const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <motion.section
      id="experience"
      className="w-full max-w-xs sm:max-w-sm md:max-w-2xl mx-auto mb-16 px-0 sm:px-2 md:px-4 py-8 md:py-12"
      variants={slideInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-2xl md:text-2xl font-bold text-left text-gray-800 dark:text-white mb-3">
        <Underline>Work Experience</Underline>
      </h2>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={idx}
              className="transition-all duration-300 group cursor-pointer rounded-xl"
              onClick={() => toggleExpand(idx)}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2">
                {/* Left: Logo + Company + Role */}
                <div className="flex items-center gap-4">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-12 h-12 rounded-full border border-gray-300 object-contain"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 relative">
                      <p className="text-md font-medium text-gray-900 dark:text-white">
                        {exp.company}
                      </p>

                      <motion.span
                        initial={false}
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-purple-500"
                      >
                        <FaChevronRight size={12} />
                      </motion.span>
                    </div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {exp.role}
                    </p>
                  </div>
                </div>

                {/* Right: Duration */}
                <div className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                  {exp.duration}
                </div>
              </div>

              {/* Expandable Description */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300 overflow-hidden"
                  >
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
