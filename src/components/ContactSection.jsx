import React from "react";

export default function ContactSection() {
  return (
    <div style={{ background: "#05000a", color: "white", padding: "80px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "38px", fontWeight: "800", marginBottom: "40px" }}>
        Contact Me
      </h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "25px" }}>
        
        <a
          href="mailto:sunilasunil386@gmail.com"
          style={{
            padding: "14px 28px",
            borderRadius: "10px",
            background: "rgba(255,0,229,0.1)",
            border: "1px solid rgba(255,0,229,0.4)",
            textDecoration: "none",
            color: "white",
            fontWeight: "600",
          }}
        >
          Gmail
        </a>

        <a
          href="https://www.linkedin.com/in/sunil-k-659575305/"
          target="_blank"
          style={{
            padding: "14px 28px",
            borderRadius: "10px",
            background: "rgba(255,0,229,0.1)",
            border: "1px solid rgba(255,0,229,0.4)",
            textDecoration: "none",
            color: "white",
            fontWeight: "600",
          }}
        >
          LinkedIn
        </a>

        <a
          href="https:https://github.com/sunila-k05"
          target="_blank"
          style={{
            padding: "14px 28px",
            borderRadius: "10px",
            background: "rgba(255,0,229,0.1)",
            border: "1px solid rgba(255,0,229,0.4)",
            textDecoration: "none",
            color: "white",
            fontWeight: "600",
          }}
        >
          GitHub
        </a>

      </div>
    </div>
  );
}
