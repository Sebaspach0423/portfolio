import { motion } from 'framer-motion'
import PageTransition from '../components/ui/PageTransition'
import SectionTitle   from '../components/ui/SectionTitle'
import { PROYECTOS }  from '../data/proyectos'
import { CERTIFICACIONES } from '../data/certificaciones'
import { POSTS }      from '../data/blog'

// Datos del dashboard
const SKILLS_NIVEL = [
  { nombre: 'HTML / CSS',      nivel: 90, color: 'from-orange-500 to-red-500' },
  { nombre: 'JavaScript',      nivel: 75, color: 'from-yellow-500 to-orange-500' },
  { nombre: 'React',           nivel: 70, color: 'from-curious-blue-500 to-blue-500' },
  { nombre: 'TailwindCSS',     nivel: 80, color: 'from-teal-500 to-curious-blue-500' },
  { nombre: 'Python',          nivel: 55, color: 'from-green-500 to-emerald-600' },
  { nombre: 'Git / GitHub',    nivel: 72, color: 'from-slate-400 to-slate-600' },
  { nombre: 'Docker',          nivel: 60, color: 'from-blue-500 to-blue-700' },
  { nombre: 'MySQL',           nivel: 65, color: 'from-purple-500 to-purple-700' },
]

const ACTIVIDAD = [
  { mes: 'Ene', commits: 8  },
  { mes: 'Feb', commits: 14 },
  { mes: 'Mar', commits: 22 },
  { mes: 'Abr', commits: 18 },
  { mes: 'May', commits: 30 },
  { mes: 'Jun', commits: 25 },
  { mes: 'Jul', commits: 20 },
  { mes: 'Ago', commits: 35 },
  { mes: 'Sep', commits: 28 },
  { mes: 'Oct', commits: 40 },
  { mes: 'Nov', commits: 33 },
  { mes: 'Dic', commits: 15 },
]

const maxCommits = Math.max(...ACTIVIDAD.map(a => a.commits))

const TECNOLOGIAS_STATS = [
  { nombre: 'React',      proyectos: 3, color: 'bg-curious-blue-500' },
  { nombre: 'JavaScript', proyectos: 4, color: 'bg-yellow-500' },
  { nombre: 'TailwindCSS',proyectos: 3, color: 'bg-teal-500' },
  { nombre: 'Python',     proyectos: 2, color: 'bg-green-500' },
  { nombre: 'Docker',     proyectos: 2, color: 'bg-blue-500' },
]

// Tarjeta de estadística principal
const StatCard = ({ icon, value, label, sub, color, delay }) => (
  <motion.div
    className="glass p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl mb-4`}>
      {icon}
    </div>
    <div className="text-3xl font-display font-bold grad-text mb-1">{value}</div>
    <div className="text-white font-semibold text-sm">{label}</div>
    {sub && <div className="text-slate-500 text-xs mt-0.5">{sub}</div>}
  </motion.div>
)

