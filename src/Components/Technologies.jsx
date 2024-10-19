import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const Technologies = () => {
  useEffect(() => {
    // Animação para os ícones
    anime({
      targets: '.icon', // Seleciona todos os elementos com a classe 'icon'
      translateY: [
        { value: -20, duration: 500, easing: 'easeInOutQuad' },
        { value: 0, duration: 500, easing: 'easeInOutQuad' },
      ],
      loop: true,
      delay: anime.stagger(300), // Aplica tempos diferentes para cada ícone
    });

    // Animação para a section surgindo da direita para a esquerda
    anime({
      targets: '.technologies-section', // Seleciona a section
      translateX: [1000, 0], // Move da direita para a posição original
      opacity: [0, 1], // A opacidade começa em 0 e vai até 1
      easing: 'easeOutExpo', // Suavização da animação
      duration: 1500, // Duração da animação de 1.5 segundos
    });
  }, []);

  return (
    <section className="w-full py-24 bg-[#3b2314] text-white technologies-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-5 items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl pb-4 font-bold tracking-tighter sm:text-5xl">Technologies</h2>
            <p className="max-w-[700px] text-[#e0e0e0] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am familiar in a wide range of front-end technologies, including:
            </p>
          </div>
          <div className="py-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center items-center">

            {/* React Icon */}
            <div className="flex flex-col items-center gap-2 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 icon"
              >
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                <line x1="12" x2="12" y1="22" y2="15.5"></line>
                <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                <line x1="12" x2="12" y1="2" y2="8.5"></line>
              </svg>
              <span>React</span>
            </div>

            {/* Tailwind Icon */}
            <div className="flex flex-col items-center gap-2 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 icon"
              >
                <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
                <path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
                <path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
              </svg>
              <span>Tailwind</span>
            </div>

            {/* TypeScript Icon */}
            <div className="flex flex-col items-center gap-2 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 icon"
              >
                <polyline points="4 7 4 4 20 4 20 7"></polyline>
                <line x1="9" x2="15" y1="20" y2="20"></line>
                <line x1="12" x2="12" y1="4" y2="20"></line>
              </svg>
              <span>TypeScript</span>
            </div>

            {/* JavaScript Icon */}
            <div className="flex flex-col items-center gap-2 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 icon"
              >
                <path d="M12 2l9.5 5.5v11L12 22l-9.5-5.5v-11L12 2z"></path>
                <path d="M2.5 7.5L12 12l9.5-5.5"></path>
                <path d="M12 22V12"></path>
              </svg>
              <span>JavaScript</span>
            </div>

            {/* Figma Icon */}
            <div className="flex flex-col items-center gap-2 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 icon"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path
                  d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"
                  fill=""
                ></path>
                <path
                  d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
                  fill=""
                ></path>
                <path
                  d="M12 12a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"
                  fill="#"
                ></path>
                <path
                  d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"
                  fill=""
                ></path>
              </svg>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
