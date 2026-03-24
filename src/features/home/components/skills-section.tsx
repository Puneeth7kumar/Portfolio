"use client";

import { motion } from "framer-motion";
import { FaBrain, FaCode, FaDatabase, FaScrewdriverWrench } from "react-icons/fa6";
import { Card, Heading, SectionContainer } from "@/components/ui";
import { SkillsSphere } from "@/features/home/components/skills-sphere";

const skillCategories = [
  {
    title: "Frontend",
    Icon: FaCode,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    Icon: FaDatabase,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "AI/ML",
    Icon: FaBrain,
    skills: ["OpenAI APIs", "LangChain", "Python", "TensorFlow", "PyTorch"],
  },
  {
    title: "Tools",
    Icon: FaScrewdriverWrench,
    skills: ["Git & GitHub", "Docker", "Figma", "Firebase", "Vercel"],
  },
];

export function SkillsSection() {
  return (
    <SectionContainer id="skills" className="section-skills-bg relative overflow-hidden border-y border-border">
      <div className="section-animated-gradient pointer-events-none absolute inset-0 bg-hero-gradient opacity-45" />
      <div className="section-grid-overlay pointer-events-none absolute inset-0 opacity-30" />
      <div className="section-noise-overlay pointer-events-none absolute inset-0 opacity-15" />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 sm:mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-text-low sm:text-sm">Skills</p>
          <Heading level="h1" className="mt-4 max-w-3xl">
            Advanced technical stack across product engineering and AI systems.
          </Heading>
        </motion.div>

        <div className="grid items-start gap-5 sm:gap-7 md:gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SkillsSphere />
          </motion.div>

          <div className="grid gap-2.5 sm:grid-cols-2 md:gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
              >
                <Card className="h-full p-3.5 transition duration-300 hover:border-brand-pink/40 hover:bg-white/[0.08] sm:p-5 md:p-6">
                  <div className="flex items-center gap-2.5">
                    <category.Icon className="h-4 w-4 text-brand-pink" />
                    <Heading level="h3" className="text-gradient-soft">
                      {category.title}
                    </Heading>
                  </div>
                  <ul className="mt-2.5 space-y-1.5 md:mt-4 md:space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-xs leading-relaxed text-text-medium transition hover:border-brand-purple/40 hover:text-text-high md:px-3 md:py-2 md:text-sm"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
