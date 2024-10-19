import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const About = () => {
  useEffect(() => {
  
    anime({
      targets: ".about-image", 
      translateX: [-1000, 0], 
      opacity: [0, 1], 
      easing: "easeOutExpo",
      duration: 1500,
    });

    anime({
      targets: ".about-text", 
      translateY: [-50, 0], 
      opacity: [0, 1], 
      easing: "easeOutExpo", 
      duration: 1000, 
      delay:500,
    });
  }, []);

  return (
    <section className="w-full py-24 bg-[#3b2314] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          {/* Texto com animação da direita para a esquerda */}
          <div className="flex flex-col justify-center space-y-4 about-text">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                About me
              </h1>
              <p className="max-w-[600px] text-[#e0e0e0] md:text-xl text-justify">
                Ever since I can remember, Computer Science has been my dream
                career. When I discovered the world of software development, I
                knew I had found my path. While hardware is cool, my passion has
                always leaned towards software, especially front-end
                development. There’s something about seeing a beautifully
                crafted, responsive website that always caught my eye and made
                me want to create my own. Right now, I’m working on a really fun
                project with some friends – we’re building a retro gaming site,
                kind of like My Anime List, but for old-school games. It’s a
                blast because we all share a love for the classic games we grew
                up playing. When I’m not coding, you’ll probably find me on the
                mat practicing Brazilian Jiu-Jitsu, getting lost in a good book,
                or hanging out with friends.
              </p>
            </div>
          </div>

          <img
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last about-image"
            src="src/assets/GabrielAboutMe.png"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
