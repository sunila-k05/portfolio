import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Simple glowing spheres labeled GCP / AWS / K8s orbiting above scene */
export default function OrbitingLogos() {
  const gRef = useRef(), aRef = useRef(), kRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const r = 2.7;
    if (gRef.current) gRef.current.position.set(Math.cos(t*0.4)*r, 1.8, Math.sin(t*0.4)*r);
    if (aRef.current) aRef.current.position.set(Math.cos(t*0.5 + 2)*r, 2.1, Math.sin(t*0.5 + 2)*r);
    if (kRef.current) kRef.current.position.set(Math.cos(t*0.6 + 4)*r, 1.6, Math.sin(t*0.6 + 4)*r);
  });

  const makeBall = (ref, color, label) => (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshStandardMaterial color={color} emissive={new THREE.Color(color)} emissiveIntensity={1.5} />
      </mesh>
      {/* simple text via Sprite */}
      <sprite position={[0, 0.45, 0]}>
        <spriteMaterial />
      </sprite>
    </group>
  );

  return (
    <group>
      {makeBall(gRef, "#52a5ff", "GCP")}
      {makeBall(aRef, "#ffb347", "AWS")}
      {makeBall(kRef, "#45e0c6", "K8s")}
    </group>
  );
}
