import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
