
import { motion } from "motion/react"

const Underline = ({ children, classname="" }) => (
  <span className={`relative inline-block ${classname}`}>
    <span className="relative z-10">{children}</span>
    <motion.svg
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="absolute left-0 bottom-0 w-full h-[0.3em]"
      style={{ pointerEvents: "none" }}
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
    >
      {/* Upside-down curved underline */}
      <motion.path
        d="M5,15 Q50,0 95,15"
        stroke="#c940ff"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </motion.svg>
  </span>
);

export default Underline;