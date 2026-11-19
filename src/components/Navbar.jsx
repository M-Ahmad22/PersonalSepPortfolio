import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "../data/site";
export const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const go = (id) => { setOpen(false); scrollTo(id); };
  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <button className="nav__brand" onClick={() => go("home")}>{site.brand.replace(".", "")}<span className="accent">.</span></button>
        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((l) => <button key={l.id} onClick={() => go(l.id)}>{l.label}</button>)}
        </nav>
        <button className="btn btn--accent nav__cta" onClick={() => go("contact")}>Let's Talk</button>
        <button className="nav__toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav className="nav__mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35 }}>
            {navLinks.map((l, i) => (
              <motion.button key={l.id} onClick={() => go(l.id)} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>{l.label}</motion.button>
            ))}
            <button className="btn btn--accent" onClick={() => go("contact")}>Let's Talk</button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
