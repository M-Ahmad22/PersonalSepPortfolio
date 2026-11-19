import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { scrollTo } from "./Navbar";
const words = ["Building", "|Intelligent Systems|", "That", "Work", "For", "You."];
export default function Hero() {
  const reduce = useReducedMotion();
  const item = (i) => ({ initial: reduce ? false : { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] } });
  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div className="hero__top" {...item(0)}>
          <p className="eyebrow">Software Engineer · AI Automation Specialist · Founder</p>
          <span className="status"><span className="status__dot" /> Available for Select Projects</span>
        </motion.div>
        <h1 className="hero__title">
          {words.map((w, i) => (
            <span key={w}>
              <span className="hero__mask"><motion.span className={w.startsWith("|") ? "script accent hero__script" : ""} {...item(i + 1)}>{w.replaceAll("|", "")}</motion.span></span>{" "}
            </span>
          ))}
        </h1>
        <div className="hero__bottom">
          <motion.p className="hero__lead" {...item(8)}>
            I'm Muhammad Ahmad Tahir — a Software Engineer, No-Code &amp; Low-Code Agentic AI Engineer, and Founder of MATalogics. I design and build intelligent automation systems, AI agents, and scalable digital products that turn complex business processes into seamless experiences.
          </motion.p>
          <motion.div className="hero__ctas" {...item(9)}>
            <button className="btn btn--dark" onClick={() => scrollTo("projects")}>Explore My Work <ArrowDownRight size={18} /></button>
            <button className="btn btn--ghost" onClick={() => scrollTo("contact")}>Let's Connect</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
