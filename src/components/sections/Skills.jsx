import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

// ── Datos ─────────────────────────────────────────────────────────────────────
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

const Barra = ({ nombre, nivel, delay = 0 }) => {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
          {nombre}
        </span>
        <span className="text-xs font-bold font-mono" style={{ color: '#6ee7b7' }}>
          {nivel}%
        </span>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.05)' }}
      >
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #00e89a 0%, #00d68f 50%, #00e89a 100%)',
            backgroundSize: '200% 100%',
          }}
          initial={{ width: 0 }}
          animate={visible ? { width: `${nivel}%` } : {}}
          transition={{ duration: 1.3, ease: 'easeOut', delay }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer" />
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 -mr-1.5 rounded-full bg-[#00e89a]"
            style={{ boxShadow: '0 0 14px rgba(0,214,143,1), 0 0 28px rgba(0,214,143,0.5)' }}
          />
        </motion.div>
      </div>
    </div>
  )
}

const CATEGORY_STYLES = {
  'Frontend':       { color: '#6ee7b7',  border: 'rgba(0,214,143,0.35)',   bg: 'rgba(0,214,143,0.08)'   },
  'Backend':        { color: '#d8b4fe',  border: 'rgba(168,85,247,0.35)',  bg: 'rgba(168,85,247,0.08)'  },
  'Bases de datos': { color: '#6ee7b7',  border: 'rgba(34,211,238,0.35)',  bg: 'rgba(34,211,238,0.08)'  },
  'Herramientas':   { color: '#fcd34d',  border: 'rgba(251,191,36,0.3)',   bg: 'rgba(251,191,36,0.06)'  },
}

const Categoria = ({ titulo, icono, items, delay }) => {
  const cs = CATEGORY_STYLES[titulo] ?? CATEGORY_STYLES['Frontend']
  return (
    <motion.div
      className="rounded-2xl overflow-hidden relative"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, boxShadow: `0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px ${cs.border}` }}
      style={{
        background: 'rgba(4,16,10,0.88)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
      }}
    >
      <div className="absolute top-0 inset-x-0 h-0.5"
        style={{ background: `linear-gradient(90deg, transparent, ${cs.border}, transparent)` }} />
      <div className="p-6">
        <h3 className="font-semibold mb-5 flex items-center gap-2.5 text-sm uppercase tracking-wider">
          <span className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
            style={{ background: cs.bg, border: `1px solid ${cs.border}` }}>
            {icono}
          </span>
          <span style={{ color: cs.color }}>{titulo}</span>
        </h3>
        <div className="space-y-4">
          {items.map((skill, i) => (
            <Barra key={skill.nombre} nombre={skill.nombre} nivel={skill.nivel} delay={i * 0.08 + delay} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Skills = () => (
  <section id="skills" className="section" style={{ background: 'rgba(5,10,25,0.65)' }}>
    <div className="wrap">
      <SectionTitle
        tag="Habilidades"
        title="Mi"
        highlight="Stack Técnico"
        subtitle="Tecnologías que manejo y herramientas con las que trabajo."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        <Categoria titulo="Frontend"       icono="🎨" items={FRONTEND}        delay={0}   />
        <Categoria titulo="Backend"        icono="⚙️" items={BACKEND}         delay={0.1} />
        <Categoria titulo="Bases de datos" icono="🗄️" items={BASES_DE_DATOS}  delay={0.2} />
        <Categoria titulo="Herramientas"   icono="🛠️" items={HERRAMIENTAS}    delay={0.3} />
      </div>

      {/* Soft skills */}
      <motion.div
        className="rounded-2xl p-8 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ background: 'rgba(4,16,10,0.88)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 8px 40px rgba(0,0,0,0.6)' }}
      >
        <div className="absolute top-0 inset-x-0 h-0.5"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.65), transparent)' }} />

        <h3 className="font-semibold text-lg mb-6 flex items-center justify-center gap-2">
          <span className="text-2xl">🤝</span>
          <span style={{ color: '#d8b4fe' }}>Habilidades Blandas</span>
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {SOFT_SKILLS.map((s, i) => (
            <motion.span
              key={s}
              className="px-4 py-2 text-sm font-medium cursor-default rounded-xl"
              style={{ background: 'rgba(168,85,247,0.07)', border: '1px solid rgba(168,85,247,0.2)', color: '#c4b5fd' }}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{
                scale: 1.08,
                background: 'rgba(168,85,247,0.16)',
                borderColor: 'rgba(168,85,247,0.5)',
                color: '#e9d5ff',
                boxShadow: '0 0 18px rgba(168,85,247,0.28)',
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
