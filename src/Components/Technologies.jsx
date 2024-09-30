import React from 'react';


const Technologies = () => {
  return (
    <section class="w-full py-12 md:py-16 lg:py-24 bg-[#3b2314] text-white">
  <div class="container px-4 md:px-6">
    <div class="flex flex-col items-center justify-center space-y-4 text-center">
      <div class="space-y-2">
        <h2 class="text-3xl pb-4 font-bold tracking-tighter sm:text-5xl">Technologies</h2>
        <p class="max-w-[700px] text-[#e0e0e0] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          I am proficient in a wide range of front-end technologies, including:
        </p>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center items-center">

        <div class="flex flex-col items-center gap-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-12 h-12"
          >
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
            <line x1="12" x2="12" y1="22" y2="15.5"></line>
            <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
            <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
            <line x1="12" x2="12" y1="2" y2="8.5"></line>
          </svg>
          <span>React</span>
        </div>


        <div class="flex flex-col items-center gap-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-12 h-12"
          >
            <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
            <path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
            <path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
          </svg>
          <span>Tailwind</span>
        </div>


        <div class="flex flex-col items-center gap-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-12 h-12"
          >
            <polyline points="4 7 4 4 20 4 20 7"></polyline>
            <line x1="9" x2="15" y1="20" y2="20"></line>
            <line x1="12" x2="12" y1="4" y2="20"></line>
          </svg>
          <span>TypeScript</span>
        </div>


        <div class="flex flex-col items-center gap-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-12 h-12"
          >
            <path d="M12 2l9.5 5.5v11L12 22l-9.5-5.5v-11L12 2z"></path>
            <path d="M2.5 7.5L12 12l9.5-5.5"></path>
            <path d="M12 22V12"></path>
          </svg>
          <span>JavaScript</span>
        </div>


        <div class="flex flex-col items-center gap-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-12 h-12"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path
              d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"
              fill=""
            ></path>
            <path
              d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
              fill=""
            ></path>
            <path
              d="M12 12a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"
              fill="#"
            ></path>
            <path
              d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"
              fill=""
            ></path>
          </svg>
          <span>Figma</span>
        </div>
      </div>
    </div>
  </div>
</section>



  )
}

export default Technologies