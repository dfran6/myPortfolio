"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import BlurText from "./BluredText"
import ColorBends from "./ColorBends"

export default function Hero() {
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    // Image load animation
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
      )
    }
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <style>{`
        @keyframes button-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.5);
          }
        }

        @keyframes subtle-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .portfolio-btn {
          position: relative;
          background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
          transition: all 0.3s ease;
        }

        .portfolio-btn:hover {
          animation: button-glow 2s ease-in-out infinite;
          transform: translateY(-2px);
        }

        .portfolio-btn-content {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <section
        id="home"
        className="pt-16 pb-10 px-4 sm:px-6 lg:px-8 bg-white min-h-screen flex items-center justify-center"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 md:items-center gap-4">
            {/* IMAGE - More responsive with mobile blur effect */}
            <div className="w-full flex justify-center relative md:order-1">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <div className="aspect-square rounded-xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
                  <img
                    ref={imageRef}
                    src="d.jpg"
                    alt="picture of Franci Chukwudi Awulor"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Blur overlay at bottom on mobile */}
                <div className="md:hidden absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/50 to-transparent rounded-b-xl"></div>
              </div>
              {/* Mobile name under image */}
              <div className="md:hidden absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full px-4 text-center">
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                  Awulor Chukwudi Francis
                </h1>
              </div>
            </div>

            {/* TEXT */}
            <div className="hero-item text-center md:text-left md:order-2 pt-20 md:pt-0">
              <BlurText
                text="Awulor Chukwudi Francis"
                className="hidden md:block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold rounded-2xl p-4 pl-0"
              />

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-2">
                3D Artist • Software Engineer • Digital Designer
              </p>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 mb-6 md:mb-8">
                Crafting interactive 3D experiences and modern web interfaces.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 text-center sm:text-left justify-center md:justify-start">
                <button
                  onClick={() => scrollTo("exhibits")}
                  className="px-5 sm:px-8 py-2 sm:py-3 bg-black text-white text-xs sm:text-sm font-medium hover:bg-gray-800 transition hover:shadow-lg"
                >
                  View My Work
                </button>

                <button className="portfolio-btn px-5 sm:px-8 py-2 sm:py-3 text-white text-xs sm:text-sm font-medium font-semibold hover:shadow-lg transition">
                  <a href="https://dfport.netlify.app" className="portfolio-btn-content">
                    View 3D Portfolio
                  </a>
                </button>

                <button className="px-5 sm:px-8 py-2 sm:py-3 border border-black text-black text-xs sm:text-sm font-medium hover:bg-gray-100 transition">
                  <a href="/Francis.ChukwudiCv.pdf" download>
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
