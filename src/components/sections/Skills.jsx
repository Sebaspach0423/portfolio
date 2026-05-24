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

// Barra de progreso animada al hacer scroll
const Barra = ({ nombre, nivel, delay = 0 }) => {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
          {nombre}
        </span>
        <span className="text-cyan-400 text-xs font-semibold">{nivel}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full relative"
          initial={{ width: 0 }}
          animate={visible ? { width: `${nivel}%` } : {}}
          transition={{ duration: 1.2, ease: 'easeOut', delay }}
        >
          {/* Punto brillante al final de la barra */}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 -mr-1.5
                           bg-white rounded-full shadow-[0_0_8px_rgba(6,182,212,0.9)]" />
        </motion.div>
      </div>
    </div>
  )
}

// Bloque de categoría con sus barras
const Categoria = ({ titulo, icono, items, delay }) => (
  <motion.div
    className="glass p-6 hover:border-cyan-500/20 transition-colors"
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
      <span className="text-xl">{icono}</span> {titulo}
    </h3>
    <div className="space-y-4">
      {items.map((skill, i) => (
        <Barra key={skill.nombre} nombre={skill.nombre} nivel={skill.nivel} delay={i * 0.08 + delay} />
      ))}
    </div>
  </motion.div>
)

const Skills = () => (
  <section id="skills" className="section bg-slate-900/50">
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
          <span className="text-2xl">🤝</span> Habilidades Blandas
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {SOFT_SKILLS.map((s, i) => (
            <motion.span
              key={s}
              className="px-4 py-2 glass text-slate-300 text-sm font-medium
                         hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-default"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.05 }}
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
