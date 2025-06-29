import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";

export default function ProfileCard() {
  return (
    <div className="w-full max-w-full md:max-w-2xl mx-auto bg-white dark:bg-[#18181b] rounded-xl shadow-lg p-4 sm:p-6 md:p-7 mb-8 flex flex-col gap-3 md:gap-4 border border-gray-200 dark:border-[#232323] text-left transition-colors">
      <div className="flex flex-col gap-2 md:gap-4">
        {/* Name and title */}
        <div className="flex flex-col gap-1 md:gap-2 relative">
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#6c3483] dark:text-[#f5f5f7]">
            Animesh Rathore
          </div>
          <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
            Computer Science Engineer
          </div>

          {/* Social icons (top-right) */}
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

        {/* Contact info */}
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
        </div>
      </div>

      {/* Tagline */}
      <div className="mt-2 md:mt-4 text-xs md:text-sm text-gray-600 dark:text-gray-300">
        Persistent. Adaptive. Funny.
      </div>
    </div>
  );
}
