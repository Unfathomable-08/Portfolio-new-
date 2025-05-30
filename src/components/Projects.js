"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Chat Application",
    desc: "A real-time chat application developed using Next.js for the frontend, Tailwind CSS for styling, Firebase for authentication and real-time messaging, and MySQL for storing user data. It includes features like user login/signup, chat rooms, online status, and responsive design for mobile and desktop.",
    tech: "Next.js, Tailwind, Firebase, MySQL",
    img: "/chat.JPG",
  },
  {
    title: "SkyMart",
    desc: "An e-commerce frontend project developed during my internship at a software company. I collaborated with a team to build the user interface using Next.js and Bootstrap. The design focused on responsiveness, product listings, filters, and clean UI layout. Only frontend code is available.",
    tech: "Next.js, Bootstrap",
    img: "/skymart.JPG",
  },
  {
    title: "SkyTech Official Website",
    desc: "An official business website developed for a software house during my internship. This project involved building a multi-section React site with animations using AOS, styled manually with vanilla CSS, and integrated with EmailJS for contact form submissions. The site is fully responsive and production-ready.",
    tech: "React, Vanilla CSS, EmailJS, AOS",
    img: "/skytech.JPG",
  },
  {
    title: "Disease Predicting System",
    desc: "A machine learning system that predicts possible diseases based on user-inputted symptoms. Developed using a Support Vector Classifier (SVC) with Scikit-learn, Flask for backend API, and a minimal yet modern frontend using Alpine.js and Tailwind CSS. It includes a symptom dropdown and result display.",
    tech: "Scikit-learn (SVC), Flask, Alpine.js, Tailwind",
    img: "/disease.JPG",
  },
  {
    title: "Cosine Similarity AI",
    desc: "A simple AI tool that calculates the similarity between two pieces of text using the cosine similarity method. The backend is powered by Flask and Scikit-learn's vectorization methods, while the frontend is lightweight using Alpine.js and styled with Tailwind. Good for NLP experiments and demos.",
    tech: "Scikit-learn, Flask, Tailwind, Alpine.js",
    img: "/cosine.JPG",
  },
  {
    title: "Vizuflect",
    desc: "A data visualization app built using React that lets users generate a variety of graph types including bar, pie, and line charts. It supports mathematical equations, CSV input, and manual data entry. The app is styled with Tailwind CSS and uses Chart.js or similar libraries for rendering.",
    tech: "React, Chart.js, Tailwind",
    img: "/vizuflect.JPG",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[var(--primary)] py-10 px-4">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">My Projects</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <Image
              src={project.img}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-700 mb-3">{project.desc}</p>
              <p className="text-xs text-gray-400 italic">{project.tech}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
