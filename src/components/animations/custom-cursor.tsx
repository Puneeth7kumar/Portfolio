"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return;

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    };

    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, input, textarea, [role='button'], .interactive"
      );
      setIsHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 35, mass: 0.3 }}
      />
      <motion.div
        className="custom-cursor-ring"
        animate={{
          x: position.x - (isHovering ? 22 : 16),
          y: position.y - (isHovering ? 22 : 16),
          width: isHovering ? 44 : 32,
          height: isHovering ? 44 : 32,
          opacity: isHovering ? 0.85 : 0.55,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.55 }}
      />
    </>
  );
}
