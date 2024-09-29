import React from 'react';
import { AboutMe } from '../Constants';

const HeroSection = () => {
  return (
    <div className="my-5 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Texto e informações do lado esquerdo */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center">
            <div className="my-5 pb-16 text-6xl font-thin tracking-light lg:mt16 lg:text-8xl">
              Anderson Gabriel
            </div>
            <span className="md:pl-24 text-xl">Front End Developer</span>
            <div className="lg:pl-24 text-justify my-2 max-w-xl py-6 font-light">
              {AboutMe}
            </div>
          </div>
        </div>

        {/* Seção da imagem no lado direito */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src="src\assets\GabrielProfilePic.png"  // Substitua pelo caminho da sua imagem
              alt="Foto de Anderson Gabriel"
              className="max-w-sm rounded-lg shadow-2xl w-64 h-64 object-cover lg:w-96 lg:h-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
