import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
const highlights = [["Founder", "MATalogics"], ["Software Engineering", "UMT Lahore"], ["Agentic AI", "& Automation Engineering"]];
export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead index="01" label="About" title="Beyond Writing Code." />
        <div className="about">
          <Reveal as="p" className="about__quote">I build systems that <span className="script accent">create impact.</span></Reveal>
          <div className="about__body">
            <Reveal as="p">I'm a Software Engineering student at the University of Management and Technology (UMT), Lahore, and the Founder of MATalogics.</Reveal>
            <Reveal as="p" delay={0.1}>My work sits at the intersection of software engineering, artificial intelligence, and business automation. I specialize in building No-Code and Low-Code automation systems, designing AI-powered agents, developing intelligent workflows, and transforming ideas into practical digital products.</Reveal>
            <Reveal as="p" delay={0.2}>I believe technology should do more than solve problems. It should eliminate repetitive work, empower people, and create opportunities for businesses to grow.</Reveal>
          </div>
        </div>
        <ul className="highlights">
          {highlights.map(([a, b], i) => (
            <Reveal as="li" key={a} delay={i * 0.1}><span className="highlights__n">0{i + 1}</span><strong>{a}</strong><span>{b}</span></Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
