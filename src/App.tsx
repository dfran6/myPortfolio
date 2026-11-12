import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useLoadingScreen } from "./hooks/useLoadingScreen"
import LoadingScreen from "./components/LoadingScreen"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Exhibits from "./components/Exhibits"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const isLoading = useLoadingScreen()

  return (
    <div className="bg-black text-white">
      <LoadingScreen isLoading={isLoading} />
      <Hero />
      <About />
      <Skills />
      <Exhibits />
      <Contact />
      <Footer />
    </div>
  )
}
