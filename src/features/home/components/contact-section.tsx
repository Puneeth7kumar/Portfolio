"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Button, Card, Heading, SectionContainer } from "@/components/ui";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1400));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setForm(initialForm);

    setTimeout(() => setIsSubmitted(false), 2800);
  };

  return (
    <SectionContainer id="contact" className="section-contact-bg relative overflow-hidden border-y border-border">
      <div className="section-animated-gradient pointer-events-none absolute inset-0 bg-hero-gradient opacity-30" />
      <div className="section-grid-overlay pointer-events-none absolute inset-0 opacity-22" />
      <div className="section-noise-overlay pointer-events-none absolute inset-0 opacity-14" />
      <div className="relative z-10 grid gap-8 md:gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-text-low sm:text-sm">Contact</p>
          <Heading level="h1" className="mt-4 max-w-xl">
            Let&apos;s build something meaningful together.
          </Heading>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-text-medium sm:text-base">
            Open to product collaborations, full stack roles, and AI-focused
            engineering opportunities.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-3">
            <a
              href="https://github.com/Puneeth7kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-3.5 py-2 text-xs text-text-high transition hover:border-brand-blue/45 hover:bg-white/[0.08] sm:px-4 sm:text-sm"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://in.linkedin.com/in/puneeth-kumar-5a097b286"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-3.5 py-2 text-xs text-text-high transition hover:border-brand-pink/45 hover:bg-white/[0.08] sm:px-4 sm:text-sm"
            >
              <FaLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <Card>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="transition duration-300 focus-within:scale-[1.01]">
                <label className="mb-2 block text-sm text-text-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="h-12 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 text-sm text-text-high outline-none transition placeholder:text-text-low focus:border-brand-purple/55 focus:bg-white/[0.06]"
                  placeholder="Your name"
                />
              </div>

              <div className="transition duration-300 focus-within:scale-[1.01]">
                <label className="mb-2 block text-sm text-text-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="h-12 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 text-sm text-text-high outline-none transition placeholder:text-text-low focus:border-brand-blue/55 focus:bg-white/[0.06]"
                  placeholder="you@example.com"
                />
              </div>

              <div className="transition duration-300 focus-within:scale-[1.01]">
                <label className="mb-2 block text-sm text-text-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-text-high outline-none transition placeholder:text-text-low focus:border-brand-pink/55 focus:bg-white/[0.06]"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="glow"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: isSubmitted ? 1 : 0, y: isSubmitted ? 0 : 6 }}
                  className="mt-3 text-center text-sm text-brand-blue"
                >
                  Message sent successfully. I&apos;ll get back to you soon.
                </motion.p>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
