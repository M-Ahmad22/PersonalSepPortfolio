import { navLinks } from "../data/site";
import { socials } from "./Contact";
import { scrollTo } from "./Navbar";
export default function Footer() {
  const links = socials();
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__statement">Designed with <span className="script accent">purpose.</span> Engineered with <span className="script accent">intelligence.</span></p>
        <div className="footer__grid">
          <div><p className="footer__brand">MAT<span className="accent">.</span></p><p className="footer__desc">Software Engineer, Agentic AI &amp; automation engineer, and Founder of MATalogics — building intelligent systems that work for you.</p></div>
          <nav aria-label="Footer"><h4>Navigate</h4>{navLinks.map((l) => <button key={l.id} onClick={() => scrollTo(l.id)}>{l.label}</button>)}</nav>
          <div><h4>Connect</h4>{links.length ? links.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>) : <span className="footer__muted">Links coming soon</span>}</div>
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} Muhammad Ahmad Tahir. All rights reserved.</p>
      </div>
    </footer>
  );
}
