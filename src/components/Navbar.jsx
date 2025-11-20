import { useState } from 'react'
import { Menu, X, Sparkles, LayoutGrid, User, ClipboardList, Headphones, FileText, Wrench, GalleryHorizontalEnd } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
  { id: 'account', label: 'Account', icon: User },
  { id: 'planer', label: 'Planer', icon: ClipboardList },
  { id: 'beratung', label: 'Beratung', icon: Headphones },
  { id: 'angebote', label: 'Angebote', icon: FileText },
  { id: 'service', label: 'Service', icon: Wrench },
  { id: 'inspiration', label: 'Inspiration', icon: GalleryHorizontalEnd },
]

export default function Navbar({ active, onNavigate }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-slate-200 to-white text-slate-900 flex items-center justify-center shadow-inner">
            <Sparkles size={18} />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold">LIVARO Home</p>
            <p className="text-xs text-slate-300/70">Luxuriös. Ruhig. Technisch.</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          {links.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`group relative px-3 py-2 rounded-lg text-sm transition ${
                active === id ? 'text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon size={16} className="opacity-80" />
                {label}
              </div>
              {active === id && (
                <motion.div layoutId="nav-underline" className="absolute left-2 right-2 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              )}
            </button>
          ))}
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="px-4 py-3 grid grid-cols-2 gap-2">
              {links.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => { onNavigate(id); setOpen(false) }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition ${active === id ? 'ring-1 ring-white/20' : ''}`}
                >
                  <Icon size={16} className="text-slate-200" />
                  <span className="text-slate-100 text-sm">{label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
