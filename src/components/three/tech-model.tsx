"use client";

import { Center, Float, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

type TechModelProps = {
  isMobile: boolean;
  compactMobile?: boolean;
  url?: string;
};

const DEFAULT_MODEL_URL = "/models/claw_gaming_laptop_setup.glb";

export function TechModel({
  isMobile,
  compactMobile = false,
  url = DEFAULT_MODEL_URL,
}: TechModelProps) {
  const groupRef = useRef<Group>(null);
  const { pointer } = useThree();
  const gltf = useGLTF(url);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;

    group.rotation.y += delta * 0.35;
    group.rotation.x += (pointer.y * 0.25 - group.rotation.x) * 0.04;
    group.rotation.y += (pointer.x * 0.3 - group.rotation.y) * 0.03;
    group.position.x += (pointer.x * 0.14 - group.position.x) * 0.035;
    group.position.y += (pointer.y * 0.12 - group.position.y) * 0.035;
  });

  return (
    <Float
      speed={isMobile ? 1 : 1.3}
      rotationIntensity={0.35}
      floatIntensity={isMobile ? 0.48 : 0.58}
    >
      <Center scale={isMobile ? (compactMobile ? 0.84 : 0.98) : 1.05}>
        <primitive
          ref={groupRef}
          object={gltf.scene.clone()}
          position={[0, isMobile ? (compactMobile ? -0.08 : -0.04) : -0.35, 0]}
        />
      </Center>
    </Float>
  );
}

useGLTF.preload(DEFAULT_MODEL_URL);
