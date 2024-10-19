import React from "react";

const Projects = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-16 lg:py-32 bg-[#3b2314] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl pb-4">Front-End Projects</h2>
              <p className="max-w-[700px] text-[#e0e0e0] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of my recent front-end projects:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="rounded-lg border bg-[#e6d5bc] text-gray-900 shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Projeto 1
                  </h3>
                </div>
                <div className="p-6">
                  <img
                    width="300"
                    height="200"
                    src="/placeholder.svg"
                    style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
                    alt="Project 1"
                    className="rounded-md"
                  />
                </div>
                <div className="flex justify-center items-center p-6">
                  <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[#d8bc94] text-white hover:bg-[#c9a67e] h-10 px-4 py-2">
                  <p className="text-[#3b2314]">View Project</p>
                  </button>
                </div>
              </div>
              <div className="rounded-lg border bg-[#e6d5bc] text-gray-900 shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Projeto 2
                  </h3>
                  
                </div>
                <div className="p-6">
                  <img
                    src="/placeholder.svg"
                    width="300"
                    height="200"
                    alt="Project 2"
                    className="rounded-md"
                    style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
                  />
                </div>
                <div className="flex justify-center items-center p-6">
                  <button className="items-center justify-center text-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[#d8bc94] text-white hover:bg-[#c9a67e] h-10 px-4 py-2">
                  <p className="text-[#3b2314]">View Project</p>
                  </button>
                </div>
              </div>
              <div className="rounded-lg border bg-[#e6d5bc] text-gray-900 shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Projeto 3
                  </h3>
                </div>
                <div className="p-6">
                  <img
                    width="300"
                    height="200"
                    alt="Project 3"
                    className="rounded-md"
                    src="/placeholder.svg"
                    style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
                  />
                </div>
                <div className="flex justify-center items-center p-6">
                  <button className="items-center justify-center text-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[#d8bc94] text-white hover:bg-[#c9a67e] h-10 px-4 py-2">
                    <p className="text-[#3b2314]">View Project</p>
                  </button>
                </div>
              </div>

              <div className="rounded-lg border bg-[#e6d5bc] text-gray-900 shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Projeto 3
                  </h3>
                </div>
                <div className="p-6">
                  <img
                    width="300"
                    height="200"
                    alt="Project 3"
                    className="rounded-md"
                    src="/placeholder.svg"
                    style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
                  />
                </div>
                <div className="flex justify-center items-center p-6">
                  <button className="items-center justify-center text-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[#d8bc94] text-white hover:bg-[#c9a67e] h-10 px-4 py-2">
                    <p className="text-[#3b2314]">View Project</p>
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
