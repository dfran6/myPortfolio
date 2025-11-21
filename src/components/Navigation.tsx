"use client"

import { useState, useEffect } from "react"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all shadow-sm ${
        scrolled ? "bg-white border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold flex items-center gap-2">
            
          <img src="/icon.png" alt="Logo" />
            DFran6</div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollTo("home")} className="text-sm hover:text-gray-600">
              Home
            </button>
            <button onClick={() => scrollTo("about")} className="text-sm hover:text-gray-600">
              About
            </button>
            <button onClick={() => scrollTo("skills")} className="text-sm hover:text-gray-600">
              Skills
            </button>
            <button onClick={() => scrollTo("exhibits")} className="text-sm hover:text-gray-600">
              Exhibits
            </button>
            <button onClick={() => scrollTo("contact")} className="text-sm hover:text-gray-600">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
