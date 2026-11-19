import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { projects } from "../data/projects";
export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead index="03" label="Projects" title="Selected" script="Works." sub="Things I've built, products I'm shaping, and systems I've engineered." />
        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1} className={`project-wrap project-wrap--${i}`}>
              <motion.article className={`project project--${p.tone}`} whileHover={{ y: -6 }} transition={{ duration: 0.35 }}>
                <div className="project__head"><span className="project__n">0{i + 1}</span><span className="project__cat">{p.category}</span></div>
                <h3 className="project__title">{p.title}</h3>
                <p className="project__desc">{p.description}</p>
                <div className="project__foot">
                  <ul className="tags">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
                  {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="project__link" aria-label={`Visit ${p.title}`}>Visit <ArrowUpRight size={16} /></a>}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
