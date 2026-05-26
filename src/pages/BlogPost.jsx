import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiClock, FiCalendar, FiArrowRight } from 'react-icons/fi'
import PageTransition from '../components/ui/PageTransition'
import BackButton     from '../components/ui/BackButton'
import { POSTS }      from '../data/blog'

// Renderiza cada bloque del contenido según su tipo
const Bloque = ({ bloque, i }) => {
  const base = { initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: i * 0.05 } }

  switch (bloque.tipo) {
    case 'intro':
      return (
        <motion.p {...base} className="text-slate-300 text-lg leading-relaxed border-l-4 border-curious-blue-500 pl-5 mb-6 italic">
          {bloque.texto}
        </motion.p>
      )
    case 'h2':
      return (
        <motion.h2 {...base} className="text-white font-display font-bold text-2xl mt-10 mb-4">
          {bloque.texto}
        </motion.h2>
      )
    case 'texto':
      return (
        <motion.p {...base} className="text-slate-400 leading-relaxed mb-4">
          {bloque.texto}
        </motion.p>
      )
    case 'codigo':
      return (
        <motion.div {...base} className="mb-6">
          <div className="flex items-center gap-2 bg-slate-800 rounded-t-xl px-4 py-2 border border-slate-700 border-b-0">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="text-slate-500 text-xs ml-2">{bloque.lenguaje}</span>
          </div>
          <pre className="bg-slate-900 border border-slate-700 border-t-0 rounded-b-xl p-5 overflow-x-auto text-sm text-slate-300 leading-relaxed">
            <code>{bloque.texto}</code>
          </pre>
        </motion.div>
      )
    case 'conclusion':
      return (
        <motion.div {...base} className="bg-curious-blue-500/10 border border-curious-blue-500/30 rounded-xl p-6 mb-6 mt-8">
          <p className="text-curious-blue-300 font-semibold mb-1">💡 Conclusión</p>
          <p className="text-slate-300 leading-relaxed">{bloque.texto}</p>
        </motion.div>
      )
    default:
      return null
  }
}

const BlogPost = () => {
  const { slug } = useParams()
  const post = POSTS.find(p => p.slug === slug)

  if (!post) return (
    <PageTransition>
      <div className="pt-32 section text-center">
        <p className="text-slate-400 text-xl mb-6">Artículo no encontrado.</p>
        <Link to="/blog" className="btn">Ver todos los artículos</Link>
      </div>
    </PageTransition>
  )

  const otros = POSTS.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        <div className="wrap px-4 sm:px-6 lg:px-8 max-w-4xl">

          {/* Volver */}
          <div className="mb-8">
            <BackButton to="/blog" label="Volver al Blog" />
          </div>

          {/* Header del post */}
          <div className="glass overflow-hidden mb-8">
            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-8xl">
              {post.emoji}
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-curious-blue-500/20 border border-curious-blue-500/30 rounded-full text-curious-blue-400 text-xs font-semibold">
                  {post.categoria}
                </span>
                {post.etiquetas.map(e => (
                  <span key={e} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-slate-500 text-xs">
                    #{e}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 leading-tight">
                {post.titulo}
              </h1>

              <div className="flex items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1.5"><FiCalendar size={13} /> {post.fecha}</span>
                <span className="flex items-center gap-1.5"><FiClock size={13} /> {post.tiempoLectura} de lectura</span>
              </div>
            </div>
          </div>

          {/* Contenido del artículo */}
          <div className="glass p-8 mb-8">
            {post.contenido.map((bloque, i) => (
              <Bloque key={i} bloque={bloque} i={i} />
            ))}
          </div>

          {/* Otros artículos */}
          <div className="glass p-8">
            <h2 className="text-white font-bold text-xl mb-6">Otros artículos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otros.map(p => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all group"
                >
                  <span className="text-2xl">{p.emoji}</span>
                  <div className="min-w-0">
                    <p className="text-white text-sm font-medium group-hover:text-curious-blue-400 transition-colors leading-snug line-clamp-2">
                      {p.titulo}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">{p.tiempoLectura}</p>
                  </div>
                  <FiArrowRight size={13} className="ml-auto shrink-0 text-slate-600 group-hover:text-curious-blue-400 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  )
}

export default BlogPost
