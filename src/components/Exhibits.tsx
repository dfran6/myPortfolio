"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Project {
  title: string
  desc: string
  demo: string
  code: string
  image: string
  index: number
}

const projects: Project[] = [
  {
    title: "Virtual Campus Tour",
    desc: "A fully interactive 3D virtual tour of a university campus. Built using Blender for environment modeling and Three.js for immersive web rendering.",
    demo: "https://fuowestcampv8.netlify.app",
    code: "/",
    image: "/fullBuild13.png",
    index: 1,
  },
  {
    title: "Find the Object 3D Game",
    desc: "A web-based hidden object game built with Three.js. Players explore a 3D scene searching for items with reward-based gameplay.",
    demo: "https://dlostball2.netlify.app/",
    code: "/",
    image: "/lostBall1.png",
    index: 2,
  },
  {
    title: "Maze Runner FPS Test",
    desc: "A first-person 3D maze experiment built using Three.js, exploring camera controls, collision detection, and interactive environments.",
    demo: "https://dmaze01.netlify.app",
    code: "/",
    image: "/DMAZE.png",
    index: 3,
  },
  {
    title: "Tailoring Website",
    desc: "A clean, modern website for a tailoring business, built with React for the frontend and FastAPI for backend API handling and email functions. (under maintenance)",
    demo: "https://tailors-end.vercel.app/",
    code: "/",
    image: "tailorPic.png",
    index: 4,
  },
]

export default function Exhibits() {


  return (
    <section id="exhibits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Exhibits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="exhibit-item border border-gray-300 overflow-hidden">
              <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-400">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex gap-4">
                  <a href={project.demo} className="text-sm font-medium text-black hover:text-gray-600">
                    View Demo →
                  </a>
                  <a href={project.code} className="text-sm font-medium text-gray-400 hover:text-gray-600">
                    Code
                  </a>
                </div>
              </div>
              <div className="border-t border-gray-300 px-8 py-4 bg-gray-50 text-xs text-gray-500 text-center">
                Exhibit #{project.index}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
