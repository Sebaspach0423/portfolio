import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

// ── Datos: estadísticas ───────────────────────────────────────────────────────
const STATS = [
  { icono: '🚀', valor: 8,    sufijo: '+', etiqueta: 'Proyectos completados' },
  { icono: '📦', valor: 200,  sufijo: '+', etiqueta: 'Commits en GitHub' },
  { icono: '⚡', valor: 15,   sufijo: '+', etiqueta: 'Tecnologías aprendidas' },
  { icono: '⌨️', valor: 1000, sufijo: '+', etiqueta: 'Horas de código' },
  { icono: '🎓', valor: 8,    sufijo: '+', etiqueta: 'Cursos completados' },
  { icono: '💡', valor: 3,    sufijo: '',  etiqueta: 'Años estudiando' },
]
// ─────────────────────────────────────────────────────────────────────────────

// Contador que anima desde 0 hasta el valor objetivo al entrar en pantalla
const Contador = ({ valor, sufijo }) => {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true })
  const [cuenta, setCuenta] = useState(0)

  useEffect(() => {
    if (!visible) return
    let inicio = 0
    const paso = valor / (2000 / 16)   // 2 segundos de animación a 60fps
    const timer = setInterval(() => {
      inicio += paso
      if (inicio >= valor) { setCuenta(valor); clearInterval(timer) }
      else setCuenta(Math.floor(inicio))
    }, 16)
    return () => clearInterval(timer)
  }, [visible, valor])

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-display font-extrabold grad-text">
      {cuenta.toLocaleString()}{sufijo}
    </span>
  )
}

const Stats = () => (
  <section className="section bg-slate-900/50">
    <div className="wrap">
      <SectionTitle
        tag="Estadísticas"
        title="Mis"
        highlight="Números"
        subtitle="Un vistazo rápido a mi trayectoria en cifras."
      />

      {/* Tarjetas de stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 mb-12">
        {STATS.map((s, i) => (
          <motion.div
            key={s.etiqueta}
            className="glass p-6 text-center hover:border-cyan-500/30 transition-all"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="text-3xl mb-3">{s.icono}</div>
            <Contador valor={s.valor} sufijo={s.sufijo} />
            <p className="text-slate-400 text-xs mt-2 leading-snug">{s.etiqueta}</p>
          </motion.div>
        ))}
      </div>

      {/* Mapa de contribuciones estilo GitHub */}
      <motion.div
        className="glass p-8"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
          <span className="text-green-400">●</span> Actividad de GitHub — último año
        </h3>
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-1 min-w-max">
            {Array.from({ length: 52 }).map((_, semana) => (
              <div key={semana} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, dia) => {
                  // Genera un color pseudo-aleatorio pero estable por posición
                  const rand = ((semana * 7 + dia) * 2654435761) % 100
                  const color =
                    rand > 75 ? 'bg-green-400' :
                    rand > 55 ? 'bg-green-600/70' :
                    rand > 38 ? 'bg-green-800/60' :
                    'bg-slate-800'
                  return (
                    <div
                      key={dia}
                      className={`w-3 h-3 rounded-sm ${color} hover:ring-1 hover:ring-green-400/50 transition-all`}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>
        {/* Leyenda */}
        <div className="flex items-center justify-end gap-2 mt-3 text-slate-500 text-xs">
          <span>Menos</span>
          {['bg-slate-800','bg-green-800/60','bg-green-600/70','bg-green-400'].map((c,i) => (
            <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
          ))}
          <span>Más</span>
        </div>
      </motion.div>
    </div>
  </section>
)

export default Stats
