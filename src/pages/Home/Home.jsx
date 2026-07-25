import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Skills from '../../components/Skills/Skills';
import About from '../../components/About/About';
import Certifications from '../../components/Certifications/Certifications';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  // Ao voltar de /clima com um hash (ex.: /#projects), o navegador só faz o
  // scroll automático em um carregamento de documento — numa transição de
  // rota do React Router isso não acontece sozinho, então repetimos aqui.
  useEffect(() => {
    if (!window.location.hash) return;

    const id = window.location.hash.slice(1);
    document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Skills />
        <About />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
