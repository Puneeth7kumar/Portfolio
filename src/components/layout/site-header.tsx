"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui";

const links = [
  { href: "#more-than-developer", label: "Beyond Code" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#timeline", label: "Timeline" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) {
      closeMenu();
      return;
    }

    event.preventDefault();
    closeMenu();

    const target = document.querySelector(href);
    if (!target) return;

    const headerOffset = window.innerWidth < 640 ? 72 : 84;
    const top =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    if (window.__lenis) {
      window.__lenis.scrollTo(top, { duration: 1.05 });
    } else {
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-surface-900/80 backdrop-blur-lg">
      <div className="container-shell flex h-14 items-center justify-between sm:h-16">
        <Link
          href="/"
          onClick={closeMenu}
          className="shrink-0 text-sm font-semibold tracking-wider text-text-high sm:text-base"
        >
          PK.
        </Link>

        <nav className="no-scrollbar -mx-1 hidden min-w-0 items-center gap-2 overflow-x-auto px-1 text-[11px] md:flex md:gap-4 md:text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(event) => scrollToSection(event, link.href)}
              className="whitespace-nowrap px-1 py-0.5 text-text-medium transition hover:text-text-high"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-3 flex shrink-0 items-center gap-2 sm:ml-4">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-800/60 transition hover:bg-surface-700/60 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-0 top-0.5 h-[2px] w-4 rounded bg-text-high transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-4 rounded bg-text-high transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[13px] h-[2px] w-4 rounded bg-text-high transition-transform duration-300 ${
                  isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border/70 bg-surface-900/95 transition-[max-height,opacity] duration-300 md:hidden ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-shell py-3">
          <div className="grid gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => scrollToSection(event, link.href)}
                className="rounded-lg px-3 py-2 text-sm text-text-medium transition hover:bg-surface-800/70 hover:text-text-high"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
