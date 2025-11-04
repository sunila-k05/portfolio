import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

/** Simple shader-driven neon wave in cyberpunk pink */
function NeonWave() {
  const matRef = useRef();
  useFrame((_, dt) => {
    if (matRef.current) matRef.current.uniforms.uTime.value += dt;
  });

  const vertex = /* glsl */ `
    uniform float uTime;
    uniform float uAmp;
    uniform float uFreq;
    uniform float uSpeed;

    varying vec3 vPos;
    varying vec2 vUvV;

    void main() {
      vUvV = uv;
      vec3 p = position;

      // radial distance from center (x,z plane)
      float d = length(p.xz);
      // vertical displacement
      p.y += sin(d * uFreq - uTime * uSpeed) * uAmp;

      vPos = p;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    }
  `;

  const fragment = /* glsl */ `
    precision highp float;

    uniform vec3 uColor;
    uniform float uLineFreq;
    uniform float uGlow;

    varying vec3 vPos;
    varying vec2 vUvV;

    // create neon grid lines by using fractional stripes on x and z
    float gridLine(float coord, float freq) {
      // create thin lines by checking the fractional part
      float g = abs(fract(coord * freq) - 0.5);
      // invert + sharpen
      return smoothstep(0.48, 0.495, 0.5 - g);
    }

    void main() {
      // grid on X and Z
      float gx = gridLine(vPos.x, uLineFreq);
      float gz = gridLine(vPos.z, uLineFreq);
      float grid = max(gx, gz);

      // base emissive color
      vec3 neon = uColor;

      // height-based glow (brighter on peaks)
      float peak = smoothstep(0.0, 0.5, vPos.y + 0.5);

      // combine: grid glow + peak glow
      float intensity = grid * 1.2 + peak * 0.7;

      // soft vignette using UV (center brighter)
      vec2 uv = vUvV * 2.0 - 1.0;
      float center = 1.0 - dot(uv, uv); // 1 at center, 0 at corners
      intensity += center * 0.4;

      vec3 color = neon * (uGlow * intensity);

      // add a faint base to avoid total black
      color += neon * 0.08;

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const uniforms = {
    uTime: { value: 0 },
    uAmp: { value: 0.35 },      // wave height
    uFreq: { value: 3.0 },      // wave frequency
    uSpeed: { value: 1.2 },     // wave speed
    uColor: { value: new THREE.Color("#ff00e5") }, // neon pink
    uLineFreq: { value: 1.5 },  // grid line spacing
    uGlow: { value: 3.0 }       // overall glow multiplier
  };

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      {/* Big plane for the animated surface */}
      <planeGeometry args={[30, 30, 400, 400]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        transparent={false}
      />
    </mesh>
  );
}

export default function NeonWaveScene() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas
        camera={{ position: [0, 4.5, 6.5], fov: 55, near: 0.1, far: 100 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        {/* Background */}
        <color attach="background" args={["#05000a"]} />

        {/* Subtle ambient and a key light to help post-effects */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[2, 5, 3]} intensity={0.4} />

        {/* The neon wave */}
        <NeonWave />

        {/* Cinematic glow */}
        <EffectComposer>
          <Bloom luminanceThreshold={0.0} luminanceSmoothing={0.9} intensity={2.2} />
          <Vignette eskil={false} offset={0.2} darkness={0.7} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
