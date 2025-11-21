"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {



  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="border border-gray-300 p-12">
          <h2 className="text-3xl font-bold mb-6">About the Artist</h2>
          <div className="border-l-2 border-gray-300 pl-6">
            <p className="text-gray-700 leading-relaxed">
              Awulor Chukwudi Francis is a 3D Artist, Web Developer, and Digital Design Instructor based in Nigeria. 
              He specializes in creating immersive 3D experiences using Blender and Three.js, while also building functional and modern web interfaces. 
              He holds a Bachelor’s degree in Computer Science and Informatics (2025), a background that strengthens his approach to problem-solving and structured development.
               With a passion for teaching and creativity, he has guided students through 3D modeling, 3D printing, and digital design.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
