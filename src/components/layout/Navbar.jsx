import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

// Enlaces de navegación — cada id corresponde al id de una sección en el HTML
const LINKS = [
  { label: 'Inicio',      id: 'home' },
  { label: 'Sobre mí',   id: 'about' },
  { label: 'Habilidades', id: 'skills' },
  { label: 'Proyectos',  id: 'projects' },
  { label: 'Experiencia', id: 'experience' },
  { label: 'Contacto',   id: 'contact' },
]

const ir = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('home')

  // Detecta scroll para poner fondo al navbar y resaltar sección activa
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const current = LINKS.findIndex(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return false
        const r = el.getBoundingClientRect()
        return r.top <= 120 && r.bottom > 120
      })
      if (current !== -1) setActive(LINKS[current].id)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/5 shadow-xl' : ''
      }`}
    >
      <div className="wrap flex items-center justify-between h-16">

        {/* Logo */}
        <button
          onClick={() => ir('home')}
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">W</span>
          <span className="text-lg font-display font-bold grad-text">Walter Pacheco</span>
        </button>

        {/* Links de escritorio */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => ir(id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === id
                  ? 'text-cyan-400 bg-cyan-400/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Controles derecha */}
        <div className="flex items-center gap-2">
          {/* Botón menú móvil */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 pt-2 pb-4 flex flex-col gap-1">
              {LINKS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => { ir(id); setMenuOpen(false) }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    active === id
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
