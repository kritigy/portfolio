import { C } from "./portfolioData";

export default function Footer() {
  return (
    <footer style={{
      borderTop: `1.5px solid ${C.border}`, padding: "28px 24px",
      textAlign: "center", fontFamily: "'Inter', sans-serif", color: C.textFaint, fontSize: 13,
      background: C.bgWhite,
    }}>
      <div style={{ display: "flex", gap: 20, justifyContent: "center", marginBottom: 10 }}>
        {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((item) => (
          <span key={item} style={{ cursor: "pointer", transition: "color 0.2s" }}
            onMouseOver={(e) => e.currentTarget.style.color = C.primary}
            onMouseOut={(e) => e.currentTarget.style.color = C.textFaint}>{item}</span>
        ))}
      </div>
      © 2026 Kriti KC. Built with React & care.
    </footer>
  );
}
