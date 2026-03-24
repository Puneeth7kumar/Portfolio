"use client";

import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "AI Engineer"];

export function TypingRoles() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isRoleComplete = displayText === currentRole;
    const isCleared = displayText.length === 0;

    const delay = isDeleting ? 45 : 85;
    const pause = 1200;

    const timer = setTimeout(
      () => {
        if (!isDeleting && !isRoleComplete) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
          return;
        }

        if (!isDeleting && isRoleComplete) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && !isCleared) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
          return;
        }

        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      },
      !isDeleting && isRoleComplete ? pause : delay
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <p className="mt-5 text-base text-text-medium sm:mt-6 sm:text-lg md:text-xl">
      <span className="mr-2 text-text-low">I am a</span>
      <span className="font-semibold text-gradient-animated">{displayText}</span>
      <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-brand-pink align-middle" />
    </p>
  );
}
