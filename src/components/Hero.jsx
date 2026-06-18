import { useEffect, useState } from "react";
import { ROLES, C } from "./portfolioData";

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setRoleIdx((current) => (current + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      padding: "100px 24px 60px", textAlign: "center",
      background: "linear-gradient(160deg, #FAFAFE 0%, #EEF2FF 50%, #F5F3FF 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)",
        width: 560, height: 560, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{ maxWidth: 700, position: "relative" }}>
        <div style={{
          display: "inline-block", background: C.primaryLight, border: `1px solid ${C.borderMid}`,
          color: C.primaryDark, padding: "6px 18px", borderRadius: 20, fontSize: 13, fontWeight: 600,
          marginBottom: 28, fontFamily: "'Inter', sans-serif",
        }}>
          👋 Available for new opportunities
        </div>
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(42px, 7vw, 76px)",
          fontWeight: 800, color: C.text, lineHeight: 1.08, marginBottom: 18, letterSpacing: "-2px",
        }}>
          Hi, I'm <span style={{ color: C.primary }}>Kriti KC</span>
        </h1>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(18px, 3vw, 28px)",
          fontWeight: 600, color: C.textMuted, marginBottom: 24, minHeight: 40,
        }}>
          <span style={{ color: C.primaryDark }}>{displayed}</span>
          <span style={{ color: C.primary, animation: "blink 1s step-end infinite" }}>|</span>
        </div>
        <p style={{
          fontFamily: "'Inter', sans-serif", fontSize: 17, color: C.textFaint, lineHeight: 1.78,
          maxWidth: 500, margin: "0 auto 40px",
        }}>
          I craft performant, accessible web experiences that solve real problems.
          Passionate about clean code, thoughtful design, and shipping products people love.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => scrollTo("projects")} style={{
            background: C.primary, color: "#fff", border: "none",
            padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 600,
            cursor: "pointer", fontFamily: "'Inter', sans-serif",
            boxShadow: "0 4px 20px rgba(99,102,241,0.28)", transition: "all 0.2s",
          }}
            onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >View My Work →</button>
          <button onClick={() => scrollTo("contact")} style={{
            background: "#fff", color: C.primaryDark, border: `1.5px solid ${C.borderMid}`,
            padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 600,
            cursor: "pointer", fontFamily: "'Inter', sans-serif", transition: "all 0.2s",
          }}
            onMouseOver={(e) => { e.currentTarget.style.background = C.primaryLight; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "translateY(0)"; }}
          >Get In Touch</button>
        </div>
      </div>
    </section>
  );
}
