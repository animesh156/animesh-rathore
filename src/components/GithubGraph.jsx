import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

export default function GithubGraph({ username }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleThemeChange = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    window.addEventListener("resize", handleResize);
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const transformData = (contributions) => {
    const weeksToShow = isMobile ? 170 : 280;
    return contributions.slice(-weeksToShow);
  };

  return (
    <div className="flex justify-center">
      <div className="rounded-lg p-4 w-fit text-black dark:text-white bg-white dark:bg-[#18181b] shadow border border-gray-200 dark:border-[#232323] transition-colors">
        <GitHubCalendar
          username={username}
          colorScheme={isDark ? "dark" : "light"}
          blockSize={isMobile ? 10 : 12}
          blockMargin={isMobile ? 3 : 4}
          fontSize={12}
          transformData={transformData}
          hideTotalCount
        />
      </div>
    </div>
  );
}
