import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiExternalLink, FiClock, FiTag, FiCalendar, FiCheckCircle } from 'react-icons/fi'
import { FiArrowRight } from 'react-icons/fi'
import PageTransition from '../components/ui/PageTransition'
import BackButton     from '../components/ui/BackButton'
import { CERTIFICACIONES } from '../data/certificaciones'

const CertificadoDetalle = () => {
  const { id } = useParams()
  const cert = CERTIFICACIONES.find(c => c.id === id)

  if (!cert) return (
    <PageTransition>
      <div className="pt-32 section text-center">
        <p className="text-slate-400 text-xl mb-6">Certificación no encontrada.</p>
        <Link to="/certificaciones" className="btn">Ver todas las certificaciones</Link>
      </div>
    </PageTransition>
  )

  const otros = CERTIFICACIONES.filter(c => c.id !== id).slice(0, 3)

  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        <div className="wrap px-4 sm:px-6 lg:px-8">

          {/* Navegación de vuelta */}
          <div className="mb-8">
            <BackButton to="/certificaciones" label="Volver a Certificaciones" />
          </div>

          {/* Header */}
          <div className="glass overflow-hidden mb-8">
            <div className={`h-48 bg-gradient-to-br ${cert.color} flex items-center justify-center text-8xl`}>
              {cert.icono}
            </div>
            <div className="p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">{cert.nombre}</h1>
                  <p className="text-curious-blue-400 font-semibold">{cert.emisor}</p>
                </div>
                <span className="px-3 py-1.5 rounded-full text-sm font-semibold bg-curious-blue-500/20 text-curious-blue-400 border border-curious-blue-500/30">
                  {cert.nivel}
                </span>
              </div>

              {/* Metadatos */}
              <div className="flex flex-wrap gap-5 text-sm text-slate-400 mb-6">
                <span className="flex items-center gap-1.5"><FiClock size={14} className="text-curious-blue-400" /> {cert.duracion}</span>
                <span className="flex items-center gap-1.5"><FiCalendar size={14} className="text-curious-blue-400" /> {cert.año}</span>
                <span className="flex items-center gap-1.5"><FiTag size={14} className="text-curious-blue-400" /> {cert.proyectos} proyectos</span>
              </div>

              {/* Habilidades */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.habilidades.map(h => (
                  <span key={h} className="px-3 py-1.5 bg-slate-800/80 border border-slate-700 rounded-lg text-slate-300 text-sm font-medium">
                    {h}
                  </span>
                ))}
              </div>

              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                <FiExternalLink size={14} /> Ver plataforma
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Descripción */}
            <div className="glass p-8">
              <h2 className="text-white font-bold text-xl mb-4">📋 Descripción</h2>
              <p className="text-slate-300 leading-relaxed">{cert.descripcion}</p>
            </div>

            {/* Habilidades adquiridas */}
            <div className="glass p-8">
              <h2 className="text-white font-bold text-xl mb-4">✅ Lo que aprendí</h2>
              <ul className="space-y-3">
                {cert.habilidades.map((h, i) => (
                  <motion.li
                    key={h}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <FiCheckCircle className="text-curious-blue-400 shrink-0" size={15} />
                    <span className="text-slate-300 text-sm">{h}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certificado mock visual */}
          <div className="glass p-8 mb-8">
            <h2 className="text-white font-bold text-xl mb-6">🏆 Vista previa del certificado</h2>
            <motion.div
              className={`bg-gradient-to-br ${cert.color} rounded-2xl p-1 max-w-2xl mx-auto`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-950 rounded-xl p-10 text-center">
                <div className="text-6xl mb-4">{cert.icono}</div>
                <p className="text-slate-400 text-sm uppercase tracking-widest mb-3">Certificado de Finalización</p>
                <h3 className="text-white text-2xl font-display font-bold mb-2">{cert.nombre}</h3>
                <p className="text-slate-500 text-sm mb-6">Otorgado a <span className="text-curious-blue-400 font-semibold">Walter Sebastian Pacheco Orizano</span></p>
                <div className="border-t border-white/10 pt-5 flex justify-center gap-8 text-sm text-slate-500">
                  <span>Emisor: <span className="text-white">{cert.emisor}</span></span>
                  <span>Año: <span className="text-white">{cert.año}</span></span>
                  <span>Duración: <span className="text-white">{cert.duracion}</span></span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Otras certificaciones */}
          <div className="glass p-8">
            <h2 className="text-white font-bold text-xl mb-6">Otras certificaciones</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otros.map(c => (
                <Link
                  key={c.id}
                  to={`/certificaciones/${c.id}`}
                  className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all group"
                >
                  <span className="text-2xl">{c.icono}</span>
                  <div className="min-w-0">
                    <p className="text-white text-sm font-medium group-hover:text-curious-blue-400 transition-colors truncate">{c.nombre}</p>
                    <p className="text-slate-500 text-xs">{c.emisor}</p>
                  </div>
                  <FiArrowRight size={13} className="ml-auto shrink-0 text-slate-600 group-hover:text-curious-blue-400 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  )
}

export default CertificadoDetalle
