import React from "react";

import Sidebar from "./components/SideBar";
import ProfileCard from "./components/ProfileCard";
import Projects from "./components/Projects";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/About";
import TechMarquee from "./components/TechStack";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";

export default function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen dark:bg-[#0f0f0f] text-[#f5f5f7] overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col items-start md:items-center justify-center px-2 sm:px-4 md:px-8 py-6 md:py-12 max-w-[98vw] md:max-w-5xl mx-auto mt-4 md:mt-10">
        <ProfileCard />

        <AboutSection />

      
        <Experience />

        <TechMarquee />

        <Projects />

        <ContactSection />

        <Footer />
      </main>
    </div>
  );
}
