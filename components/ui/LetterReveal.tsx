"use client";

import { motion } from "motion/react";

interface LetterRevealProps {
  text: string;
  startIndex: number;
  isActive: boolean;
  reduceMotion: boolean;
}

export function LetterReveal({ text, startIndex, isActive, reduceMotion }: LetterRevealProps) {
  return (
    <span role="text" aria-label={text}>
      {Array.from(text).map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          aria-hidden="true"
          initial={{ opacity: 0, y: 5 }}
          animate={reduceMotion || isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  delay: isActive ? (startIndex + index) * 0.014 : 0,
                  duration: 0.012,
                  ease: "easeOut",
                }
          }
          style={character === " " ? undefined : { display: "inline-block" }}
        >
          {character}
        </motion.span>
      ))}
    </span>
  );
}
