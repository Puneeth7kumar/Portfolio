"use client";

import {
  ContactShadows,
  Float,
  Html,
  Icosahedron,
  MeshDistortMaterial,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";

function OrbitingIcons() {
  const groupRef = useRef<Group>(null);
  const coreRef = useRef<Mesh>(null);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    const group = groupRef.current;
    const core = coreRef.current;
    if (!group || !core) return;

    group.rotation.y += delta * 0.35;
    group.rotation.x += (pointer.y * 0.26 - group.rotation.x) * 0.04;
    group.rotation.y += (pointer.x * 0.32 - group.rotation.y) * 0.03;

    core.rotation.y -= delta * 0.28;
    core.rotation.x += delta * 0.18;
    core.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 1.1) * 0.05);
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.9}>
        <Icosahedron ref={coreRef} args={[1.25, 4]} castShadow>
          <MeshDistortMaterial
            color="#8b5cf6"
            roughness={0.2}
            metalness={0.55}
            emissive="#ec4899"
            emissiveIntensity={0.24}
            distort={0.42}
            speed={2}
          />
        </Icosahedron>
      </Float>

      <group position={[2.2, 0.45, 0]}>
        <Html transform distanceFactor={9}>
          <div className="rounded-full border border-white/20 bg-surface-800/85 px-3 py-1.5 text-sm text-white shadow-premium backdrop-blur-lg">
            💻 Code
          </div>
        </Html>
      </group>

      <group position={[-1.9, 1.2, 0.1]}>
        <Html transform distanceFactor={9}>
          <div className="rounded-full border border-white/20 bg-surface-800/85 px-3 py-1.5 text-sm text-white shadow-premium backdrop-blur-lg">
            🎥 Camera
          </div>
        </Html>
      </group>

      <group position={[-2.05, -1.15, -0.2]}>
        <Html transform distanceFactor={9}>
          <div className="rounded-full border border-white/20 bg-surface-800/85 px-3 py-1.5 text-sm text-white shadow-premium backdrop-blur-lg">
            👕 Style
          </div>
        </Html>
      </group>
    </group>
  );
}

export function MoreThanDeveloperScene() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-surface-900/70 shadow-premium sm:h-[380px] md:h-[460px] lg:h-[520px]">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5.2], fov: 44 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.55} />
        <pointLight position={[2.4, 2, 2.8]} intensity={28} color="#60a5fa" castShadow />
        <pointLight position={[-2.1, -1.4, 2.5]} intensity={26} color="#f472b6" />
        <pointLight position={[0, 1.6, 2.1]} intensity={20} color="#c4b5fd" />
        <spotLight
          position={[0, 4, 3]}
          intensity={22}
          angle={0.45}
          penumbra={0.7}
          color="#93c5fd"
          castShadow
        />

        <Sparkles
          count={110}
          size={2.4}
          scale={[7.5, 5.5, 5.5]}
          speed={0.35}
          noise={0.4}
          opacity={0.55}
          color="#c4b5fd"
        />
        <Sparkles
          count={65}
          size={1.8}
          scale={[6, 4.5, 4]}
          speed={0.55}
          noise={0.25}
          opacity={0.4}
          color="#60a5fa"
        />

        <OrbitingIcons />
        <ContactShadows
          position={[0, -1.7, 0]}
          opacity={0.35}
          scale={8}
          blur={2.4}
          far={2.8}
          color="#2f2055"
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.9}
          minPolarAngle={Math.PI / 2.3}
          autoRotate
          autoRotateSpeed={0.55}
        />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-surface-900/20" />
    </div>
  );
}
