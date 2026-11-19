import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main><Hero /><About /><TechStack /><Projects /><Testimonials /><Contact /></main>
      <Footer />
    </MotionConfig>
  );
}
