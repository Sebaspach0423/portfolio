import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

// ── Datos: preguntas frecuentes ───────────────────────────────────────────────
const PREGUNTAS = [
  {
    pregunta: '¿Estás disponible para proyectos freelance?',
    respuesta: '¡Sí! Estoy disponible para proyectos de desarrollo web. Me especializo en sitios estáticos, aplicaciones React y sistemas con base de datos. Escribime a wsebaspach23@gmail.com para coordinar.',
  },
  {
    pregunta: '¿Cuánto tiempo llevás programando?',
    respuesta: 'Empecé a programar en el colegio con Python y llevo aproximadamente 3 años desarrollando proyectos web. Cada día aprendo algo nuevo que me motiva a seguir creciendo.',
  },
  {
    pregunta: '¿Podés trabajar en equipo de forma remota?',
    respuesta: 'Sí, tengo experiencia trabajando con compañeros de forma remota usando Git, GitHub, WhatsApp y Notion para coordinar tareas y mantener una comunicación fluida.',
  },
  {
    pregunta: '¿Qué tecnologías preferís usar?',
    respuesta: 'Para el frontend me gusta React con TailwindCSS. Para el backend prefiero Node.js o Python con Flask. Y para bases de datos uso MySQL o PostgreSQL según el proyecto.',
  },
  {
    pregunta: '¿Cómo organizás tu proceso de trabajo?',
    respuesta: 'Comienzo levantando los requisitos, luego hago un diseño simple en papel o Figma, desarrollo por partes y voy probando cada funcionalidad. Uso Git para el control de versiones.',
  },
  {
    pregunta: '¿Tenés experiencia con Docker?',
    respuesta: 'Sí, aprendí Docker este año y lo uso para contenerizar mis proyectos web. De hecho, este mismo portafolio está dockerizado y se puede levantar con un simple docker compose up.',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const ItemFAQ = ({ faq, i, abierto, toggle }) => (
  <motion.div
    className="glass overflow-hidden hover:border-white/15 transition-colors"
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: i * 0.07 }}
  >
    {/* Cabecera clickeable */}
    <button onClick={toggle} className="w-full flex items-center justify-between p-6 text-left">
      <span className="text-white font-medium pr-4">{faq.pregunta}</span>
      <motion.div
        animate={{ rotate: abierto ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="shrink-0 text-curious-blue-400"
      >
        <FiChevronDown size={20} />
      </motion.div>
    </button>

    {/* Respuesta con animación de altura */}
    <AnimatePresence initial={false}>
      {abierto && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="px-6 pb-6">
            <div className="h-px bg-white/5 mb-4" />
            <p className="text-slate-400 leading-relaxed">{faq.respuesta}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
)

const FAQ = () => {
  const [abierto, setAbierto] = useState(0)   // El primero empieza abierto

  return (
    <section className="section bg-slate-950">
      <div className="wrap">
        <SectionTitle
          tag="FAQ"
          title="Preguntas"
          highlight="Frecuentes"
          subtitle="Cosas que suelen preguntarme sobre mi trabajo y disponibilidad."
        />

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {PREGUNTAS.map((faq, i) => (
            <ItemFAQ
              key={faq.pregunta}
              faq={faq}
              i={i}
              abierto={abierto === i}
              toggle={() => setAbierto(abierto === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
