"use client";

import { motion } from "framer-motion";

type SectionRevealProps = {
  children: React.ReactNode;
  delay?: number;
};

export function SectionReveal({ children, delay = 0 }: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
