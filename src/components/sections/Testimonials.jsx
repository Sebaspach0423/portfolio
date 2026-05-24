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
    <section className="section bg-slate-950">
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
                className="glass p-10 text-center"
              >
                <FaQuoteLeft className="text-cyan-400/40 text-4xl mx-auto mb-6" />

                {/* Estrellas */}
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: t.estrellas }).map((_, i) => (
                    <FaStar key={i} size={14} className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-lg leading-relaxed italic mb-8">"{t.texto}"</p>

                {/* Avatar y nombre */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500
                                  flex items-center justify-center text-white font-bold text-lg">
                    {t.avatar}
                  </div>
                  <p className="text-white font-semibold">{t.nombre}</p>
                  <p className="text-slate-500 text-sm">{t.rol}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => ir(-1)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all">
              <FiChevronLeft size={18} />
            </button>

            {/* Puntos indicadores */}
            <div className="flex gap-2">
              {TESTIMONIOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === idx ? 'bg-cyan-400 w-6' : 'bg-slate-700 w-2.5 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <button onClick={() => ir(1)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all">
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
