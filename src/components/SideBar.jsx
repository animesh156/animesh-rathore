import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaBriefcase,
  FaFolderOpen,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home", icon: <FaHome /> },
  { href: "#about", label: "About", icon: <FaUser /> },
  { href: "#experience", label: "Experience", icon: <FaBriefcase /> },
  { href: "#projects", label: "Projects", icon: <FaFolderOpen /> },
  { href: "#contact", label: "Contact", icon: <FaEnvelope /> },
];

function getActiveSection() {
  if (typeof window === "undefined") return "";
  const scrollY = window.scrollY;
  const scrollBottom = window.innerHeight + scrollY;
  const docHeight = document.documentElement.scrollHeight;

  if (scrollY === 0) return "#home";
  if (docHeight - scrollBottom < 2) return "#contact";

  const offsets = navLinks.map((link) => {
    const el = document.querySelector(link.href);
    return el ? Math.abs(el.getBoundingClientRect().top) : Infinity;
  });
  const minOffset = Math.min(...offsets);
  const idx = offsets.indexOf(minOffset);
  return navLinks[idx]?.href || "";
}

export default function Sidebar() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [active, setActive] = useState("#home");

  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

 useEffect(() => {
  if (typeof window !== "undefined") {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
}, [isDark]);


  const toggleTheme = () => setIsDark((prev) => !prev);

  useEffect(() => {
    const onScroll = () => setActive(getActiveSection());
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 z-50">
        <motion.aside
          className="flex flex-col items-center bg-white/80 dark:bg-[#101014]/80 rounded-2xl py-4 px-2 shadow-lg border border-gray-300 dark:border-[#232323] backdrop-blur transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {navLinks.map((link, idx) => {
            const isActive = active === link.href;
            return (
              <div key={link.href} className="relative my-2 flex items-center">
                <motion.a
                  href={link.href}
                  className={`flex items-center justify-center w-10 h-10 rounded-lg group transition-colors ${
                    isActive ? "bg-gray-200 dark:bg-[#232323]" : ""
                  }`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-label={link.label}
                >
                  <span
                    className={`text-xl transition-colors ${
                      isActive
                        ? "text-black dark:text-white"
                        : "text-gray-500 dark:text-gray-400"
                    } group-hover:text-black dark:group-hover:text-white`}
                  >
                    {link.icon}
                  </span>
                </motion.a>
                <AnimatePresence>
                  {hoveredIdx === idx && (
                    <motion.span
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: 16 }}
                      exit={{ opacity: 0, x: 0 }}
                      className="absolute left-12 px-3 py-1 rounded-lg text-sm font-medium bg-gray-100 dark:bg-[#18181b] text-gray-700 dark:text-gray-300 shadow whitespace-nowrap"
                    >
                      {link.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Divider */}
          <div className="w-10 h-[1px] bg-gray-300 dark:bg-gray-700 my-3" />

          {/* Theme toggle in desktop sidebar */}
          <div className="relative my-2 flex items-center">
            <motion.button
              onClick={toggleTheme}
              onMouseEnter={() => setHoveredIdx("theme")}
              onMouseLeave={() => setHoveredIdx(null)}
              className="flex items-center justify-center w-10 h-10 rounded-lg group transition-colors bg-gray-200 dark:bg-[#232323]"
              aria-label="Toggle Theme"
            >
              <span className="text-xl text-black dark:text-white group-hover:scale-110 transition">
                {isDark ? <FaSun /> : <FaMoon />}
              </span>
            </motion.button>
            <AnimatePresence>
              {hoveredIdx === "theme" && (
                <motion.span
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 16 }}
                  exit={{ opacity: 0, x: 0 }}
                  className="absolute left-12 px-3 py-1 rounded-lg text-sm font-medium bg-gray-100 dark:bg-[#18181b] text-gray-700 dark:text-gray-300 shadow whitespace-nowrap"
                >
                  {isDark ? "Light Mode" : "Dark Mode"}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.aside>
      </div>

      {/* Mobile Dock */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-md">
        <motion.nav
          className="flex flex-row items-center justify-between bg-white/90 dark:bg-[#101014]/90 rounded-2xl py-2 px-4 shadow-lg border border-gray-300 dark:border-[#232323] backdrop-blur transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link, idx) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className="flex flex-col items-center justify-center w-10 h-10 rounded-lg group transition-colors"
                onClick={(e) => handleNavClick(e, link.href)}
                aria-label={link.label}
              >
                <span
                  className={`text-xl transition-colors ${
                    isActive
                      ? "text-black dark:text-white"
                      : "text-gray-500 dark:text-gray-400"
                  } group-hover:text-black dark:group-hover:text-white`}
                >
                  {link.icon}
                </span>
                <span className="text-[10px] mt-1 text-gray-500 dark:text-gray-400">
                  {link.label}
                </span>
              </a>
            );
          })}

          {/* Mobile theme toggle button */}
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center justify-center w-10 h-10 rounded-lg group transition-colors"
            aria-label="Toggle Theme"
          >
            <span
              className={`text-xl ${
                isDark ? "text-white" : "text-black"
              } group-hover:scale-110 transition`}
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </span>
            <span className="text-[10px] mt-1 text-gray-500 dark:text-gray-400">
              {isDark ? "Light" : "Dark"}
            </span>
          </button>
        </motion.nav>
      </div>
    </>
  );
}
