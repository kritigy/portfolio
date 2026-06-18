import { useRef } from "react";
import { C } from "./portfolioData";
import { useInView } from "./useInView";
import { SectionHeading, SectionLabel } from "./SectionComponents";

export default function About() {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <section id="about" style={{ padding: "100px 24px", background: C.bg }}>
      <div ref={ref} style={{
        maxWidth: 1100, margin: "0 auto",
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <SectionLabel>About Me</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 52, alignItems: "center" }} className="about-grid">
          <div>
            <div style={{
              width: "100%", aspectRatio: "1", borderRadius: 20,
              background: "linear-gradient(135deg, #EEF2FF, #F5F3FF)",
              border: `1.5px solid ${C.border}`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64,
            }}>👨‍💻</div>
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              {[["4+", "Years Exp."], ["30+", "Projects"]].map(([value, label]) => (
                <div key={label} style={{
                  flex: 1, background: C.bgWhite, border: `1px solid ${C.border}`,
                  borderRadius: 12, padding: "10px 0", textAlign: "center",
                }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 800, color: C.primary }}>{value}</div>
                  <div style={{ fontSize: 10, color: C.textFaint, fontWeight: 500, marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading>
              Building with purpose,{" "}
              <span style={{ color: C.primary }}>shipping with care</span>
            </SectionHeading>
            <p style={{ color: C.textMuted, lineHeight: 1.8, fontSize: 15, marginBottom: 14, marginTop: 16 }}>
              I'm a full-stack developer based in San Francisco with a love for the entire product lifecycle — from API design to pixel-perfect UIs. I believe great software is invisible: it just works.
            </p>
            <p style={{ color: C.textMuted, lineHeight: 1.8, fontSize: 15, marginBottom: 28 }}>
              When I'm not coding, I contribute to open-source projects, write about developer tooling, and hunt for the city's best pour-over coffee.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {['Open Source', 'Remote-Friendly', 'SF Bay Area', 'Coffee Addict ☕'].map((tag) => (
                <span key={tag} style={{
                  background: C.primaryLight, border: `1px solid ${C.borderMid}`,
                  color: C.primaryDark, padding: "5px 13px", borderRadius: 20,
                  fontSize: 13, fontFamily: "'Inter', sans-serif", fontWeight: 500,
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
