"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const logos = [
  { src: "/html.png", name: "HTML" },
  { src: "/css.png", name: "CSS" },
  { src: "/javascript.png", name: "JavaScript" },
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

  return (
    <div className="min-h-screen bg-[var(--primary)] text-white flex flex-col items-center justify-center gap-y-8 px-4 sm:px-20 relative bg-dots">
        {/* Soft blurred circles */}
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white opacity-40 blur-3xl pointer-events-none z-15"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 rounded-full bg-[#ffffffaa] opacity-40 blur-3xl pointer-events-none z-15"></div>

      {[0, 6, 13].map((start, rowIndex) => (
        <div className="flex gap-x-6 relative " key={rowIndex}>
          {logos
            .slice(start, start + (rowIndex === 1 ? 7 : 6))
            .map(({ src, name }, idx) => {
              const globalIndex = start + idx;
              const isHovered = hoveredIndex === globalIndex;
              return (
                <div key={globalIndex} className="relative">
                  <div
                    className="bg-skills w-18 h-24 rounded-lg flex justify-center items-center overflow-hidden cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(globalIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="h-23 w-17 flex rounded justify-center items-center bg-[var(--primary)]">
                      <Image
                        src={src}
                        width={
                          name !== "Node.js" && name !== "Pytorch" ? 48 : 32
                        }
                        height={
                          name !== "Node.js" && name !== "Pytorch" ? 48 : 32
                        }
                        alt={name}
                      />
                    </div>
                  </div>

                  {isHovered && (
                    <div
                      className="absolute top-[2px] left-[2px] h-23 w-17 rounded flex justify-center items-end bg-skills-hover z-10 whitespace-nowrap pointer-events-none"
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
