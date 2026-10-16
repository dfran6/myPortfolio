"use client"

import { useRef, useEffect, useState } from "react"
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
  category: "website" | "virtual"
}

interface Image {
  image: string
  text: string
}

const projects: Project[] = [
  {
    title: "Virtual Campus Tour",
    desc: "A fully interactive 3D virtual tour of a university campus, built using Blender for environment modeling and Three.js for immersive web rendering.",
    demo: "https://fuowestcampv8.netlify.app",
    code: "https://github.com/dfran6/3dCampusVirtualTour",
    image: "/fullBuild13.png",
    index: 1,
    category: "virtual",
  },
  {
    title: "Find the Object 3D Game",
    desc: "A 3D object-finding game built with Three.js, where players explore a virtual environment to locate hidden objects, featuring interactive gameplay and immersive graphics.",
    demo: "https://dlostball2.netlify.app/",
    code: "/",
    image: "/lostBall1.png",
    index: 2,
    category: "virtual",
  },
  {
    title: "Maze Runner FPS Test",
    desc: "A first-person 3D maze experiment built using Three.js, exploring camera controls, collision detection, and interactive environments.",
    // demo: "https://dmaze01.netlify.app",
    demo: "https://dmaze.vercel.app",
    code: "https://github.com/dfran6/dmaze",
    image: "/DMAZE.png",
    index: 3,
    category: "virtual",
  },
  {
    title: "Tailoring Website",
    desc: "A clean, modern website for a tailoring business with a React frontend and a FastAPI backend handling API and email functions (under maintenance).",
    demo: "https://tailors-end.vercel.app/",
    code: "https://github.com/dfran6/tailorsEnd",
    image: "tailorPic.png",
    index: 4,
    category: "website",
  },
    {
    title: "Nacos Treasure Hunt game",
    desc: "A web-based 3D treasure hunt game built with Three.js where players explore a virtual environment to find hidden treasures while solving puzzles.",
    demo: "https://nacostreasurehunt2.netlify.app/",
    code: "https://github.com/dfran6/NacosGame",
    image: "thunt.png",
    index: 5,
    category: "virtual",
  },
{
    title: "Dfran6 3d Portfolio",
    desc: "A web-based 3D portfolio showcasing my work in computer graphics and web development, built with React and Three.js.",
    demo: "https://dfport4.netlify.app",
    code: "/",
    image: "dpf.png",
    index: 6,
    category: "virtual",
  },
  {
    title: "Courage’s House 1: Exterior",
    desc: "Inspired by Courage the Cowardly Dog — an interactive 3D exterior experience modeled in Blender and implemented with React Three Fiber and Three.js, featuring camera interactions, scroll-driven animations, environmental effects, and a custom UI.",
    demo: "https://courages-house.vercel.app/",
    code: "/",
    image: "/exteriorHouse.png",
    index: 7,
    category: "virtual",
  },
  {
    title: "Courage’s House 2: Interior",
    desc: "Continuation of the Courage’s House series focusing on interior modeling, atmosphere, and exploration in a real-time 3D web environment modeled in Blender and implemented with React Three Fiber and Three.js.",
    demo: "https://courages-house-int.vercel.app/",
    code: "/",
    image: "/interiorHouse.png",
    index: 8,
    category: "virtual",
  },
  {
    title: "Baylat Properties - Real Estate Management Platform",
    desc: "Developed a full-stack real estate web application for Baylat Properties to showcase property listings and simplify property management through a dedicated administrative dashboard. The platform features dynamic property listings with image galleries and embedded YouTube property videos, an admin dashboard with full CRUD for listings, Cloudinary integration for image storage and delivery, and MongoDB for data storage; it was built using Next.js, Node.js, MongoDB, Cloudinary, and YouTube embed integration, and I served as the Full-Stack Developer.",
    demo: "https://baylatproperties.ng/",
    code: "/",
    image: "/baylatP.png",
    index: 9,
    category: "website",
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
  const [filter, setFilter] = useState<"websites" | "virtual">("websites")

  const filteredProjects = projects.filter((p) =>
    filter === "websites" ? p.category === "website" : p.category === "virtual"
  )

  return (
    <section id="exhibits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Exhibits</h2>
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setFilter("websites")}
            className={`px-4 py-2 rounded ${filter === "websites" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-700"}`}
          >
            Websites
          </button>
          <button
            onClick={() => setFilter("virtual")}
            className={`px-4 py-2 rounded ${filter === "virtual" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-700"}`}
          >
            Virtual Experiences
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.title} className="exhibit-item border border-gray-300 overflow-hidden">
              <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-400">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 rounded-2xl py-2 ">{project.title}</h3>
                <ProjectDescription desc={project.desc} index={project.index} />
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
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh]">
          <CircularGallery items={images} textColor="#000" scrollSpeed={1.5} />
        </div>
      </div>
    </section>
  )
}

function ProjectDescription({ desc, index }: { desc: string; index: number }) {
  const TRUNCATE = 120
  const [expanded, setExpanded] = useState<boolean>(false)

  const isLong = desc.length > TRUNCATE
  const shown = !isLong || expanded ? desc : desc.slice(0, TRUNCATE) + "..."

  return (
    <div className="mb-4">
      <p className="text-gray-600 text-sm leading-relaxed inline">{shown}</p>
      {isLong && (
        <button
          onClick={() => setExpanded((s) => !s)}
          className="ml-1 text-sm text-indigo-600 hover:underline align-baseline"
          aria-expanded={expanded}
          aria-controls={`desc-${index}`}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  )
}
