export default function MediaGrid({ items }) {
  return (
    <section id="media" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Медиа</h2>
          <a href="#" className="text-red-600 hover:text-red-700 text-sm font-semibold">Галерея</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((m) => (
            <a key={m._id || m.id} href={m.type === 'video' ? m.url : m.url} target="_blank" rel="noreferrer" className="group rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition bg-white">
              <div className="aspect-square overflow-hidden">
                <img src={m.thumbnail || m.url} alt="" className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-4">
                <div className="text-slate-900 font-medium line-clamp-1">{m.title}</div>
                <div className="text-slate-500 text-xs mt-1 uppercase">{m.type}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
