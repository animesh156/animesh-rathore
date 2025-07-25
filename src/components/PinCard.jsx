import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export function PinContainer({
  name,
  description,
  tech,
  image,
  href,
  preview,
  className,
  containerClassName,
  videoUrl
}) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);

  const techs = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "TailwindCSS", logo: "https://www.svgrepo.com/show/374118/tailwind.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Socket.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Spline", logo: "/spline.png" },
    { name: "Framer Motion", logo: "/framer.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Supabase", logo: "https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo-icon.svg" },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMouse({ x, y });
  };

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0 });
    if (videoRef.current) videoRef.current.pause();
  };

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const handleCardClick = () => {
    if (href) window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className={`group relative z-10 cursor-pointer ${containerClassName || ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      tabIndex={-1}
      onClick={handleCardClick}
      role="button"
      aria-label={`Open ${name} GitHub`}
    >
      <motion.div
        className="flex items-center justify-center w-full h-full"
        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      >
        <motion.div
          animate={{
            rotateX: mouse.y * 0.07,
            rotateY: -mouse.x * 0.07,
            boxShadow:
              mouse.x !== 0 || mouse.y !== 0
                ? "0 8px 32px 0 rgba(0,0,0,0.35)"
                : "0 2px 8px 0 rgba(0,0,0,0.15)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className={`flex flex-col w-[320px] h-[320px] rounded-xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 ${className}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Video/Image Preview */}
          <div className="w-full flex items-center justify-center p-4 pb-0 group">
            {videoUrl?.includes(".mp4") ? (
              <video
                ref={videoRef}
                src={videoUrl}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-36 object-cover rounded-lg transition duration-300"
                style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)" }}
              />
            ) : (
              <img
                src={image}
                alt={name}
                className="object-cover w-full h-36 rounded-lg"
                loading="lazy"
                style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)" }}
              />
            )}
          </div>

          {/* Title + Desc */}
          <div className="flex flex-col gap-1 px-4 py-3 w-full flex-1">
            <motion.span
              className="text-base font-semibold text-black dark:text-white truncate"
              style={{
                transform:
                  mouse.x !== 0 || mouse.y !== 0
                    ? "translateZ(18px)"
                    : "translateZ(0px)",
                transition: "transform 0.2s ease",
              }}
            >
              {name}
            </motion.span>
            <motion.span
              className="text-zinc-600 dark:text-zinc-400 text-xs truncate"
              style={{
                transform:
                  mouse.x !== 0 || mouse.y !== 0
                    ? "translateZ(12px)"
                    : "translateZ(0px)",
                transition: "transform 0.2s ease",
              }}
            >
              {description}
            </motion.span>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 items-center mt-2">
              {tech.map((t) => {
                const found = techs.find(
                  (techObj) => techObj.name.toLowerCase() === t.toLowerCase()
                );
                return (
                  found && (
                    <span
                      key={t}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800"
                    >
                      <img
                        src={found.logo}
                        alt={t}
                        className="w-4 h-4 object-contain"
                        loading="lazy"
                      />
                    </span>
                  )
                );
              })}
            </div>

            {/* Buttons */}
            <div className="flex flex-row gap-2 mt-auto w-full">
              {preview ? (
                <a
                  href={preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm text-black dark:text-white font-light hover:bg-zinc-300 dark:hover:bg-zinc-700 transition text-center flex items-center justify-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="animate-pulse text-red-500">●</span>
                  Live
                </a>
              ) : (
                <span className="flex-1 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm text-zinc-500 font-light cursor-not-allowed select-none text-center flex items-center justify-center gap-2">
                  No Preview
                </span>
              )}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm text-zinc-500 dark:text-white font-light hover:bg-zinc-300 dark:hover:bg-zinc-700 transition text-center flex items-center justify-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
