import { motion } from 'framer-motion'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'

// ── Datos: "Sobre mí" ────────────────────────────────────────────────────────
const DESCRIPCION = `Soy Walter Sebastian Pacheco Orizano, estudiante de Ingeniería de Sistemas en la
Universidad Nacional Hermilio Valdizán (UNHEVAL). Me apasiona el desarrollo de software y la
tecnología en general. Disfruto construir aplicaciones web modernas, aprender nuevas herramientas
y aplicar mis conocimientos para resolver problemas del mundo real.`

const DESCRIPCION2 = `Combino mi formación académica con el autoaprendizaje continuo, explorando tecnologías
como React, Node.js y bases de datos. Busco siempre crecer profesionalmente y aportar valor
en cada proyecto que emprendo.`

const DESTACADOS = [
  { icon: '🎓', texto: '3er año de universidad' },
  { icon: '💻', texto: 'Proyectos web personales' },
  { icon: '📚', texto: 'Aprendizaje autodidacta' },
  { icon: '🌎', texto: 'Huánuco, Perú' },
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
  { label: 'Universidad', valor: 'Univ. Nacional Hermilio Valdizán' },
  { label: 'Carrera',     valor: 'Ingeniería de Sistemas' },
  { label: 'Año',         valor: '3er año' },
  { label: 'Ubicación',   valor: 'Huánuco, Perú' },
  { label: 'Email',       valor: 'wsebaspach23@gmail.com' },
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

        {/* ── Izquierda: descripción ─── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5"
        >
          <div className="glass p-8">
            <p className="text-slate-300 text-lg leading-relaxed mb-5">{DESCRIPCION}</p>
            <p className="text-slate-400 leading-relaxed">{DESCRIPCION2}</p>
          </div>

          {/* Intereses */}
          <div className="glass p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-cyan-400">⚡</span> Intereses tecnológicos
            </h3>
            <div className="flex flex-wrap gap-2">
              {INTERESES.map((int) => (
                <span key={int} className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm">
                  {int}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Derecha: datos + links ─── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5"
        >
          {/* Tarjetas destacadas */}
          <div className="grid grid-cols-2 gap-4">
            {DESTACADOS.map(({ icon, texto }, i) => (
              <motion.div
                key={texto}
                className="glass p-5 flex flex-col items-center text-center hover:border-cyan-500/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-3xl mb-2">{icon}</span>
                <span className="text-slate-300 text-sm font-medium">{texto}</span>
              </motion.div>
            ))}
          </div>

          {/* Tabla de información */}
          <div className="glass p-6">
            <h3 className="text-white font-semibold mb-4">📋 Información personal</h3>
            <div className="space-y-3">
              {INFO.map(({ label, valor }) => (
                <div key={label} className="flex gap-3 text-sm">
                  <span className="text-slate-500 min-w-28 shrink-0">{label}:</span>
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
              className="flex-1 flex items-center justify-center gap-2 py-3 glass hover:border-slate-500 text-slate-300 hover:text-white transition-all text-sm font-medium"
            >
              <FaGithub size={16} /> GitHub
            </a>
            <a
              href="https://wa.me/51965278791"
              target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 glass hover:border-green-500/50 text-slate-300 hover:text-green-400 transition-all text-sm font-medium"
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
