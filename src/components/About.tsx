export default function About() {
  return (
    <section id="about" className="bg-black text-white px-5 sm:px-8 py-16 min-h-[100svh] flex flex-col justify-center border-t border-white/20">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10">
        <p className="dfx-mono text-xs tracking-[.14em] uppercase text-[#ff5a1f] font-bold">01 / About</p>
        <div>
          <h2 className="dfx-display dfx-title mb-12">
            Engineer first.<br />Then <span className="text-[#ff5a1f]">worldbuilder.</span>
          </h2>
          <div className="dfx-mono text-sm sm:text-base leading-relaxed text-gray-300 space-y-6 max-w-2xl">
            <p>I'm a Software Engineer from Nigeria focused on backend development, API architecture, and building reliable digital products. I work primarily with Python and FastAPI, creating scalable systems that power modern web applications.</p>
            <p>I graduated with a First-Class degree in Computer Science and Informatics and have experience spanning software engineering, product development, usability testing, and digital design. My background in 3D technologies, including Blender and Three.js, gives me a unique perspective on creating engaging user experiences alongside robust backend systems.</p>
            <p>Currently, my interests are centered around backend engineering, artificial intelligence, software architecture, and building technology that solves meaningful problems.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
