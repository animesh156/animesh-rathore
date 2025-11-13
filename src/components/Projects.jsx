import React from "react";
import { PinContainer } from "./PinCard";
import { motion } from "framer-motion";
import Underline from "./Underline";

const projects = [
  {
    name: "MetMed",
    description: "Doctor–Patient Appointment Booking Platform",
    tech: ["React", "MongoDB", "Express", "Node.js", "Firebase", "TailwindCSS"],
    image:
      "https://res.cloudinary.com/dmdlgpurh/image/upload/v1750966183/Screenshot_384_gt5883.png",
    href: "https://github.com/animesh156/MetMed",
    preview: "https://met-med.vercel.app/",
    videoUrl:
      "https://res.cloudinary.com/dcnqzrwkb/video/upload/v1753263785/metmed_imvlqg.mp4",
  },
  {
    name: "GenCV",
    description: "AI-Powered Resume & Cover Letter Generator",
    tech: ["React", "MongoDB", "Express", "Node.js", "TailwindCSS", "Firebase"],
    image:
      "https://res.cloudinary.com/dmdlgpurh/image/upload/v1750966469/Screenshot_385_pax9lz.png",
    href: "https://github.com/animesh156/AI-Resume-Cover-Letter-Builder",
    preview: "https://opencv-psi.vercel.app/",
    videoUrl:
      "https://res.cloudinary.com/dcnqzrwkb/video/upload/v1753263827/genCV_zihjx1.mp4",
  },
  {
    name: "RecycLink",
    description: "Waste Management & Recycling Marketplace",
    tech: ["React", "MongoDB", "Express", "Node.js", "TailwindCSS"],
    image:
      "https://res.cloudinary.com/dmdlgpurh/image/upload/v1741028788/uuijbsx8qq9q65rktaao.png",
    href: "https://github.com/animesh156/RecycLink",
    preview: "https://recyc-link-beta.vercel.app/",
    videoUrl:
      "https://res.cloudinary.com/dcnqzrwkb/video/upload/v1753263699/recyclink_u6i3pe.mp4",
  },
  {
    name: "Chatpy",
    description: "Real-Time Messaging App",
    tech: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "TailwindCSS",
      "Socket.io",
    ],
    image:
      "https://res.cloudinary.com/dmdlgpurh/image/upload/v1741028959/yqopk4eqff7w6w8vb12a.png",
    href: "https://github.com/animesh156/chat-web-app",
    preview: "https://chatpy-kkfy.onrender.com",
    videoUrl:
      "https://res.cloudinary.com/dcnqzrwkb/video/upload/v1753263837/chatpy_smfexk.mp4",
  },
  {
    name: "Quizzy",
    description: "Interactive Quiz Application",
    tech: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "TailwindCSS",
      "Socket.io",
    ],
    image:
      "https://res.cloudinary.com/dmdlgpurh/image/upload/v1741028881/zg48ye3isoizobkolikp.png",
    href: "https://github.com/animesh156/quiz-app",
    preview: "https://quiz-app-frontend-blush.vercel.app/",
    videoUrl:
      "https://res.cloudinary.com/dcnqzrwkb/video/upload/v1753263842/quizapp_rla035.mp4",
  },

  {
    name: "MindWell",
    description: "Mental Wellness & Self-Care Support App",
    tech: ["React", "MongoDB", "Express", "Node.js", "TailwindCSS"],
    image:
      "https://res.cloudinary.com/dmdlgpurh/image/upload/v1741028934/gbqfnrtx8wu097v8a7v7.png",
    href: "https://github.com/animesh156/mental-wellness-app",
    preview: "https://mental-wellness-iota.vercel.app/",
    videoUrl:
      "https://res.cloudinary.com/dcnqzrwkb/video/upload/v1753262596/mindwell_kny2hv.mp4",
  },
];

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="w-full max-w-xs sm:max-w-sm md:max-w-2xl mx-auto mb-16 px-0 sm:px-2 md:px-4 py-8 md:py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInLeft}
    >
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-left text-neutral-800 dark:text-white tracking-tight"
        whileHover={{ scale: 1.03 }}
      >
        <Underline classname="pb-2">Projects I have worked on</Underline>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <PinContainer {...project} />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 flex justify-center"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <a
          href="https://github.com/animesh156"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
        >
          View More Projects →
        </a>
      </motion.div>
    </motion.section>
  );
}
