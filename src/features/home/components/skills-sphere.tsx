"use client";

import { Html, Sphere } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { ComponentType } from "react";
import type { Group } from "three";
import {
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";

type SkillNode = {
  name: string;
  color: string;
  Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
};

const skillNodes: SkillNode[] = [
  { name: "React", color: "#61dafb", Icon: SiReact },
  { name: "Next.js", color: "#ffffff", Icon: SiNextdotjs },
  { name: "TypeScript", color: "#60a5fa", Icon: SiTypescript },
  { name: "Tailwind", color: "#22d3ee", Icon: SiTailwindcss },
  { name: "Framer", color: "#f472b6", Icon: SiFramer },
  { name: "Node.js", color: "#86efac", Icon: SiNodedotjs },
  { name: "Express", color: "#cbd5e1", Icon: SiExpress },
  { name: "MongoDB", color: "#4ade80", Icon: SiMongodb },
  { name: "Postgres", color: "#93c5fd", Icon: SiPostgresql },
  { name: "MySQL", color: "#facc15", Icon: SiMysql },
  { name: "OpenAI", color: "#a78bfa", Icon: SiOpenai },
  { name: "LangChain", color: "#22c55e", Icon: SiLangchain },
  { name: "Python", color: "#fde047", Icon: SiPython },
  { name: "TensorFlow", color: "#fb923c", Icon: SiTensorflow },
  { name: "PyTorch", color: "#f97316", Icon: SiPytorch },
  { name: "Scikit", color: "#fb7185", Icon: SiScikitlearn },
  { name: "Git", color: "#f97316", Icon: SiGit },
  { name: "GitHub", color: "#e2e8f0", Icon: SiGithub },
  { name: "Figma", color: "#f43f5e", Icon: SiFigma },
  { name: "Firebase", color: "#f59e0b", Icon: SiFirebase },
];

type SphereNodesProps = {
  isMobile: boolean;
  compactMobile?: boolean;
  isDarkTheme: boolean;
};

function SphereNodes({
  isMobile,
  compactMobile = false,
  isDarkTheme,
}: SphereNodesProps) {
  const groupRef = useRef<Group>(null);
  const { pointer } = useThree();

  const visibleNodes = useMemo(
    () =>
      isMobile
        ? skillNodes.slice(0, compactMobile ? 8 : 10)
        : skillNodes.slice(0, isDarkTheme ? skillNodes.length : 13),
    [isMobile, compactMobile, isDarkTheme]
  );

  const positions = useMemo(() => {
    const radius = isMobile ? (compactMobile ? 1.55 : 1.82) : 1.9;
    return visibleNodes.map((_, index) => {
      const phi = Math.acos(1 - (2 * (index + 0.5)) / visibleNodes.length);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (index + 0.5);
      return [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.cos(phi),
        radius * Math.sin(theta) * Math.sin(phi),
      ] as const;
    });
  }, [isMobile, compactMobile, visibleNodes]);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;

    group.rotation.y += delta * 0.2;
    group.rotation.x += (pointer.y * 0.4 - group.rotation.x) * 0.045;
    group.rotation.y += (pointer.x * 0.4 - group.rotation.y) * 0.035;
  });

  return (
    <group ref={groupRef}>
      <Sphere
        args={[isMobile ? (compactMobile ? 1.02 : 1.16) : 1.2, 48, 48]}
      >
        <meshStandardMaterial
          color={isDarkTheme ? "#8b5cf6" : "#6366f1"}
          wireframe
          opacity={isDarkTheme ? 0.18 : 0.13}
          transparent
          emissive={isDarkTheme ? "#3b82f6" : "#818cf8"}
          emissiveIntensity={isDarkTheme ? 0.2 : 0.1}
        />
      </Sphere>
      {positions.map((position, index) => {
        const node = visibleNodes[index];
        const iconColor =
          !isDarkTheme && ["Next.js", "GitHub", "Express"].includes(node.name)
            ? "#334155"
            : node.color;

        return (
          <group key={node.name} position={position}>
            <Html
              transform
              distanceFactor={isMobile ? (compactMobile ? 10.5 : 11.5) : 10}
            >
              <div
                className={
                  compactMobile
                    ? `group/skill flex min-w-12 items-center gap-0.5 rounded-full border px-1 py-0.5 text-[8px] shadow-premium backdrop-blur-md transition duration-300 hover:scale-110 md:min-w-20 md:gap-1.5 md:px-2.5 md:py-1.5 md:text-[11px] ${
                        isDarkTheme
                          ? "border-white/15 bg-surface-800/80 text-white hover:border-brand-purple/50"
                          : "border-slate-300/80 bg-white/92 text-slate-700 shadow-[0_8px_22px_rgba(148,163,184,0.35)] hover:border-indigo-300"
                      }`
                    : `group/skill flex min-w-14 items-center gap-1 rounded-full border px-1.5 py-1 text-[9px] shadow-premium backdrop-blur-md transition duration-300 hover:scale-110 md:min-w-20 md:gap-1.5 md:px-2.5 md:py-1.5 md:text-[11px] ${
                        isDarkTheme
                          ? "border-white/15 bg-surface-800/80 text-white hover:border-brand-purple/50"
                          : "border-slate-300/80 bg-white/90 text-slate-700 shadow-[0_10px_24px_rgba(148,163,184,0.35)] hover:border-indigo-300"
                      }`
                }
              >
                <node.Icon
                  className={
                    compactMobile ? "h-2.5 w-2.5" : "h-3 w-3 md:h-3.5 md:w-3.5"
                  }
                  style={{ color: iconColor }}
                />
                <span
                  className={`whitespace-nowrap ${
                    isDarkTheme
                      ? "text-text-medium group-hover/skill:text-text-high"
                      : "text-slate-600 group-hover/skill:text-slate-800"
                  }`}
                >
                  {node.name}
                </span>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export function SkillsSphere() {
  const { resolvedTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isCompactMobile, setIsCompactMobile] = useState(false);
  const isDarkTheme = resolvedTheme !== "light";

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsCompactMobile(width < 400 || height < 760);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="relative h-[clamp(310px,58svh,420px)] w-full overflow-hidden rounded-[1.25rem] border border-border bg-surface-900/70 shadow-premium sm:h-[330px] sm:rounded-[1.5rem] md:h-[390px] md:rounded-[2rem] lg:h-[470px]">
      <Canvas
        dpr={isMobile ? [1, 1.1] : [1, 1.8]}
        camera={{
          position: [
            0,
            0,
            isMobile
              ? isCompactMobile
                ? 5.95
                : 5.45
              : isTablet
                ? 7.7
                : 7,
          ],
          fov: isMobile ? (isCompactMobile ? 44 : 42) : isTablet ? 49 : 45,
        }}
      >
        <ambientLight intensity={0.7} />
        <pointLight
          position={[4, 3, 4]}
          intensity={
            isMobile
              ? isCompactMobile
                ? isDarkTheme
                  ? 14
                  : 11
                : isDarkTheme
                  ? 16
                  : 13
              : isTablet
                ? 22
                : 28
          }
          color="#60a5fa"
        />
        <pointLight
          position={[-3, -2, 3]}
          intensity={
            isMobile
              ? isCompactMobile
                ? isDarkTheme
                  ? 12
                  : 10
                : isDarkTheme
                  ? 14
                  : 11
              : isTablet
                ? 20
                : 24
          }
          color="#f472b6"
        />
        <SphereNodes
          isMobile={isMobile}
          compactMobile={isCompactMobile}
          isDarkTheme={isDarkTheme}
        />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/5 via-transparent to-slate-900/10 dark:from-white/5 dark:to-surface-900/20" />
    </div>
  );
}
