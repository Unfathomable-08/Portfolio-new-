import Navbar from "../sub-components/Navbar.js";
import About from "../components/About.js";
import Services from "../components/Services.js";
import Contact from "../components/Contact.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Services />
      <Contact />
    </>
  );
}