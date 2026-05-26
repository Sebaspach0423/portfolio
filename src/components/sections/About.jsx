import { motion } from 'framer-motion'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'

// ── Datos ────────────────────────────────────────────────────────────────────
const DESCRIPCION = `Soy Walter Sebastian Pacheco Orizano, estudiante de Ingeniería de Sistemas en la
Universidad Nacional Hermilio Valdizán (UNHEVAL). Me apasiona el desarrollo de software y la
tecnología en general. Disfruto construir aplicaciones web modernas, aprender nuevas herramientas
y aplicar mis conocimientos para resolver problemas del mundo real.`

const DESCRIPCION2 = `Combino mi formación académica con el autoaprendizaje continuo, explorando tecnologías
como React, Node.js y bases de datos. Busco siempre crecer profesionalmente y aportar valor
en cada proyecto que emprendo.`

const DESTACADOS = [
  { icon: '🎓', texto: '3er año de universidad',   grad: 'from-[#00e89a] to-[#007548]',  glow: 'rgba(0,214,143,0.35)'   },
  { icon: '💻', texto: 'Proyectos web personales',  grad: 'from-[#a855f7] to-[#7c3aed]',  glow: 'rgba(168,85,247,0.35)'  },
  { icon: '📚', texto: 'Aprendizaje autodidacta',   grad: 'from-[#00d68f] to-[#005f9e]',  glow: 'rgba(0,214,143,0.35)'   },
  { icon: '🌎', texto: 'Huánuco, Perú',             grad: 'from-[#22d3ee] to-[#0891b2]',  glow: 'rgba(34,211,238,0.35)'  },
]

const INTERESES = [
  'Desarrollo Web Full Stack',
  'Aplicaciones móviles',
  'Bases de datos',
  'Inteligencia Artificial',
  'Open Source',
  'UI/UX Design',
]

const INFO = [
  { label: 'Nombre',      valor: 'Walter Sebastian Pacheco Orizano' },
  { label: 'Universidad', valor: 'Univ. Nacional Hermilio Valdizán'  },
  { label: 'Carrera',     valor: 'Ingeniería de Sistemas'            },
  { label: 'Año',         valor: '3er año'                           },
  { label: 'Ubicación',   valor: 'Huánuco, Perú'                     },
  { label: 'Email',       valor: 'wsebaspach23@gmail.com'            },
]
// ─────────────────────────────────────────────────────────────────────────────

const About = () => (
  <section id="about" className="section" style={{ background: 'rgba(4,8,18,0.6)' }}>
    <div className="wrap">
      <SectionTitle
        tag="Sobre mí"
        title="¿Quién"
        highlight="soy?"
        subtitle="Estudiante, desarrollador y eterno aprendiz de tecnología."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* ── Izquierda ─── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5"
        >
          {/* Bio card */}
          <div
            className="p-8 rounded-2xl relative overflow-hidden"
            style={{
              background: 'rgba(4,16,10,0.88)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
            }}
          >
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
              style={{ background: 'linear-gradient(180deg, #00e89a, #a855f7)' }}
            />
            <div className="pl-4">
              <p className="text-slate-300 text-base leading-relaxed mb-4">{DESCRIPCION}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{DESCRIPCION2}</p>
            </div>
          </div>

          {/* Intereses */}
          <div
            className="p-6 rounded-2xl"
            style={{
              background: 'rgba(4,16,10,0.88)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
            }}
          >
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span
                className="w-6 h-6 rounded-lg flex items-center justify-center text-xs"
                style={{
                  background: 'rgba(0,214,143,0.12)',
                  border: '1px solid rgba(0,214,143,0.3)',
                }}
              >
                ⚡
              </span>
              Intereses tecnológicos
            </h3>
            <div className="flex flex-wrap gap-2">
              {INTERESES.map((int) => (
                <span
                  key={int}
                  className="px-3 py-1.5 rounded-full text-sm cursor-default transition-all duration-200"
                  style={{
                    background: 'rgba(0,214,143,0.07)',
                    border: '1px solid rgba(0,214,143,0.2)',
                    color: '#6ee7b7',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(0,214,143,0.15)'
                    e.currentTarget.style.borderColor = 'rgba(0,214,143,0.45)'
                    e.currentTarget.style.color = '#a7f3d0'
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(0,214,143,0.2)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(0,214,143,0.07)'
                    e.currentTarget.style.borderColor = 'rgba(0,214,143,0.2)'
                    e.currentTarget.style.color = '#6ee7b7'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {int}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Derecha ─── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5"
        >
          {/* Tarjetas destacadas */}
          <div className="grid grid-cols-2 gap-4">
            {DESTACADOS.map(({ icon, texto, grad, glow }, i) => (
              <motion.div
                key={texto}
                className={`bg-gradient-to-br ${grad} p-px rounded-2xl`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: `0 16px 40px ${glow}, 0 0 0 1px ${glow}` }}
              >
                <div
                  className="p-5 flex flex-col items-center text-center rounded-[15px] h-full"
                  style={{ background: 'rgba(4,16,10,0.92)' }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${grad} flex items-center justify-center text-2xl mb-3`}
                    style={{ boxShadow: `0 0 20px ${glow}` }}
                  >
                    {icon}
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{texto}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info table */}
          <div
            className="p-6 rounded-2xl"
            style={{
              background: 'rgba(4,16,10,0.88)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
            }}
          >
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span
                className="w-6 h-6 rounded-lg flex items-center justify-center text-xs"
                style={{ background: 'rgba(0,214,143,0.12)', border: '1px solid rgba(0,214,143,0.3)' }}
              >
                📋
              </span>
              Información personal
            </h3>
            <div>
              {INFO.map(({ label, valor }) => (
                <div
                  key={label}
                  className="flex gap-3 text-sm py-2.5"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span className="min-w-[110px] shrink-0 font-semibold" style={{ color: '#6ee7b7' }}>
                    {label}
                  </span>
                  <span className="text-slate-300">{valor}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social buttons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Sebaspach0423"
              target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-medium transition-all duration-200"
              style={{ background: 'rgba(4,16,10,0.88)', border: '1px solid rgba(255,255,255,0.09)', color: '#94a3b8' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,214,143,0.4)'
                e.currentTarget.style.color = '#6ee7b7'
                e.currentTarget.style.boxShadow = '0 0 18px rgba(0,214,143,0.18)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'
                e.currentTarget.style.color = '#94a3b8'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <FaGithub size={16} /> GitHub
            </a>
            <a
              href="https://wa.me/51965278791"
              target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-medium transition-all duration-200"
              style={{ background: 'rgba(4,16,10,0.88)', border: '1px solid rgba(255,255,255,0.09)', color: '#94a3b8' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(74,222,128,0.4)'
                e.currentTarget.style.color = '#4ade80'
                e.currentTarget.style.boxShadow = '0 0 18px rgba(74,222,128,0.18)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'
                e.currentTarget.style.color = '#94a3b8'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <FaWhatsapp size={16} /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default About
