import heroImg from '../assets/hero2.svg'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

import React from 'react'

const Hero = () => {
  return (
    <div className="bg-slate-200 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider text-slate-900">
            I'm Beniamin
          </h1>
          <p className="mt-4 text-3xl text-slate-700  capitalize tracking-wider">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-600 hover:text-violet-600 duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-600 hover:text-violet-600 duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-600 hover:text-violet-600 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="hero_img" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  )
}

export default Hero
