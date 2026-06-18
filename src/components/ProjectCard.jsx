import { useState } from "react";
import { C } from "./portfolioData";

export default function ProjectCard({ project, delay, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: C.bgWhite,
        border: `1.5px solid ${hovered ? "#A5B4FC" : C.border}`,
        borderRadius: 18, overflow: "hidden", cursor: "pointer",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 48px rgba(99,102,241,0.12)" : "none",
        transition: "all 0.28s ease",
        opacity: visible ? 1 : 0,
        transitionDelay: `${delay}ms`,
      }}
    >
      <div style={{ height: 100, background: project.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 42 }}>
        {project.emoji}
      </div>
      <div style={{ padding: "20px 22px 24px" }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 700, color: C.text, marginBottom: 8 }}>
          {project.title}
        </h3>
        <p style={{ color: C.textFaint, fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{project.desc}</p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              background: C.primaryLight, border: `1px solid ${C.borderMid}`,
              color: C.primaryDark, padding: "2px 10px", borderRadius: 12,
              fontSize: 11, fontFamily: "'Inter', sans-serif", fontWeight: 500,
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
