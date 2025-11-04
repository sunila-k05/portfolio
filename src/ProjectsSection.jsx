import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      name: "GKE CI/CD Pipeline",
      desc: "Automated CI/CD system deploying containerized apps to GKE with zero-downtime rollouts.",
      tech: "GCP, GKE, Kubernetes, Docker, GitHub Actions, Terraform",
    },
    {
      name: "IaC Cloud Foundation",
      desc: "Entire GCP network (VPC, subnets, firewall) fully automated using Terraform modules.",
      tech: "Terraform, GCP, IAM, VPC, Automation",
    },
    {
      name: "Observability Platform",
      desc: "Monitoring stack using Prometheus + Grafana dashboards for Kubernetes clusters.",
      tech: "Prometheus, Grafana, Kubernetes, Metrics",
    },
  ];

  return (
    <div style={{ background: "#05000a", color: "white", padding: "70px 20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "42px", fontWeight: "800", marginBottom: "60px" }}>
        Projects
      </h1>

      <div style={{ maxWidth: "1100px", margin: "auto", display: "flex", flexDirection: "column", gap: "32px" }}>
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,0,229,0.08)",
              border: "1px solid rgba(255,0,229,0.4)",
              padding: "30px 28px",
              borderRadius: "14px",
              backdropFilter: "blur(8px)",
            }}
          >
            <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>{p.name}</h2>
            <p style={{ fontSize: "17px", opacity: 0.85, marginBottom: "10px" }}>{p.desc}</p>
            <p style={{ fontSize: "14px", opacity: 0.6 }}>Tech: {p.tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
