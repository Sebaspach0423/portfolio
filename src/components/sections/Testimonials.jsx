import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

// ── Datos: testimonios ────────────────────────────────────────────────────────
const TESTIMONIOS = [
  {
    nombre: 'Dr. Carlos Flores',
    rol: 'Docente de Ingeniería de Software — UNHEVAL',
    texto: 'Walter es un estudiante destacado con una capacidad notable para asimilar conceptos complejos y llevarlos a la práctica. Siempre entrega trabajos de calidad y muestra iniciativa propia.',
    avatar: 'CF',
    estrellas: 5,
  },
  {
    nombre: 'Ing. Mariela Torres',
    rol: 'Profesora de Bases de Datos — UNHEVAL',
    texto: 'Demostró un manejo sólido de bases de datos relacionales y una actitud proactiva ante los desafíos. Sus proyectos van más allá de lo requerido, lo que refleja su compromiso con el aprendizaje.',
    avatar: 'MT',
    estrellas: 5,
  },
  {
    nombre: 'Luis Quispe',
    rol: 'Compañero de proyectos universitarios',
    texto: 'Trabajar con Walter es una experiencia muy positiva. Es organizado, comunicativo y siempre aporta soluciones creativas. Un compañero de equipo que inspira a dar lo mejor.',
    avatar: 'LQ',
    estrellas: 5,
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const Testimonials = () => {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)

  // Avance automático cada 5 segundos
  useEffect(() => {
    const t = setInterval(() => { setDir(1); setIdx((i) => (i + 1) % TESTIMONIOS.length) }, 5000)
    return () => clearInterval(t)
  }, [])

  const ir = (d) => { setDir(d); setIdx((i) => (i + d + TESTIMONIOS.length) % TESTIMONIOS.length) }

  const variantes = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ? 60 : -60, scale: 0.96 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -60 : 60, scale: 0.96, transition: { duration: 0.3 } }),
  }

  const t = TESTIMONIOS[idx]

  return (
    <section className="section" style={{ background: '#050a14' }}>
      <div className="wrap">
        <SectionTitle
          tag="Testimonios"
          title="Lo que dicen"
          highlight="de mí"
          subtitle="Opiniones de docentes y compañeros que conocen mi trabajo."
        />

        <div className="max-w-3xl mx-auto">
          {/* Tarjeta del testimonio */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={idx}
                custom={dir}
                variants={variantes}
                initial="enter"
                animate="center"
                exit="exit"
                className="glass p-10 text-center relative overflow-hidden"
              >
                {/* Top gradient line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-curious-blue-400/60 to-transparent" />

                {/* Quote icon — styled */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                       style={{ background: 'rgba(7,154,218,0.1)', border: '1px solid rgba(7,154,218,0.2)' }}>
                    <FaQuoteLeft className="text-curious-blue-400 text-xl" />
                  </div>
                </div>

                {/* Estrellas */}
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: t.estrellas }).map((_, i) => (
                    <FaStar key={i} size={14} className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-lg leading-relaxed italic mb-8">"{t.texto}"</p>

                {/* Avatar y nombre — con gradient border */}
                <div className="flex flex-col items-center gap-2">
                  <div className="relative">
                    {/* Gradient border ring */}
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-curious-blue-400 to-violet-500 opacity-70" />
                    <div className="relative w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
                         style={{ background: 'linear-gradient(135deg, #079ada, #006ca6)' }}>
                      {t.avatar}
                    </div>
                  </div>
                  <p className="text-white font-semibold mt-1">{t.nombre}</p>
                  <p className="text-slate-500 text-sm">{t.rol}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => ir(-1)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(7,154,218,0.4)'
                e.currentTarget.style.background = 'rgba(7,154,218,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              }}>
              <FiChevronLeft size={18} />
            </button>

            {/* Puntos indicadores — mejorados */}
            <div className="flex gap-2 items-center">
              {TESTIMONIOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    height: '8px',
                    width: i === idx ? '24px' : '8px',
                    background: i === idx
                      ? 'linear-gradient(90deg, #079ada, #32c1fe)'
                      : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>

            <button onClick={() => ir(1)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(7,154,218,0.4)'
                e.currentTarget.style.background = 'rgba(7,154,218,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              }}>
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
