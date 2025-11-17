function Testimonials() {
  const items = [
    {
      name: 'Ava Johnson',
      text: 'Our agent was incredible from the first showing to closing day. We found the perfect home and felt supported every step of the way.',
      role: 'Home Buyer',
      avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop'
    },
    {
      name: 'Marcus Lee',
      text: 'Professional, responsive, and truly knowledgeable about the local market. We sold above asking in under a week.',
      role: 'Home Seller',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
    },
    {
      name: 'Sofia Martinez',
      text: 'They listened to our needs and found a place that checked every box. The experience was smooth and stress-free.',
      role: 'First-time Buyer',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
    }
  ]

  return (
    <section id="testimonials" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What our clients say</h2>
          <p className="mt-3 text-slate-600">Real stories from buyers and sellers we were proud to help.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, idx) => (
            <figure key={idx} className="group rounded-2xl border border-slate-200 p-6 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <figcaption className="font-semibold text-slate-900">{t.name}</figcaption>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
              <blockquote className="mt-4 text-slate-700 leading-relaxed">“{t.text}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
