import React from "react";

export default function Skills() {
  const skills = [
    "GCP",
    "DevOps",
    "Terraform",
    "Kubernetes",
    "GKE",
    "Docker",
    "Ansible",
    "Jenkins",
    "GitOps",
    "GitHub Actions"
  ];

  return (
    <div style={{ background: "#000010", color: "white", minHeight: "100vh", padding: "40px" }}>
      <h1 style={{ textAlign: "center", fontSize: "40px", marginBottom: "30px" }}>
        My Skills
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px"
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill}
            style={{
              padding: "20px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.05)",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "600"
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
