import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { testimonials } from "../data/testimonials";
export function TestimonialCard({ quote, name, role, placeholder }) {
  return (
    <figure className={`tcard ${placeholder ? "tcard--placeholder" : ""}`}>
      {placeholder && <span className="tcard__badge">Placeholder</span>}
      <Quote size={22} strokeWidth={1.5} className="accent" />
      <blockquote>{quote}</blockquote>
      <figcaption><strong>{name}</strong><span>{role}</span></figcaption>
    </figure>
  );
}
export default function Testimonials() {
  const real = testimonials.filter((t) => !t.placeholder);
  const list = real.length ? real : testimonials;
  return (
    <section id="testimonials" className="section section--soft">
      <div className="container">
        <SectionHead index="04" label="Testimonials" title="Words That" script="Matter." sub={real.length ? undefined : "Testimonials from real clients and collaborators are on their way. The cards below are placeholders."} />
        <div className="tgrid">{list.map((t, i) => <Reveal key={i} delay={i * 0.1}><TestimonialCard {...t} /></Reveal>)}</div>
      </div>
    </section>
  );
}
