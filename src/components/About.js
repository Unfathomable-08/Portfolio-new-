"use client"
import Gear from "../sub-components/Gear.js"
import DotsBg from "../sub-components/Dots-bg.js"
import { motion, useCycle  } from "framer-motion"
import { useEffect } from "react";
 
export default function About() {
    const [direction, cycleDirection] = useCycle(1, -1); // 1 for clockwise, -1 for counter-clockwise

  useEffect(() => {
    const interval = setInterval(() => {
      cycleDirection(); // Flip direction every 188s
    }, 18000); // Match the duration

    return () => clearInterval(interval);
  }, [cycleDirection])
    
  return (
    <div className="min-h-screen bg-[var(--primary)] grid grid-cols-[1fr_1fr] items-center px-20 relative">
        <div>
            <h4 className="font-medium text-xl pb-3">
                Hi, I’m Muhammad,
            </h4>
            <p>
                A full-stack web and app developer focused on building intuitive, responsive web apps. I specialize in React and Next for
                dynamic UIs and use Node.js and Express for scalable back-end systems. I’m also experienced with Flask and PHP, and work with both SQL and MongoDB.
                I’m passionate about creating solutions that solve real-world problems and improve user experiences. Whether designing with Tailwind CSS
                for custom layouts or using Bootstrap for quick, responsive designs, my goal is to create user-friendly applications. Beyond coding, I’m
                fascinated by physics and mathematics—fields that challenge my problem-solving skills and inspire my work in development. If you’re looking
                for someone who loves to solve complex problems, I’d love to collaborate on your next project!
            </p>
            <button className="bg-[var(--secondary)] hover:bg-[var(--hover)] rounded p-btn m-btn">Connect Now</button>
        </div>

        <div className="flex justify-center transform translate-x-4 -translate-y-12 gap-x-6">
            <motion.div 
                initial={{ rotate: 0 }} 
                animate={{ rotate: -360 * direction }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                >
                <Gear />
            </motion.div>

            <motion.div 
                initial={{ rotate: 0 }} 
                animate={{ rotate: 360 * direction }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="transform rotate-36 scale-75 translate-y-22 gear-2 h-38 w-auto"
            >
                <Gear />
            </motion.div>
        </div>
        <DotsBg />
    </div>
  );
}