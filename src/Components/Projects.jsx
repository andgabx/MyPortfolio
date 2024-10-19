import React, { useState, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const projects = [
  {
    id: 1,
    title: "Rizoma - Farm Management WebApp",
    description: "A full-stack e-commerce solution with React and Node.js.",
    image: "",
    technologies: ["HTML5", "TailwindCSS", "Django", "Azure"]
  },
  {
    id: 2,
    title: "Recipes by Gab",
    description: "A responsive task management application built with Vue.js.",
    image: "./src/assets/MockupRecipes.jpg",
    technologies: ["HTML5", "TailwindCSS", "Django, Azure"]
  },
  {
    id: 3,
    title: "Digital Clock",
    description: "An interactive weather dashboard using React and OpenWeatherMap API.",
    image: "./src/assets/MockupDigitalClock.jpg",
    technologies: ["HTML5", "CSS", "Javascript"]
  },
];

export default function MyProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  // Função para animar a transição quando o projeto selecionado mudar
  useEffect(() => {
    anime({
      targets: '.project-card',
      opacity: [0, 1],       // Fade in
      translateX: [-1000, 0],   // Movimento de baixo para cima
      duration: 1500,
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <section className="text-white mx-auto p-24 project-card">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-5xl font-bold text-center py-12">My Projects</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 space-y-4">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`w-full text-left p-4 rounded-lg transition-colors ${
                  selectedProject.id === project.id
                    ? 'bg-[#3C2A21] text-white'
                    : 'bg-white text-[#3C2A21] hover:bg-gray-200'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
          <div className="w-full md:w-2/3">
            {/* Container que será animado quando o projeto mudar */}
            <div className="bg-[#4E3629] p-6 rounded-lg">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
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
