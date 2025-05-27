"use client"
import Gear from "../sub-components/Gear.js"

export default function About() {
    
  return (
    <div className="h-screen bg-[var(--primary)] grid grid-cols-[1fr_1fr] items-center p-20">
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
            <div className="transform rotate-6 scale-90 gear-1 w-auto h-38">
                <Gear hover=""/>
            </div>
            <div className="transform rotate-36 scale-75 translate-y-22 gear-2 h-38 w-auto">
                <Gear/>
            </div>
        </div>
    </div>
  );
}