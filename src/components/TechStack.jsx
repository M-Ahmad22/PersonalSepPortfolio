import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { skills } from "../data/skills";
export default function TechStack() {
  return (
    <section id="expertise" className="section section--dark">
      <div className="container">
        <SectionHead index="02" label="Expertise" title="My Technical" script="Arsenal." />
        <div className="stack">
          {skills.map(({ title, icon: Icon, items }, i) => (
            <Reveal key={title} delay={i * 0.06} className="stack__row">
              <div className="stack__cat"><Icon size={20} strokeWidth={1.5} className="accent" /><h3>{title}</h3></div>
              <ul className="stack__items">{items.map((s) => <li key={s}>{s}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
