import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { FiSend, FiCheck, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import PageTransition from '../components/ui/PageTransition'
import SectionTitle   from '../components/ui/SectionTitle'

const CONTACTOS = [
  { icon: FaGithub,    label: 'GitHub',     valor: 'Sebaspach0423',         href: 'https://github.com/Sebaspach0423',                                       color: 'hover:border-slate-400 hover:text-slate-300' },
  { icon: FaInstagram, label: 'Instagram',  valor: '@pachecoorizano',       href: 'https://www.instagram.com/pachecoorizano?igsh=azBxdWIzenA3Mndw',        color: 'hover:border-pink-400 hover:text-pink-400' },
  { icon: FaWhatsapp,  label: 'WhatsApp',   valor: '+51 965 278 791',       href: 'https://wa.me/51965278791',                                              color: 'hover:border-green-400 hover:text-green-400' },
  { icon: FaEnvelope,  label: 'Email',      valor: 'wsebaspach23@gmail.com',href: 'mailto:wsebaspach23@gmail.com',                                          color: 'hover:border-curious-blue-400 hover:text-curious-blue-400' },
]

const FAQ = [
  { pregunta: '¿Estás disponible para proyectos freelance?',           respuesta: 'Sí, estoy disponible para proyectos freelance y colaboraciones. Me especializo en desarrollo frontend con React y TailwindCSS. Contáctame para discutir tu proyecto.' },
  { pregunta: '¿Cuánto tiempo tardas en responder?',                   respuesta: 'Generalmente respondo en menos de 24 horas por WhatsApp o email. Si es algo urgente, WhatsApp es la vía más rápida.' },
  { pregunta: '¿Trabajás en equipo o de forma independiente?',         respuesta: 'Tengo experiencia en ambas modalidades. Uso Git/GitHub para trabajo colaborativo y me adapto a metodologías ágiles como Scrum.' },
  { pregunta: '¿Podés trabajar con tecnologías fuera de tu stack?',    respuesta: 'Depende de la tecnología. Tengo buena capacidad para aprender rápido. Cuéntame qué necesitás y evalúo si puedo ayudarte.' },
  { pregunta: '¿Hacés proyectos universitarios?',                      respuesta: 'Sí, tengo experiencia ayudando con proyectos académicos: sistemas de información, bases de datos, aplicaciones web y más.' },
]

// Item del formulario
const Campo = ({ label, name, type = 'text', placeholder, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-slate-400 mb-1.5">{label}</label>
    {type === 'textarea' ? (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={5}
        className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-300 placeholder-slate-600 focus:outline-none focus:border-curious-blue-500 transition-colors resize-none text-sm"
      />
    ) : (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-300 placeholder-slate-600 focus:outline-none focus:border-curious-blue-500 transition-colors text-sm"
      />
    )}
  </div>
)

// Ítem de FAQ con acordeón
const FaqItem = ({ pregunta, respuesta, i }) => {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className="border border-slate-700/60 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.07 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-800/40 transition-colors"
      >
        <span className="text-slate-300 text-sm font-medium">{pregunta}</span>
        {open ? <FiChevronUp size={16} className="text-curious-blue-400 shrink-0" /> : <FiChevronDown size={16} className="text-slate-500 shrink-0" />}
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="px-5 pb-5"
        >
          <p className="text-slate-400 text-sm leading-relaxed">{respuesta}</p>
        </motion.div>
      )}
    </motion.div>
  )
}

const Contacto = () => {
  const [form, setForm]       = useState({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    // Simulación de envío (demo)
    setTimeout(() => {
      setLoading(false)
      setEnviado(true)
      setForm({ nombre: '', email: '', asunto: '', mensaje: '' })
    }, 1500)
  }

  return (
    <PageTransition>
      <div className="pt-24 section">
        <div className="wrap">
          <SectionTitle
            tag="Contacto"
            title="Hablemos de tu"
            highlight="Proyecto"
            subtitle="Estoy disponible para colaboraciones, proyectos freelance y consultas académicas."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

            {/* Formulario */}
            <div className="glass p-8">
              <h2 className="text-white font-bold text-xl mb-6">✉️ Enviame un mensaje</h2>

              {enviado ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mb-4">
                    <FiCheck size={28} className="text-green-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">¡Mensaje enviado!</h3>
                  <p className="text-slate-400 text-sm mb-6">Gracias por contactarme. Te responderé lo antes posible.</p>
                  <button
                    onClick={() => setEnviado(false)}
                    className="btn-outline text-sm"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Campo label="Nombre" name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} />
                    <Campo label="Email"  name="email"  type="email" placeholder="tu@email.com" value={form.email} onChange={handleChange} />
                  </div>
                  <Campo label="Asunto"  name="asunto"  placeholder="¿Sobre qué querés hablar?" value={form.asunto}  onChange={handleChange} />
                  <Campo label="Mensaje" name="mensaje" type="textarea" placeholder="Contame tu idea o proyecto..." value={form.mensaje} onChange={handleChange} />

                  <button
                    type="submit"
                    disabled={loading || !form.nombre || !form.email || !form.mensaje}
                    className="btn w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <FiSend size={14} /> Enviar mensaje
                      </>
                    )}
                  </button>
                  <p className="text-slate-600 text-xs text-center">
                    * Este formulario es una demo. Para contacto real usá WhatsApp o Email.
                  </p>
                </form>
              )}
            </div>

            {/* Datos de contacto */}
            <div className="flex flex-col gap-6">
              {/* Tarjetas de contacto */}
              <div className="glass p-8">
                <h2 className="text-white font-bold text-xl mb-6">📬 Contacto directo</h2>
                <div className="space-y-3">
                  {CONTACTOS.map(({ icon: Icon, label, valor, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('mailto') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-xl transition-all ${color}`}
                    >
                      <Icon size={20} className="shrink-0" />
                      <div>
                        <p className="text-white text-sm font-medium">{label}</p>
                        <p className="text-slate-500 text-xs">{valor}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Disponibilidad */}
              <div className="glass p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-white font-semibold">Disponible ahora</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Estoy abierto a colaboraciones, proyectos freelance y oportunidades de prácticas profesionales.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  {[
                    { label: 'Respuesta', valor: '< 24 horas' },
                    { label: 'Zona horaria', valor: 'GMT-5 (Lima)' },
                    { label: 'Modalidad', valor: 'Remoto / Presencial' },
                    { label: 'Idioma', valor: 'Español' },
                  ].map(({ label, valor }) => (
                    <div key={label} className="bg-slate-800/50 rounded-lg p-3">
                      <p className="text-slate-600 mb-0.5">{label}</p>
                      <p className="text-slate-300 font-medium">{valor}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="glass p-8">
            <h2 className="text-white font-bold text-xl mb-6">❓ Preguntas frecuentes</h2>
            <div className="space-y-3">
              {FAQ.map((item, i) => (
                <FaqItem key={i} pregunta={item.pregunta} respuesta={item.respuesta} i={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  )
}

export default Contacto
