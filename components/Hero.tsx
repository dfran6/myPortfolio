"use client"

import { useEffect, useRef } from "react"

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))

export default function Hero() {
  const track = useRef<HTMLElement>(null)
  const stage = useRef<HTMLDivElement>(null)
  const portal = useRef<HTMLDivElement>(null)
  const scene = useRef<HTMLDivElement>(null)
  const flood = useRef<HTMLDivElement>(null)
  const l2 = useRef<HTMLDivElement>(null)
  const fig = useRef<HTMLElement>(null)
  const hint = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = track.current, s = stage.current, po = portal.current, sc = scene.current
    const fl = flood.current, l = l2.current, f = fig.current, h = hint.current
    if (!t || !s || !po || !sc || !fl || !l || !f || !h) return
    let zapped = false
    let tick = false

    const update = () => {
      tick = false
      const total = t.offsetHeight - window.innerHeight
      const p = clamp(-t.getBoundingClientRect().top / total)
      po.style.transform = `translate(-50%,-50%) scale(${1 + Math.pow(p, 2) * 12})`
      fl.style.opacity = String(clamp((p - 0.6) / 0.3))
      sc.style.filter = `grayscale(${1 - clamp((p - 0.5) / 0.4)}) contrast(1.25)`
      l.style.opacity = String(clamp((p - 0.84) / 0.12))
      l.style.pointerEvents = p > 0.9 ? "auto" : "none"
      h.style.opacity = String(clamp(1 - p * 5))
      f.style.clipPath = `inset(${(1 - clamp((p - 0.9) / 0.1)) * 100}% 0 0 0)`
      const past = p > 0.62
      if (past !== zapped) {
        zapped = past
        s.classList.remove("dfx-zap")
        void s.offsetWidth
        s.classList.add("dfx-zap")
      }
    }
    const onScroll = () => {
      if (!tick) {
        tick = true
        requestAnimationFrame(update)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", update)
    update()
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", update)
    }
  }, [])

  const toExhibits = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" ref={track} className="dfx-track">
      <div ref={stage} className="dfx-stage">
        <div ref={portal} className="dfx-portal">
          <div ref={scene} className="dfx-scene" />
        </div>
        <div ref={flood} className="dfx-flood" />
        <div className="dfx-grid" />

        <div className="dfx-poster">
          <div className="dfx-meta"><span>DFRAN6 ⚡ 2026</span><span>Lagos, NG</span></div>
          <div>
            <h1 className="dfx-h1">I build<br />the part<br />you don’t<br />see.</h1>
            <p className="dfx-sub">Awulor Chukwudi Francis — Backend engineer · FastAPI · PostgreSQL · Redis</p>
          </div>
          <div ref={hint} className="dfx-meta"><span>Something is leaking</span><span>Scroll ↓</span></div>
        </div>

        <div ref={l2} className="dfx-l2">
          <h2 className="dfx-h2">…and the part<br />you can <em>walk<br />through.</em></h2>
          <p className="dfx-note">Blender · Three.js · React Three Fiber</p>
          <div className="dfx-actions">
            <a href="#about" onClick={toExhibits} className="dfx-cta">Enter the exhibits ↓</a>
            <a href="https://dfport4.netlify.app" className="dfx-link">3D portfolio ↗</a>
            <a href="/Francis.ChukwudiCv.pdf" download className="dfx-link">Download CV</a>
          </div>
          <figure ref={fig} className="dfx-fig">
            <img src="/d.jpg" alt="Awulor Chukwudi Francis" />
            <figcaption>Francis — dfran6</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
