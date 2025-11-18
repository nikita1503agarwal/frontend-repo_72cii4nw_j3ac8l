import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-bold shadow">К</div>
            <span className="font-semibold text-slate-800 text-lg">Обновлённая модель</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#news" className="hover:text-red-600">Новости</a>
            <a href="#events" className="hover:text-red-600">События</a>
            <a href="#media" className="hover:text-red-600">Медиа</a>
            <a href="/test" className="hover:text-red-600">Тест</a>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-slate-100" onClick={() => setOpen(!open)}>
            <span className="sr-only">Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden py-3 border-t border-slate-200">
            <div className="flex flex-col gap-3 text-slate-700">
              <a href="#news" className="px-2 py-2 rounded hover:bg-slate-100" onClick={() => setOpen(false)}>Новости</a>
              <a href="#events" className="px-2 py-2 rounded hover:bg-slate-100" onClick={() => setOpen(false)}>События</a>
              <a href="#media" className="px-2 py-2 rounded hover:bg-slate-100" onClick={() => setOpen(false)}>Медиа</a>
              <a href="/test" className="px-2 py-2 rounded hover:bg-slate-100" onClick={() => setOpen(false)}>Тест</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
