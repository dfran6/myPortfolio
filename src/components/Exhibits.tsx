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
  const list = projects.filter((p) => (filter === "websites" ? p.category === "website" : p.category === "virtual"))
  const tab = (k: "websites" | "virtual") =>
    `dfx-mono text-xs font-bold uppercase tracking-[.14em] px-4 py-2 border transition ${filter === k ? "bg-[#ff5a1f] border-[#ff5a1f] text-black" : "border-white/40 text-white hover:border-white"}`

  return (
    <section id="exhibits" className="bg-black text-white px-5 sm:px-8 py-16 min-h-[100svh] flex flex-col justify-center border-t border-white/20">
      <div className="w-full max-w-6xl mx-auto">
        <p className="dfx-mono text-xs tracking-[.14em] uppercase text-[#ff5a1f] font-bold mb-4">03 / Exhibits</p>
        <h2 className="dfx-display dfx-title mb-10">Exhibits</h2>
        <div className="flex gap-3 mb-10">
          <button onClick={() => setFilter("websites")} className={tab("websites")}>Websites</button>
          <button onClick={() => setFilter("virtual")} className={tab("virtual")}>Virtual Experiences</button>
        </div>
        <ul className="border-t border-white/20">
          {list.map((project, i) => (
            <li key={project.title} className="group grid grid-cols-1 md:grid-cols-[80px_1fr_320px] gap-6 md:gap-10 py-10 border-b border-white/20">
              <span className="dfx-mono text-[#ff5a1f] text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="dfx-display text-2xl md:text-4xl mb-6">{project.title}</h3>
                <ProjectDescription desc={project.desc} index={project.index} />
                <div className="flex flex-wrap gap-8 items-center mt-8 dfx-mono text-xs font-bold uppercase tracking-[.14em]">
                  <a href={project.demo} className="bg-[#ff5a1f] text-black px-4 py-2 hover:bg-white transition">View Demo</a>
                  {project.code !== "/" && <a href={project.code} className="border-b border-white/60 hover:border-[#ff5a1f] hover:text-[#ff5a1f]">Code</a>}
                </div>
              </div>
              <img src={project.image} alt={project.title} className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition duration-500" />
            </li>
          ))}
        </ul>

        <h2 className="dfx-display dfx-title mt-24 mb-10">Photo Gallery</h2>
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh]">
          <CircularGallery items={images} textColor="#fff" scrollSpeed={1.5} />
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
    <div id={`desc-${index}`}>
      <p className="dfx-mono text-gray-400 text-sm leading-relaxed inline">{shown}</p>
      {isLong && (
        <button onClick={() => setExpanded((s) => !s)} className="ml-2 dfx-mono text-xs text-[#ff5a1f] hover:underline" aria-expanded={expanded} aria-controls={`desc-${index}`}>
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  )
}
