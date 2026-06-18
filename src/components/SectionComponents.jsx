import { C } from "./portfolioData";

export function SectionLabel({ children }) {
  return (
    <p style={{
      fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700,
      color: C.primary, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10,
    }}>
      — {children}
    </p>
  );
}

export function SectionHeading({ children }) {
  return (
    <h2 style={{
      fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(26px, 4vw, 38px)",
      fontWeight: 700, color: C.text, marginBottom: 8, letterSpacing: "-0.5px", lineHeight: 1.2,
    }}>
      {children}
    </h2>
  );
}
