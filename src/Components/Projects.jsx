import React from "react";

const Projects = () => {
  return (
    <div>
<section className="w-full  py-8 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className=" flex justify-center w-full md:w-1/2">
            <img src="src\assets\MockupRecipes.jpg" className="rounded-lg w-[380px] h-[380px]" alt="" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold tracking-tighter">
                Recipes by Gab
              </h2>
              <p className="mt-4 pr-32 text-muted-foreground text-justify">
                This is a brief description of the project. It explains the main
                features and goals of the project, giving visitors a quick
                overview of what it's all about.
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">
                  Technologies Used:
                </h3>
                <div className="flex flex-wrap gap-2">
                <div className="border border-[#5C4033] bg-[#EAE0D5] text-[#5C4033] px-4 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:bg-[#D1B79E] ">HTML5</div>
                  <div className="border border-[#5C4033] bg-[#EAE0D5] text-[#5C4033] px-4 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:bg-[#D1B79E] ">CSS3</div>
                  <div className="border border-[#5C4033] bg-[#EAE0D5] text-[#5C4033] px-4 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:bg-[#D1B79E] ">Javascript</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full  py-8 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className=" flex justify-center w-full md:w-1/2">
            <img src="src\assets\MockupDigitalClock.jpg" className="rounded-lg w-[380px] h-[380px]" alt="" />
            </div>
            <div className=" w-full md:w-1/2 flex flex-col justify-center">
              <h2 className=" text-2xl font-bold tracking-tighter">
                Digital Clock
              </h2>
              <p className="mt-4 pr-32 text-muted-foreground text-justify">
                This is a brief description of the project. It explains the main
                features and goals of the project, giving visitors a quick
                overview of what it's all about.
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">
                  Technologies Used:
                </h3>
                <div className="flex flex-wrap gap-2">
                <div className="border border-[#5C4033] bg-[#EAE0D5] text-[#5C4033] px-4 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:bg-[#D1B79E] ">HTML5</div>
                  <div className="border border-[#5C4033] bg-[#EAE0D5] text-[#5C4033] px-4 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:bg-[#D1B79E] ">CSS3</div>
                  <div className="border border-[#5C4033] bg-[#EAE0D5] text-[#5C4033] px-4 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:bg-[#D1B79E] ">Javascript</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full  py-8 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="w-full md:w-1/2">
              
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold tracking-tighter">
                My Retro Game List
              </h2>
              <p className="mt-4 text-muted-foreground text-justify">
                This is a brief description of the project. It explains the main
                features and goals of the project, giving visitors a quick
                overview of what it's all about.
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">
                  Technologies Used:
                </h3>
                <div className="flex flex-wrap gap-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
