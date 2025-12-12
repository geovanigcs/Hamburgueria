"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Gerar posições fixas para evitar hydration mismatch
const generateFixedPositions = (count: number) => {
  const positions = [];
  for (let i = 0; i < count; i++) {
    positions.push({
      x: Math.random() * 1000,
      y: Math.random() * 1000,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    });
  }
  return positions;
};

const emojiPositions = generateFixedPositions(8);
const sparklePositions = generateFixedPositions(20);

export function AnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const floatingEmojis = ["🍔", "🍟", "🥤", "🍕", "🌮", "🍗", "🥓", "🧀"];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {/* Emojis flutuantes de fundo */}
      {isMounted && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {floatingEmojis.map((emoji, index) => {
            const pos = emojiPositions[index];
            return (
              <motion.div
                key={index}
                className="absolute text-4xl opacity-10"
                initial={{
                  x: pos.x,
                  y: -100,
                }}
                animate={{
                  y: typeof window !== "undefined" ? window.innerHeight + 100 : 1100,
                  x: [pos.x, pos.x + 100, pos.x - 50],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: pos.duration,
                  repeat: Infinity,
                  delay: pos.delay,
                  ease: "linear",
                }}
              >
                {emoji}
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Círculos decorativos animados */}
      <motion.div
        className="pointer-events-none absolute left-10 top-20 h-32 w-32 rounded-full bg-yellow-400/10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-20 right-10 h-40 w-40 rounded-full bg-red-400/10"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Partículas de brilho */}
      {isMounted &&
        [...Array(20)].map((_, i) => {
          const pos = sparklePositions[i];
          return (
            <motion.div
              key={`sparkle-${i}`}
              className="pointer-events-none absolute h-1 w-1 rounded-full bg-yellow-400"
              initial={{
                x: pos.x,
                y: pos.y,
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: pos.delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
    </>
  );
}
