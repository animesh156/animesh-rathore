import Underline from "./Underline";
import GithubGraph from "./GithubGraph";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="mt-4 md:mt-12 mb-10 md:mb-20 w-full max-w-[98vw] md:max-w-2xl"
    >
      <p
        className="dark:text-gray-300 text-neutral-900 font-extralight text-sm md:text-md leading-relaxed text-left"
        style={{ fontWeight: 500 }}
      >
        I'm a Computer Science Engineering student at{" "}
        <Underline>RNTU, Bhopal</Underline>, graduating in 2025. With hands-on
        experience as a Frontend Development Intern at{" "}
        <Underline>Whatbytes</Underline>, I contributed to modern web solutions
        using <Underline>Next.js</Underline>.
      </p>
      <p
        className="dark:text-gray-300 text-neutral-900 mt-6 md:mt-10 font-extralight leading-relaxed text-left text-sm md:text-md"
        style={{ fontWeight: 500 }}
      >
        I specialize in building full-stack web applications using the{" "}
        <Underline>MERN stack</Underline>. My passion lies in creating{" "}
        <Underline>scalable</Underline>, <Underline>user-friendly</Underline>{" "}
        interfaces and integrating real-world functionality into products. I’m
        especially drawn to exploring <Underline>Generative AI</Underline> and
        its potential to build smart, impactful software.
      </p>

      {/* GitHub Activity Section */}
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
