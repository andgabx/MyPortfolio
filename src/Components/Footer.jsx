import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const Footer = () => {
  useEffect(() => {

    anime({
      targets: '.footer', 
      translateY: [100, 0], 
      opacity: [0, 1],
      easing: 'easeOutExpo', 
      duration: 1500, 
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
