import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import GithubGraph from "./components/GithubGraph";
import ProfileCard from "./components/ProfileCard";
import Projects from "./components/Projects";

import Underline from "./components/Underline";

import TechMarquee from "./components/TechStack";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen dark:bg-[#080808] text-[#f5f5f7] overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col items-start md:items-center justify-center px-2 sm:px-4 md:px-8 py-6 md:py-12 max-w-[98vw] md:max-w-5xl mx-auto mt-4 md:mt-10">
        <ProfileCard />

      <section
  id="about"
  className="mt-4 md:mt-12 mb-10 md:mb-20 w-full max-w-[98vw] md:max-w-2xl"
>
  <p
    className="dark:text-gray-300 text-neutral-900 font-extralight text-sm md:text-md leading-relaxed text-left"
    style={{ fontWeight: 200 }}
  >
    I'm a Computer Science Engineering student at <Underline>RNTU, Bhopal</Underline>, graduating in 2025. With hands-on experience as a Frontend Development Intern at <Underline>Whatbytes</Underline>, I contributed to modern web solutions using <Underline>Next.js</Underline>.
  </p>
  <p
    className="dark:text-gray-300 text-neutral-800 mt-6 md:mt-10 font-extralight leading-relaxed text-left text-sm md:text-md"
    style={{ fontWeight: 200 }}
  >
    I specialize in building full-stack web applications using the <Underline>MERN stack</Underline>. My passion lies in creating <Underline>scalable</Underline>, <Underline>user-friendly</Underline> interfaces and integrating real-world functionality into products. I’m especially drawn to exploring <Underline>Generative AI</Underline> and its potential to build smart, impactful software.
  </p>
</section>


        <section id="github" className="mb-10 md:mb-20 max-w-[98vw] md:w-2xl">
          <GithubGraph username="animesh156" />
        </section>

        <TechMarquee />

        <Projects />

        <Footer />
      </main>
    </div>
  );
}
