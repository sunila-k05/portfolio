import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DataCenterScene from "./components/DataCenterScene";
import HeroOverlay from "./components/HeroOverlay";
import Skills from "./components/Skills";

export default function App() {
  return (
    <Routes>

      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            <Navbar />
            <HeroOverlay />
            <DataCenterScene />
          </div>
        }
      />

      {/* SKILLS PAGE */}
      <Route path="/skills" element={<Skills />} />

    </Routes>
  );
}
