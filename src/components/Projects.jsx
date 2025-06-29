import React from "react";
import { PinContainer } from "./PinCard";
import { motion } from "framer-motion";
import Underline from "./Underline";

const projects = [
  {
    name: "MetMed",
    description: "Ultimate Digital Habit Builder",
    tech: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "Firebase",
      "TailwindCSS",
     
    ],
    image: "https://res.cloudinary.com/dmdlgpurh/image/upload/v1750966183/Screenshot_384_gt5883.png",
    href: "https://github.com/animesh156/MetMed",
    preview: "https://met-med.vercel.app/",
  },
  {
    name: "AutoCV",
    description: "AI Powered Learning Companion",
    tech: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "TailwindCSS",
      "Firebase",
    ],
    image: "https://res.cloudinary.com/dmdlgpurh/image/upload/v1750966469/Screenshot_385_pax9lz.png",
    href: "https://github.com/animesh156/AI-Resume-Cover-Letter-Builder",
    preview: "https://opencv-psi.vercel.app/",
  },
  {
    name: "RecycLink",
    description: "AI Powered Influencer Analytics",
    tech: ["React", "MongoDB", "Express", "Node.js", "TailwindCSS"],
    image: "https://res.cloudinary.com/dmdlgpurh/image/upload/v1741028788/uuijbsx8qq9q65rktaao.png",
    href: "https://github.com/animesh156/RecycLink",
    preview: "https://recyc-link-beta.vercel.app/",
  },
  {
    name: "Chat App",
    description: "Real-time chat app",
    tech: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "TailwindCSS",
      "Socket.io",
    ],
    image: "https://res.cloudinary.com/dmdlgpurh/image/upload/v1741028959/yqopk4eqff7w6w8vb12a.png",
    href: "https://github.com/animesh156/chat-web-app",
    preview: "https://chatpy-kkfy.onrender.com",
  },

   {
    name: "Quizzy",
    description: "Interactive Quiz App",
    tech: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "TailwindCSS",
      "Socket.io",
    ],
    image: "https://res.cloudinary.com/dmdlgpurh/image/upload/v1741028881/zg48ye3isoizobkolikp.png",
    href: "https://github.com/animesh156/quiz-app",
    preview: "https://quiz-app-frontend-blush.vercel.app/",
  },

   {
    name: "MindWell",
    description: "Real-time chat app",
    tech: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "TailwindCSS",
    ],
    image: "https://res.cloudinary.com/dmdlgpurh/image/upload/v1741028934/gbqfnrtx8wu097v8a7v7.png",
    href: "https://github.com/animesh156/mental-wellness-app",
    preview: "https://mental-wellness-iota.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full max-w-xs sm:max-w-sm md:max-w-2xl mx-auto mb-16 px-0 sm:px-2 md:px-4 py-8 md:py-12"
    >
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-left text-neutral-800 dark:text-white tracking-tight"
        whileHover={{ scale: 1.03 }}
      >
        <Underline classname="pb-2">Projects I have worked on</Underline>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
          <PinContainer key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}