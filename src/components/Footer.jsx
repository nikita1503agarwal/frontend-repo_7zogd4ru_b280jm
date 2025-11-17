function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-8 h-8 rounded bg-indigo-600"></span>
              <span className="text-lg font-semibold text-white">BlueStone Realty</span>
            </div>
            <p className="text-slate-400 text-sm">
              Helping people move confidently since 2009. Licensed and trusted throughout the region.
            </p>
          </div>

          <div className="text-sm">
            <p className="font-semibold text-white mb-2">Contact</p>
            <p>hello@bluestonehomes.com</p>
            <p>(555) 123-4567</p>
            <p>100 Market Street, Suite 400</p>
          </div>

          <div>
            <p className="font-semibold text-white mb-3">Ready to take the next step?</p>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium shadow-sm ring-1 ring-indigo-500/20 transition-all hover:bg-indigo-700 hover:shadow-md hover:-translate-y-0.5"
            >
              Book a consultation
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} BlueStone Realty. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
