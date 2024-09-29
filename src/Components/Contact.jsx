import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="container mx-auto py=8">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl text-center m-7">Get in Touch</h1>
          <div className="space-y-6">
            <a href="mailto:gabrielvalencasa98@gmail.com" className="flex items-center justify-center space-x-3 hover:underline transition-colors">
              <CiMail className="h-5 w-5" />
              <span>gabrielvalencasa98@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/andgabx/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 hover:underline transition-colors">
            <CiLinkedin className="h-5 w-5" />
              <span>LinkedIn Profile</span>
            </a>
            <a href="https://wa.me/5581999758852" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3  hover:underline transition-colors">
            <FaWhatsapp className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
            <a href="https://github.com/andgabx" target='_blank' className="flex items-center justify-center space-x-3 hover:underline transition-colors">
              <FaGithub className="h-5 w-5" />
              <span>Github Profile</span>
            </a>
            {/* <div className="text-center w-full">
              <a href="https://github.com/andgabx" download="" className="hover:underline transition-colors">
                Download Resume
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact