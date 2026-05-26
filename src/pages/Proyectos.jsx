import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import PageTransition from '../components/ui/PageTransition'
import SectionTitle   from '../components/ui/SectionTitle'
import { PROYECTOS }  from '../data/proyectos'

// Filtros disponibles
const FILTROS = ['Todos', 'Frontend', 'Full Stack']

const TarjetaProyecto = ({ p }) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl cursor-pointer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
  >
    {/* Hover glow border */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
         style={{ boxShadow: 'inset 0 0 0 1px rgba(0,214,143,0.35)' }} />

    {/* Card glass */}
    <div className="glass h-full overflow-hidden">
      {/* Banner */}
      <div className={`relative h-48 bg-gradient-to-br ${p.gradiente} flex items-center justify-center text-7xl overflow-hidden`}>
        <span className="relative z-10 filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">{p.emoji}</span>
        {/* Subtle overlay grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Status badge */}
        <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border ${
          p.estado === 'Completado'
            ? 'bg-green-500/20 text-green-300 border-green-500/30'
            : 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
        }`}>
          {p.estado}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-white font-bold text-xl group-hover:text-curious-blue-300 transition-colors duration-200 leading-tight">{p.titulo}</h3>
          <span className="shrink-0 text-xs px-2.5 py-1 rounded-full bg-curious-blue-500/10 border border-curious-blue-500/20 text-curious-blue-400 font-medium">{p.categoria}</span>
        </div>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{p.descripcion}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.tecnologias.map(t => (
            <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-400 border"
                  style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.09)' }}>
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a href={p.github} target="_blank" rel="noopener noreferrer"
             className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-slate-400 text-sm transition-all duration-200 hover:text-white"
             style={{ border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.03)' }}
             onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
             onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'}>
            <FaGithub size={14} /> Código
          </a>
          <Link to={`/proyectos/${p.id}`}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:shadow-neon hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #00d68f, #007548)', boxShadow: '0 0 0 1px rgba(0,214,143,0.3)' }}>
            Ver más <FiArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
)

const Proyectos = () => {
  const [filtro, setFiltro] = useState('Todos')
  const visibles = filtro === 'Todos' ? PROYECTOS : PROYECTOS.filter(p => p.categoria === filtro)

  return (
    <PageTransition>
      <div className="pt-24 section">
        <div className="wrap">
          <SectionTitle tag="Portfolio" title="Mis" highlight="Proyectos" subtitle="Cada proyecto representa algo que aprendí construyendo." />

          {/* Filtros */}
          <div className="flex justify-center gap-3 mb-10">
            {FILTROS.map(f => (
              <button key={f} onClick={() => setFiltro(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filtro === f
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
                style={filtro === f
                  ? { background: 'linear-gradient(135deg, #00d68f, #007548)', boxShadow: '0 0 20px rgba(0,214,143,0.35)' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }
                }>
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {visibles.map(p => <TarjetaProyecto key={p.id} p={p} />)}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Proyectos
