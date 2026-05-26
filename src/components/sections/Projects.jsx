import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'

// ── Datos: proyectos ──────────────────────────────────────────────────────────
const PROYECTOS = [
  {
    id: 1,
    titulo: 'PokéDex Interactivo',
    descripcion: 'Pokédex completo que consume la PokéAPI en tiempo real. Incluye búsqueda instantánea, filtros por tipo con colores únicos, estadísticas de combate animadas con gráfico de radar, evoluciones y modo favoritos con persistencia local.',
    emoji: '⚡',
    gradiente: 'from-yellow-400 to-orange-500',
    tecnologias: ['React', 'PokéAPI', 'TailwindCSS', 'Framer Motion', 'LocalStorage'],
    github: 'https://github.com/wsebaspach',
    demo: 'https://github.com/wsebaspach',
    destacado: true,
  },
  {
    id: 2,
    titulo: 'CineTrack — Seguimiento de Películas',
    descripcion: 'App de cine personal conectada a la API de TMDB. Buscá películas y series, marcá como vistas, crea listas personalizadas, leé reseñas y visualizá el historial con estadísticas de géneros y actores favoritos.',
    emoji: '🎬',
    gradiente: 'from-rose-500 to-purple-600',
    tecnologias: ['React', 'TMDB API', 'Node.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/wsebaspach',
    demo: 'https://github.com/wsebaspach',
    destacado: true,
  },
  {
    id: 3,
    titulo: 'DevNotes — Editor Markdown en Vivo',
    descripcion: 'Editor de notas técnicas con vista previa Markdown en tiempo real, resaltado de sintaxis para código, organización por etiquetas con drag & drop, buscador full-text y exportación a PDF o HTML con un clic.',
    emoji: '📝',
    gradiente: 'from-curious-blue-500 to-blue-600',
    tecnologias: ['React', 'TypeScript', 'Marked.js', 'Highlight.js', 'Dnd-kit'],
    github: 'https://github.com/wsebaspach',
    demo: 'https://github.com/wsebaspach',
    destacado: false,
  },
  {
    id: 4,
    titulo: 'SpendWise — Control de Gastos',
    descripcion: 'Dashboard financiero personal con registro de ingresos y egresos, categorización automática por IA, gráficos interactivos de tendencias, metas de ahorro con progreso visual y exportación de reportes en CSV.',
    emoji: '💸',
    gradiente: 'from-emerald-500 to-teal-600',
    tecnologias: ['React', 'Chart.js', 'Python', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/wsebaspach',
    demo: 'https://github.com/wsebaspach',
    destacado: false,
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const TarjetaProyecto = ({ p, i }) => (
  <motion.div
    className="glass overflow-hidden group hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-curious-blue-500/5"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: i * 0.1 }}
    whileHover={{ y: -6 }}
  >
    {/* Banner con gradiente y emoji */}
    <div className={`relative h-44 bg-gradient-to-br ${p.gradiente} flex items-center justify-center overflow-hidden`}>
      <span className="text-7xl select-none filter drop-shadow-lg">{p.emoji}</span>
      {/* Rejilla decorativa sobre el banner */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      {/* Badge "Destacado" */}
      {p.destacado && (
        <div className="absolute top-3 right-3 px-2 py-1 bg-black/30 backdrop-blur rounded-full text-white text-xs font-semibold flex items-center gap-1">
          <FaStar size={10} className="text-yellow-400" /> Destacado
        </div>
      )}
    </div>

    <div className="p-6">
      {/* Título */}
      <h3 className="text-white font-bold text-xl mb-2 group-hover:text-curious-blue-400 transition-colors">
        {p.titulo}
      </h3>
      {/* Descripción */}
      <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.descripcion}</p>

      {/* Tecnologías usadas */}
      <div className="flex flex-wrap gap-2 mb-6">
        {p.tecnologias.map((tech) => (
          <span key={tech} className="px-2.5 py-1 bg-slate-800/80 border border-slate-700 rounded-md text-slate-400 text-xs font-medium">
            {tech}
          </span>
        ))}
      </div>

      {/* Botones */}
      <div className="flex gap-3">
        <a href={p.github} target="_blank" rel="noopener noreferrer"
           className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-700 rounded-xl
                      text-slate-400 text-sm font-medium hover:border-slate-500 hover:text-white transition-all">
          <FaGithub size={14} /> Código
        </a>
        <a href={p.demo} target="_blank" rel="noopener noreferrer"
           className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-curious-blue-500 to-blue-600
                      rounded-xl text-white text-sm font-medium hover:shadow-lg hover:shadow-curious-blue-500/20 transition-all">
          <FaExternalLinkAlt size={12} /> Demo
        </a>
      </div>
    </div>
  </motion.div>
)

const Projects = () => {
  const [verTodos, setVerTodos] = useState(false)
  const visibles = verTodos ? PROYECTOS : PROYECTOS.slice(0, 3)

  return (
    <section id="projects" className="section bg-slate-950">
      <div className="wrap">
        <SectionTitle
          tag="Proyectos"
          title="Mis"
          highlight="Proyectos"
          subtitle="Proyectos que reflejan lo que aprendí y lo que sé hacer."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibles.map((p, i) => <TarjetaProyecto key={p.id} p={p} i={i} />)}
          </AnimatePresence>
        </div>

        {PROYECTOS.length > 3 && (
          <div className="text-center mt-10">
            <button onClick={() => setVerTodos(!verTodos)} className="btn-outline">
              {verTodos ? 'Ver menos' : `Ver todos (${PROYECTOS.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
