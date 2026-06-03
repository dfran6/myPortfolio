"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  const [shouldRender, setShouldRender] = useState(isLoading)

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true)
    } else {
      // Delay hiding to show animation completion
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (!shouldRender) return null

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-300 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <style>{`
        @keyframes bounce-image {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.05);
          }
        }

        @keyframes float-in {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .bounce-image {
          animation: bounce-image 1s ease-in-out infinite;
          width: 90px;
          object-fit: cover;
          filter: drop-shadow(0 0 30px rgba(256, 256, 256, 1));
        }

        .bounce-container {
          animation: float-in 0.6s ease-out;
        }
      `}</style>

      <div className="bounce-container">
        <img
          src="/dfNew.png"
          alt="Loading"
          className="bounce-image rounded-lg"
        />
      </div>
    </div>
  )
}
