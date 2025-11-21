"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {


  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="border border-gray-300 p-12">
          <form className="space-y-6"
            action="https://formspree.io/f/mwpyznvv"
            method="POST"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-2 tracking-wide">
                NAME
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-2 tracking-wide">
                EMAIL
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-2 tracking-wide">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                rows={5}
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 text-sm font-medium hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
            <p className="mb-4">awulorfrancis@gmail.com</p>
            <div className="flex gap-6 justify-center text-xs">
              <a href="https://www.linkedin.com/in/francis-chukwudi-awulor-b29424255" className="hover:text-black transition">
                LinkedIn
              </a>
              <a href="https://x.com/FrancisAwulor" className="hover:text-black transition">
                X (Twitter)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
