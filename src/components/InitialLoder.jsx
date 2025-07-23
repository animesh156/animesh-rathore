import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InitialLoader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const intervalRef = useRef(null);

  const radius = 140;
  const stroke = 12;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const startProgress = () => {
    if (intervalRef.current || progress >= 100) return;

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setProgress(100);
          setTimeout(() => {
            setDone(true);
            onFinish();
          }, 400);
          return 100;
        }
        return prev + 1;
      });
    }, 15);
  };

  const stopProgress = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="w-screen h-screen bg-[#0f0f0f] flex items-center justify-center text-white"
        >
          <div className="relative w-[300px] h-[300px]">
            <svg
              height={radius * 2}
              width={radius * 2}
              className="absolute top-0 left-0"
            >
              <circle
                stroke="#2d2d2d"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
              <motion.circle
                stroke="#00FFFF"
                fill="transparent"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                animate={{ strokeDashoffset }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </svg>

            {/* Centered Start Button */}
            <motion.button
              onMouseDown={startProgress}
              onMouseUp={stopProgress}
              onMouseLeave={stopProgress}
              onTouchStart={startProgress}
              onTouchEnd={stopProgress}
              whileTap={{ scale: 0.95 }}
              className="absolute left-36 top-1/2 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-700 transition text-base font-semibold shadow-lg"
            >
             Hold to Start
              <motion.span
                className="absolute inset-0 rounded-full bg-cyan-400 opacity-20 z-[-1]"
                initial={{ scale: 0 }}
                animate={{ scale: 1.6 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeOut",
                }}
              />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoader;
