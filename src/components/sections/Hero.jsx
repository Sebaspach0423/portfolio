import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
  { icon: FaGithub,    href: 'https://github.com/Sebaspach0423',                                    label: 'GitHub'    },
  { icon: FaInstagram, href: 'https://www.instagram.com/pachecoorizano?igsh=azBxdWIzenA3Mndw',      label: 'Instagram' },
  { icon: FaWhatsapp,  href: 'https://wa.me/51965278791',                                            label: 'WhatsApp'  },
  { icon: FaEnvelope,  href: 'mailto:wsebaspach23@gmail.com',                                        label: 'Email'     },
]
// ─────────────────────────────────────────────────────────────────────────────

// Efecto de escritura
const Typewriter = ({ texts }) => {
  const [idx,      setIdx]  = useState(0)
  const [txt,      setTxt]  = useState('')
  const [deleting, setDel]  = useState(false)

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
    }, deleting ? 42 : 90)
    return () => clearTimeout(t)
  }, [txt, deleting, idx, texts])

  return (
    <span>
      <span style={{ color: '#6ee7b7' }} className="font-semibold">{txt}</span>
      <span style={{ color: '#a855f7' }} className="animate-pulse font-thin">|</span>
    </span>
  )
}

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#030a06' }}
    >
      {/* ── Atmospheric orbs — MUCH stronger ──────────────────────── */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '700px', height: '700px',
          background: 'radial-gradient(circle, rgba(0,214,143,0.2) 0%, rgba(0,214,143,0.08) 50%, transparent 70%)',
          top: '-180px', left: '-200px', filter: 'blur(40px)',
        }}
        animate={{ x: [0, 60, -25, 0], y: [0, -40, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(124,58,237,0.07) 50%, transparent 70%)',
          bottom: '-120px', right: '-160px', filter: 'blur(40px)',
        }}
        animate={{ x: [0, -50, 30, 0], y: [0, 60, -35, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '380px', height: '380px',
          background: 'radial-gradient(circle, rgba(0,214,143,0.12) 0%, transparent 70%)',
          top: '40%', left: '50%', transform: 'translateX(-50%)', filter: 'blur(30px)',
        }}
        animate={{ x: [0, 40, -60, 0], y: [0, -70, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />

      {/* ── Dense dot grid ────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,214,143,0.14) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── Grid lines ────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,214,143,0.05) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(0,214,143,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* ── Animated scan line ────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 5%, rgba(0,214,143,0.55) 50%, transparent 95%)',
            boxShadow: '0 0 14px rgba(0,214,143,0.35)',
          }}
          animate={{ top: ['-2%', '102%'] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
        />
      </div>

      {/* ── Corner accent marks ───────────────────────────────────── */}
      {[
        { top: 20, left: 20,   borderTop: '2px solid rgba(0,214,143,0.4)', borderLeft: '2px solid rgba(0,214,143,0.4)' },
        { top: 20, right: 20,  borderTop: '2px solid rgba(0,214,143,0.4)', borderRight: '2px solid rgba(0,214,143,0.4)' },
        { bottom: 20, left: 20, borderBottom: '2px solid rgba(168,85,247,0.35)', borderLeft: '2px solid rgba(168,85,247,0.35)' },
        { bottom: 20, right: 20, borderBottom: '2px solid rgba(168,85,247,0.35)', borderRight: '2px solid rgba(168,85,247,0.35)' },
      ].map((style, i) => (
        <div
          key={i}
          className="absolute w-6 h-6 pointer-events-none"
          style={style}
        />
      ))}

      {/* ── Main content ──────────────────────────────────────────── */}
      <div className="relative z-10 wrap px-4 sm:px-6 lg:px-8 py-28 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Text column ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85 }}
          >
            {/* Greeting */}
            <motion.p
              className="text-xs font-bold tracking-[0.45em] uppercase mb-5"
              style={{ color: '#6ee7b7' }}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              👋 Hola, soy
            </motion.p>

            {/* Name */}
            <motion.h1
              className="font-display font-black text-white leading-[1.05] mb-4 tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {NOMBRE}
              <br />
              <span className="grad-text">{APELLIDO}</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              className="text-xl sm:text-2xl text-slate-300 mb-7 h-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <Typewriter texts={ROLES} />
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              {BIO}
            </motion.p>

            {/* Info chips */}
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
                <span
                  key={text}
                  className="flex items-center gap-2 text-slate-300 text-sm px-4 py-2 rounded-xl"
                  style={{
                    background: 'rgba(4,16,10,0.9)',
                    border: '1px solid rgba(0,214,143,0.22)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  {icon} {text}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.73 }}
            >
              <button onClick={() => navigate('/proyectos')} className="btn">Ver Proyectos</button>
              <button onClick={() => navigate('/contacto')}  className="btn-outline">Contáctame</button>
            </motion.div>

            {/* Social links */}
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
                  className="w-10 h-10 flex items-center justify-center rounded-full text-slate-400 transition-all duration-200 hover:scale-110"
                  style={{ background: 'rgba(4,16,10,0.9)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,214,143,0.6)'
                    e.currentTarget.style.color = '#6ee7b7'
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0,214,143,0.35)'
                    e.currentTarget.style.background = 'rgba(0,214,143,0.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.color = '#94a3b8'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.background = 'rgba(4,16,10,0.9)'
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Avatar column ────────────────────────────────────── */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.35 }}
          >
            <div className="relative">

              {/* Outer dashed spinning ring */}
              <div
                className="absolute rounded-full pointer-events-none animate-spin-slow"
                style={{ inset: '-22px', border: '1px dashed rgba(0,214,143,0.4)' }}
              />

              {/* Second outer ring — counter rotation */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: '-38px',
                  border: '1px dashed rgba(168,85,247,0.25)',
                  animation: 'spin 42s linear infinite reverse',
                }}
              />

              {/* Conic gradient glow */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: '-8px',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #00e89a, #a855f7, #00d68f, #00e89a)',
                  opacity: 0.6,
                  filter: 'blur(12px)',
                }}
              />

              {/* Inner solid accent ring */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: '-2px',
                  borderRadius: '50%',
                  border: '2px solid rgba(0,214,143,0.65)',
                  boxShadow: '0 0 20px rgba(0,214,143,0.4)',
                }}
              />

              {/* Profile photo */}
              <div
                className="relative overflow-hidden"
                style={{
                  width: '400px', height: '400px',
                  borderRadius: '50%',
                  border: '3px solid #030a06',
                }}
              >
                <img
                  src="/image.png"
                  alt="Walter Sebastian Pacheco Orizano"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Badge: disponible */}
              <motion.div
                className="absolute -top-4 -right-10 px-3 py-2 text-sm font-semibold text-white flex items-center gap-2 rounded-2xl"
                style={{
                  background: 'rgba(4,16,10,0.96)',
                  border: '1px solid rgba(0,214,143,0.3)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.55)',
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-ping absolute" />
                  <span className="w-2 h-2 rounded-full bg-green-400 relative" />
                </span>
                Disponible
              </motion.div>

              {/* Badge: año */}
              <motion.div
                className="absolute -bottom-4 -left-10 px-3 py-2 text-sm font-semibold text-white rounded-2xl"
                style={{
                  background: 'rgba(4,16,10,0.96)',
                  border: '1px solid rgba(168,85,247,0.35)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.55)',
                }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                ⚡ {AÑO} — UNHEVAL
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => navigate('/proyectos')}
        >
          <span className="text-xs tracking-[0.35em] font-mono">SCROLL</span>
          <FiArrowDown size={14} />
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
