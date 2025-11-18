export default function Events({ events }) {
  return (
    <section id="events" className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Ближайшие события</h2>
          <a href="#" className="text-red-600 hover:text-red-700 text-sm font-semibold">Календарь</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e._id || e.id} className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold">
                  {new Date(e.date).toLocaleDateString('ru-RU', { day: '2-digit' })}
                </div>
                <div>
                  <div className="text-slate-900 font-semibold">{e.title}</div>
                  <div className="text-slate-600 text-sm">{new Date(e.date).toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })}</div>
                </div>
              </div>
              <p className="text-slate-700 text-sm mb-3">{e.description}</p>
              <div className="text-slate-500 text-sm">{e.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
