import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const HeroSection = () => {
  useEffect(() => {

    anime({
      targets:'.hero-image',
      translateX: [1000, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1500,
    });

    anime({
      targets: '.hero-text',
      translateY: [-1000, 0], 
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 500,
    });
  }, []);

  return (
    <section className="w-full py-24 bg-[#3b2314] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Imagem à esquerda */}
          <img
            alt="Hero"
            className="mx-auto max-w-[600px] aspect-square overflow-hidden rounded-xl hero-image object-cover w-full lg:order-first"
            src="assets/GabrielProfilePic.png"
          />
  
          {/* Texto à direita */}
          <div className="flex flex-col mx-auto md:py-8 justify-center space-y-2 hero-text">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Anderson Gabriel
              </h1>
              <p className="max-w-[600px] text-[#e0e0e0] md:text-xl text-justify">
                As a seasoned front-end developer, I specialize in creating visually stunning and highly interactive
                user interfaces. With a keen eye for design and a deep understanding of modern web technologies, I
                transform complex ideas into intuitive and engaging digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
  
};

export default HeroSection;
