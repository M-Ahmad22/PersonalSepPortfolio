import Reveal from "./Reveal";
export default function SectionHead({ index, label, title, script, sub }) {
  return (
    <div className="shead">
      <Reveal className="shead__meta"><span className="accent">{index}</span><span>{label}</span></Reveal>
      <Reveal delay={0.1} as="h2" className="shead__title">{title} {script && <span className="script accent">{script}</span>}</Reveal>
      {sub && <Reveal delay={0.2} as="p" className="shead__sub">{sub}</Reveal>}
    </div>
  );
}
