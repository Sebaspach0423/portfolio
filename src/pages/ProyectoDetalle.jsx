import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa'
import { FiClock, FiTag, FiCalendar } from 'react-icons/fi'
import PageTransition  from '../components/ui/PageTransition'
import BackButton      from '../components/ui/BackButton'
import { PROYECTOS }   from '../data/proyectos'

// Colores de mockup según el proyecto
const MOCK_COLORS = {
  pokedex:   ['bg-yellow-500/20', 'bg-orange-500/20', 'bg-amber-400/20'],
  cinetrack: ['bg-rose-500/20',   'bg-purple-500/20', 'bg-pink-400/20'],
  devnotes:  ['bg-curious-blue-500/20',   'bg-blue-500/20',   'bg-sky-400/20'],
  spendwise: ['bg-emerald-500/20','bg-teal-500/20',   'bg-green-400/20'],
}

const ProyectoDetalle = () => {
  const { id } = useParams()                          // lee el :id de la URL
  const proyecto = PROYECTOS.find(p => p.id === id)  // busca en los datos

  // Si no existe el proyecto, muestra un mensaje
  if (!proyecto) return (
    <PageTransition>
      <div className="pt-32 section text-center">
        <p className="text-slate-400 text-xl mb-6">Proyecto no encontrado.</p>
        <Link to="/proyectos" className="btn">Ver todos los proyectos</Link>
      </div>
    </PageTransition>
  )

  const colors = MOCK_COLORS[id] || ['bg-slate-700/40', 'bg-slate-600/30', 'bg-slate-500/20']

  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        <div className="wrap px-4 sm:px-6 lg:px-8">

          {/* Navegación de vuelta */}
          <div className="mb-8">
            <BackButton to="/proyectos" label="Volver a Proyectos" />
          </div>

          {/* Header del proyecto */}
          <div className="glass overflow-hidden mb-8">
            <div className={`h-56 bg-gradient-to-br ${proyecto.gradiente} flex items-center justify-center text-8xl`}>
              {proyecto.emoji}
            </div>
            <div className="p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">{proyecto.titulo}</h1>
                  <p className="text-slate-400 text-lg">{proyecto.subtitulo}</p>
                </div>
                <span className={`px-3 py-1.5 rounded-full text-sm font-semibold ${
                  proyecto.estado === 'Completado' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {proyecto.estado}
                </span>
              </div>

              {/* Metadatos */}
              <div className="flex flex-wrap gap-5 text-sm text-slate-400 mb-6">
                <span className="flex items-center gap-1.5"><FiTag size={14} className="text-curious-blue-400" /> {proyecto.categoria}</span>
                <span className="flex items-center gap-1.5"><FiClock size={14} className="text-curious-blue-400" /> {proyecto.duracion}</span>
                <span className="flex items-center gap-1.5"><FiCalendar size={14} className="text-curious-blue-400" /> {proyecto.año}</span>
              </div>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proyecto.tecnologias.map(t => (
                  <span key={t} className="px-3 py-1.5 bg-slate-800/80 border border-slate-700 rounded-lg text-slate-300 text-sm font-medium">{t}</span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex flex-wrap gap-4">
                <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className="btn flex items-center gap-2">
                  <FaGithub size={16} /> Ver en GitHub
                </a>
                <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
                  <FaExternalLinkAlt size={13} /> Ver Demo
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Descripción completa */}
            <div className="glass p-8">
              <h2 className="text-white font-bold text-xl mb-4">📋 Descripción</h2>
              <p className="text-slate-300 leading-relaxed">{proyecto.descripcionLarga}</p>
            </div>

            {/* Funcionalidades */}
            <div className="glass p-8">
              <h2 className="text-white font-bold text-xl mb-4">✅ Funcionalidades</h2>
              <ul className="space-y-3">
                {proyecto.features.map((f, i) => (
                  <motion.li key={i} className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}>
                    <FaCheckCircle className="text-curious-blue-400 shrink-0 mt-0.5" size={15} />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mockup visual de pantallas */}
          <div className="glass p-8 mb-8">
            <h2 className="text-white font-bold text-xl mb-6">🖥️ Capturas del proyecto</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Vista principal', 'Vista de detalle', 'Vista responsive'].map((label, i) => (
                <motion.div key={label}
                  className={`${colors[i]} rounded-xl h-40 flex flex-col items-center justify-center gap-3 border border-white/5`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}>
                  <span className="text-3xl">{proyecto.emoji}</span>
                  <span className="text-slate-400 text-sm">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Otros proyectos */}
          <div className="glass p-8">
            <h2 className="text-white font-bold text-xl mb-6">Otros proyectos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PROYECTOS.filter(p => p.id !== id).slice(0, 3).map(p => (
                <Link key={p.id} to={`/proyectos/${p.id}`}
                  className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all group">
                  <span className="text-2xl">{p.emoji}</span>
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-curious-blue-400 transition-colors">{p.titulo}</p>
                    <p className="text-slate-500 text-xs">{p.categoria}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  )
}

export default ProyectoDetalle
