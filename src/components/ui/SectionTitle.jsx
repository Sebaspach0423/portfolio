import { motion } from 'framer-motion'

// Componente reutilizable para el título de cada sección
// Props: tag (etiqueta pequeña), title (texto normal), highlight (texto con gradiente), subtitle
const SectionTitle = ({ tag, title, highlight, subtitle }) => (
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {tag && (
      <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30
                       rounded-full text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">
        {tag}
      </span>
    )}

    <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
      {title}{' '}
      {highlight && (
        <span className="grad-text">{highlight}</span>
      )}
    </h2>

    {subtitle && (
      <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    )}

    {/* Línea decorativa */}
    <div className="flex items-center justify-center gap-2 mt-6">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500" />
      <div className="w-2 h-2 rounded-full bg-cyan-400" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500" />
    </div>
  </motion.div>
)

export default SectionTitle
