"use client"

import { useState, useEffect } from "react"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
    setMenuOpen(false)
  }

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .side-menu {
          animation: ${menuOpen ? "slideIn" : "slideOut"} 0.3s ease-in-out forwards;
        }

        .hamburger-line {
          transition: all 0.3s ease;
        }

        .hamburger.open .line-1 {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger.open .line-2 {
          opacity: 0;
        }

        .hamburger.open .line-3 {
          transform: rotate(-45deg) translate(5px, -5px);
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all shadow-sm ${
          scrolled ? "bg-white border-b border-gray-200" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold flex items-center gap-2">
              <img src="/dfNew.png" width={45} alt="Logo" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollTo("home")}
                className="text-sm hover:text-gray-600 transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="text-sm hover:text-gray-600 transition"
              >
                About
              </button>
              <button
                onClick={() => scrollTo("skills")}
                className="text-sm hover:text-gray-600 transition"
              >
                Skills
              </button>
              <button
                onClick={() => scrollTo("exhibits")}
                className="text-sm hover:text-gray-600 transition"
              >
                Exhibits
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="text-sm hover:text-gray-600 transition"
              >
                Contact
              </button>
            </div>

            {/* Hamburger Menu Button - Mobile Only */}
            <button
              className={`md:hidden flex flex-col gap-1.5 cursor-pointer hamburger ${
                menuOpen ? "open" : ""
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="line-1 hamburger-line w-6 h-0.5 bg-black block"></span>
              <span className="line-2 hamburger-line w-6 h-0.5 bg-black block"></span>
              <span className="line-3 hamburger-line w-6 h-0.5 bg-black block"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Side Menu */}
          <div className="side-menu absolute top-16 left-0 w-64 h-screen bg-white shadow-lg overflow-y-auto">
            <div className="flex flex-col p-4 space-y-2">
              <button
                onClick={() => scrollTo("home")}
                className="w-full text-left px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-lg transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="w-full text-left px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-lg transition"
              >
                About
              </button>
              <button
                onClick={() => scrollTo("skills")}
                className="w-full text-left px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-lg transition"
              >
                Skills
              </button>
              <button
                onClick={() => scrollTo("exhibits")}
                className="w-full text-left px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-lg transition"
              >
                Exhibits
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="w-full text-left px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-lg transition"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
