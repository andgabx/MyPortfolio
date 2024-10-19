import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const Footer = () => {
  useEffect(() => {
    // Animação para o footer surgindo de baixo para cima
    anime({
      targets: '.footer', // Seleciona o footer
      translateY: [100, 0], // Move de 100px abaixo para 0 (posição original)
      opacity: [0, 1], // A opacidade começa em 0 e vai até 1
      easing: 'easeOutExpo', // Suavização da animação
      duration: 1500, // Duração da animação
    });
  }, []);

  return (
    <footer className="bg-[#3b2314] py-24 footer justify-around text-neutral-content items-center">
      <aside className="grid-flow-col items-center">
        <p className="text-white">{new Date().getFullYear()} - Thanks for checking my Portfolio!</p>
      </aside>
    </footer>
  );
};

export default Footer;
