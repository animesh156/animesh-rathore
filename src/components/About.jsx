import Underline from "./Underline";
import GithubGraph from "./GithubGraph";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="mt-4 md:mt-12 mb-10 md:mb-20 w-full max-w-[98vw] md:max-w-2xl"
    >
      {/* 💠 About Section with smooth fade-up animation */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p
          className="dark:text-gray-300 text-neutral-900 font-extralight text-sm md:text-md leading-relaxed text-left"
          style={{ fontWeight: 500 }}
        >
          Animesh is a{" "}
          <Underline>2025 Computer Science Engineering graduate</Underline> from{" "}
          <Underline>RNTU, Bhopal</Underline>. During his internship at{" "}
          <Underline>WhatBytes</Underline>, he built user-friendly, responsive,
          and SEO optimized pages using <Underline>Next.js</Underline> and{" "}
          <Underline>Tailwind CSS</Underline>.
        </p>

        <p
          className="dark:text-gray-300 text-neutral-900 mt-6 md:mt-10 font-extralight leading-relaxed text-left text-sm md:text-md"
          style={{ fontWeight: 500 }}
        >
          He specializes in developing full-stack applications using the{" "}
          <Underline>MERN stack</Underline>, focusing on secure, user-friendly,
          and performance-driven designs. His passion lies in integrating
          real-world functionality into products and exploring the possibilities
          of <Underline>Generative AI</Underline> to create intelligent,
          impactful software solutions.
        </p>
      </motion.div>

      {/* 💠 GitHub Activity Section */}
      <div className="mt-12 max-w-[98vw] md:w-2xl w-full">
        <motion.h2
          className="text-2xl md:text-2xl font-semibold text-neutral-800 dark:text-white mb-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Underline>My GitHub Activity</Underline>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <GithubGraph username="animesh156" />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
