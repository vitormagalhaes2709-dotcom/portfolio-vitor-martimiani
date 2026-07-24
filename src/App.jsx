import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Certifications from './components/Certifications/Certifications';
import Projects from './components/Projects/Projects';
import CTA from './components/CTA/CTA';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Skills />
        <About />
        <Certifications />
        <Projects />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
