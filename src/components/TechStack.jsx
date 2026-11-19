import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { skills } from "../data/skills";

const pad = (n) => String(n).padStart(2, "0");
const total = skills.reduce((n, s) => n + s.items.length, 0);
// Wrap hyphenated words ("Low-Code") so titles never break at the hyphen.
const keepHyphens = (text) => text.split(/(\S*-\S*)/).map((part, i) => (i % 2 ? <span key={i}>{part}</span> : part));

export default function TechStack() {
  return (
    <section id="expertise" className="section section--dark">
      <div className="container stack">
        <div className="stack__head">
          <SectionHead index="02" label="Expertise" title="My Technical" script="Arsenal." />
          <Reveal as="dl" delay={0.2} className="stack__stats">
            <div><dt>Disciplines</dt><dd>{pad(skills.length)}</dd></div>
            <div><dt>Skills &amp; Tools</dt><dd>{pad(total)}</dd></div>
          </Reveal>
        </div>
        <div className="stack__grid">
          {skills.map(({ title, icon: Icon, items }, i) => (
            <Reveal key={title} delay={i * 0.06} className="stack__cell">
              <motion.article className={`skill ${i === 0 ? "skill--feature" : ""}`} whileHover={{ y: -6 }} transition={{ duration: 0.35 }}>
                <div className="skill__head"><span className="skill__n">{pad(i + 1)}</span><span>{pad(items.length)} Skills</span></div>
                <Icon size={26} strokeWidth={1.25} className="skill__icon" aria-hidden="true" />
                <h3 className="skill__title">{keepHyphens(title)}</h3>
                <ul className="skill__list">{items.map((s) => <li key={s}>{s}</li>)}</ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
