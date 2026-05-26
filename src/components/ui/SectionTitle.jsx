import { motion } from 'framer-motion'

const SectionTitle = ({ tag, title, highlight, subtitle }) => (
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {tag && (
      <motion.span
        className="inline-flex items-center gap-2 px-4 py-1.5
                   bg-curious-blue-500/10 border border-curious-blue-500/25
                   rounded-full text-curious-blue-400 text-xs font-semibold tracking-widest uppercase mb-5"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-curious-blue-400 animate-pulse" />
        {tag}
      </motion.span>
    )}

    <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4 leading-tight">
      {title}{' '}
      {highlight && <span className="grad-text">{highlight}</span>}
    </h2>

    {subtitle && (
      <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    )}

    {/* Línea decorativa */}
    <div className="flex items-center justify-center gap-3 mt-7">
      <div className="h-px w-20 bg-gradient-to-r from-transparent to-curious-blue-500/60" />
      <div className="flex gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-curious-blue-700/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-curious-blue-400" />
        <span className="w-1.5 h-1.5 rounded-full bg-curious-blue-700/60" />
      </div>
      <div className="h-px w-20 bg-gradient-to-l from-transparent to-curious-blue-500/60" />
    </div>
  </motion.div>
)

export default SectionTitle
