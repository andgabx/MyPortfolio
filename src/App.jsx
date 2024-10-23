// App.jsx
import React from 'react';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import VerticalAccordion from './Components/VerticalAccordion';
import { useWindowSize } from './Components/useWindowSize'; // Importe o hook useWindowSize

const App = () => {
  const { width } = useWindowSize(); // Obtenha a largura da janela

  // Defina o breakpoint para telas mobile
  const isMobile = width < 768;

  return (
    <div className="bg-[#3b2314] overflow-x-hidden">
      <Navbar />

      <HeroSection />
      <About />
      <Technologies />

      {/* Renderiza o VerticalAccordion apenas se for uma tela mobile */}
      {isMobile && <VerticalAccordion />}

      {/* Renderiza o Projects apenas se NÃO for uma tela mobile */}
      {!isMobile && <Projects />}

      <Contact />
      <Footer />
    </div>
  );
};

export default App;