const Dashboard = () => {
  const totalHoras = CERTIFICACIONES.reduce((acc, c) => {
    const match = c.duracion.match(/(\d+)/)
    return acc + (match ? parseInt(match[1]) : 0)
  }, 0)

  return (
    <PageTransition>
      <div className="pt-24 section">
        <div className="wrap">
          <SectionTitle
            tag="Overview"
            title="Mi"
            highlight="Dashboard"
            subtitle="Estadísticas y progreso en tiempo real de mi desarrollo profesional."
          />

          {/* KPIs principales */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <StatCard icon="🛠️" value={PROYECTOS.length}           label="Proyectos"        sub="completados"            color="from-curious-blue-500 to-blue-600"    delay={0}    />
            <StatCard icon="🏆" value={CERTIFICACIONES.length}     label="Certificaciones" sub="obtenidas"               color="from-yellow-500 to-orange-500" delay={0.08} />
            <StatCard icon="📝" value={POSTS.length}               label="Artículos"       sub="en el blog"              color="from-purple-500 to-pink-500"   delay={0.16} />
            <StatCard icon="⏱️" value={`${totalHoras}+`}           label="Horas"           sub="de formación"            color="from-green-500 to-emerald-600" delay={0.24} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Niveles de habilidades */}
            <div className="glass p-8">
              <h2 className="text-white font-bold text-xl mb-6">📊 Nivel por tecnología</h2>
              <div className="space-y-5">
                {SKILLS_NIVEL.map((s, i) => (
                  <div key={s.nombre}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300 font-medium">{s.nombre}</span>
                      <span className="text-slate-500">{s.nivel}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${s.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.nivel}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.07, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actividad mensual (commits simulados) */}
            <div className="glass p-8">
              <h2 className="text-white font-bold text-xl mb-6">📅 Actividad en GitHub (2025)</h2>
              <div className="flex items-end gap-2 h-40">
                {ACTIVIDAD.map((a, i) => (
                  <motion.div
                    key={a.mes}
                    className="flex-1 flex flex-col items-center gap-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <motion.div
                      className="w-full bg-gradient-to-t from-curious-blue-600 to-curious-blue-400 rounded-sm"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(a.commits / maxCommits) * 120}px` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.04, ease: 'easeOut' }}
                    />
                    <span className="text-slate-600 text-[10px]">{a.mes}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-3 text-center">
                Total: {ACTIVIDAD.reduce((a, c) => a + c.commits, 0)} commits simulados
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Tecnologías más usadas */}
            <div className="glass p-8">
              <h2 className="text-white font-bold text-xl mb-6">🔧 Tecnologías más usadas</h2>
              <div className="space-y-4">
                {TECNOLOGIAS_STATS.map((t, i) => (
                  <motion.div
                    key={t.nombre}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className={`w-3 h-3 rounded-full ${t.color} shrink-0`} />
                    <span className="text-slate-300 text-sm flex-1">{t.nombre}</span>
                    <span className="text-slate-500 text-xs">{t.proyectos} proyectos</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Distribución certificaciones */}
            <div className="glass p-8">
              <h2 className="text-white font-bold text-xl mb-6">🎓 Certificaciones por plataforma</h2>
              {[
                { nombre: 'freeCodeCamp', cantidad: 2, color: 'bg-curious-blue-500' },
                { nombre: 'Udemy',        cantidad: 3, color: 'bg-orange-500' },
                { nombre: 'Coursera',     cantidad: 2, color: 'bg-blue-500' },
                { nombre: 'Platzi',       cantidad: 1, color: 'bg-green-500' },
              ].map((p, i) => (
                <motion.div
                  key={p.nombre}
                  className="mb-3"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">{p.nombre}</span>
                    <span className="text-slate-500">{p.cantidad}</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${p.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(p.cantidad / CERTIFICACIONES.length) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.08 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Metas 2025 */}
            <div className="glass p-8">
              <h2 className="text-white font-bold text-xl mb-6">🎯 Metas 2025</h2>
              <div className="space-y-4">
                {[
                  { meta: 'Completar certificación Full Stack',  pct: 60, done: false },
                  { meta: 'Publicar 10 artículos en el blog',    pct: 40, done: false },
                  { meta: 'Lanzar app con Supabase',             pct: 75, done: false },
                  { meta: 'Contribuir a open source',            pct: 20, done: false },
                  { meta: 'Dockerizar todos los proyectos',      pct: 100, done: true },
                ].map((m, i) => (
                  <motion.div
                    key={m.meta}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className={`${m.done ? 'text-green-400' : 'text-slate-400'} font-medium`}>
                        {m.done ? '✅ ' : ''}{m.meta}
                      </span>
                      <span className="text-slate-500">{m.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${m.done ? 'bg-green-500' : 'bg-gradient-to-r from-curious-blue-400 to-curious-blue-700'}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${m.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.07 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline de actividad reciente */}
          <div className="glass p-8">
            <h2 className="text-white font-bold text-xl mb-6">🕐 Actividad reciente</h2>
            <div className="space-y-4">
              {[
                { icon: '🛠️', accion: 'Nuevo proyecto creado',       detalle: 'SpendWise — Gestor de gastos',         fecha: 'Hace 2 días',    color: 'text-curious-blue-400' },
                { icon: '🏆', accion: 'Certificación completada',     detalle: 'Docker para Desarrolladores — Udemy',  fecha: 'Hace 5 días',    color: 'text-yellow-400' },
                { icon: '📝', accion: 'Artículo publicado',           detalle: 'React Router v6: Navegación moderna',  fecha: 'Hace 12 días',   color: 'text-purple-400' },
                { icon: '⭐', accion: 'Proyecto destacado',           detalle: 'CineTrack obtiene 12 ⭐ en GitHub',    fecha: 'Hace 15 días',   color: 'text-orange-400' },
                { icon: '🐳', accion: 'Deployment completado',        detalle: 'Portfolio dockerizado con Nginx',      fecha: 'Hace 20 días',   color: 'text-blue-400' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-slate-800/40 rounded-xl border border-slate-700/50"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className={`${item.color} text-sm font-semibold`}>{item.accion}</p>
                    <p className="text-slate-400 text-sm truncate">{item.detalle}</p>
                  </div>
                  <span className="text-slate-600 text-xs shrink-0">{item.fecha}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  )
}

export default Dashboard
