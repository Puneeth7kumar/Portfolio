"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { Heading, SectionContainer } from "@/components/ui";
import {
  type Project,
  projects,
} from "@/features/home/data/projects";
import { ProjectTiltCard } from "@/features/home/components/project-tilt-card";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [selectedProject]);

  return (
    <SectionContainer id="projects" className="section-projects-bg relative overflow-hidden border-y border-border">
      <div className="section-animated-gradient pointer-events-none absolute inset-0 bg-hero-gradient opacity-30" />
      <div className="section-grid-overlay pointer-events-none absolute inset-0 opacity-24" />
      <div className="section-noise-overlay pointer-events-none absolute inset-0 opacity-14" />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 sm:mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-text-low sm:text-sm">Projects</p>
          <Heading level="h1" className="mt-4 max-w-3xl">
            Modern SaaS showcases built with performance, design depth, and real
            product thinking.
          </Heading>
        </motion.div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectTiltCard
              key={project.id}
              project={project}
              onOpenDetails={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-3 backdrop-blur-md sm:items-center sm:p-5"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="glass-card relative w-full max-w-2xl p-5 sm:p-7 md:p-9"
            >
              <button
                type="button"
                aria-label="Close project details"
                className="absolute right-4 top-4 rounded-full border border-white/15 p-2 text-text-medium transition hover:border-white/30 hover:text-text-high"
                onClick={() => setSelectedProject(null)}
              >
                <FiX className="h-4 w-4" />
              </button>

              <Heading level="h2" className="pr-10">
                {selectedProject.title}
              </Heading>
              <p className="mt-4 text-base text-text-medium">{selectedProject.details}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-text-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm transition hover:border-brand-blue/45 hover:bg-white/[0.06]"
                >
                  <FiGithub className="h-4 w-4" />
                  View GitHub
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm transition hover:border-brand-pink/45 hover:bg-white/[0.06]"
                >
                  <FiExternalLink className="h-4 w-4" />
                  {selectedProject.liveLabel === "Repository"
                    ? "Open Repository"
                    : "Visit Live Project"}
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SectionContainer>
  );
}
