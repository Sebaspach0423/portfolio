import { motion } from 'framer-motion'

const SectionTitle = ({ tag, title, highlight, subtitle }) => (
  <motion.div
    className="text-center mb-16 relative"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    {/* Giant watermark in background — gives depth */}
    {highlight && (
      <div
        className="absolute -top-6 left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap"
        aria-hidden
      >
        <span
          className="text-[9rem] sm:text-[11rem] font-display font-black leading-none tracking-tighter"
          style={{
            background: 'linear-gradient(180deg, rgba(0,214,143,0.09) 0%, transparent 75%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {highlight}
        </span>
      </div>
    )}

    <div className="relative">
      {/* Tag pill */}
      {tag && (
        <motion.div
          className="mb-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="tag-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e89a] animate-pulse" />
            {tag}
          </span>
        </motion.div>
      )}

      {/* Main title */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-4 leading-[1.08] tracking-tight">
        {title}{' '}
        {highlight && <span className="grad-text">{highlight}</span>}
      </h2>

      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mt-3">
          {subtitle}
        </p>
      )}

      {/* Decorative separator */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <div
          className="h-px w-24"
          style={{ background: 'linear-gradient(to right, transparent, rgba(0,214,143,0.65), rgba(168,85,247,0.35))' }}
        />
        <div className="flex gap-2 items-center">
          <span className="w-1 h-1 rounded-full bg-[rgba(168,85,247,0.7)]" />
          <span
            className="w-3 h-3 rounded-full bg-[#00e89a]"
            style={{ boxShadow: '0 0 12px rgba(0,214,143,0.9), 0 0 24px rgba(0,214,143,0.4)' }}
          />
          <span className="w-1 h-1 rounded-full bg-[rgba(168,85,247,0.7)]" />
        </div>
        <div
          className="h-px w-24"
          style={{ background: 'linear-gradient(to left, transparent, rgba(0,214,143,0.65), rgba(168,85,247,0.35))' }}
        />
      </div>
    </div>
  </motion.div>
)

export default SectionTitle
