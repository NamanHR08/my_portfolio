"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm"; // We might need to install this tiny math helper
import * as THREE from "three";

function ParticleCloud(props: any) {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate 5000 random points inside a sphere
  // We use useState to calculate this only once
  const [sphere] = useState(() => {
    const data = new Float32Array(5000 * 3);
    // @ts-ignore - random.inSphere type definition can be finicky
    random.inSphere(data, { radius: 1.5 }); 
    return data;
  });

  useFrame((state, delta) => {
    // Rotate the entire cloud
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#3b82f6" // Electric Blue
          size={0.005}    // Tiny, sharp dots
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleCloud />
      </Canvas>
    </div>
  );
}