import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar   from './components/layout/Navbar'
import Footer   from './components/layout/Footer'

// ── Páginas ──────────────────────────────────────────────────────────────────
import Home              from './pages/Home'
import Proyectos         from './pages/Proyectos'
import ProyectoDetalle   from './pages/ProyectoDetalle'
import Certificaciones   from './pages/Certificaciones'
import CertificadoDetalle from './pages/CertificadoDetalle'
import Blog              from './pages/Blog'
import BlogPost          from './pages/BlogPost'
import Dashboard         from './pages/Dashboard'
import Contacto          from './pages/Contacto'
import NotFound          from './pages/NotFound'

// AnimatePresence necesita la location actual para animar entre páginas
function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"                      element={<Home />} />
        <Route path="/proyectos"             element={<Proyectos />} />
        <Route path="/proyectos/:id"         element={<ProyectoDetalle />} />
        <Route path="/certificaciones"       element={<Certificaciones />} />
        <Route path="/certificaciones/:id"   element={<CertificadoDetalle />} />
        <Route path="/blog"                  element={<Blog />} />
        <Route path="/blog/:slug"            element={<BlogPost />} />
        <Route path="/dashboard"             element={<Dashboard />} />
        <Route path="/contacto"              element={<Contacto />} />
        <Route path="*"                      element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
