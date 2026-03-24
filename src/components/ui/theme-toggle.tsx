"use client";

import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="h-9 w-9 shrink-0 rounded-full border border-border bg-surface-800/50"
        aria-hidden
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface-800/50 text-text-high transition-colors duration-300 hover:border-brand-purple/40 hover:bg-surface-700/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900"
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={theme}
          initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <FiSun className="h-4 w-4 text-amber-400" />
          ) : (
            <FiMoon className="h-4 w-4 text-indigo-500" />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
