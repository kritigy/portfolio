import { useState } from "react";
import { NAV_LINKS, C } from "./portfolioData";

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: "rgba(247,245,255,0.93)", backdropFilter: "blur(14px)",
      borderBottom: `1.5px solid ${C.border}`,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 20, color: C.text, letterSpacing: "-0.5px" }}>
          <span style={{ color: C.primary }}>&lt;</span>kriti kc<span style={{ color: C.primary }}>/&gt;</span>
        </span>

        <div style={{ display: "flex", gap: 4 }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <button key={link} onClick={() => scrollTo(link)} style={{
              background: active === link ? C.primaryLight : "transparent",
              border: `1px solid ${active === link ? C.borderMid : "transparent"}`,
              color: active === link ? C.primaryDark : C.textMuted,
              padding: "6px 16px", borderRadius: 20, cursor: "pointer",
              fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, transition: "all 0.2s",
            }}>
              {link}
            </button>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="mobile-menu-btn"
          style={{ background: "none", border: "none", color: C.text, cursor: "pointer", fontSize: 22, display: "none" }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="mobile-nav" style={{ background: C.bgWhite, borderTop: `1px solid ${C.border}`, padding: "12px 24px 20px" }}>
          {NAV_LINKS.map((link) => (
            <button key={link} onClick={() => scrollTo(link)} style={{
              display: "block", width: "100%", textAlign: "left", background: "none", border: "none",
              color: C.textMuted, padding: "12px 0", cursor: "pointer", fontSize: 16,
              fontFamily: "'Inter', sans-serif", borderBottom: `1px solid ${C.border}`,
            }}>
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
