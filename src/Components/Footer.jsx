import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className="bg-[#3b2314] py-8 footer justify-around text-neutral-content items-center">
  <aside className="grid-flow-col items-center">
    <p className='text-white'>{new Date().getFullYear()} - Thanks for checking my Portfolio!</p>
  </aside>
</footer>
  )
}

export default Footer