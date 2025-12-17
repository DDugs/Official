"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Spark {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const fireColors = [
  "#ff4500ff", // Orange Red
  "#ff6b35", // Bright Orange
  "#ffaa00", // Amber
  "#ff5722", // Deep Orange
  "#ffd700", // Gold
  "#ff8c00", // Dark Orange
];

function getRandomFireColor() {
  return fireColors[Math.floor(Math.random() * fireColors.length)];
}

export default function FireSparks() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    // Generate initial sparks
    const initialSparks: Spark[] = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      color: getRandomFireColor(),
    }));
    setSparks(initialSparks);

    // Continuously add new sparks
    const interval = setInterval(() => {
      setSparks((prev) => {
        const newSpark: Spark = {
          id: Date.now() + Math.random(),
          x: Math.random() * 100,
          y: 100 + Math.random() * 10, // Start from bottom
          size: Math.random() * 6 + 2,
          duration: Math.random() * 3 + 2,
          delay: 0,
          color: getRandomFireColor(),
        };
        // Keep only last 150 sparks to prevent memory issues
        const updatedSparks = [...prev.slice(-109), newSpark];
        return updatedSparks;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      <AnimatePresence>
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            className="absolute rounded-full"
            style={{
              left: `${spark.x}%`,
              top: `${spark.y}%`,
              width: spark.size,
              height: spark.size,
              backgroundColor: spark.color,
              boxShadow: `0 0 ${spark.size * 2}px ${spark.color}, 0 0 ${spark.size * 4}px ${spark.color}`,
            }}
            initial={{
              opacity: 0,
              scale: 0,
              y: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1.5, 1, 0.5],
              y: [-20, -200, -500, -900],
              x: [0, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 150],
            }}
            transition={{
              duration: spark.duration,
              delay: spark.delay,
              ease: "easeOut",
            }}
            exit={{ opacity: 0 }}
          />
        ))}
      </AnimatePresence>

      {/* Ember glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-600/20 via-red-500/10 to-transparent" />

      {/* Ambient fire glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  );
}
