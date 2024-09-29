import React from "react";
import { AboutMe2 } from "../Constants";

const About = () => {
  return (
    <div className=" border-neutral-900">
      <p className="text-center mb-10 text-4xl">About Me</p>
      <div className="flex flex-wrap">
        {/* Seção da imagem à esquerda */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center ">
            <img
              src="src/assets/GabrielAboutMe.png" // Substitua pelo caminho da sua imagem
              alt="Foto de Anderson Gabriel"
              className="max-w-sm rounded-lg  shadow-2xl w-64 h-64 object-cover lg:w-96 lg:h-96"
            />
          </div>
        </div>

        {/* Seção do texto à direita */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center">
            <p className="my-2 max-w-xl py-6 text-white font-light tracking-light text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              corporis voluptatibus consequatur officia autem dignissimos beatae
              ex facilis omnis asperiores. Non aliquam sapiente quae ratione
              numquam dignissimos, eaque unde quod. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eius, laboriosam excepturi. Maiores
              corrupti nobis rerum, non veniam illo! Ipsum possimus inventore
              harum omnis iste quod tempore fugiat sed, ipsam nostrum? Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Porro
              dignissimos voluptatem cumque quibusdam deserunt quia, officia
              fugiat nulla repellat explicabo inventore placeat architecto nihil
              aspernatur labore. Dolore provident alias suscipit! Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Nisi sit modi rem
              inventore vitae facilis. Quia quo doloribus praesentium, soluta
              sit ullam quisquam iusto iste libero, officia veritatis dolore
              temporibus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quo omnis magnam eaque voluptatem ab, ipsum exercitationem
              natus nisi quidem, culpa quas odio totam minima ad facere libero
              ratione laborum at.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
