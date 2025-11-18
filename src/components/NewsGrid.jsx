export default function NewsGrid({ posts }) {
  return (
    <section id="news" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Новости</h2>
          <a href="#" className="text-red-600 hover:text-red-700 text-sm font-semibold">Все новости</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p._id || p.id} className="group rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition bg-white">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={p.cover_image || 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1400&auto=format&fit=crop'} alt="" className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {(p.tags || []).slice(0,3).map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-100">{t}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">{p.title}</h3>
                <p className="text-slate-600 text-sm line-clamp-3">{p.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
