function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-indigo-100"/>
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-200/50 rounded-full blur-3xl"/>
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-200/50 rounded-full blur-3xl"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Find your next home with confidence
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              BlueStone Realty helps you discover beautiful homes, expert agents, and neighborhoods that match your lifestyle.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#listings" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium shadow-sm ring-1 ring-indigo-500/20 transition-all hover:bg-indigo-700 hover:shadow-md hover:-translate-y-0.5">
                Browse Listings
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 font-medium shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5">
                Talk to an Agent
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                Trusted local experts
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                Transparent pricing
              </div>
            </div>
          </div>

          <div className="relative">
            <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxob3VzZXxlbnwwfDB8fHwxNzYzNDEzMDQxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Modern house" className="rounded-xl shadow-xl ring-1 ring-black/5" />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 ring-1 ring-slate-200 w-56">
              <p className="text-sm text-slate-600">Featured Neighborhood</p>
              <p className="font-semibold text-slate-900">Willow Creek</p>
              <p className="text-sm text-slate-500">27 active listings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
