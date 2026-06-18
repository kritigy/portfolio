import { useRef } from "react";
import { SKILLS, C } from "./portfolioData";
import { useInView } from "./useInView";
import { SectionHeading, SectionLabel } from "./SectionComponents";

export default function Skills() {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <section id="skills" style={{ padding: "100px 24px", background: C.bgWhite }}>
      <div ref={ref} style={{
        maxWidth: 1100, margin: "0 auto",
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <SectionLabel>Skills</SectionLabel>
        <SectionHeading>What I work with</SectionHeading>
        <p style={{ color: C.textFaint, marginBottom: 48, fontSize: 15 }}>Technologies I reach for on a daily basis.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 56px" }} className="skills-grid">
          {SKILLS.map((skill, index) => (
            <div key={skill.name} style={{ marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
                <span style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>{skill.name}</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: C.primary, fontWeight: 700 }}>{skill.pct}%</span>
              </div>
              <div style={{ height: 5, background: "#E0E7FF", borderRadius: 5, overflow: "hidden" }}>
                <div style={{
                  height: "100%", borderRadius: 5,
                  background: "linear-gradient(90deg, #818CF8, #6366F1)",
                  width: visible ? `${skill.pct}%` : "0%",
                  transition: `width 0.9s cubic-bezier(0.4,0,0.2,1) ${index * 80}ms`,
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
