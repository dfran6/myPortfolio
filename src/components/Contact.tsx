const field = "w-full bg-transparent border-b border-white/40 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff5a1f]"
const label = "block dfx-mono text-xs font-bold tracking-[.14em] uppercase text-gray-400 mb-1"

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white px-5 sm:px-8 py-24 border-t border-white/20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="dfx-mono text-xs tracking-[.14em] uppercase text-[#ff5a1f] font-bold mb-4">04 / Contact</p>
          <h2 className="dfx-display text-5xl sm:text-7xl mb-8">Get in <span className="text-[#ff5a1f]">touch.</span></h2>
          <p className="dfx-mono text-sm text-gray-300 mb-6">awulorfrancis@gmail.com</p>
          <div className="flex flex-wrap gap-6 dfx-mono text-xs font-bold uppercase tracking-[.14em]">
            <a href="https://www.linkedin.com/in/francis-chukwudi-awulor-b29424255" className="border-b border-white/60 hover:text-[#ff5a1f] hover:border-[#ff5a1f]">LinkedIn</a>
            <a href="https://x.com/FrancisAwulor" className="border-b border-white/60 hover:text-[#ff5a1f] hover:border-[#ff5a1f]">X (Twitter)</a>
            <a href="https://www.tiktok.com/@_dfran6" className="border-b border-white/60 hover:text-[#ff5a1f] hover:border-[#ff5a1f]">TikTok</a>
          </div>
        </div>
        <form className="space-y-8" action="https://formspree.io/f/mwpyznvv" method="POST">
          <div><label htmlFor="name" className={label}>Name</label><input id="name" name="name" type="text" className={field} placeholder="Your name" /></div>
          <div><label htmlFor="email" className={label}>Email</label><input id="email" name="email" type="email" className={field} placeholder="your@email.com" /></div>
          <div><label htmlFor="message" className={label}>Message</label><textarea id="message" name="message" rows={4} className={field} placeholder="Your message..." /></div>
          <button type="submit" className="dfx-mono text-xs font-bold uppercase tracking-[.14em] bg-[#ff5a1f] text-black px-8 py-3 hover:bg-white transition">Send message</button>
        </form>
      </div>
    </section>
  )
}
