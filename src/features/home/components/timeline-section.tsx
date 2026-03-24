"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaGraduationCap } from "react-icons/fa6";
import { Card, Heading, SectionContainer } from "@/components/ui";

const timelineItems = [
  {
    type: "Education",
    title: "Master of Computer Application",
    period: "2023 - 2025",
    description:
      "Built a strong foundation in algorithms, distributed systems, and software engineering while leading practical product projects.",
    Icon: FaGraduationCap,
  },
  {
    type: "Experience",
    title: "Full Stack Developer",
    period: "2025 - Present",
    description:
      "Designing and shipping modern web platforms with React, Next.js, Node.js, and cloud-native architecture for high-growth teams.",
    Icon: FaBriefcase,
  },
  {
    type: "Projects",
    title: "BalyayaBandhan",
    period: "2026 - Present",
    description:
      "A family matrimonial community website for tracking family and matrimonial profiles.",
    Icon: FaCode,
  },
];

export function TimelineSection() {
  return (
    <SectionContainer id="timeline" className="section-timeline-bg relative overflow-hidden border-y border-border">
      <div className="section-animated-gradient pointer-events-none absolute inset-0 bg-hero-gradient opacity-28" />
      <div className="section-grid-overlay pointer-events-none absolute inset-0 opacity-24" />
      <div className="section-noise-overlay pointer-events-none absolute inset-0 opacity-12" />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-10 sm:mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-text-low sm:text-sm">Timeline</p>
          <Heading level="h1" className="mt-4 max-w-3xl">
            Education, experience, and product milestones shaping my journey.
          </Heading>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute left-3 top-0 h-full w-px bg-gradient-to-b from-brand-blue/30 via-brand-purple/40 to-brand-pink/30 sm:left-4 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-7 sm:space-y-8 md:space-y-12">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isLeft ? -32 : 32, y: 12 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  className="relative md:grid md:grid-cols-2"
                >
                  <div className={isLeft ? "pl-7 sm:pl-8 md:pl-0 md:pr-10" : "pl-7 sm:pl-8 md:col-start-2 md:pl-10"}>
                    <Card className="transition duration-300 hover:-translate-y-1 hover:border-brand-purple/45 hover:bg-white/[0.08]">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full border border-white/15 bg-white/[0.06] p-2.5">
                          <item.Icon className="h-4 w-4 text-brand-pink" />
                        </div>
                        <p className="text-xs uppercase tracking-[0.2em] text-text-low">
                          {item.type}
                        </p>
                      </div>
                      <Heading level="h3" className="mt-4">
                        {item.title}
                      </Heading>
                      <p className="mt-2 text-sm text-brand-blue">{item.period}</p>
                      <p className="mt-4 text-sm text-text-medium">{item.description}</p>
                    </Card>
                  </div>

                  <div className="pointer-events-none absolute left-3 top-8 z-20 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-white/30 bg-brand-gradient shadow-glow sm:left-4 md:left-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
