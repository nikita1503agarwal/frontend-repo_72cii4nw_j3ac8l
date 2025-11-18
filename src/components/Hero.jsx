export default function Hero({ post }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-600 to-rose-600 text-white">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3), transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.15), transparent 40%)'}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{post?.title || 'Современная платформа новостей и инициатив'}</h1>
            <p className="text-white/90 text-lg mb-6">{post?.summary || 'Актуальная повестка, аналитика, события и медиа в едином удобном пространстве.'}</p>
            <div className="flex flex-wrap gap-3">
              <a href="#news" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white text-red-600 font-semibold shadow hover:shadow-md transition">К новостям</a>
              <a href="#events" className="inline-flex items-center px-5 py-2.5 rounded-lg border border-white/30 text-white hover:bg-white/10 transition">Ближайшие события</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <img src={post?.cover_image || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop'} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
