import { FaGithub, FaInstagram, FaEnvelope, FaWhatsapp, FaHeart } from 'react-icons/fa'

// ── Datos del footer ────────────────────────────────────────────────────────
const NOMBRE   = 'Walter Pacheco'
const ROL      = 'Estudiante de Ingeniería de Sistemas'
const SOCIALES = [
  { icon: FaGithub,    href: 'https://github.com/Sebaspach0423',                                      label: 'GitHub' },
  { icon: FaInstagram, href: 'https://www.instagram.com/pachecoorizano?igsh=azBxdWIzenA3Mndw',        label: 'Instagram' },
  { icon: FaWhatsapp,  href: 'https://wa.me/51965278791',                                              label: 'WhatsApp' },
  { icon: FaEnvelope,  href: 'mailto:wsebaspach23@gmail.com',                                          label: 'Email' },
]
// ────────────────────────────────────────────────────────────────────────────

const Footer = () => (
  <footer className="bg-slate-950 border-t border-white/5">
    <div className="wrap px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Marca */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <span className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">W</span>
            <p className="text-lg font-display font-bold grad-text">Walter Pacheco</p>
          </div>
          <p className="text-slate-500 text-sm">{ROL}</p>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-3">
          {SOCIALES.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-700
                         text-slate-400 hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        {/* Créditos */}
        <p className="text-slate-600 text-sm flex items-center gap-1">
          © {new Date().getFullYear()} {NOMBRE} · Hecho con
          <FaHeart className="text-rose-500 mx-0.5" size={11} /> y React
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
