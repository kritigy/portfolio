import { useRef, useState } from "react";
import { C } from "./portfolioData";
import { useInView } from "./useInView";
import { SectionHeading, SectionLabel } from "./SectionComponents";

export default function Contact() {
  const ref = useRef(null);
  const visible = useInView(ref);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" style={{ padding: "100px 24px", background: C.bgWhite }}>
      <div ref={ref} style={{
        maxWidth: 600, margin: "0 auto", textAlign: "center",
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <SectionLabel>Contact</SectionLabel>
        <SectionHeading>Let's build something</SectionHeading>
        <p style={{ color: C.textFaint, marginBottom: 44, fontSize: 15, lineHeight: 1.75 }}>
          Open to full-time roles, freelance projects, and interesting conversations.
          Drop me a line and I'll get back to you within a day.
        </p>

        {sent ? (
          <div style={{ background: C.primaryLight, border: `1px solid ${C.borderMid}`, borderRadius: 18, padding: 40 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.primaryDark, fontSize: 20, fontWeight: 600 }}>
              Message sent! I'll be in touch soon.
            </p>
          </div>
        ) : (
          <div style={{
            background: C.bgWhite, border: `1.5px solid ${C.border}`,
            borderRadius: 20, padding: "36px", boxShadow: "0 4px 24px rgba(99,102,241,0.06)",
          }}>
            {[
              { key: "name", label: "Your Name", type: "text", placeholder: "Jane Smith" },
              { key: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
            ].map((field) => (
              <div key={field.key} style={{ marginBottom: 18, textAlign: "left" }}>
                <label style={{ display: "block", fontSize: 13, color: C.textMuted, fontWeight: 500, marginBottom: 6 }}>{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  style={{
                    width: "100%", padding: "11px 14px", borderRadius: 9, fontSize: 14,
                    background: "#F9FAFB", border: `1.5px solid #E5E7EB`, color: C.text,
                    fontFamily: "'Inter', sans-serif", outline: "none", boxSizing: "border-box",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "#818CF8"; e.target.style.background = "#fff"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#E5E7EB"; e.target.style.background = "#F9FAFB"; }}
                />
              </div>
            ))}

            <div style={{ marginBottom: 26, textAlign: "left" }}>
              <label style={{ display: "block", fontSize: 13, color: C.textMuted, fontWeight: 500, marginBottom: 6 }}>Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  width: "100%", padding: "11px 14px", borderRadius: 9, fontSize: 14,
                  background: "#F9FAFB", border: `1.5px solid #E5E7EB`, color: C.text,
                  fontFamily: "'Inter', sans-serif", outline: "none", resize: "vertical",
                  boxSizing: "border-box", transition: "border-color 0.2s",
                }}
                onFocus={(e) => { e.target.style.borderColor = "#818CF8"; e.target.style.background = "#fff"; }}
                onBlur={(e) => { e.target.style.borderColor = "#E5E7EB"; e.target.style.background = "#F9FAFB"; }}
              />
            </div>

            <button
              onClick={() => { if (form.name && form.email && form.message) setSent(true); }}
              style={{
                width: "100%", padding: "14px", borderRadius: 10, fontSize: 15, fontWeight: 600,
                border: "none", background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                color: "#fff", cursor: "pointer", fontFamily: "'Inter', sans-serif",
                boxShadow: "0 4px 18px rgba(99,102,241,0.25)", transition: "all 0.2s",
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-1px)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              Send Message →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
