import React, { useEffect } from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import anime from "animejs/lib/anime.es.js";

const Navbar = () => {
  useEffect(() => {
    // Animação da navbar de cima para baixo
    anime({
      targets: '.navbar',
      translateY: [-100, 0], 
      opacity: [0, 1], 
      easing: 'easeOutExpo', 
      duration: 1500, 
    });
  }, []);

  return (
    <div className="bg-[#3b2314] navbar md-px-48 justify-between p-8">
      <div>
        <a href='' className="hover:animate-pulse text-2xl bold">AG</a>
      </div>
      <div>
        <nav className="text-white grid-flow-col flex gap-4 md:place-self-center md:justify-self-end">
          <a href='https://www.linkedin.com/in/andgabx/' target='_blank' className='p-3 text-3xl hover:animate-bounce'>
            <CiLinkedin />
          </a>
          <a href='https://github.com/andgabx' target='_blank' className='p-3 text-3xl hover:animate-bounce'>
            <FaGithub />
          </a>
          <a href='' target='_blank' className='p-3 text-3xl hover:animate-bounce'>
            <FaWhatsapp />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
