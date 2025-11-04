import * as THREE from "three";
import React, { useMemo } from "react";
import { useFrame } from "@react-three/fiber";

/** Curved glowing cables between racks */
export default function NetworkCables({ anchors = [] }) {
  // anchors: array of [fromVec3, toVec3]
  const tubes = useMemo(() => {
    return anchors.map(([a, b], i) => {
      const mid = a.clone().add(b).multiplyScalar(0.5).add(new THREE.Vector3(0, 0.6 + Math.random()*0.6, 0));
      const curve = new THREE.CatmullRomCurve3([a, mid, b]);
      const geom = new THREE.TubeGeometry(curve, 40, 0.02, 8, false);
      return { id: i, geom, curve, color: new THREE.Color().setHSL(0.55 + Math.random()*0.1, 0.8, 0.6) };
    });
  }, [anchors]);

  const mat = useMemo(() => new THREE.MeshStandardMaterial({
    metalness: 0.2, roughness: 0.5, color: "#1e3a5f", emissive: "#2aa5ff", emissiveIntensity: 0.5
  }), []);

  // animate emissive subtly
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    mat.emissiveIntensity = 0.5 + Math.sin(t*1.5)*0.2;
  });

  return (
    <group>
      {tubes.map(t => (
        <mesh key={t.id} geometry={t.geom}>
          <meshStandardMaterial color={t.color} emissive={t.color} emissiveIntensity={0.7} roughness={0.4} metalness={0.1}/>
        </mesh>
      ))}
    </group>
  );
}
