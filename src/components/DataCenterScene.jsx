import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Grid, Stars, Environment } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

export default function DataCenterScene() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
        
        <color attach="background" args={["#000010"]} />

        {/* background stars */}
        <Stars radius={100} depth={50} count={8000} />

        {/* subtle grid floor */}
        <Grid
          infiniteGrid
          cellSize={0.7}
          cellThickness={0.6}
          sectionSize={3.5}
          sectionThickness={1}
          fadeDistance={30}
          fadeStrength={1}
        />

        {/* floating glowing balls representing data packets */}
        <Float floatIntensity={2} speed={2}>
          <mesh position={[0, 1.2, 0]}>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial emissive="cyan" emissiveIntensity={2} color="black" />
          </mesh>
        </Float>

        <ambientLight intensity={0.5} />
        <pointLight position={[0, 3, 2]} intensity={3} />

        <Environment preset="night" />

        <EffectComposer>
          <Bloom luminanceThreshold={0.1} intensity={2} />
          <Vignette eskil={false} offset={0.2} darkness={0.7} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
