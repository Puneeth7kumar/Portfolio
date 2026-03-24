"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MouseEvent as ReactMouseEvent } from "react";
import { Button, Heading, SectionContainer } from "@/components/ui";

export function AboutSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 110, damping: 18, mass: 0.45 });
  const springY = useSpring(mouseY, { stiffness: 110, damping: 18, mass: 0.45 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const translateX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  const handleMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const resetMove = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <SectionContainer
      id="about"
      className="about-cinematic-bg relative overflow-hidden border-y border-border"
    >
      <div className="about-moving-gradient pointer-events-none absolute inset-0 opacity-55" />
      <div className="about-grid-animated pointer-events-none absolute inset-0 opacity-35" />
      <div className="about-noise pointer-events-none absolute inset-0 opacity-20" />
      <div className="about-vignette pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute left-[12%] top-[22%] h-64 w-64 rounded-full bg-brand-blue/25 blur-[120px]" />
      <div className="pointer-events-none absolute right-[12%] top-[20%] h-72 w-72 rounded-full bg-brand-pink/20 blur-[130px]" />

      <div className="relative z-10 grid items-center gap-10 md:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative p-2 md:p-4 lg:p-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-xs uppercase tracking-[0.24em] text-text-low md:text-sm"
          >
            About Me
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <Heading level="h1" className="mt-4 max-w-2xl text-[2rem] leading-[1.12] sm:text-[2.35rem] lg:text-[2.75rem]">
              I don&apos;t just build apps.
              <br />
              I build experiences.
            </Heading>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-text-medium md:text-lead"
          >
            Full Stack Developer building premium digital products, AI-powered
            experiences, and creator-first stories. My approach combines
            engineering discipline, visual polish, and long-term growth mindset.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#projects">
              <Button variant="glow" className="w-full sm:w-auto">
                View Projects
              </Button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <Button variant="outline" className="w-full sm:w-auto">
                Download Resume
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          onMouseMove={handleMove}
          onMouseLeave={resetMove}
          style={{
            rotateX,
            rotateY,
            x: translateX,
            y: translateY,
            transformStyle: "preserve-3d",
          }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_56%_42%,rgba(139,92,246,0.3),transparent_52%)] blur-3xl" />
          <div className="about-light-beam pointer-events-none absolute left-[46%] top-[8%] h-[84%] w-[24%] -translate-x-1/2 rotate-[6deg] opacity-35" />
          <div className="pointer-events-none absolute right-[12%] top-[14%] h-40 w-40 rounded-full bg-brand-blue/25 blur-[80px]" />
          <div className="pointer-events-none absolute left-[16%] top-[28%] h-44 w-44 rounded-full bg-brand-pink/18 blur-[90px]" />
          <div className="relative h-[420px] sm:h-[500px] md:h-[620px]">
            <div className="pointer-events-none absolute inset-x-16 bottom-8 h-10 rounded-full bg-black/45 blur-2xl" />
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <Image
                src="/profile-image.png"
                alt="Puneeth Kumar full body profile"
                fill
                priority={false}
                className="object-contain object-bottom drop-shadow-[0_0_30px_rgba(139,92,246,0.32)]"
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
