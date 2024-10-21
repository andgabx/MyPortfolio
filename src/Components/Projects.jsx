import React, { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const projects = [
  {
    id: 1,
    title: "Rizoma - Farm Management WebApp",
    description: "WIP - A digital tool designed to help farmers efficiently manage agroecological activities, such as planting, harvesting, and resource management. It promotes sustainability by optimizing resources, boosting productivity, and supporting regenerative practices in agriculture.",
    image: "assets/MockupRizoma.jpg",
    technologies: [
      "HTML5",
      "TailwindCSS",
      "Anime.JS",
      "Django",
      "Azure",
      "PWA",
    ],
  },
  {
    id: 2,
    title: "Recipes by Gab",
    description: "A digital collection of culinary recipes designed for cooking enthusiasts. This project was created as part of the Introduction to Computing course at Cesar School, and I used it to practice working with Bootstrap.",
    image: "assets/MockupRecipes.jpg",
    technologies: ["HTML5", "Bootstrap", "Javascript"],
  },
  {
    id: 3,
    title: "Digital Clock",
    description:
      "This was my first project incorporating JavaScript, alongside HTML and CSS, moving beyond just static websites. It showcases the basics I've learned over the past few months and marks the beginning of many future projects.",
    image: "assets/MockupDigitalClock.jpg",
    technologies: ["HTML5", "CSS", "Javascript"],
  },

  {
    id: 4,
    title: "TicTacToe",
    description:
      "I also built to practice my JavaScript skills. It holds a special place for me, as I used to play it with my dad when I was younger.",
    image: "assets/MockupTicTacToe.jpg",
    technologies: ["HTML5", "CSS", "Javascript"],
  },

  {
    id: 5,
    title: "MyRetroGameList",
    description:
      "WIP - A web application inspired by the concept of MyAnimeList, but focused on retro games. The main idea is to create a platform where users can list games from discontinued consoles, track those they have played or completed, and manage a list of games they plan to play in the future.",
    image: "assets/MockupMyRetroGameList.jpg",
    technologies: ["HTML5", "CSS", "Javascript", "Anime.JS", "Django", "Azure"],
  },
];

export default function MyProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  useEffect(() => {
    anime({
      targets: ".project-card",
      opacity: [0, 1],
      translateX: [-1000, 0],
      duration: 1500,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <section className="text-white bg-[#3b2314] mx-auto p-24 project-card">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-5xl font-bold text-center py-12">My Projects</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full max-h-[428px] overflow-y-auto custom-scroll md:w-1/3 space-y-4">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`w-full text-left p-4 rounded-lg transition-colors ${
                  selectedProject.id === project.id
                    ? "bg-[#4E3629] text-white"
                    : "bg-white text-[#3C2A21] hover:bg-gray-200"
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
          <div className="w-full md:w-2/3">
            <div className="bg-[#4E3629] p-6 rounded-lg">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
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
        </div>
      </div>
    </section>
  );
}
