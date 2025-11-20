import { motion } from 'framer-motion'

const sections = [
  { id: 'dashboard', title: 'Dashboard', text: 'Zentraler Einstiegspunkt mit Status, Aufgaben und schnellen Aktionen.' },
  { id: 'account', title: 'Account', text: 'Verwalten Sie Profil, Sicherheit, Benachrichtigungen und Freigaben.' },
  { id: 'planer', title: 'Planer', text: 'Strukturierte Planung mit Etappen, Budgets und Produktkatalog.' },
  { id: 'beratung', title: 'Beratung', text: 'Einfach einen Termin anfragen oder direkt im Chat Fragen klären.' },
  { id: 'angebote', title: 'Angebote', text: 'Vergleichen, freigeben und digital beauftragen – rechtssicher.' },
  { id: 'service', title: 'Service', text: 'Tickets tracken, Wartung planen und Dokumente abrufen.' },
  { id: 'inspiration', title: 'Inspiration', text: 'Kuratiertes Magazin: Trends, Materialien, Referenzen.' },
]

export default function Sections() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          {sections.map((s, i) => (
            <motion.div key={s.id} id={s.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-slate-200 p-8 bg-gradient-to-br from-white to-slate-50">
              <h3 className="text-2xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-700">{s.text}</p>
              <div className="mt-6 flex gap-3">
                <a href="#" className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm">Mehr erfahren</a>
                <a href="#" className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm bg-white">Demo öffnen</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
