import { Link } from 'react-router-dom'
import { FaGithub, FaInstagram, FaEnvelope, FaWhatsapp, FaHeart } from 'react-icons/fa'

const SOCIALES = [
  { icon: FaGithub,    href: 'https://github.com/Sebaspach0423',                                    label: 'GitHub',    hoverColor: '#e2e8f0',  hoverBorder: 'rgba(226,232,240,0.4)' },
  { icon: FaInstagram, href: 'https://www.instagram.com/pachecoorizano?igsh=azBxdWIzenA3Mndw',      label: 'Instagram', hoverColor: '#f9a8d4',  hoverBorder: 'rgba(249,168,212,0.4)' },
  { icon: FaWhatsapp,  href: 'https://wa.me/51965278791',                                            label: 'WhatsApp',  hoverColor: '#4ade80',  hoverBorder: 'rgba(74,222,128,0.4)'  },
  { icon: FaEnvelope,  href: 'mailto:wsebaspach23@gmail.com',                                        label: 'Email',     hoverColor: '#6ee7b7',  hoverBorder: 'rgba(0,214,143,0.45)'  },
]

const LINKS_FOOTER = [
  { label: 'Proyectos',       path: '/proyectos' },
  { label: 'Certificaciones', path: '/certificaciones' },
  { label: 'Blog',            path: '/blog' },
  { label: 'Dashboard',       path: '/dashboard' },
  { label: 'Contacto',        path: '/contacto' },
]

const TECH = ['React', 'Vite', 'TailwindCSS', 'Framer Motion', 'Docker']

const Footer = () => (
  <footer style={{ background: 'rgba(2,8,4,0.97)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
    {/* Top gradient line */}
    <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, rgba(0,214,143,0.5) 30%, rgba(168,85,247,0.5) 70%, transparent 100%)' }} />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-5 w-fit group">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-[#00e89a] blur-md opacity-25 group-hover:opacity-50 transition-opacity" />
              <span
                className="relative w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm"
                style={{ background: 'linear-gradient(135deg, #00e89a 0%, #007548 100%)' }}
              >
                W
              </span>
            </div>
            <span className="text-base font-display font-bold grad-text">Walter Pacheco</span>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">
            Estudiante de Ingeniería de Sistemas en la UNHEVAL.<br />
            Apasionado por el desarrollo web moderno.
          </p>
          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-1.5">
            {TECH.map(t => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-lg"
                style={{
                  background: 'rgba(0,214,143,0.06)',
                  border: '1px solid rgba(0,214,143,0.15)',
                  color: '#4b9a70',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <p className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
            <span
              className="w-1 h-5 rounded-full"
              style={{ background: 'linear-gradient(180deg, #00e89a, #a855f7)' }}
            />
            Páginas
          </p>
          <div className="flex flex-col gap-2.5">
            {LINKS_FOOTER.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className="text-slate-500 text-sm transition-all duration-200 hover:translate-x-1.5 inline-flex items-center gap-2 w-fit group"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: '#00e89a' }}
                />
                <span className="group-hover:text-[#6ee7b7] transition-colors">{label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <p className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
            <span
              className="w-1 h-5 rounded-full"
              style={{ background: 'linear-gradient(180deg, #a855f7, #00e89a)' }}
            />
            Redes sociales
          </p>
          <div className="flex gap-3">
            {SOCIALES.map(({ icon: Icon, href, label, hoverColor, hoverBorder }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-200 hover:scale-110 hover:-translate-y-1"
                style={{ background: 'rgba(4,16,10,0.9)', border: '1px solid rgba(255,255,255,0.09)', color: '#475569' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = hoverColor
                  e.currentTarget.style.borderColor = hoverBorder
                  e.currentTarget.style.boxShadow = `0 0 16px ${hoverBorder}`
                  e.currentTarget.style.background = hoverBorder.replace('0.4', '0.07').replace('0.45', '0.07')
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#475569'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.background = 'rgba(4,16,10,0.9)'
                }}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <p className="text-slate-700 text-sm flex items-center gap-1.5">
          © {new Date().getFullYear()} Walter Sebastian Pacheco Orizano · Hecho con
          <FaHeart size={11} style={{ color: '#f43f5e' }} /> y React
        </p>
        <p className="text-slate-800 text-xs font-mono">
          v2.0 — portfolio
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
