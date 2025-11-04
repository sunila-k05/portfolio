import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.05)",
        zIndex: 20,
        color: "white"
      }}
    >
      <div style={{ fontSize: "22px", fontWeight: "700" }}>Portfolio</div>

      <div style={{ display: "flex", gap: "28px", fontSize: "18px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/skills" style={{ color: "white", textDecoration: "none" }}>Skills</Link>
      </div>
    </div>
  );
}
