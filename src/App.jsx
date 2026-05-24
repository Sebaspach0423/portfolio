import Navbar       from './components/layout/Navbar'
import Footer       from './components/layout/Footer'
import Hero         from './components/sections/Hero'
import About        from './components/sections/About'
import Skills       from './components/sections/Skills'
import Projects     from './components/sections/Projects'
import Experience   from './components/sections/Experience'
import Certifications from './components/sections/Certifications'
import Stats        from './components/sections/Stats'
import Testimonials from './components/sections/Testimonials'
import Hobbies      from './components/sections/Hobbies'
import FAQ          from './components/sections/FAQ'
import Contact      from './components/sections/Contact'
function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Stats />
        <Testimonials />
        <Hobbies />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
