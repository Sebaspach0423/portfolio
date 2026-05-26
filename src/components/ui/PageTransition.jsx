import { motion } from 'framer-motion'

// Envuelve cada página con una animación suave de entrada/salida
// Usarlo así: <PageTransition> ... contenido de la página ... </PageTransition>
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -18 }}
    transition={{ duration: 0.35, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
)

export default PageTransition
