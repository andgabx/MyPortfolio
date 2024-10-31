import anime from "animejs";
import { useWindowSize } from "./useWindowSize.jsx";
import { useState, useEffect } from "react";

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);



  return (
    <section className="p-4 bg-[#3b2314] shadow-lg">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[550px] w-full max-w-6xl mx-auto shadow-lg overflow-hidden rounded-lg">
        {items.map((item) => (
          <Panel
            key={item.id}
            open={open}
            setOpen={setOpen}
            id={item.id}
            title={item.title}
            imgSrc={item.imgSrc}
            description={item.description}
            technologies={item.technologies}
            repositoryUrl={item.repositoryUrl}
          />
        ))}
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, title, imgSrc, description, technologies, repositoryUrl }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  useEffect(() => {
    if (isOpen) {
      anime({
        targets: `.panel-${id}`,
        height: width > 1024 ? "550px" : "400px", // Ajuste de tamanho ao expandir
        duration: 1000,
        easing: "easeOutExpo",
      });
    } else {
      anime({
        targets: `.panel-${id}`,
        height: width > 1024 ? "0px" : "0px", // Volta ao tamanho original ao fechar
        duration: 1000,
        easing: "easeOutExpo",
      });
    }
  }, [isOpen, width, id]);

  return (
    <>
      <button
        className={`bg-[#4E3629] hover:bg-[#3b2314] text-white transition-colors p-3 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group shadow-lg rounded-lg ${
          isOpen ? "shadow-xl" : "shadow-md"
        }`}
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
      </button>

      {isOpen && (
        <div
          className={`w-full h-0 overflow-hidden relative bg-black flex items-end panel panel-${id} shadow-lg cursor-pointer`}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          onClick={() => window.open(repositoryUrl, "_blank")} // Redireciona para o repositório
        >
          <div className="px-4 py-2 bg-black/80 backdrop-blur-sm text-white rounded-t-xl w-full">
            <p className="mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#3C2A21] text-white px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VerticalAccordion;

const items = [

  {
    id: 1,
    title: "Rizoma - Farm Management WebApp",
    description: "WIP - A digital tool designed to help farmers efficiently manage agroecological activities, such as planting, harvesting, and resource management. It promotes sustainability by optimizing resources, boosting productivity, and supporting regenerative practices in agriculture.",
    imgSrc: "/assets/MockupRizoma.jpg",
    technologies: [
      "HTML5",
      "TailwindCSS",
      "Anime.JS",
      "Django",
      "Azure",
      "PWA",
    ],
    repositoryUrl: "https://github.com/jhrvo0/Rizoma", // Adicione o link do repositório
  },
  {
    id: 2,
    title: "Recipes by Gab",
    description: "A digital collection of culinary recipes designed for cooking enthusiasts. This project was created as part of the Introduction to Computing course at Cesar School, and I used it to practice working with Bootstrap.",
    imgSrc: "/assets/MockupRecipes.jpg",
    technologies: ["HTML5", "Bootstrap", "Javascript"],
    repositoryUrl: "https://github.com/andgabx/RecipesByGab", // Adicione o link do repositório
  },

  {
    id: 3,
    title: "Digital Clock",
    description: "This was my first project incorporating JavaScript, alongside HTML and CSS, moving beyond just static websites. It showcases the basics I've learned over the past few months and marks the beginning of many future projects.",
    imgSrc: "/assets/MockupDigitalClock.jpg",
    technologies: ["HTML5", "CSS", "Javascript"],
    repositoryUrl: "https://github.com/andgabx/Digital-Clock", // Adicione o link do repositório
  },

  {
    id: 4,
    title: "TicTacToe",
    description: "I also built to practice my JavaScript skills. It holds a special place for me, as I used to play it with my dad when I was younger.",
    imgSrc: "/assets/MockupTicTacToe.jpg",
    technologies: ["HTML5", "CSS", "Javascript"],
    repositoryUrl: "https://github.com/andgabx/TicTacToe", // Adicione o link do repositório
  },

  {
    id: 5,
    title: "MyRetroGameList",
    description: "WIP - A web application inspired by the concept of MyAnimeList, but focused on retro games. The main idea is to create a platform where users can list games from discontinued consoles, track those they have played or completed, and manage a list of games they plan to play in the future.",
    imgSrc: "assets/MockupMyRetroGameList.jpg",
    technologies: ["HTML5", "CSS", "Javascript", "Anime.JS", "Django", "Azure"],
    repositoryUrl: "https://github.com/andgabx/MyRetroGameList", // Adicione o link do repositório
  },
];
