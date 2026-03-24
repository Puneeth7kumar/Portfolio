"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiPlay } from "react-icons/fi";

type VideoCardProps = {
  videoId: string;
  title: string;
  href: string;
};

export function VideoCard({ videoId, title, href }: VideoCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.03, y: -4 }}
      className="group interactive block"
    >
      <article className="glass-card overflow-hidden rounded-xl border border-white/10 p-0 transition duration-300 group-hover:border-brand-pink/45 group-hover:shadow-glow">
        <div className="relative h-44 w-full overflow-hidden sm:h-48">
          <Image
            src={thumbnailUrl}
            alt={`${title} thumbnail`}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="h-full w-full bg-brand-gradient opacity-20" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full border border-white/35 bg-black/25 p-2.5 backdrop-blur-md transition duration-300 group-hover:bg-brand-pink/35">
              <FiPlay className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="line-clamp-2 text-sm font-medium text-text-high">{title}</h3>
        </div>
      </article>
    </motion.a>
  );
}
