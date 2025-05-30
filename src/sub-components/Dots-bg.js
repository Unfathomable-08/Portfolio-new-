"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useMemo, useRef, useState } from "react";

const NUM_DOTS = 70;
const THRESHOLD = 150;

const generateDots = () => {
  return Array.from({ length: NUM_DOTS }, (_, i) => ({
    id: i,
    top: Math.random() * window.innerHeight, // Initial top
    left: Math.random() * window.innerWidth, // Initial left
    duration: 5 + Math.random() * 5, // Duration for movement
    xTarget: Math.random() * 100 - 25, // X position it will be allowed to move 
    yTarget: Math.random() * 100 - 25, // Y position it willl be allowed to move
  }));
};

export default function DotsBg() {
  const dots = useMemo(generateDots, []); 

  const positionsRef = useRef(
    dots.map((dot) => ({
      id: dot.id,
      x: useMotionValue(0), // Starting Pos
      y: useMotionValue(0), // Starting Pos
      top: dot.top, // Initial
      left: dot.left, // Initial
    }))
  );

  // This triggers a re-render every frame with updated line data
  const [lines, setLines] = useState([]);

  useAnimationFrame(() => {
    const newLines = [];
    const positions = positionsRef.current;

    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const xi = positions[i].left + positions[i].x.get();
        const yi = positions[i].top + positions[i].y.get();
        const xj = positions[j].left + positions[j].x.get();
        const yj = positions[j].top + positions[j].y.get();

        const dx = xj - xi;
        const dy = yj - yi;
        const distance = Math.sqrt(dx * dx + dy * dy); // euclidean distance

        if (distance < THRESHOLD) {
          const angle = (Math.atan2(dy, dx) * 180) / Math.PI; // angle for line
          newLines.push({
            id: `${i}-${j}`,
            x: xi,
            y: yi,
            length: distance,
            angle,
          });
        }
      }
    }

    setLines(newLines); // triggers re-render
  });

  return (
    <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
      {/* Dynamic Lines */}
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute bg-[var(--secondary)] opacity-30"
          style={{
            top: `${line.y}px`,
            left: `${line.x}px`,
            width: `${line.length}px`,
            height: "1px",
            transform: `rotate(${line.angle}deg)`,
            transformOrigin: "0 0",
          }}
        />
      ))}

      {/* Animated Dots */}
      {dots.map((dot, i) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-[var(--secondary)] opacity-40"
          style={{
            top: `${dot.top}px`,
            left: `${dot.left}px`,
            width: "4px",
            height: "4px",
            x: positionsRef.current[i].x,
            y: positionsRef.current[i].y,
          }}
          animate={{ x: [0, dot.xTarget, 0], y: [0, dot.yTarget, 0] }}
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
