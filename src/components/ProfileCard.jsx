import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaDownload,
} from "react-icons/fa";

export default function ProfileCard() {
  const titles = [
    "MERN Stack Developer",
    "AI Enthusiast",
    "Problem Solver",
    "Cricket Fanatic",
    "Loves Traveling",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index % titles.length];

    if (isDeleting) {
      if (subIndex > 0) {
        setTimeout(() => setSubIndex(subIndex - 1), 40);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    } else {
      if (subIndex < current.length) {
        setTimeout(() => setSubIndex(subIndex + 1), 80);
      } else {
        setTimeout(() => setIsDeleting(true), 1000);
      }
    }

    setText(current.substring(0, subIndex));
  }, [subIndex, isDeleting, index]);

  return (
    <div className="w-full max-w-full md:max-w-2xl mx-auto bg-white dark:bg-[#18181b] rounded-xl shadow-lg p-4 sm:p-6 md:p-7 mb-8 flex flex-col gap-3 md:gap-4 border border-gray-200 dark:border-[#232323] text-left transition-colors">
      <div className="flex flex-col gap-2 md:gap-4">
        {/* Name and animated title */}
        <div className="flex flex-col gap-1 md:gap-2 relative">
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#6c3483] dark:text-[#f5f5f7]">
            Animesh Rathore
          </div>

          {/* Typing animation */}
          <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
            {text}
            <span className="animate-pulse">|</span>
          </div>

          {/* Social icons */}
          <div className="flex gap-3 md:gap-5 absolute right-0 top-0">
            <a
              href="https://github.com/animesh156"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition" />
            </a>
            <a
              href="https://x.com/Animesh47166828"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
            <FaMapMarkerAlt /> Darbhanga, India
          </div>
          <a
            href="mailto:theromeirofernandes@gmail.com"
            className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
          >
            <FaEnvelope /> animeshrathore255@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/animesh95/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
          >
            <FaLinkedin />
            animeshrathore
          </a>

          {/* Resume Download Button */}
          <a
            href="https://drive.google.com/file/d/1qUu8rdLXq2ylLXQbnwc8Lm2_D9LVTKGs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 hover:underline mt-1 font-medium"
          >
            Resume
            <FaDownload />
          </a>
        </div>
      </div>

      {/* Tagline */}
      <div className="mt-2 font-semibold md:mt-4 text-xs md:text-sm text-gray-600 dark:text-gray-300">
        Dedicated. Adaptable. Curious.
      </div>
    </div>
  );
}
