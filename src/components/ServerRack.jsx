import * as THREE from "three";
import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

/** A stylized server rack: stacked units with emissive stripes and blinking LEDs */
export default function ServerRack({ width = 1, height = 2.2, depth = 0.6, units = 8, position = [0,0,0], rotation=[0,0,0] }) {
  const group = useRef();
  const ledRefs = useRef([]);
  const unitH = height / units;

  const bodyMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#0c1422"),
    metalness: 0.6, roughness: 0.35,
  }), []);

  const slotMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#111a2b"),
    metalness: 0.3, roughness: 0.6,
    emissive: new THREE.Color("#0a1220"), emissiveIntensity: 0.4
  }), []);

  const ledMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#66d1ff",
    emissive: "#2fb4ff",
    emissiveIntensity: 1.8,
    roughness: 0.3, metalness: 0.1
  }), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ledRefs.current.forEach((m, i) => {
      if (!m) return;
      // blink in waves
      const pulse = (Math.sin(t * 4 + i * 0.7) + 1) / 2;
      m.material.emissiveIntensity = 0.8 + pulse * 1.6;
      m.scale.setScalar(0.9 + pulse * 0.2);
    });
  });

  const leds = [];
  for (let i = 0; i < units; i++) {
    for (let x = -2; x <= 2; x+=2) {
      leds.push(
        <mesh
          key={`led-${i}-${x}`}
          ref={el => (ledRefs.current[i*3 + (x+2)/2] = el)}
          position={[ (x/4)*width*0.7, height/2 - (i+0.55)*unitH, depth/2 + 0.02 ]}
          material={ledMat}
        >
          <boxGeometry args={[0.08, 0.02, 0.02]} />
        </mesh>
      );
    }
  }

  const unitSlots = new Array(units).fill(0).map((_, i) => (
    <mesh key={`slot-${i}`} position={[0, height/2 - (i+0.5)*unitH, 0]} material={slotMat}>
      <boxGeometry args={[width*0.92, unitH*0.85, depth*0.9]} />
    </mesh>
  ));

  return (
    <group ref={group} position={position} rotation={rotation}>
      {/* body */}
      <mesh material={bodyMat}>
        <boxGeometry args={[width, height, depth]} />
      </mesh>
      {/* slots & leds */}
      {unitSlots}
      {leds}
    </group>
  );
}
