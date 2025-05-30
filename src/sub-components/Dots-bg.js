"use client";

import { motion } from "framer-motion";

const NUM_DOTS = 50;

const generateDots = () => {
  return Array.from({ length: NUM_DOTS }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: 5 + Math.random() * 5,
    x: Math.random() * 50 - 25, // random between -25 to +25
    y: Math.random() * 50 - 25,
  }));
};

const dots = generateDots();

export default function DotsBg() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-[var(--secondary)] opacity-50"
          style={{
            top: dot.top,
            left: dot.left,
            width: "6px",
            height: "6px",
          }}
          animate={{
            x: [0, dot.x, 0],
            y: [0, dot.y, 0],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
