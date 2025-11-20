import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[72vh] md:h-[78vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <p className="text-sm tracking-widest uppercase text-slate-700/70">LIVARO Home</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Zuhause neu gedacht – präzise, ruhig, technologisch
            </h1>
            <p className="mt-6 text-slate-700 text-lg md:text-xl max-w-2xl">
              Eine modulare Experience für Planung, Beratung und Service. Sofort spürbare Premium-Qualität – keine Website, sondern ein fließendes Interface für Ihr Zuhause.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#planer" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition shadow-lg shadow-slate-900/10">Planer starten</a>
              <a href="#beratung" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/80 backdrop-blur border border-slate-900/10 hover:bg-white transition">Beratung anfragen</a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
    </section>
  )
}
