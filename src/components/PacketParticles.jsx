import * as THREE from "three";
import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

/** Instanced "packets" that flow along bezier-like paths across the scene */
export default function PacketParticles({ count = 200, area = 6 }) {
  const ref = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const speeds = useMemo(() => Float32Array.from({ length: count }, () => 0.4 + Math.random()*0.8), [count]);
  const phases = useMemo(() => Float32Array.from({ length: count }, () => Math.random()*Math.PI*2), [count]);
  const colors = useMemo(() => {
    const arr = [];
    for (let i=0;i<count;i++){
      const c = new THREE.Color().setHSL(0.56 + Math.random()*0.1, 1.0, 0.6);
      arr.push(c.r, c.g, c.b);
    }
    return Float32Array.from(arr);
  }, [count]);

  const path = (t, idx) => {
    // param curve across datacenter hall
    const x = Math.sin(t*0.6 + phases[idx]) * area*0.45;
    const y = 0.3 + Math.sin(t*0.9 + phases[idx]*0.7) * 0.4;
    const z = (t % 10) / 10 * area - area/2;
    return [x, y, z];
  };

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const tt = t * speeds[i];
      const [x, y, z] = path(tt, i);
      dummy.position.set(x, y, z);
      dummy.scale.setScalar(0.03 + (Math.sin(tt*10 + i)*0.01 + 0.015));
      dummy.rotation.set(0, tt*2, 0);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[null, null, count]}>
      <sphereGeometry args={[1, 8, 8]}>
        <instancedBufferAttribute attach="attributes-color" args={[colors, 3]} />
      </sphereGeometry>
      <meshBasicMaterial vertexColors toneMapped={false} />
    </instancedMesh>
  );
}
