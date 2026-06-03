"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {



  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="border border-gray-300 p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">About the Artist</h2>
          <div className="border-l-2 border-gray-300 pl-4 sm:pl-6">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
              Hi, I'm Chukwudi Francis.
              <br />
              <br />
              I'm a Software Engineer from Nigeria focused on backend development, API architecture, and building reliable digital products. I work primarily with Python and FastAPI, creating scalable systems that power modern web applications.
              <br />
              <br />
              I graduated with a First-Class degree in Computer Science and Informatics and have experience spanning software engineering, product development, usability testing, and digital design. My background in 3D technologies, including Blender and Three.js, gives me a unique perspective on creating engaging user experiences alongside robust backend systems.
              <br />
              <br />
              Currently, my interests are centered around backend engineering, artificial intelligence, software architecture, and building technology that solves meaningful problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
