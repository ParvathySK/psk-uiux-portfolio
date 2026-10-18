"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function ProjectHover({ children }: { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}
