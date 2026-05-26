import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { FiSend, FiCheck, FiMapPin } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

// ── Datos: contacto y redes ───────────────────────────────────────────────────
const EMAIL      = 'wsebaspach23@gmail.com'
const UBICACION  = 'Huánuco, Perú — GMT-5'

const REDES = [
  {
    icon: FaGithub,
    label: 'GitHub',
    valor: '@Sebaspach0423',
    href: 'https://github.com/Sebaspach0423',
    hover: 'hover:text-white hover:border-slate-400',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    valor: '@pachecoorizano',
    href: 'https://www.instagram.com/pachecoorizano?igsh=azBxdWIzenA3Mndw',
    hover: 'hover:text-pink-400 hover:border-pink-400',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    valor: '+51 965 278 791',
    href: 'https://wa.me/51965278791',
    hover: 'hover:text-green-400 hover:border-green-400',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    valor: EMAIL,
    href: `mailto:${EMAIL}`,
    hover: 'hover:text-curious-blue-400 hover:border-curious-blue-400',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const [form, setForm]   = useState({ nombre: '', email: '', mensaje: '' })
  const [enviado, setEnv] = useState(false)
  const [cargando, setCarg] = useState(false)

  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const enviar = (e) => {
    e.preventDefault()
    setCarg(true)
    // Simula el envío — conectar a un backend o EmailJS en producción
    setTimeout(() => {
      setCarg(false)
      setEnv(true)
      setForm({ nombre: '', email: '', mensaje: '' })
      setTimeout(() => setEnv(false), 4000)
    }, 1500)
  }

  const input = 'w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 ' +
    'placeholder:text-slate-600 focus:outline-none focus:border-curious-blue-500 focus:ring-1 ' +
    'focus:ring-curious-blue-500/30 transition-all text-sm'

  return (
    <section id="contact" className="section bg-slate-900/50">
      <div className="wrap">
        <SectionTitle
          tag="Contacto"
          title="Hablemos"
          highlight="juntos"
          subtitle="¿Tenés un proyecto o querés colaborar? Escribime, respondo rápido."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ── Información de contacto ─── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div className="glass p-8">
              <h3 className="text-white font-bold text-xl mb-4">¡Estoy disponible! 👋</h3>
              <p className="text-slate-400 leading-relaxed mb-5">
                Estoy abierto a proyectos freelance, colaboraciones universitarias o simplemente
                intercambiar conocimientos sobre tecnología. El mejor canal es el email.
              </p>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <FiMapPin className="text-curious-blue-400 shrink-0" />
                <span>{UBICACION}</span>
              </div>
            </div>

            {/* Tarjetas de redes sociales */}
            <div className="grid grid-cols-2 gap-3">
              {REDES.map(({ icon: Icon, label, valor, href, hover }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`glass p-4 flex items-center gap-3 text-slate-400 transition-all group ${hover}`}
                >
                  <Icon size={20} className="shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white text-xs font-semibold">{label}</p>
                    <p className="text-slate-500 text-xs truncate group-hover:text-inherit transition-colors">
                      {valor}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Disponibilidad */}
            <div className="glass p-5 flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
              </span>
              <span className="text-slate-300 text-sm">
                Disponible para proyectos · Respondo en menos de 24hs
              </span>
            </div>
          </motion.div>

          {/* ── Formulario ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={enviar} className="glass p-8 flex flex-col gap-5">
              <h3 className="text-white font-bold text-xl">Enviarme un mensaje</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-slate-400 text-xs font-medium mb-1.5 block">Nombre *</label>
                  <input type="text" name="nombre" required value={form.nombre} onChange={cambiar}
                    placeholder="Tu nombre" className={input} />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium mb-1.5 block">Email *</label>
                  <input type="email" name="email" required value={form.email} onChange={cambiar}
                    placeholder="tu@email.com" className={input} />
                </div>
              </div>

              <div>
                <label className="text-slate-400 text-xs font-medium mb-1.5 block">Mensaje *</label>
                <textarea name="mensaje" required rows={5} value={form.mensaje} onChange={cambiar}
                  placeholder="Contame tu idea o proyecto..."
                  className={`${input} resize-none`} />
              </div>

              <button type="submit" disabled={cargando || enviado}
                className="btn flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                {enviado ? (
                  <><FiCheck size={16} /> ¡Mensaje enviado!</>
                ) : cargando ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Enviando...</>
                ) : (
                  <><FiSend size={16} /> Enviar mensaje</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
