import React from 'react';
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";






const Technologies = () => {
  return (
    <div className="">
      <h1 className="text-center py-8 text-4xl">Technologies</h1>
      <div className="py-8 flex flex-wrap items-center justify-center gap-4">
        <FaReact className='text-6xl text-blue-400' />
        <SiTypescript className='text-6xl text-blue-400' />
        <RiTailwindCssFill className='text-6xl text-cyan-500'/>
        <img src="src\assets\vite-svgrepo-com.svg" alt="" className='h-[60px] w-[60px]' />
        <FaNodeJs className='text-green-700 text-6xl' />
      </div>
    </div>
  )
}

export default Technologies