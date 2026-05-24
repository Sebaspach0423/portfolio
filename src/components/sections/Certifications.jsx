import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

// ── Datos: certificados y cursos ─────────────────────────────────────────────
const CERTS = [
  {
    nombre: 'Responsive Web Design',
    emisor: 'freeCodeCamp',
    año: '2024',
    icono: '📱',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    nombre: 'JavaScript Algorithms & Data Structures',
    emisor: 'freeCodeCamp',
    año: '2024',
    icono: '🔢',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    nombre: 'Python para Principiantes',
    emisor: 'Udemy',
    año: '2023',
    icono: '🐍',
    color: 'from-green-500 to-emerald-700',
  },
  {
    nombre: 'Bases de Datos con MySQL',
    emisor: 'Coursera',
    año: '2023',
    icono: '🗄️',
    color: 'from-purple-500 to-purple-700',
  },
  {
    nombre: 'Fundamentos de Git & GitHub',
    emisor: 'Platzi',
    año: '2023',
    icono: '🐙',
    color: 'from-slate-500 to-slate-700',
  },
  {
    nombre: 'Introducción a React',
    emisor: 'Udemy',
    año: '2024',
    icono: '⚛️',
    color: 'from-blue-400 to-cyan-600',
  },
  {
    nombre: 'Docker para Desarrolladores',
    emisor: 'Udemy',
    año: '2024',
    icono: '🐳',
    color: 'from-blue-500 to-blue-700',
  },
  {
    nombre: 'Fundamentos de UX/UI',
    emisor: 'Google / Coursera',
    año: '2023',
    icono: '🎨',
    color: 'from-pink-500 to-rose-600',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const TarjetaCert = ({ c, i }) => (
  <motion.div
    className="glass p-5 flex items-start gap-4 group hover:border-white/20 transition-all"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: i * 0.07 }}
    whileHover={{ y: -4 }}
  >
    {/* Icono con gradiente */}
    <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-xl shadow-lg`}>
      {c.icono}
    </div>

    <div className="min-w-0 flex-1">
      <h3 className="text-white font-semibold text-sm mb-0.5 group-hover:text-cyan-400 transition-colors leading-snug">
        {c.nombre}
      </h3>
      <p className="text-slate-400 text-xs mb-2">{c.emisor}</p>
      <span className="inline-block px-2 py-0.5 bg-slate-800 rounded-full text-slate-500 text-xs">
        {c.año}
      </span>
    </div>

    {/* Tilde verde de verificado */}
    <div className="shrink-0 w-6 h-6 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
      <span className="text-green-400 text-xs">✓</span>
    </div>
  </motion.div>
)

const Certifications = () => (
  <section id="certifications" className="section bg-slate-950">
    <div className="wrap">
      <SectionTitle
        tag="Certificaciones"
        title="Cursos &"
        highlight="Certificados"
        subtitle="Formación continua en plataformas reconocidas a nivel mundial."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {CERTS.map((c, i) => <TarjetaCert key={c.nombre} c={c} i={i} />)}
      </div>

      <motion.p
        className="text-center text-slate-500 text-sm mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        🎯 El aprendizaje no se detiene — siempre hay algo nuevo por explorar.
      </motion.p>
    </div>
  </section>
)

export default Certifications
