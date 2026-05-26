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
  { icon: '🎓', texto: '3er año de universidad',  color: 'from-curious-blue-600 to-curious-blue-800' },
  { icon: '💻', texto: 'Proyectos web personales', color: 'from-curious-blue-500 to-curious-blue-700' },
  { icon: '📚', texto: 'Aprendizaje autodidacta',  color: 'from-curious-blue-700 to-curious-blue-900' },
  { icon: '🌎', texto: 'Huánuco, Perú',            color: 'from-curious-blue-400 to-curious-blue-600' },
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
  <section id="about" className="section bg-slate-950">
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
          <div className="glass p-8">
            <div className="flex gap-4">
              {/* Barra decorativa lateral */}
              <div className="w-1 rounded-full bg-gradient-to-b from-curious-blue-400 to-curious-blue-800 shrink-0" />
              <div>
                <p className="text-slate-300 text-lg leading-relaxed mb-5">{DESCRIPCION}</p>
                <p className="text-slate-400 leading-relaxed">{DESCRIPCION2}</p>
              </div>
            </div>
          </div>

          {/* Intereses */}
          <div className="glass p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-curious-blue-500/20 border border-curious-blue-500/30
                               flex items-center justify-center text-xs">⚡</span>
              Intereses tecnológicos
            </h3>
            <div className="flex flex-wrap gap-2">
              {INTERESES.map((int) => (
                <span
                  key={int}
                  className="px-3 py-1.5 bg-curious-blue-500/10 border border-curious-blue-500/20
                             rounded-full text-curious-blue-300 text-sm
                             hover:bg-curious-blue-500/20 hover:border-curious-blue-400/40
                             hover:text-curious-blue-200 transition-all cursor-default"
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
            {DESTACADOS.map(({ icon, texto, color }, i) => (
              <motion.div
                key={texto}
                className="glass p-5 flex flex-col items-center text-center
                           hover:border-curious-blue-500/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color}
                                 flex items-center justify-center text-2xl mb-3
                                 shadow-lg shadow-curious-blue-900/50`}>
                  {icon}
                </div>
                <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                  {texto}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Tabla de información */}
          <div className="glass p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-curious-blue-500/20 border border-curious-blue-500/30
                               flex items-center justify-center text-xs">📋</span>
              Información personal
            </h3>
            <div className="space-y-0">
              {INFO.map(({ label, valor }) => (
                <div key={label}
                  className="flex gap-3 text-sm py-2.5 border-b border-slate-800/60 last:border-0">
                  <span className="text-curious-blue-500 min-w-28 shrink-0 font-semibold">{label}</span>
                  <span className="text-slate-300">{valor}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Botones redes */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Sebaspach0423"
              target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 glass rounded-2xl
                         hover:border-curious-blue-500/40 hover:bg-curious-blue-500/5
                         text-slate-300 hover:text-white transition-all text-sm font-medium"
            >
              <FaGithub size={16} /> GitHub
            </a>
            <a
              href="https://wa.me/51965278791"
              target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 glass rounded-2xl
                         hover:border-green-500/40 hover:bg-green-500/5
                         text-slate-300 hover:text-green-400 transition-all text-sm font-medium"
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
