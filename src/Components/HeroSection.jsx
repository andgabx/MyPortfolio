import React from 'react';

const HeroSection = () => {
  return (
    <section class="w-full py-12 md:py-24 lg:py-32 bg-[#3b2314] text-white">
  <div class="container px-4 md:px-6">
    <div class="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
      <img
        width="550"
        height="550"
        alt="Hero"
        class="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-first"
        src="src\assets\GabrielProfilePic.png"
      />
      <div class="flex flex-col justify-center space-y-4">
        <div class="space-y-2">
          <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Anderson Gabriel
          </h1>
          <p class="max-w-[600px] text-[#e0e0e0] md:text-xl">
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
}

export default HeroSection;
