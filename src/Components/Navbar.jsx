import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
        <div className="navbar justify-between">
          <div>
          <a href='' className="hover:animate-pulse text-2xl bold">AG</a>
          </div>
          <div>
          <nav className="text-white grid-flow-col flex gap-4 md:place-self-center md:justify-self-end">
    <a href='https://www.linkedin.com/in/andgabx/' target='_blank' className='text-3xl hover:animate-bounce'>
    <CiLinkedin />
    </a>
    <a href='https://github.com/andgabx' target='_blank' className='text-3xl hover:animate-bounce'>
    <FaGithub />
    </a>
    <a href='' target='_blank' className='text-3xl hover:animate-bounce'>
    <FaWhatsapp />
    </a>
  </nav>
          </div>

    </div>
  )
}

export default Navbar