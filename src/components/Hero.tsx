"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import BlurText from "./BluredText"
import ColorBends from "./ColorBends"

export default function Hero() {

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (

    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-sm md:max-w-full rounded overflow-hidden">
              <img
                src="d.jpg"
                alt="picture of Franci Chukwudi Awulor"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="hero-item text-center md:text-left">
            <BlurText
              text="Awulor Chukwudi Francis"
              className="text-4xl sm:text-5xl md:text-6xl font-bold rounded-2xl p-4 pl-0"
            />

            <p className="text-xl text-gray-600 mb-2">
              3D Artist • Web Developer • Digital Designer
            </p>

            <p className="text-gray-500 mb-8">
              Crafting interactive 3D experiences and modern web interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 text-center sm:text-left">
              <button
                onClick={() => scrollTo("exhibits")}
                className="px-8 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
              >
                View My Work
              </button>

              <button className="px-8 py-3 border border-black text-black text-sm font-medium hover:bg-gray-100 transition">
                <a href="https://dfport.netlify.app">View 3D Portfolio</a>
              </button>

              <button className="px-8 py-3 border border-black text-black text-sm font-medium hover:bg-gray-100 transition">
                <a href="/Awulor_Chukwudi_FrancisCV.pdf" download>
                  Download CV
                </a>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}
