"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const logos = [
  { src: "/html.png", name: "HTML" },
  { src: "/css.png", name: "CSS" },
  { src: "/javascript.jpg", name: "JavaScript" },
  { src: "/bootstrap.png", name: "Bootstrap" },
  { src: "/tailwind.png", name: "Tailwind CSS" },
  { src: "/react.png", name: "React" },
  { src: "/next.png", name: "Next.js" },
  { src: "/alpine.png", name: "Alpine.js" },
  { src: "/node.png", name: "Node.js" },
  { src: "/express.png", name: "Express.js" },
  { src: "/mysql.png", name: "MySQL" },
  { src: "/mongodb.png", name: "MongoDB" },
  { src: "/postgresql.png", name: "PostgreSQL" },
  { src: "/python.png", name: "Python" },
  { src: "/socket.png", name: "Socket.io" },
  { src: "/redis.png", name: "Redis" },
  { src: "/php.svg", name: "PHP" },
  { src: "/sklearn.png", name: "Scikit-Learn" },
  { src: "/pytorch.png", name: "Pytorch" },
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);

  // Reset animation every 38 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 38000); // 38 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className="min-h-screen bg-[var(--primary)] text-white flex flex-col items-center justify-center gap-y-8 px-4 sm:px-20"
    >
      {[0, 6, 13].map((start, rowIndex) => (
        <div className="flex gap-x-6 relative" key={rowIndex}>
          {logos.slice(start, start + (rowIndex === 1 ? 7 : 6)).map(({ src, name }, idx) => {
            const globalIndex = start + idx;
            const isHovered = hoveredIndex === globalIndex;
            return (
              <div key={globalIndex} className="relative">
                <motion.div
                  key={`${globalIndex}-${animationKey}`} // Unique key to trigger animation restart
                  className="bg-skills w-12 h-20 flex justify-center items-center overflow-hidden cursor-pointer"
                  animate={{
                    y: [0, -0, 0],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    delay: globalIndex * 2, // Reduced delay for smoother stagger
                  }}
                  onMouseEnter={() => setHoveredIndex(globalIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="h-18 w-10 flex justify-between items-center">
                      <Image
                        src={src}
                        width={name !== "Node.js" && name !== "Pytorch" ? 40 : 30}
                        height={name !== "Node.js" && name !== "Pytorch" ? 40 : 30}
                        alt={name}
                        />
                  </div>
                </motion.div>

                {isHovered && (
                  <div
                    className="absolute text-black bottom-[calc(100%+4px)] left-1/2 -translate-x-1/2 text-[12px] z-10 rounded-[4px] bg-[var(--tertiary)] px-2 whitespace-nowrap pointer-events-none"
                    role="tooltip"
                    aria-label={name}
                  >
                    {name}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}