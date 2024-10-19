import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const HeroSection = () => {
  useEffect(() => {

    anime({
      targets: '.hero-section',
      translateX: [1000, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1500,
    });

    anime({
      targets: '.hero-text',
      translateY: [-50, 0], 
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 500,
    });
  }, []);

  return (
    <section className="w-full py-24 bg-[#3b2314] text-white hero-section">
      <div className="container px-4 mx-auto md:px-6">
        <div className="grid gap-6 mx-auto lg:grid-cols[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
          <img
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-first"
            src="src/assets/GabrielProfilePic.png"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 hero-text"> {/* Adicionada a classe 'hero-text' para o título e a descrição */}
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Anderson Gabriel
              </h1>
              <p className="w-full text-[#e0e0e0] md:text-xl text-justify">
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
