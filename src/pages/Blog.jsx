import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi'
import PageTransition from '../components/ui/PageTransition'
import SectionTitle   from '../components/ui/SectionTitle'
import { POSTS }      from '../data/blog'

const CATEGORIAS = ['Todas', 'Frontend', 'DevOps', 'Personal']

const TarjetaPost = ({ post }) => (
  <motion.div
    className="glass overflow-hidden group hover:border-white/20 transition-all"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    {/* Banner */}
    <div className="h-36 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-6xl relative overflow-hidden">
      <span className="filter drop-shadow-lg">{post.emoji}</span>
      <span className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full bg-black/30 backdrop-blur text-curious-blue-400">
        {post.categoria}
      </span>
    </div>

    <div className="p-6">
      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
        <span className="flex items-center gap-1"><FiCalendar size={11} /> {post.fecha}</span>
        <span className="flex items-center gap-1"><FiClock size={11} /> {post.tiempoLectura}</span>
      </div>

      <h3 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-curious-blue-400 transition-colors">
        {post.titulo}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
        {post.resumen}
      </p>

      {/* Etiquetas */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {post.etiquetas.slice(0, 3).map(e => (
          <span key={e} className="px-2 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-500 text-xs">
            #{e}
          </span>
        ))}
      </div>

      <Link
        to={`/blog/${post.slug}`}
        className="flex items-center gap-1.5 text-curious-blue-400 hover:text-curious-blue-300 text-sm font-medium transition-colors"
      >
        Leer artículo <FiArrowRight size={13} />
      </Link>
    </div>
  </motion.div>
)

const Blog = () => {
  const [categoria, setCategoria] = useState('Todas')
  const visibles = categoria === 'Todas'
    ? POSTS
    : POSTS.filter(p => p.categoria === categoria)

  return (
    <PageTransition>
      <div className="pt-24 section">
        <div className="wrap">
          <SectionTitle
            tag="Escritura"
            title="Blog"
            highlight="Técnico"
            subtitle="Reflexiones sobre desarrollo web, herramientas y la vida universitaria."
          />

          {/* Filtro por categoría */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CATEGORIAS.map(c => (
              <button
                key={c}
                onClick={() => setCategoria(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  categoria === c
                    ? 'bg-curious-blue-500 text-white shadow-lg shadow-curious-blue-500/30'
                    : 'glass text-slate-400 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Post destacado (primero de la lista cuando no hay filtro) */}
          {categoria === 'Todas' && (
            <motion.div
              className="glass overflow-hidden mb-10 group hover:border-white/20 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-8xl py-12 md:py-0">
                  {POSTS[0].emoji}
                </div>
                <div className="md:col-span-3 p-8">
                  <span className="text-xs font-semibold text-curious-blue-400 uppercase tracking-widest mb-3 block">
                    ⭐ Artículo destacado
                  </span>
                  <h2 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-curious-blue-400 transition-colors">
                    {POSTS[0].titulo}
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-5">{POSTS[0].resumen}</p>
                  <div className="flex items-center gap-5 text-xs text-slate-500 mb-6">
                    <span className="flex items-center gap-1"><FiCalendar size={11} /> {POSTS[0].fecha}</span>
                    <span className="flex items-center gap-1"><FiClock size={11} /> {POSTS[0].tiempoLectura} lectura</span>
                  </div>
                  <Link
                    to={`/blog/${POSTS[0].slug}`}
                    className="btn inline-flex items-center gap-2"
                  >
                    Leer artículo <FiArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid de posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(categoria === 'Todas' ? visibles.slice(1) : visibles).map(post => (
              <TarjetaPost key={post.slug} post={post} />
            ))}
          </div>

          {visibles.length === 0 && (
            <p className="text-center text-slate-500 mt-10">No hay artículos en esa categoría.</p>
          )}
        </div>
      </div>
    </PageTransition>
  )
}

export default Blog
