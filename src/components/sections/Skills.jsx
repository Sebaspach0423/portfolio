import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

// ── Datos: habilidades ────────────────────────────────────────────────────────
// El número es el porcentaje de dominio (0-100)
const FRONTEND = [
  { nombre: 'HTML5 / CSS3',   nivel: 90 },
  { nombre: 'JavaScript',     nivel: 80 },
  { nombre: 'React',          nivel: 72 },
  { nombre: 'TailwindCSS',    nivel: 78 },
  { nombre: 'Bootstrap',      nivel: 75 },
]
const BACKEND = [
  { nombre: 'Python',         nivel: 75 },
  { nombre: 'Node.js',        nivel: 65 },
  { nombre: 'PHP',            nivel: 60 },
  { nombre: 'REST APIs',      nivel: 70 },
]
const BASES_DE_DATOS = [
  { nombre: 'MySQL',          nivel: 78 },
  { nombre: 'PostgreSQL',     nivel: 65 },
  { nombre: 'MongoDB',        nivel: 58 },
]
const HERRAMIENTAS = [
  { nombre: 'Git & GitHub',   nivel: 82 },
  { nombre: 'Docker',         nivel: 60 },
  { nombre: 'Linux / Bash',   nivel: 65 },
  { nombre: 'VS Code',        nivel: 90 },
  { nombre: 'Figma',          nivel: 55 },
]
const SOFT_SKILLS = [
  'Trabajo en equipo',
  'Comunicación efectiva',
  'Resolución de problemas',
  'Aprendizaje continuo',
  'Adaptabilidad',
  'Pensamiento crítico',
  'Organización',
  'Curiosidad tecnológica',
]
// ─────────────────────────────────────────────────────────────────────────────

// Barra de progreso animada al hacer scroll — con shimmer y tip glow
const Barra = ({ nombre, nivel, delay = 0 }) => {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
          {nombre}
        </span>
        <span className="text-curious-blue-400 text-xs font-semibold">{nivel}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{ background: 'linear-gradient(90deg, #079ada, #32c1fe, #079ada)', backgroundSize: '200% 100%' }}
          initial={{ width: 0 }}
          animate={visible ? { width: `${nivel}%` } : {}}
          transition={{ duration: 1.2, ease: 'easeOut', delay }}
        >
          {/* Shimmer */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          {/* Tip glow */}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 -mr-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(7,154,218,1)]" />
        </motion.div>
      </div>
    </div>
  )
}

// Bloque de categoría con sus barras — hover glow
const Categoria = ({ titulo, icono, items, delay }) => (
  <motion.div
    className="glass p-6 transition-all duration-300 group"
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(7,154,218,0.2)' }}
  >
    <h3 className="text-white font-semibold mb-5 flex items-center gap-2 text-sm uppercase tracking-wider">
      <span className="text-lg">{icono}</span>
      <span className="text-curious-blue-400">{titulo}</span>
    </h3>
    <div className="space-y-4">
      {items.map((skill, i) => (
        <Barra key={skill.nombre} nombre={skill.nombre} nivel={skill.nivel} delay={i * 0.08 + delay} />
      ))}
    </div>
  </motion.div>
)

const Skills = () => (
  <section id="skills" className="section" style={{ background: 'rgba(5,10,20,0.6)' }}>
    <div className="wrap">
      <SectionTitle
        tag="Habilidades"
        title="Mi"
        highlight="Stack Técnico"
        subtitle="Tecnologías que manejo y herramientas con las que trabajo."
      />

      {/* Grid de categorías */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        <Categoria titulo="Frontend"         icono="🎨" items={FRONTEND}        delay={0} />
        <Categoria titulo="Backend"          icono="⚙️" items={BACKEND}         delay={0.1} />
        <Categoria titulo="Bases de datos"   icono="🗄️" items={BASES_DE_DATOS}  delay={0.2} />
        <Categoria titulo="Herramientas"     icono="🛠️" items={HERRAMIENTAS}    delay={0.3} />
      </div>

      {/* Soft skills */}
      <motion.div
        className="glass p-8 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-white font-semibold text-lg mb-6 flex items-center justify-center gap-2">
          <span className="text-2xl">🤝</span>
          <span className="text-curious-blue-400">Habilidades Blandas</span>
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {SOFT_SKILLS.map((s, i) => (
            <motion.span
              key={s}
              className="px-4 py-2 text-sm font-medium text-slate-300 cursor-default transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem' }}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{
                color: '#79d5ff',
                borderColor: 'rgba(7,154,218,0.35)',
                background: 'rgba(7,154,218,0.08)',
                scale: 1.05
              }}
            >
              ✦ {s}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

export default Skills
