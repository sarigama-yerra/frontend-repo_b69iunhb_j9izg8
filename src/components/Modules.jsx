import { motion } from 'framer-motion'
import { LayoutGrid, User, ClipboardList, Headphones, FileText, Wrench, GalleryHorizontalEnd, ShieldCheck, Rocket } from 'lucide-react'

const modules = [
  { id: 'dashboard', title: 'Dashboard', desc: 'Ihr persönlicher Überblick – zentral, klar, schnell.', icon: LayoutGrid },
  { id: 'account', title: 'Account', desc: 'Profil, Sicherheit und Präferenzen – aufgeräumt und intuitiv.', icon: User },
  { id: 'planer', title: 'Planer', desc: 'Räume, Produkte, Budgets – strukturiert planen und visualisieren.', icon: ClipboardList },
  { id: 'beratung', title: 'Beratung', desc: 'Direkter Draht zu Expert:innen – präzise, freundlich, lösungsorientiert.', icon: Headphones },
  { id: 'angebote', title: 'Angebote', desc: 'Transparente Angebote – nachvollziehbar, verbindlich, fair.', icon: FileText },
  { id: 'service', title: 'Service', desc: 'Installation, Wartung, Support – zuverlässig und proaktiv.', icon: Wrench },
  { id: 'inspiration', title: 'Inspiration', desc: 'Kuratiert und hochwertig – Ideen, Materialien, Referenzen.', icon: GalleryHorizontalEnd },
]

export default function Modules() {
  return (
    <section id="module" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Modulares System. Zukunftssicher.</h2>
          <p className="mt-3 text-slate-700">Architektur für Erweiterungen wie KI, CRM oder Finanzierung – ohne Brüche.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map(({ id, title, desc, icon: Icon }, i) => (
            <motion.a
              key={id}
              href={`#${id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-0.5 transition bg-white"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="text-slate-700 text-sm mt-1">{desc}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          <StatCard title="< 1s" subtitle="Time-to-Interactive" />
          <StatCard title="> 90" subtitle="Lighthouse Performance" />
          <StatCard title="A" subtitle="UX-Qualität" />
        </div>
      </div>
    </section>
  )
}

function StatCard({ title, subtitle }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50">
      <p className="text-3xl font-semibold text-slate-900">{title}</p>
      <p className="text-slate-600 mt-1">{subtitle}</p>
    </div>
  )
}
