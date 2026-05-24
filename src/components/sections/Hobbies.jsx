import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

// ── Datos: hobbies e intereses ────────────────────────────────────────────────
const HOBBIES = [
  {
    icono: '💻',
    nombre: 'Programación',
    descripcion: 'Disfruto codificar proyectos personales para aprender nuevas tecnologías y resolver problemas.',
  },
  {
    icono: '🎮',
    nombre: 'Videojuegos',
    descripcion: 'Fan de los RPGs y juegos de estrategia. Me enseñaron lógica, paciencia y pensamiento táctico.',
  },
  {
    icono: '📚',
    nombre: 'Lectura',
    descripcion: 'Leo sobre tecnología, emprendimiento y desarrollo personal. Siempre con un libro entre manos.',
  },
  {
    icono: '🎵',
    nombre: 'Música',
    descripcion: 'La música me acompaña mientras programo. Fan del rock alternativo y la música electrónica.',
  },
  {
    icono: '🔐',
    nombre: 'Ciberseguridad',
    descripcion: 'Estudio conceptos de seguridad web y redes. Me interesan los CTFs y el ethical hacking.',
  },
  {
    icono: '📷',
    nombre: 'Fotografía',
    descripcion: 'Fotografío paisajes de Huánuco y momentos cotidianos. Me gusta capturar la belleza de lo simple.',
  },
  {
    icono: '🌐',
    nombre: 'Open Source',
    descripcion: 'Exploro proyectos de código abierto, aprendo de la comunidad y trato de contribuir cuando puedo.',
  },
  {
    icono: '🔧',
    nombre: 'Hardware & Arduino',
    descripcion: 'Me divierte armar pequeños proyectos electrónicos con Arduino y Raspberry Pi.',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const Hobbies = () => (
  <section className="section bg-slate-900/50">
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
            className="glass p-6 group hover:border-purple-500/30 transition-all cursor-default"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-200">
              {h.icono}
            </span>
            <h3 className="text-white font-semibold mb-2 group-hover:text-purple-400 transition-colors">
              {h.nombre}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">{h.descripcion}</p>
          </motion.div>
        ))}
      </div>

      {/* Cita personal */}
      <motion.div
        className="mt-12 glass p-8 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-slate-300 text-lg italic leading-relaxed">
          "La curiosidad es el motor que me mantiene aprendiendo cada día."
        </p>
        <p className="text-slate-600 text-sm mt-3">— Walter Sebastian Pacheco Orizano</p>
      </motion.div>
    </div>
  </section>
)

export default Hobbies
