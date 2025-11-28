"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import CircularGallery from "./CircularGallery"

gsap.registerPlugin(ScrollTrigger)

interface Project {
  title: string
  desc: string
  demo: string
  code: string
  image: string
  index: number
}

interface Image {
  image: string
  text: string
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

const images: Image[] = [
  { image: "/d.jpg", text: "dFran6" },
  { image: "/DF4.png", text: "Library" },
  { image: "/h1.png", text: "Living room" },
  { image: "/h2.png", text: "Bright Buger" },
  { image: "/h3.png", text: "Courage's House" },
  { image: "/h4.png", text: "Fountain block(FUO)" },
  { image: "/h5.png", text: "Living room 2" },
  { image: "/h6.png", text: "Regular show" },
  { image: "/h7.png", text: "Back render" },
  { image: "/h8.png", text: "Federal university Otuoke" },
];

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
                <h3 className="text-xl font-bold mb-3 rounded-2xl py-2 ">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex gap-4 items-center ">
                  <a href={project.demo} className="text-sm font-medium bg-gray-600 hover:bg-black transition-all  text-white rounded-sm p-2 ">
                    View Demo
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
        <h2 className="text-3xl font-bold m-20 mb-12 text-center">Photo Gallery</h2>
        <div className="relative h-[60vh] md:h-[65vh] lg:h-[75vh]"
        >
          <CircularGallery items={images} textColor="#000" />
        </div>
      </div>
    </section>
  )
}
