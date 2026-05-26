import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import PageTransition from '../components/ui/PageTransition'
import Hero           from '../components/sections/Hero'
import About          from '../components/sections/About'
import Skills         from '../components/sections/Skills'
import Stats          from '../components/sections/Stats'
import Testimonials   from '../components/sections/Testimonials'
import Hobbies        from '../components/sections/Hobbies'
import SectionTitle   from '../components/ui/SectionTitle'
import { PROYECTOS }  from '../data/proyectos'

// Tarjeta de proyecto para el home (versión compacta con Link real)
const TarjetaFeatured = ({ p, i }) => (
  <motion.div
    className="glass overflow-hidden group hover:border-white/20 transition-all"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: i * 0.1 }}
    whileHover={{ y: -5 }}
  >
    <div className={`h-36 bg-gradient-to-br ${p.gradiente} flex items-center justify-center text-5xl`}>
      {p.emoji}
    </div>
    <div className="p-5">
      <h3 className="text-white font-bold mb-1 group-hover:text-curious-blue-400 transition-colors">{p.titulo}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{p.descripcion}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {p.tecnologias.slice(0, 3).map(t => (
          <span key={t} className="px-2 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-400 text-xs">{t}</span>
        ))}
      </div>
      {/* Este botón navega a la página de detalle del proyecto */}
      <Link
        to={`/proyectos/${p.id}`}
        className="flex items-center gap-1.5 text-curious-blue-400 hover:text-curious-blue-300 text-sm font-medium transition-colors"
      >
        Ver detalles <FiArrowRight size={14} />
      </Link>
    </div>
  </motion.div>
)

// Grid de accesos rápidos a todas las páginas del sitio
const AccesosRapidos = () => {
  const pages = [
    { emoji: '📁', label: 'Todos los proyectos', desc: '4 proyectos detallados',      path: '/proyectos' },
    { emoji: '🎓', label: 'Certificaciones',      desc: '8 cursos completados',        path: '/certificaciones' },
    { emoji: '📝', label: 'Blog técnico',          desc: '4 artículos publicados',      path: '/blog' },
    { emoji: '📊', label: 'Mi Dashboard',          desc: 'Estadísticas y actividad',    path: '/dashboard' },
    { emoji: '📞', label: 'Contacto',              desc: 'Hablemos de tu proyecto',     path: '/contacto' },
  ]

  return (
    <section className="section bg-slate-900/50">
      <div className="wrap">
        <SectionTitle tag="Explorar" title="Todo el" highlight="Sitio" subtitle="Navegá por todas las secciones del portfolio." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {pages.map(({ emoji, label, desc, path }, i) => (
            <motion.div
              key={path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <Link to={path} className="glass p-5 flex flex-col items-center text-center gap-3 hover:border-curious-blue-500/30 transition-all block h-full">
                <span className="text-3xl">{emoji}</span>
                <div>
                  <p className="text-white font-semibold text-sm">{label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
                </div>
                <span className="mt-auto text-curious-blue-400 text-xs flex items-center gap-1">
                  Ir <FiArrowRight size={11} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Home = () => (
  <PageTransition>
    {/* Sección principal con foto y typewriter */}
    <Hero />

    {/* Sobre mí */}
    <About />

    {/* Proyectos destacados con links reales a /proyectos/:id */}
    <section id="proyectos-home" className="section bg-slate-900/50">
      <div className="wrap">
        <SectionTitle
          tag="Proyectos"
          title="Proyectos"
          highlight="Destacados"
          subtitle="Una selección de lo mejor. Hacé clic en cada uno para ver todos los detalles."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {PROYECTOS.filter(p => p.destacado).map((p, i) => (
            <TarjetaFeatured key={p.id} p={p} i={i} />
          ))}
        </div>
        {/* Botón para ir a la página completa de proyectos */}
        <div className="text-center">
          <Link to="/proyectos" className="btn-outline inline-flex items-center gap-2">
            Ver todos los proyectos <FiArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>

    {/* Habilidades */}
    <Skills />

    {/* Estadísticas */}
    <Stats />

    {/* Testimonios */}
    <Testimonials />

    {/* Hobbies */}
    <Hobbies />

    {/* Grid de acceso rápido a todas las páginas */}
    <AccesosRapidos />
  </PageTransition>
)

export default Home
