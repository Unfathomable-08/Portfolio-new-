"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

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

  return (
    <div
      className="min-h-screen bg-[var(--primary)] text-white flex flex-col items-center justify-center gap-y-8"
      style={{ paddingLeft: 80, paddingRight: 80 }}
    >
      {[0, 6, 13].map((start, rowIndex) => (
        <div className="flex gap-x-6" key={rowIndex} style={{ position: "relative" }}>
          {logos.slice(start, start + (rowIndex === 1 ? 7 : 6)).map(({ src, name }, idx) => {
            const globalIndex = start + idx;
            const isHovered = hoveredIndex === globalIndex;
            return (
              <div key={globalIndex} style={{ position: "relative" }}>
                <motion.div
                  className="bg-white w-12 h-12 rounded-full flex justify-center items-center overflow-hidden cursor-pointer"
                  animate={{
                    y: [0, -15, 0],
                    transition: {
                      duration: 2,
                      ease: "easeInOut",
                      delay: globalIndex * 2,
                    },
                  }}
                  onMouseEnter={() => setHoveredIndex(globalIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image src={src} width={name !== "Node.js" && name !== "Pytorch" ? 40 : 30} height={name !== "Node.js" && name !== "Pytorch" ? 40 : 30} alt={name} />
                </motion.div>

                {isHovered && (
                  <div
                    style={{
                      padding: "4px 8px",
                      whiteSpace: "nowrap",
                      pointerEvents: "none"
                    }}
                    className="absolute text-black bottom-[100%] left-[50%] transform translate-[-50%] text-[12px] z-10 rounded-[4px] bg-[var(--tertiary)]"
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
