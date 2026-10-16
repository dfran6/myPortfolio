"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Skill {
  name: string
  color: string
  url: string
}

const skills: Skill[] = [
  { name: "Blender", color: "#F5792A", url: "https://www.blender.org/" },
  { name: "Three.js", color: "#000000", url: "https://threejs.org/" },
  { name: "React", color: "#61DAFB", url: "https://react.dev/" },
  { name: "FastAPI", color: "#009688", url: "https://fastapi.tiangolo.com/" },
  { name: "TinkerCAD", color: "#FF6B6B", url: "https://www.tinkercad.com/" },
  { name: "Python", color: "#3776AB", url: "https://www.python.org/" },
  { name: "Autodesk Sketchbook", color: "#0096D6", url: "https://www.sketchbook.com/" },
  { name: "Draw.io", color: "#F08031", url: "https://www.drawio.com/" },
  { name: "Inkscape", color: "#A020F0", url: "https://inkscape.org/" },
]

export default function Skills() {


  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Tools & Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noreferrer"
              className="skill-item border border-gray-300 p-6 text-center transition cursor-pointer hover:text-white block"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = skill.color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = ""
              }}
              aria-label={`Visit official website for ${skill.name}`}
            >
              <p className="font-medium">{skill.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
