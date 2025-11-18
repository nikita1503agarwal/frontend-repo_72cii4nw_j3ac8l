import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NewsGrid from './components/NewsGrid'
import Events from './components/Events'
import MediaGrid from './components/MediaGrid'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [featured, setFeatured] = useState(null)
  const [posts, setPosts] = useState([])
  const [events, setEvents] = useState([])
  const [media, setMedia] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        // try to fetch content; if empty, seed demo content
        const [featuredRes, postsRes, eventsRes, mediaRes] = await Promise.all([
          fetch(`${API_BASE}/api/posts?featured=true&limit=1`),
          fetch(`${API_BASE}/api/posts?limit=6`),
          fetch(`${API_BASE}/api/events?limit=6`),
          fetch(`${API_BASE}/api/media?limit=8`),
        ])

        const [featuredData, postsData, eventsData, mediaData] = await Promise.all([
          featuredRes.ok ? featuredRes.json() : [],
          postsRes.ok ? postsRes.json() : [],
          eventsRes.ok ? eventsRes.json() : [],
          mediaRes.ok ? mediaRes.json() : [],
        ])

        if (Array.isArray(postsData) && postsData.length === 0) {
          // seed
          await fetch(`${API_BASE}/api/seed`, { method: 'POST' })
          const seededPosts = await (await fetch(`${API_BASE}/api/posts?limit=6`)).json()
          const seededFeatured = await (await fetch(`${API_BASE}/api/posts?featured=true&limit=1`)).json()
          const seededEvents = await (await fetch(`${API_BASE}/api/events?limit=6`)).json()
          const seededMedia = await (await fetch(`${API_BASE}/api/media?limit=8`)).json()
          setPosts(seededPosts)
          setFeatured(seededFeatured[0])
          setEvents(seededEvents)
          setMedia(seededMedia)
        } else {
          setPosts(postsData)
          setFeatured((featuredData || [])[0])
          setEvents(eventsData)
          setMedia(mediaData)
        }
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero post={featured} />
      <main>
        {loading ? (
          <div className="py-20 text-center text-slate-600">Загрузка...</div>
        ) : (
          <>
            <NewsGrid posts={posts} />
            <Events events={events} />
            <MediaGrid items={media} />
          </>
        )}
      </main>
      <footer className="py-10 border-t border-slate-200 bg-white text-center text-sm text-slate-500">© {new Date().getFullYear()} Современная модель. Все права защищены.</footer>
    </div>
  )
}

export default App
