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
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const location = useLocation()

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    /* ── Floating pill wrapper ──────────────────────────────────────── */
    <motion.div
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6"
    >
      {/* Pill container */}
      <div
        className="max-w-5xl mx-auto rounded-2xl transition-all duration-500"
        style={{
          background:       scrolled ? 'rgba(3,10,6,0.96)' : 'rgba(4,16,10,0.72)',
          backdropFilter:   'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: scrolled
            ? '1px solid rgba(0,214,143,0.22)'
            : '1px solid rgba(255,255,255,0.09)',
          boxShadow: scrolled
            ? '0 8px 40px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(0,214,143,0.1), inset 0 1px 0 rgba(255,255,255,0.05)'
            : '0 4px 24px rgba(0,0,0,0.3)',
        }}
      >
        <div className="flex items-center justify-between h-14 px-5 sm:px-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative">
              {/* Glow halo */}
              <div className="absolute inset-0 rounded-xl bg-[#00e89a] blur-md opacity-25 group-hover:opacity-55 transition-opacity duration-300" />
              <span
                className="relative w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm font-display"
                style={{ background: 'linear-gradient(135deg, #00e89a 0%, #007548 100%)' }}
              >
                W
              </span>
            </div>
            <span className="text-base font-display font-bold grad-text hidden sm:block">
              Walter Pacheco
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {LINKS.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 tracking-wide ${
                    isActive
                      ? 'text-[#00e89a] border shadow-[0_0_14px_rgba(0,214,143,0.18)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                  }`
                }
                style={({ isActive }) => isActive ? {
                  background: 'rgba(0,214,143,0.1)',
                  borderColor: 'rgba(0,214,143,0.28)',
                } : {}}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-[#00e89a] transition-all duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.09)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{    opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="max-w-5xl mx-auto mt-2 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(3,10,6,0.98)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(0,214,143,0.18)',
              boxShadow: '0 16px 44px rgba(0,0,0,0.55)',
            }}
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {LINKS.map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
                      isActive
                        ? 'text-[#00e89a] border-[rgba(0,214,143,0.22)]'
                        : 'text-slate-400 hover:text-white hover:bg-white/5 border-transparent'
                    }`
                  }
                  style={({ isActive }) => isActive ? { background: 'rgba(0,214,143,0.1)' } : {}}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar
