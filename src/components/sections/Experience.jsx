import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

// ── Datos: experiencia y educación ───────────────────────────────────────────
const HISTORIAL = [
  {
    titulo: 'Ingeniería de Sistemas',
    lugar: 'Universidad Nacional Hermilio Valdizán (UNHEVAL)',
    periodo: '2022 – Presente',
    descripcion: 'Formación universitaria en desarrollo de software, algoritmos y estructuras de datos, bases de datos, ingeniería de software, redes de computadoras y sistemas operativos.',
    tipo: 'educacion',
    icono: '🎓',
  },
  {
    titulo: 'Desarrollador Web Freelance',
    lugar: 'Proyectos independientes',
    periodo: '2023 – Presente',
    descripcion: 'Desarrollo de páginas web y aplicaciones para clientes locales. Trabajo con HTML, CSS, JavaScript y PHP. Gestión de bases de datos con MySQL.',
    tipo: 'trabajo',
    icono: '💻',
  },
  {
    titulo: 'Curso Full Stack Web Development',
    lugar: 'Udemy / Autoestudio',
    periodo: '2023',
    descripcion: 'Capacitación en desarrollo web completo: frontend con React, backend con Node.js y bases de datos relacionales y no relacionales.',
    tipo: 'educacion',
    icono: '📚',
  },
  {
    titulo: 'Bachillerato',
    lugar: 'Colegio Nacional — Huánuco',
    periodo: '2016 – 2021',
    descripcion: 'Educación secundaria con especial interés en matemáticas, física y computación. Primer contacto con programación en Python.',
    tipo: 'educacion',
    icono: '🏫',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const Item = ({ item, i, esIzquierda }) => (
  <div className={`relative flex ${esIzquierda ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row items-start gap-6 md:gap-0`}>

    {/* Contenido */}
    <motion.div
      className={`w-full md:w-5/12 ${esIzquierda ? 'md:pr-10' : 'md:pl-10'} pl-10 md:pl-0`}
      initial={{ opacity: 0, x: esIzquierda ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
    >
      <div className="glass p-6 hover:border-cyan-500/20 transition-colors">
        {/* Badge tipo */}
        <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${
          item.tipo === 'trabajo'
            ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
            : 'bg-purple-500/15 text-purple-400 border border-purple-500/30'
        }`}>
          {item.tipo === 'trabajo' ? '💼 Laboral' : '🎓 Educación'}
        </span>
        <h3 className="text-white font-bold text-lg mb-1">{item.titulo}</h3>
        <p className="text-cyan-400 text-sm font-medium mb-1">{item.lugar}</p>
        <p className="text-slate-500 text-xs mb-3">{item.periodo}</p>
        <p className="text-slate-400 text-sm leading-relaxed">{item.descripcion}</p>
      </div>
    </motion.div>

    {/* Nodo central — solo en desktop */}
    <div className="hidden md:flex w-2/12 justify-center items-start pt-7">
      <motion.div
        className="relative z-10 w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-500
                   flex items-center justify-center text-lg shadow-[0_0_20px_rgba(6,182,212,0.4)]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', delay: i * 0.1 + 0.2 }}
      >
        {item.icono}
      </motion.div>
    </div>

    {/* Nodo izquierdo en móvil */}
    <div className="absolute left-0 top-7 md:hidden">
      <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-sm">
        {item.icono}
      </div>
    </div>

    <div className="hidden md:block w-5/12" />
  </div>
)

const Experience = () => (
  <section id="experience" className="section bg-slate-900/50">
    <div className="wrap">
      <SectionTitle
        tag="Trayectoria"
        title="Experiencia &"
        highlight="Educación"
        subtitle="Mi recorrido académico y los proyectos que me formaron."
      />

      <div className="relative">
        {/* Línea vertical (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px
                        bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent -translate-x-1/2" />
        {/* Línea vertical (móvil) */}
        <div className="md:hidden absolute left-3.5 top-0 bottom-0 w-px
                        bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />

        <div className="flex flex-col gap-10">
          {HISTORIAL.map((item, i) => (
            <Item key={item.titulo} item={item} i={i} esIzquierda={i % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Experience
