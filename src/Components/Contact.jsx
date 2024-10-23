import React, { useEffect } from 'react';
import { CiMail, CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import anime from 'animejs/lib/anime.es.js';

const Contact = () => {
  useEffect(() => {
    // Animação de baixo para cima
    anime({
      targets: '.contact-section', // Seleciona a section com a classe 'contact-section'
      translateY: [100, 0], // Move de 100px abaixo para 0 (posição original)
      opacity: [0, 1], // A opacidade começa em 0 e vai até 1
      easing: 'easeOutExpo', // Suavização da animação
      duration: 1500, // Duração da animação
    });
  }, []);

  return (
    <section className="bg-[#3b2314] py-10 flex items-center justify-center contact-section">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl pb-4 font-bold tracking-tighter sm:text-5xl text-center text-white">Get in Touch</h1>
          <div className="space-y-6 py-4 min-w-[200px]:break-words">
            <a href="mailto:gabrielvalencasa98@gmail.com" className="flex break-words items-center justify-center hover:underline transition-colors">
              <CiMail className="text-white h-5 w-5" />
              <span className='text-white px-2'>gabrielvalencasa98@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/andgabx/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 hover:underline transition-colors">
              <CiLinkedin className="text-white h-5 w-5" />
              <span className='text-white'>LinkedIn Profile</span>
            </a>
            <a href="https://wa.me/5581999758852" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 hover:underline transition-colors">
              <FaWhatsapp className="text-white h-5 w-5" />
              <span className='text-white'>WhatsApp</span>
            </a>
            <a href="https://github.com/andgabx" target='_blank' className="flex items-center justify-center space-x-3 hover:underline transition-colors">
              <FaGithub className="text-white h-5 w-5" />
              <span className='text-white'>Github Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
