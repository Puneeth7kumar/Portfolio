"use client";

import { motion } from "framer-motion";
import { Button, Card, Heading, SectionContainer } from "@/components/ui";
import { VideoCard } from "@/features/home/components/video-card";

const creatorVideos = [
  {
    videoId: "2zSydrgUDB8",
    title: "Behind the Build: Creator + Developer Routine",
    href: "https://www.youtube.com/watch?v=2zSydrgUDB8",
  },
  {
    videoId: "_3H8iNolus4",
    title: "Fashion, Focus, and Productivity Systems",
    href: "https://www.youtube.com/watch?v=_3H8iNolus4",
  },
  {
    videoId: "PQuKjPtB5PI",
    title: "Manifest → Work → Achieve: Weekly Reflection",
    href: "https://www.youtube.com/watch?v=PQuKjPtB5PI",
  },
];

export function MoreThanDeveloperSection() {
  return (
    <SectionContainer
      id="more-than-developer"
      className="creator-premium-bg relative overflow-hidden border-y border-border"
    >
      <div className="creator-radial-glow pointer-events-none absolute inset-0" />
      <div className="creator-grid-animated pointer-events-none absolute inset-0 opacity-40" />
      <div className="creator-noise pointer-events-none absolute inset-0 opacity-22" />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.24em] text-text-low sm:text-sm">Creator Mode</p>
          <Heading level="h1" className="mt-4 max-w-3xl">
            Content. Style. Lifestyle.
          </Heading>
          <p className="mt-4 text-lg text-text-medium sm:text-xl md:text-2xl">
            I build code, content, and a lifestyle.
          </p>

          <div className="mt-6 inline-flex flex-wrap items-center rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-2 text-xs text-text-medium shadow-subtle sm:rounded-full sm:text-sm">
            <span className="text-gradient-soft">Manifest</span>
            <span className="mx-2 text-text-low">→</span>
            <span>Work</span>
            <span className="mx-2 text-text-low">→</span>
            <span>Achieve</span>
            <span className="mx-2 text-text-low">→</span>
            <span>Repeat</span>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-text-medium sm:text-base md:text-lead">
            Beyond software engineering, I create content around YouTube, fashion,
            and lifestyle storytelling. I share discipline, growth, and personal
            evolution through creator-led narratives and modern digital work.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="https://www.youtube.com/@Puneeth_kumar" target="_blank" rel="noreferrer">
              <Button variant="glow" className="w-full sm:w-auto">
                Visit YouTube
              </Button>
            </a>
            <a
              href="https://in.linkedin.com/in/puneeth-kumar-5a097b286"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline" className="w-full sm:w-auto">
                Follow My Journey
              </Button>
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
            <Card className="p-4 md:p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-text-low">YouTube</p>
              <p className="mt-2 text-sm text-text-medium">@Puneeth_kumar</p>
              <div className="mt-3 rounded-xl border border-white/10 bg-gradient-to-br from-brand-blue/20 via-brand-purple/15 to-brand-pink/20 p-3">
                <p className="text-sm text-text-high">Creator-focused developer content</p>
              </div>
            </Card>
            <Card className="p-4 md:p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-text-low">Brand Snapshot</p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                  <p className="text-text-low">Content</p>
                  <p className="mt-1 text-text-high">YouTube</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                  <p className="text-text-low">Style</p>
                  <p className="mt-1 text-text-high">Lifestyle</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-10">
            <p className="text-[11px] uppercase tracking-[0.16em] text-text-low sm:text-xs">
              YouTube Showcase
            </p>
            <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {creatorVideos.map((video, index) => (
                <motion.div
                  key={video.videoId}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.48, delay: 0.08 + index * 0.1 }}
                >
                  <VideoCard
                    videoId={video.videoId}
                    title={video.title}
                    href={video.href}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
