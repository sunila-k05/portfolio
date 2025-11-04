import React from "react";

export default function SkillsSection() {
  const skills = [
    "GCP",
    "Kubernetes",
    "Terraform",
    "Docker",
    "Ansible",
    "Jenkins",
    "GitHub Actions",
    "Linux",
    "GitOps",
    "GKE",
  ];

  return (
    <div style={{ background: "#05000a", color: "white", padding: "80px 30px" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          fontWeight: "800",
          marginBottom: "50px",
        }}
      >
        Skills
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              borderRadius: "12px",
              padding: "22px 0",
              fontSize: "20px",
              fontWeight: "600",
              textAlign: "center",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,0,229,0.4)",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
