import React, { useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  
  FaGitAlt,
  FaFigma,
  FaCuttlefish,
  FaFire,
} from "react-icons/fa";
import {
  SiMongodb,
 
  SiExpress,
  SiTailwindcss,
  SiSocketdotio,
  SiVite,
  SiNextdotjs,
  SiSupabase,
  SiFramer,
} from "react-icons/si";

const techs = [
  { name: "React", icon: <FaReact style={{ color: "#61DBFB" }} /> },
  { name: "JavaScript", icon: <FaJsSquare style={{ color: "#F7DF1E" }} /> },
  { name: "Node.js", icon: <FaNodeJs style={{ color: "#3C873A" }} /> },
  { name: "Express", icon: <SiExpress style={{ color: "#000000" }} /> },
  { name: "Firebase", icon: <FaFire style={{ color: "#FFCA28" }} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss style={{ color: "#38BDF8" }} /> },
  { name: "HTML", icon: <FaHtml5 style={{ color: "#E34C26" }} /> },
  { name: "CSS", icon: <FaCss3Alt style={{ color: "#1572B6" }} /> },
  { name: "Python", icon: <FaPython style={{ color: "#3776AB" }} /> },
  { name: "C++", icon: <FaCuttlefish style={{ color: "#00599C" }} /> },
  { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} /> },
  
  { name: "Figma", icon: <FaFigma style={{ color: "#F24E1E" }} /> },
 
 
  { name: "Socket.io", icon: <SiSocketdotio style={{ color: "#010101" }} /> },
  { name: "Git", icon: <FaGitAlt style={{ color: "#F05032" }} /> },
  { name: "Vite", icon: <SiVite style={{ color: "#646CFF" }} /> },
  { name: "C", icon: <FaCuttlefish style={{ color: "#A8B9CC" }} /> },
  { name: "Framer Motion", icon: <SiFramer style={{ color: "#0055FF" }} /> },
  { name: "Next.js", icon: <SiNextdotjs style={{ color: "#000000" }} /> },
  { name: "Supabase", icon: <SiSupabase style={{ color: "#3ECF8E" }} /> },
];

function MarqueeRow({ items, paused, setPaused, animationName }) {
  return (
    <div
      className="relative flex items-center overflow-hidden w-full h-12 cursor-pointer"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex items-center"
        style={{
          animation: `${animationName} 60s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          willChange: "transform",
        }}
      >
        {[...items, ...items].map((tech, idx) => (
          <span
            key={idx}
            className="flex items-center justify-center gap-2 dark:bg-[#18181b] bg-white text-black dark:text-white border border-[#27272a] rounded-full shadow text-sm font-medium whitespace-nowrap px-6 py-2 mx-2"
          >
            <span className="text-lg">{tech.icon}</span>
            <span>{tech.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const half = Math.ceil(techs.length / 2);
  const row1Skills = techs.slice(0, half);
  const row2Skills = techs.slice(half);

  const [pausedRow1, setPausedRow1] = useState(false);
  const [pausedRow2, setPausedRow2] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto my-8 space-y-3">
      <MarqueeRow
        items={row1Skills}
        paused={pausedRow1}
        setPaused={setPausedRow1}
        animationName="marquee"
      />
      <MarqueeRow
        items={row2Skills}
        paused={pausedRow2}
        setPaused={setPausedRow2}
        animationName="marquee-reverse"
      />
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
}
