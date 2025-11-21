"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Skill {
  name: string
  color: string
}

const skills: Skill[] = [
  { name: "Blender", color: "#F5792A" },
  { name: "Three.js", color: "#000000" },
  { name: "React", color: "#61DAFB" },
  { name: "FastAPI", color: "#009688" },
  { name: "TinkerCAD", color: "#FF6B6B" },
  { name: "Python", color: "#3776AB" },
  { name: "Autodesk Sketchbook", color: "#0096D6" },
  { name: "Draw.io", color: "#F08031" },
  { name: "Inkscape", color: "#A020F0" },
]

export default function Skills() {


  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Tools & Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-item border border-gray-300 p-6 text-center transition cursor-pointer hover:text-white"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = skill.color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = ""
              }}
              role="button"
              tabIndex={0}
              aria-label={`View details about ${skill.name}`}
            >
              <p className="font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
