import React from "react";

// components
import Navbar from "./components/Navbar";
import HeroOverlay from "./components/HeroOverlay";
import NeonWaveScene from "./components/NeonWaveScene";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>

      {/* HERO SECTION */}
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <Navbar />
        <HeroOverlay />
        <NeonWaveScene />
      </div>

      {/* SKILLS */}
      <SkillsSection />

      {/* PROJECTS */}
      <ProjectsSection />

      {/* CONTACT */}
      <ContactSection />

    </div>
  );
}
