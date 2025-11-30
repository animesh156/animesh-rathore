import React, { useEffect, useState } from "react";

const TRAIL_LENGTH = 18;

const NeonCursorTrail = () => {
  const [points, setPoints] = useState([]);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia?.("(pointer: fine)").matches;
    if (!supportsFinePointer) return;

    setEnabled(true);

    const handleMove = (e) => {
      const { clientX: x, clientY: y } = e;

      setVisible(true);
      setPoints((prev) => {
        const next = [...prev, { x, y }];
        return next.slice(-TRAIL_LENGTH);
      });
    };

    const handleLeave = () => {
      setVisible(false);
      setPoints([]);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  if (!enabled || !visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {points.map((point, index) => {
        const intensity = (index + 1) / points.length;
        const size = 14 + 36 * intensity;
        const opacity = 0.6 + 0.4 * intensity; // 🚀 more visible
        const blur = 4 + 14 * intensity; // less blur → sharper neon
        const hue = (index * 40) % 360;

        return (
          <div
            key={index}
            className="absolute rounded-full will-change-transform"
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: size,
              height: size,
              opacity,
              filter: `blur(${blur}px) brightness(1.4) saturate(2)`, // 💥 boosted glow
              background: `radial-gradient(circle, hsl(${hue}, 100%, 60%), transparent 60%)`,
              transition: "transform 40ms ease-out, opacity 100ms ease-out",
            }}
          />
        );
      })}
    </div>
  );
};

export default NeonCursorTrail;
