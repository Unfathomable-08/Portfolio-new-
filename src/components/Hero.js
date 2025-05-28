"use client";

import dynamic from "next/dynamic";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  // Parallax effect for headline
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });
  const translateX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  return (
    <div className="relative bg-[var(--primary)] h-screen flex items-center justify-center overflow-hidden p-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)]/20 to-[var(--primary)] animate-gradient"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl">
      </div>

      {/* Gradient Overlay for Depth */}
      <div className="absolute bg-gradient-to-b  from-transparent to-[var(--primary)] h-36 absolute bottom-0 z-5 w-full"></div>
      <div className="absolute bg-gradient-to-b  to-transparent from-[var(--primary)] h-36 absolute top-8 z-5 w-full"></div>
    </div>
  );
}