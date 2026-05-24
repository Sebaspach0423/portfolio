import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { FiArrowDown } from 'react-icons/fi'

// ── Datos personales ─────────────────────────────────────────────────────────
const NOMBRE    = 'Walter Sebastian'
const APELLIDO  = 'Pacheco Orizano'
const ROLES     = [
  'Estudiante de Ing. de Sistemas',
  'Desarrollador Web',
  'Frontend Developer',
  'Apasionado por la tecnología',
]
const BIO       = 'Estudiante de Ingeniería de Sistemas en la UNHEVAL, apasionado por el desarrollo web moderno, la programación y la creación de soluciones digitales que generen impacto real.'
const UNIVERSIDAD = 'UNHEVAL'
const AÑO       = '3er año'
const SOCIALES  = [
  { icon: FaGithub,    href: 'https://github.com/Sebaspach0423',       label: 'GitHub' },
  { icon: FaInstagram, href: 'https://www.instagram.com/pachecoorizano?igsh=azBxdWIzenA3Mndw',     label: 'Instagram' },
  { icon: FaWhatsapp,  href: 'https://wa.me/51965278791',            label: 'WhatsApp' }, // Reemplaza con tu número
  { icon: FaEnvelope,  href: 'mailto:wsebaspach23@gmail.com',        label: 'Email' },
]
// ─────────────────────────────────────────────────────────────────────────────

// Efecto de escritura que cicla por el array ROLES
const Typewriter = ({ texts }) => {
  const [idx, setIdx]         = useState(0)
  const [txt, setTxt]         = useState('')
  const [deleting, setDel]    = useState(false)

  useEffect(() => {
    const full = texts[idx]
    const t = setTimeout(() => {
      if (!deleting) {
        setTxt(full.slice(0, txt.length + 1))
        if (txt === full) setTimeout(() => setDel(true), 1800)
      } else {
        setTxt(full.slice(0, txt.length - 1))
        if (txt === '') { setDel(false); setIdx((i) => (i + 1) % texts.length) }
      }
    }, deleting ? 45 : 95)
    return () => clearTimeout(t)
  }, [txt, deleting, idx, texts])

  return (
    <span>
      <span className="text-cyan-400 font-medium">{txt}</span>
      <span className="animate-pulse text-purple-400">|</span>
    </span>
  )
}

// Orbe animado de fondo — solo decorativo
const Orb = ({ cls, animate, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl pointer-events-none ${cls}`}
    animate={animate}
    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay }}
  />
)

const ir = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">

    {/* Orbes de fondo */}
    <Orb cls="w-[480px] h-[480px] bg-cyan-600/15 -top-24 -left-32"   animate={{ x: [0,50,-20,0], y: [0,-30,40,0] }} />
    <Orb cls="w-[380px] h-[380px] bg-purple-600/15 bottom-0 -right-20" animate={{ x: [0,-40,20,0], y: [0,50,-30,0] }} delay={3} />
    <Orb cls="w-64 h-64 bg-blue-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" animate={{ x: [0,30,-50,0], y: [0,-60,20,0] }} delay={5} />

    {/* Rejilla de fondo */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

    <div className="relative z-10 wrap px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Texto ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Saludo */}
          <motion.p
            className="text-cyan-400 text-xs font-semibold tracking-[0.4em] uppercase mb-5"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            👋 Hola, soy
          </motion.p>

          {/* Nombre */}
          <motion.h1
            className="text-5xl sm:text-6xl xl:text-7xl font-display font-extrabold text-white leading-tight mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {NOMBRE}
            <br />
            <span className="grad-text">{APELLIDO}</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            className="text-xl sm:text-2xl text-slate-300 mb-6 h-9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <Typewriter texts={ROLES} />
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-slate-400 text-lg leading-relaxed mb-7 max-w-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            {BIO}
          </motion.p>

          {/* Chips info */}
          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            {[
              { icon: '🎓', text: UNIVERSIDAD },
              { icon: '📍', text: 'Huánuco, Perú' },
              { icon: '📅', text: AÑO },
            ].map(({ icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 px-3 py-1.5 glass text-slate-400 text-sm">
                {icon} {text}
              </span>
            ))}
          </motion.div>

          {/* Botones CTA */}
          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72 }}
          >
            <button onClick={() => ir('projects')} className="btn">Ver Proyectos</button>
            <button onClick={() => ir('contact')}  className="btn-outline">Contáctame</button>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.82 }}
          >
            {SOCIALES.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-700
                           text-slate-400 hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Avatar ───────────────────────────────────── */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Anillo giratorio con gradiente */}
            <motion.div
              className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 opacity-70 blur-sm"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />

            {/* Foto de perfil */}
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full border-4 border-slate-950 overflow-hidden">
              <img
                src="/perfil.jpeg"
                alt="Walter Sebastian Pacheco Orizano"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Badge: disponible */}
            <motion.div
              className="absolute -top-3 -right-6 glass px-3 py-2 text-sm font-medium text-white shadow-xl"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-green-400">●</span> Disponible
            </motion.div>

            {/* Badge: año */}
            <motion.div
              className="absolute -bottom-3 -left-6 glass px-3 py-2 text-sm font-medium text-white shadow-xl"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              ⚡ {AÑO} — UNHEVAL
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => ir('about')}
      >
        <span className="text-xs tracking-[0.3em]">SCROLL</span>
        <FiArrowDown size={15} />
      </motion.button>
    </div>
  </section>
)

export default Hero
