import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const LINKS = [
  { label: 'Inicio',          path: '/' },
  { label: 'Proyectos',       path: '/proyectos' },
  { label: 'Certificaciones', path: '/certificaciones' },
  { label: 'Blog',            path: '/blog' },
  { label: 'Dashboard',       path: '/dashboard' },
  { label: 'Contacto',        path: '/contacto' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'text-curious-blue-300 bg-curious-blue-500/15 border border-curious-blue-500/20'
        : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
    }`

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-curious-blue-500/10 shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-curious-blue-500 to-curious-blue-800
                           flex items-center justify-center text-white font-bold text-sm
                           shadow-lg shadow-curious-blue-900/50
                           group-hover:shadow-curious-blue-500/30 group-hover:scale-105 transition-all duration-200">
            W
          </span>
          <span className="text-lg font-display font-bold grad-text">Walter Pacheco</span>
        </Link>

        {/* Links escritorio */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map(({ label, path }) => (
            <NavLink key={path} to={path} end={path === '/'} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </div>

        {/* Botón móvil */}
        <button
          className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5
                     border border-transparent hover:border-slate-700/50 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-curious-blue-500/10"
          >
            <div className="px-4 pt-2 pb-4 flex flex-col gap-1">
              {LINKS.map(({ label, path }) => (
                <NavLink key={path} to={path} end={path === '/'} className={linkClass}>
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
