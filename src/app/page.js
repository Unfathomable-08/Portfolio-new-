import Navbar from "../sub-components/Navbar.js";
import Hero from "../components/Hero.js";
import About from "../components/About.js";
import Services from "../components/Services.js";
import Contact from "../components/Contact.js";
import Skills from "../components/Skills.js";
import Projects from "../components/Projects.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}