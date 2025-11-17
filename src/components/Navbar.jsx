import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block w-8 h-8 rounded bg-indigo-600"></span>
            <span className="text-xl font-semibold text-slate-900">BlueStone Realty</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#listings" className="hover:text-indigo-600 transition-colors">Listings</a>
            <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium shadow-sm ring-1 ring-indigo-500/20 transition-all hover:bg-indigo-700 hover:shadow-md hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 space-y-2">
            <a href="#listings" className="block px-3 py-2 rounded hover:bg-slate-100">Listings</a>
            <a href="#testimonials" className="block px-3 py-2 rounded hover:bg-slate-100">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 rounded hover:bg-slate-100">Contact</a>
            <a href="#contact" className="block px-3 py-2 rounded bg-indigo-600 text-white text-center hover:bg-indigo-700 transition-colors">Get in touch</a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
