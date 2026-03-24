"use client";

import { motion } from "framer-motion";
import { Button, Heading, SectionContainer } from "@/components/ui";
import { HeroCanvas } from "@/features/home/components/hero-canvas";
import { TypingRoles } from "@/features/home/components/typing-roles";

export function HeroSection() {
  return (
    <SectionContainer className="section-hero-bg relative flex min-h-[calc(100svh-3.5rem)] items-center overflow-hidden sm:min-h-[calc(100vh-4rem)]">
      <div className="section-animated-gradient pointer-events-none absolute inset-0 surface-gradient opacity-90" />
      <div className="section-grid-overlay pointer-events-none absolute inset-0 opacity-35" />
      <div className="section-noise-overlay pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute left-[12%] top-[24%] h-52 w-52 rounded-full bg-brand-blue/20 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-[12%] right-[10%] h-64 w-64 rounded-full bg-brand-pink/20 blur-[110px]" />

      <div className="relative z-10 grid w-full items-center gap-6 sm:gap-8 md:gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mb-3 text-[11px] uppercase tracking-[0.16em] text-text-medium sm:mb-5 sm:text-sm sm:tracking-[0.2em]"
          >
            Puneeth Kumar
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
          >
            <Heading level="display" className="max-w-4xl text-balance text-[1.55rem] leading-[1.16] sm:text-[2.5rem] md:text-display-2 lg:text-display-1">
              <span className="text-gradient-animated">Puneeth Kumar</span>
              <br />
              <span className="text-text-high">Builds cinematic digital experiences</span>
            </Heading>
          </motion.div>
          <TypingRoles />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-4 max-w-2xl text-sm leading-relaxed text-text-medium sm:text-base md:mt-8 md:text-lead"
          >
            Full-stack product builder focused on high-performance interfaces,
            AI-powered workflows, and immersive frontend architecture for modern
            brands and startups.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap md:mt-8 md:gap-4"
          >
            <a href="/#projects" className="w-full sm:w-auto">
              <Button variant="glow" className="w-full sm:w-auto">
                View Projects
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Me
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          <HeroCanvas />
        </motion.div>
      </div>
    </SectionContainer>
  );
}
