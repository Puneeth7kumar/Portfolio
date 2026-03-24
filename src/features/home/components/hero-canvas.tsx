"use client";

import { Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { TechModel } from "@/components/three/tech-model";

function FallbackModel() {
  return (
    <Box args={[1.4, 1.4, 1.4]}>
      <meshStandardMaterial color="#8b5cf6" emissive="#ec4899" emissiveIntensity={0.2} />
    </Box>
  );
}

export function HeroCanvas() {
  const [isMobile, setIsMobile] = useState(false);
  const [isCompactMobile, setIsCompactMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsMobile(width < 768);
      setIsCompactMobile(width < 400 || height < 760);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="relative h-[clamp(240px,45svh,330px)] w-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-surface-900/60 shadow-premium backdrop-blur-sm sm:h-[340px] sm:rounded-[1.5rem] md:h-[460px] md:rounded-[2rem] lg:h-[520px]">
      <Canvas
        dpr={isMobile ? [1, 1.1] : [1, 2]}
        camera={{
          position: [0, 0, isMobile ? (isCompactMobile ? 4.2 : 3.9) : 3.3],
          fov: isMobile ? (isCompactMobile ? 51 : 48) : 42,
        }}
      >
        <ambientLight intensity={0.8} />
        <pointLight
          position={[2, 2, 3]}
          intensity={isMobile ? (isCompactMobile ? 17 : 20) : 35}
          color="#60a5fa"
        />
        <pointLight
          position={[-2, -1, 3]}
          intensity={isMobile ? (isCompactMobile ? 13 : 16) : 24}
          color="#f472b6"
        />
        <pointLight
          position={[0, 1.4, 2.3]}
          intensity={isMobile ? (isCompactMobile ? 10 : 12) : 22}
          color="#93c5fd"
        />
        <Suspense fallback={<FallbackModel />}>
          <TechModel isMobile={isMobile} compactMobile={isCompactMobile} />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-surface-900/25" />
    </div>
  );
}
