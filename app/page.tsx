import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';

export default function HomePage() {
  return (
    <main>
      <Hero />
       <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
