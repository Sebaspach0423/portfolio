import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

// ── Datos ─────────────────────────────────────────────────────────────────────
const STATS = [
  { icono: '🚀', valor: 8,    sufijo: '+', etiqueta: 'Proyectos completados', color: 'rgba(0,214,143,0.35)'  },
  { icono: '📦', valor: 200,  sufijo: '+', etiqueta: 'Commits en GitHub',     color: 'rgba(168,85,247,0.35)' },
  { icono: '⚡', valor: 15,   sufijo: '+', etiqueta: 'Tecnologías aprendidas',color: 'rgba(34,211,238,0.35)' },
  { icono: '⌨️', valor: 1000, sufijo: '+', etiqueta: 'Horas de código',       color: 'rgba(0,214,143,0.35)'  },
  { icono: '🎓', valor: 8,    sufijo: '+', etiqueta: 'Cursos completados',    color: 'rgba(168,85,247,0.35)' },
  { icono: '💡', valor: 3,    sufijo: '',  etiqueta: 'Años estudiando',       color: 'rgba(251,191,36,0.3)'  },
]
// ─────────────────────────────────────────────────────────────────────────────

const Contador = ({ valor, sufijo }) => {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true })
  const [cuenta, setCuenta] = useState(0)

  useEffect(() => {
    if (!visible) return
    let inicio = 0
    const paso = valor / (2000 / 16)
    const timer = setInterval(() => {
      inicio += paso
      if (inicio >= valor) { setCuenta(valor); clearInterval(timer) }
      else setCuenta(Math.floor(inicio))
    }, 16)
    return () => clearInterval(timer)
  }, [visible, valor])

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-display font-black grad-text">
      {cuenta.toLocaleString()}{sufijo}
    </span>
  )
}

const Stats = () => (
  <section className="section" style={{ background: 'rgba(4,8,18,0.6)' }}>
    <div className="wrap">
      <SectionTitle
        tag="Estadísticas"
        title="Mis"
        highlight="Números"
        subtitle="Un vistazo rápido a mi trayectoria en cifras."
      />

      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 mb-12">
        {STATS.map((s, i) => (
          <motion.div
            key={s.etiqueta}
            className="text-center relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -8, boxShadow: `0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px ${s.color}` }}
            style={{
              background: 'rgba(4,16,10,0.88)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
              padding: '1.5rem',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Top gradient accent */}
            <div
              className="absolute top-0 inset-x-0 h-0.5"
              style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }}
            />
            <div className="text-3xl mb-3"
              style={{ filter: `drop-shadow(0 0 8px ${s.color})` }}>
              {s.icono}
            </div>
            <Contador valor={s.valor} sufijo={s.sufijo} />
            <p className="text-slate-500 text-xs mt-2 leading-snug">{s.etiqueta}</p>
          </motion.div>
        ))}
      </div>

      {/* GitHub contribution map */}
      <motion.div
        className="rounded-2xl p-8 relative overflow-hidden"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          background: 'rgba(4,16,10,0.88)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
        }}
      >
        <div
          className="absolute top-0 inset-x-0 h-0.5"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,214,143,0.5), transparent)' }}
        />
        <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full bg-[#00e89a] animate-pulse"
            style={{ boxShadow: '0 0 8px rgba(0,214,143,0.8)' }}
          />
          Actividad de GitHub — último año
        </h3>
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-1 min-w-max">
            {Array.from({ length: 52 }).map((_, semana) => (
              <div key={semana} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, dia) => {
                  const rand = ((semana * 7 + dia) * 2654435761) % 100
                  const styles =
                    rand > 75 ? { background: '#00e89a', boxShadow: '0 0 6px rgba(0,214,143,0.7)' } :
                    rand > 55 ? { background: 'rgba(0,214,143,0.55)' } :
                    rand > 38 ? { background: 'rgba(0,214,143,0.22)' } :
                    { background: 'rgba(255,255,255,0.05)' }
                  return (
                    <div
                      key={dia}
                      className="w-3 h-3 rounded-sm transition-all hover:scale-125 cursor-default"
                      style={styles}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>
        {/* Legend */}
        <div className="flex items-center justify-end gap-2 mt-3 text-slate-500 text-xs">
          <span>Menos</span>
          {[
            { background: 'rgba(255,255,255,0.05)' },
            { background: 'rgba(0,214,143,0.22)' },
            { background: 'rgba(0,214,143,0.55)' },
            { background: '#00e89a', boxShadow: '0 0 6px rgba(0,214,143,0.7)' },
          ].map((style, i) => (
            <div key={i} className="w-3 h-3 rounded-sm" style={style} />
          ))}
          <span>Más</span>
        </div>
      </motion.div>
    </div>
  </section>
)

export default Stats
