import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

// ── Datos ─────────────────────────────────────────────────────────────────────
const TESTIMONIOS = [
  {
    nombre: 'Dr. Carlos Flores',
    rol: 'Docente de Ingeniería de Software — UNHEVAL',
    texto: 'Walter es un estudiante destacado con una capacidad notable para asimilar conceptos complejos y llevarlos a la práctica. Siempre entrega trabajos de calidad y muestra iniciativa propia.',
    avatar: 'CF',
    estrellas: 5,
    color: 'rgba(0,214,143,0.5)',
  },
  {
    nombre: 'Ing. Mariela Torres',
    rol: 'Profesora de Bases de Datos — UNHEVAL',
    texto: 'Demostró un manejo sólido de bases de datos relacionales y una actitud proactiva ante los desafíos. Sus proyectos van más allá de lo requerido, lo que refleja su compromiso con el aprendizaje.',
    avatar: 'MT',
    estrellas: 5,
    color: 'rgba(168,85,247,0.5)',
  },
  {
    nombre: 'Luis Quispe',
    rol: 'Compañero de proyectos universitarios',
    texto: 'Trabajar con Walter es una experiencia muy positiva. Es organizado, comunicativo y siempre aporta soluciones creativas. Un compañero de equipo que inspira a dar lo mejor.',
    avatar: 'LQ',
    estrellas: 5,
    color: 'rgba(34,211,238,0.5)',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const Testimonials = () => {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1)
      setIdx((i) => (i + 1) % TESTIMONIOS.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  const ir = (d) => {
    setDir(d)
    setIdx((i) => (i + d + TESTIMONIOS.length) % TESTIMONIOS.length)
  }

  const variantes = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ? 70 : -70, scale: 0.95 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -70 : 70, scale: 0.95, transition: { duration: 0.3 } }),
  }

  const t = TESTIMONIOS[idx]

  const NavBtn = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="w-11 h-11 rounded-full flex items-center justify-center text-slate-400 transition-all duration-200"
      style={{ background: 'rgba(4,16,10,0.9)', border: '1px solid rgba(255,255,255,0.1)' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(0,214,143,0.5)'
        e.currentTarget.style.color = '#6ee7b7'
        e.currentTarget.style.boxShadow = '0 0 18px rgba(0,214,143,0.25)'
        e.currentTarget.style.background = 'rgba(0,214,143,0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
        e.currentTarget.style.color = '#64748b'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.background = 'rgba(4,16,10,0.9)'
      }}
    >
      {children}
    </button>
  )

  return (
    <section className="section" style={{ background: 'rgba(4,8,18,0.6)' }}>
      <div className="wrap">
        <SectionTitle
          tag="Testimonios"
          title="Lo que dicen"
          highlight="de mí"
          subtitle="Opiniones de docentes y compañeros que conocen mi trabajo."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={idx}
                custom={dir}
                variants={variantes}
                initial="enter"
                animate="center"
                exit="exit"
                className="p-10 text-center relative overflow-hidden rounded-2xl"
                style={{
                  background: 'rgba(4,16,10,0.92)',
                  border: `1px solid ${t.color.replace('0.5', '0.25')}`,
                  boxShadow: `0 8px 40px rgba(0,0,0,0.65), 0 0 40px ${t.color.replace('0.5', '0.08')}`,
                }}
              >
                {/* Top gradient line */}
                <div
                  className="absolute top-0 inset-x-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, transparent, ${t.color}, transparent)` }}
                />

                {/* Quote icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: t.color.replace('0.5', '0.1'),
                      border: `1px solid ${t.color.replace('0.5', '0.3')}`,
                      boxShadow: `0 0 20px ${t.color.replace('0.5', '0.2')}`,
                    }}
                  >
                    <FaQuoteLeft style={{ color: t.color.replace('0.5', '1'), fontSize: '1.25rem' }} />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-5">
                  {Array.from({ length: t.estrellas }).map((_, i) => (
                    <FaStar key={i} size={15} style={{ color: '#fbbf24', filter: 'drop-shadow(0 0 4px rgba(251,191,36,0.6))' }} />
                  ))}
                </div>

                <p className="text-slate-300 text-lg leading-relaxed italic mb-8">"{t.texto}"</p>

                {/* Avatar */}
                <div className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <div
                      className="absolute -inset-0.5 rounded-full"
                      style={{
                        background: `conic-gradient(from 0deg, ${t.color}, rgba(168,85,247,0.8), ${t.color})`,
                        opacity: 0.8,
                      }}
                    />
                    <div
                      className="relative w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0,214,143,0.3), rgba(168,85,247,0.3))',
                        backdropFilter: 'blur(12px)',
                      }}
                    >
                      {t.avatar}
                    </div>
                  </div>
                  <p className="text-white font-semibold mt-1">{t.nombre}</p>
                  <p className="text-slate-500 text-sm">{t.rol}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <NavBtn onClick={() => ir(-1)}><FiChevronLeft size={18} /></NavBtn>

            <div className="flex gap-2 items-center">
              {TESTIMONIOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    height: '8px',
                    width: i === idx ? '28px' : '8px',
                    background: i === idx
                      ? 'linear-gradient(90deg, #00e89a, #a855f7)'
                      : 'rgba(255,255,255,0.15)',
                    boxShadow: i === idx ? '0 0 10px rgba(0,214,143,0.5)' : 'none',
                  }}
                />
              ))}
            </div>

            <NavBtn onClick={() => ir(1)}><FiChevronRight size={18} /></NavBtn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
