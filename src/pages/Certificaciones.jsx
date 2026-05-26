import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiAward } from 'react-icons/fi'
import PageTransition from '../components/ui/PageTransition'
import SectionTitle   from '../components/ui/SectionTitle'
import { CERTIFICACIONES } from '../data/certificaciones'

const NIVELES = ['Todos', 'Básico', 'Básico-Intermedio', 'Intermedio']

const TarjetaCert = ({ cert }) => (
  <motion.div
    className="glass overflow-hidden group hover:border-white/20 transition-all"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    {/* Banner con gradiente */}
    <div className={`h-28 bg-gradient-to-br ${cert.color} flex items-center justify-center text-5xl`}>
      {cert.icono}
    </div>

    <div className="p-5">
      {/* Emisor + nivel */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs px-2 py-1 bg-slate-800 border border-slate-700 rounded-full text-curious-blue-400 font-medium">
          {cert.emisor}
        </span>
        <span className="text-xs text-slate-500">{cert.año}</span>
      </div>

      <h3 className="text-white font-bold text-base mb-2 group-hover:text-curious-blue-400 transition-colors leading-snug">
        {cert.nombre}
      </h3>

      <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">
        {cert.descripcion}
      </p>

      {/* Chips de habilidades (primeras 3) */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {cert.habilidades.slice(0, 3).map(h => (
          <span key={h} className="px-2 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-400 text-xs">
            {h}
          </span>
        ))}
        {cert.habilidades.length > 3 && (
          <span className="px-2 py-0.5 text-slate-600 text-xs">+{cert.habilidades.length - 3} más</span>
        )}
      </div>

      <Link
        to={`/certificaciones/${cert.id}`}
        className="flex items-center gap-1.5 text-curious-blue-400 hover:text-curious-blue-300 text-sm font-medium transition-colors"
      >
        Ver certificado <FiArrowRight size={13} />
      </Link>
    </div>
  </motion.div>
)

const Certificaciones = () => {
  const [filtro, setFiltro] = useState('Todos')
  const visibles = filtro === 'Todos'
    ? CERTIFICACIONES
    : CERTIFICACIONES.filter(c => c.nivel === filtro)

  return (
    <PageTransition>
      <div className="pt-24 section">
        <div className="wrap">
          <SectionTitle
            tag="Formación"
            title="Mis"
            highlight="Certificaciones"
            subtitle={`${CERTIFICACIONES.length} cursos completados en plataformas reconocidas.`}
          />

          {/* Filtro por nivel */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {NIVELES.map(n => (
              <button
                key={n}
                onClick={() => setFiltro(n)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filtro === n
                    ? 'bg-curious-blue-500 text-white shadow-lg shadow-curious-blue-500/30'
                    : 'glass text-slate-400 hover:text-white'
                }`}
              >
                {n}
              </button>
            ))}
          </div>

          {/* Resumen numérico */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { label: 'Certificados', value: CERTIFICACIONES.length, icon: '🏆' },
              { label: 'Horas de estudio', value: '900+', icon: '⏱️' },
              { label: 'Proyectos prácticos', value: CERTIFICACIONES.reduce((a, c) => a + c.proyectos, 0), icon: '🛠️' },
            ].map(({ label, value, icon }) => (
              <div key={label} className="glass p-4 text-center">
                <div className="text-2xl mb-1">{icon}</div>
                <div className="text-2xl font-bold grad-text">{value}</div>
                <div className="text-slate-500 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* Grid de certificaciones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {visibles.map(cert => (
              <TarjetaCert key={cert.id} cert={cert} />
            ))}
          </div>

          {visibles.length === 0 && (
            <p className="text-center text-slate-500 mt-10">No hay certificaciones con ese filtro.</p>
          )}
        </div>
      </div>
    </PageTransition>
  )
}

export default Certificaciones
