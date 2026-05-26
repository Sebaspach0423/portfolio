import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

// ── Datos ─────────────────────────────────────────────────────────────────────
const HOBBIES = [
  {
    icono: '💻',
    nombre: 'Programación',
    descripcion: 'Disfruto codificar proyectos personales para aprender nuevas tecnologías y resolver problemas.',
    color: 'rgba(0,214,143,0.4)',
  },
  {
    icono: '🎮',
    nombre: 'Videojuegos',
    descripcion: 'Fan de los RPGs y juegos de estrategia. Me enseñaron lógica, paciencia y pensamiento táctico.',
    color: 'rgba(168,85,247,0.4)',
  },
  {
    icono: '📚',
    nombre: 'Lectura',
    descripcion: 'Leo sobre tecnología, emprendimiento y desarrollo personal. Siempre con un libro entre manos.',
    color: 'rgba(34,211,238,0.4)',
  },
  {
    icono: '🎵',
    nombre: 'Música',
    descripcion: 'La música me acompaña mientras programo. Fan del rock alternativo y la música electrónica.',
    color: 'rgba(251,191,36,0.35)',
  },
  {
    icono: '🔐',
    nombre: 'Ciberseguridad',
    descripcion: 'Estudio conceptos de seguridad web y redes. Me interesan los CTFs y el ethical hacking.',
    color: 'rgba(0,214,143,0.4)',
  },
  {
    icono: '📷',
    nombre: 'Fotografía',
    descripcion: 'Fotografío paisajes de Huánuco y momentos cotidianos. Me gusta capturar la belleza de lo simple.',
    color: 'rgba(168,85,247,0.4)',
  },
  {
    icono: '🌐',
    nombre: 'Open Source',
    descripcion: 'Exploro proyectos de código abierto, aprendo de la comunidad y trato de contribuir cuando puedo.',
    color: 'rgba(34,211,238,0.4)',
  },
  {
    icono: '🔧',
    nombre: 'Hardware & Arduino',
    descripcion: 'Me divierte armar pequeños proyectos electrónicos con Arduino y Raspberry Pi.',
    color: 'rgba(251,191,36,0.35)',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const Hobbies = () => (
  <section className="section" style={{ background: 'rgba(5,10,25,0.65)' }}>
    <div className="wrap">
      <SectionTitle
        tag="Hobbies"
        title="Más allá del"
        highlight="Código"
        subtitle="Lo que me apasiona en mi tiempo libre y cómo enriquece mi perspectiva."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {HOBBIES.map((h, i) => (
          <motion.div
            key={h.nombre}
            className="group cursor-default overflow-hidden relative rounded-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileHover={{ y: -8, boxShadow: `0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px ${h.color}` }}
            style={{
              background: 'rgba(4,16,10,0.88)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
              padding: '1.5rem',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Top accent on hover */}
            <div
              className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(90deg, transparent, ${h.color}, transparent)` }}
            />

            {/* Background glow overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              style={{ background: `radial-gradient(circle at 30% 30%, ${h.color.replace('0.4', '0.06')} 0%, transparent 70%)` }}
            />

            <span
              className="text-4xl block mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300"
              style={{ filter: `drop-shadow(0 0 10px ${h.color})` }}
            >
              {h.icono}
            </span>
            <h3
              className="font-semibold mb-2 relative z-10 transition-colors duration-200"
              style={{ color: 'white' }}
            >
              {h.nombre}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed relative z-10 group-hover:text-slate-400 transition-colors duration-200">
              {h.descripcion}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Cita personal */}
      <motion.div
        className="mt-12 p-8 text-center max-w-2xl mx-auto relative overflow-hidden rounded-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          background: 'rgba(4,16,10,0.88)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
        }}
      >
        <div
          className="absolute top-0 inset-x-0 h-0.5"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,214,143,0.55), rgba(168,85,247,0.4), transparent)' }}
        />
        <p className="text-slate-300 text-lg italic leading-relaxed">
          "La curiosidad es el motor que me mantiene aprendiendo cada día."
        </p>
        <p className="text-slate-600 text-sm mt-3">— Walter Sebastian Pacheco Orizano</p>
      </motion.div>
    </div>
  </section>
)

export default Hobbies
