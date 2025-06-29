import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "WhatBytes",
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
    duration: "May 2023 – Jul 2023",
    description: [
      "Built UI components like Contact Forms, Footers, and Pricing Cards with dark mode.",
      "Resolved bugs in Social Media Icons Footer to enhance usability and responsiveness.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        <span className="inline-flex items-center gap-2">
          <FaBriefcase className="text-purple-500" /> Experience
        </span>
      </h2>

      <div className="flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="border-l-4 border-purple-500 pl-4 py-2"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
              {exp.role}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {exp.company} · <span className="italic">{exp.duration}</span>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
