interface Skill { name: string; url: string }
const groups: { label: string; items: Skill[] }[] = [
  { label: "Engine", items: [
    { name: "FastAPI", url: "https://fastapi.tiangolo.com/" },
    { name: "Python", url: "https://www.python.org/" },
    { name: "PostgreSQL", url: "https://www.postgresql.org/" },
    { name: "Redis", url: "https://redis.io/" },
    { name: "SQLAlchemy", url: "https://www.sqlalchemy.org/" },
    { name: "SQLModel", url: "https://sqlmodel.tiangolo.com/" },
  ] },
  { label: "Interface", items: [{ name: "React", url: "https://react.dev/" }] },
  { label: "Worlds", items: [
    { name: "Blender", url: "https://www.blender.org/" },
    { name: "Three.js", url: "https://threejs.org/" },
    { name: "TinkerCAD", url: "https://www.tinkercad.com/" },
  ] },
  { label: "Design", items: [
    { name: "Autodesk Sketchbook", url: "https://www.sketchbook.com/" },
    { name: "Draw.io", url: "https://www.drawio.com/" },
    { name: "Inkscape", url: "https://inkscape.org/" },
  ] },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-black text-white px-5 sm:px-8 py-24 border-t border-white/20">
      <div className="max-w-6xl mx-auto">
        <p className="dfx-mono text-xs tracking-[.14em] uppercase text-[#ff5a1f] font-bold mb-4">02 / Tools</p>
        <h2 className="dfx-display text-5xl sm:text-7xl md:text-8xl mb-12">Tools &amp; Skills</h2>
        <div className="border-t border-white/20">
          {groups.map((g) => (
            <div key={g.label} className="grid md:grid-cols-[180px_1fr] gap-4 py-6 border-b border-white/20">
              <p className="dfx-mono text-xs tracking-[.14em] uppercase text-gray-500 font-bold pt-2">{g.label}</p>
              <div className="flex flex-wrap gap-3">
                {g.items.map((s) => (
                  <a key={s.name} href={s.url} target="_blank" rel="noreferrer"
                    className="dfx-mono text-sm font-bold uppercase tracking-wider border border-white/40 px-4 py-2 hover:bg-[#ff5a1f] hover:text-black hover:border-[#ff5a1f] transition">
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
