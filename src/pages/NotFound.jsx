import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiHome } from 'react-icons/fi'
import PageTransition from '../components/ui/PageTransition'

const LINKS_RAPIDOS = [
  { label: 'Proyectos',       path: '/proyectos',       emoji: '🛠️' },
  { label: 'Certificaciones', path: '/certificaciones', emoji: '🏆' },
  { label: 'Blog',            path: '/blog',            emoji: '📝' },
  { label: 'Contacto',        path: '/contacto',        emoji: '📞' },
]

const NotFound = () => (
  <PageTransition>
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">

        {/* 404 animado */}
        <motion.div
          className="relative inline-block mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <span className="text-[9rem] font-display font-extrabold leading-none select-none grad-text">
            404
          </span>
          <motion.span
            className="absolute -top-4 -right-4 text-5xl"
            animate={{ rotate: [0, 15, -10, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            🤔
          </motion.span>
        </motion.div>

        <motion.h1
          className="text-2xl sm:text-3xl font-display font-bold text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Página no encontrada
        </motion.h1>

        <motion.p
          className="text-slate-400 leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          La URL que ingresaste no existe en este portfolio. Puede que haya sido movida o simplemente escribiste mal la dirección.
        </motion.p>

        {/* Botones principales */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/" className="btn inline-flex items-center gap-2">
            <FiHome size={14} /> Ir al inicio
          </Link>
          <Link to="/proyectos" className="btn-outline inline-flex items-center gap-2">
            Ver proyectos <FiArrowRight size={13} />
          </Link>
        </motion.div>

        {/* Links rápidos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          <p className="text-slate-600 text-sm mb-4">O navegá directamente a:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {LINKS_RAPIDOS.map(({ label, path, emoji }, i) => (
              <motion.div
                key={path}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.07 }}
              >
                <Link
                  to={path}
                  className="glass p-3 flex flex-col items-center gap-1.5 hover:border-curious-blue-500/40 transition-all group"
                >
                  <span className="text-2xl">{emoji}</span>
                  <span className="text-slate-400 text-xs group-hover:text-curious-blue-400 transition-colors">{label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  </PageTransition>
)

export default NotFound
