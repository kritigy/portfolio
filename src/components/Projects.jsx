import { useRef } from "react";
import { PROJECTS, C } from "./portfolioData";
import { useInView } from "./useInView";
import { SectionHeading, SectionLabel } from "./SectionComponents";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <section id="projects" style={{ padding: "100px 24px", background: C.bg }}>
      <div ref={ref} style={{
        maxWidth: 1100, margin: "0 auto",
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <SectionLabel>Projects</SectionLabel>
        <SectionHeading>Selected work</SectionHeading>
        <p style={{ color: C.textFaint, marginBottom: 48, fontSize: 15 }}>A few things I've built recently.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} delay={index * 100} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
