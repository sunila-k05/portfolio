import React from "react";

export default function HeroOverlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: "32vh",
        width: "100%",
        textAlign: "center",
        color: "white",
        fontFamily: "sans-serif",
        zIndex: 10
      }}
    >
      <h1 style={{ fontSize: "60px", fontWeight: "800", margin: 0 }}>
        Sunil K
      </h1>

      <h2 style={{ fontSize: "32px", fontWeight: "600", marginTop: "10px", opacity: 0.9 }}>
        GCP & DevOps Engineer
      </h2>

      <p style={{ marginTop: "18px", fontSize: "18px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto", opacity: 0.8 }}>
        I solve real infrastructure problems using GCP, Kubernetes and DevOps automation to deliver reliable, fast deployments.
      </p>
    </div>
  );
}
