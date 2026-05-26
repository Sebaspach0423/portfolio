import { Link } from 'react-router-dom'
import { FaGithub, FaInstagram, FaEnvelope, FaWhatsapp, FaHeart } from 'react-icons/fa'

const SOCIALES = [
  { icon: FaGithub,    href: 'https://github.com/Sebaspach0423',                                     label: 'GitHub',    hover: 'hover:border-slate-400 hover:text-slate-300' },
  { icon: FaInstagram, href: 'https://www.instagram.com/pachecoorizano?igsh=azBxdWIzenA3Mndw',       label: 'Instagram', hover: 'hover:border-pink-400 hover:text-pink-400' },
  { icon: FaWhatsapp,  href: 'https://wa.me/51965278791',                                             label: 'WhatsApp',  hover: 'hover:border-green-400 hover:text-green-400' },
  { icon: FaEnvelope,  href: 'mailto:wsebaspach23@gmail.com',                                         label: 'Email',     hover: 'hover:border-curious-blue-400 hover:text-curious-blue-400' },
]

const LINKS_FOOTER = [
  { label: 'Proyectos',       path: '/proyectos' },
  { label: 'Certificaciones', path: '/certificaciones' },
  { label: 'Blog',            path: '/blog' },
  { label: 'Dashboard',       path: '/dashboard' },
  { label: 'Contacto',        path: '/contacto' },
]

const Footer = () => (
  <footer className="bg-slate-950 border-t border-curious-blue-500/10">
    {/* Línea decorativa superior */}
    <div className="h-px w-full bg-gradient-to-r from-transparent via-curious-blue-500/40 to-transparent" />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

        {/* Marca */}
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-4 w-fit group">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-curious-blue-500 to-curious-blue-800
                             flex items-center justify-center text-white font-bold text-sm
                             shadow-lg shadow-curious-blue-900/40
                             group-hover:shadow-curious-blue-500/20 transition-all">W</span>
            <span className="text-lg font-display font-bold grad-text">Walter Pacheco</span>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed">
            Estudiante de Ingeniería de Sistemas en la UNHEVAL.<br />
            Apasionado por el desarrollo web moderno.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
            <span className="w-1 h-4 rounded-full bg-curious-blue-500" />
            Páginas
          </p>
          <div className="flex flex-col gap-2">
            {LINKS_FOOTER.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className="text-slate-500 hover:text-curious-blue-400 text-sm transition-colors
                           hover:translate-x-1 inline-block"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Redes */}
        <div>
          <p className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
            <span className="w-1 h-4 rounded-full bg-curious-blue-500" />
            Redes sociales
          </p>
          <div className="flex gap-3">
            {SOCIALES.map(({ icon: Icon, href, label, hover }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-10 h-10 flex items-center justify-center rounded-xl
                            border border-slate-700/60 text-slate-500
                            hover:scale-110 transition-all duration-200 ${hover}`}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-600 text-sm flex items-center gap-1.5">
          © {new Date().getFullYear()} Walter Sebastian Pacheco Orizano · Hecho con
          <FaHeart className="text-rose-500/80" size={11} /> y React
        </p>
        <p className="text-slate-700 text-xs">
          React + Vite + TailwindCSS + Framer Motion + Docker
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
