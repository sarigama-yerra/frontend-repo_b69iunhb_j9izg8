import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Modules from './components/Modules'
import Sections from './components/Sections'

function App() {
  const [active, setActive] = useState('dashboard')

  const handleNavigate = (id) => {
    setActive(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar active={active} onNavigate={handleNavigate} />
      <Hero />
      <Modules />
      <Sections />

      <footer className="border-t border-slate-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600">© {new Date().getFullYear()} LIVARO Home – Präzision im Detail.</p>
          <div className="text-sm text-slate-500">Bereit für KI, CRM und Finanzierung.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
