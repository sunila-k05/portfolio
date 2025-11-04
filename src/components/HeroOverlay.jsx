import React from "react";

export default function HeroOverlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: "35vh",
        width: "100%",
        textAlign: "center",
        color: "white",
        fontFamily: "sans-serif",
        zIndex: 10
      }}
    >
      <h1 style={{ fontSize: "48px", fontWeight: "700", marginBottom: "10px" }}>
        GCP & DevOps Engineer
      </h1>

      <p style={{ fontSize: "20px", opacity: 0.8 }}>
        I design scalable infrastructure, automation and CI/CD pipelines.
      </p>
    </div>
  );
}
