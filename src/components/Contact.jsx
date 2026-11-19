import { useState } from "react";
import { Linkedin, Github, Mail, Send, Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { site } from "../data/site";
const empty = { name: "", email: "", subject: "", message: "" };
function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name."; else if (v.name.length > 100) e.name = "Keep it under 100 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Please enter a valid email.";
  if (!v.subject.trim()) e.subject = "Please add a subject."; else if (v.subject.length > 150) e.subject = "Keep it under 150 characters.";
  if (v.message.trim().length < 10) e.message = "Tell me a little more (at least 10 characters)."; else if (v.message.length > 2000) e.message = "Keep it under 2000 characters.";
  return e;
}
export const socials = () => [
  { label: "LinkedIn", href: site.linkedin, icon: Linkedin },
  { label: "GitHub", href: site.github, icon: Github },
  { label: "Email", href: site.email ? `mailto:${site.email}` : "", icon: Mail },
].filter((s) => s.href);
export default function Contact() {
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (ev) => { setV({ ...v, [k]: ev.target.value }); if (errors[k]) setErrors({ ...errors, [k]: undefined }); };
  const submit = (ev) => {
    ev.preventDefault();
    const e = validate(v); setErrors(e);
    if (Object.keys(e).length) return;
    if (site.email) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(`${v.message}\n\n— ${v.name} (${v.email})`)}`;
    }
    setSent(true); setV(empty);
  };
  const field = (k, label, type = "text") => (
    <label className={`field ${errors[k] ? "field--error" : ""}`}>
      <span>{label}</span>
      {type === "textarea" ? <textarea rows={5} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} /> : <input type={type} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} />}
      {errors[k] && <em role="alert">{errors[k]}</em>}
    </label>
  );
  const links = socials();
  return (
    <section id="contact" className="section">
      <div className="container contact">
        <div>
          <SectionHead index="05" label="Contact" title="Have an Idea?" script="Let's Build It." />
          <Reveal as="p" className="contact__lead">Whether you're exploring AI automation, building a digital product, or looking for someone to turn an ambitious idea into reality, I'd love to hear from you.</Reveal>
          <Reveal className="contact__links">
            {links.length ? links.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel="noreferrer"><Icon size={18} strokeWidth={1.5} /> {label}</a>
            )) : <p className="muted">LinkedIn, GitHub and email links coming soon.</p>}
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <form className="form" onSubmit={submit} noValidate>
            <div className="form__row">{field("name", "Name")}{field("email", "Email", "email")}</div>
            {field("subject", "Subject")}
            {field("message", "Message", "textarea")}
            <button type="submit" className="btn btn--accent">Send Message <Send size={16} /></button>
            {sent && <p className="form__ok" role="status"><Check size={16} /> Thank you — your message is ready. I'll be in touch soon.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
