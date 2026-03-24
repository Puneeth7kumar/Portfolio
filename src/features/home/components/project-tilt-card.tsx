"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { MouseEventHandler } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Button, Card, Heading } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { Project } from "@/features/home/data/projects";

type ProjectTiltCardProps = {
  project: Project;
  onOpenDetails: (project: Project) => void;
};

export function ProjectTiltCard({ project, onOpenDetails }: ProjectTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [allowTilt, setAllowTilt] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({
    transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)",
  });

  useEffect(() => {
    const updateTiltCapability = () => {
      const coarse = window.matchMedia("(pointer: coarse)").matches;
      setAllowTilt(!coarse && window.innerWidth >= 1024);
    };

    updateTiltCapability();
    window.addEventListener("resize", updateTiltCapability);
    return () => window.removeEventListener("resize", updateTiltCapability);
  }, []);

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!allowTilt) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) * 2 - 1) * 6;
    const rotateX = -((y / rect.height) * 2 - 1) * 6;

    setTiltStyle({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`,
    });
  };

  const onMouseLeave = () => {
    if (!allowTilt) return;
    setTiltStyle({
      transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)",
    });
  };

  return (
    <motion.div
      ref={cardRef}
      style={tiltStyle}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 24 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="transform-gpu transition-transform duration-300"
    >
      <Card className="h-full p-0 transition duration-300 hover:border-brand-purple/45 hover:bg-white/[0.08]">
        <div className="relative h-48 overflow-hidden rounded-t-2xl border-b border-white/10 sm:h-52">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className={cn("object-cover transition duration-500", "hover:scale-105")}
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-900/80 via-transparent to-transparent" />
        </div>

        <div className="p-4 sm:p-5 lg:p-6">
          <Heading level="h3">{project.title}</Heading>
          <p className="mt-3 text-sm leading-relaxed text-text-medium">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-text-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-6 sm:gap-3">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-2 text-xs text-text-high transition hover:border-brand-blue/45 hover:bg-white/[0.06]"
            >
              <FiGithub className="h-3.5 w-3.5" />
              GitHub
            </Link>
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-2 text-xs text-text-high transition hover:border-brand-pink/45 hover:bg-white/[0.06]"
            >
              <FiExternalLink className="h-3.5 w-3.5" />
              {project.liveLabel ?? "Live Demo"}
            </Link>
          </div>

          <Button
            variant="outline"
            className="mt-5 h-10 w-full"
            onClick={() => onOpenDetails(project)}
          >
            View Details
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
