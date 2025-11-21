import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Exhibits from "./components/Exhibits"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Exhibits />
      <Contact />
      <Footer />
    </div>
  )
}
