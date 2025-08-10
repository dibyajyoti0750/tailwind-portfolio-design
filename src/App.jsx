import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
