// Posts del blog ficticio
// Usados en: /blog (lista) y /blog/:slug (post completo)

export const POSTS = [
  {
    slug: 'dockerizando-portfolio-react',
    titulo: 'Cómo dockericé mi portfolio con React y Nginx',
    resumen: 'Un recorrido paso a paso por el proceso de containerizar una aplicación React con Vite usando Docker multi-stage build y Nginx como servidor web.',
    emoji: '🐳',
    categoria: 'DevOps',
    fecha: '20 mayo, 2025',
    tiempoLectura: '5 min',
    etiquetas: ['Docker', 'React', 'Nginx', 'DevOps'],
    contenido: [
      {
        tipo: 'intro',
        texto: 'Cuando terminé mi portfolio web, el siguiente paso natural fue dockerizarlo para poder entregarlo como un repositorio que cualquiera pueda levantar con un solo comando. En este post cuento cómo lo hice y qué aprendí en el proceso.',
      },
      {
        tipo: 'h2',
        texto: '¿Por qué Docker?',
      },
      {
        tipo: 'texto',
        texto: 'El problema clásico del desarrollo es "en mi máquina funciona". Docker resuelve exactamente eso: empaqueta la aplicación con todas sus dependencias en un contenedor aislado que corre igual en cualquier sistema operativo.',
      },
      {
        tipo: 'texto',
        texto: 'Para un portfolio React, la ventaja es clara: el docente o reclutador no necesita instalar Node.js ni configurar nada. Solo necesita Docker y un comando.',
      },
      {
        tipo: 'h2',
        texto: 'Multi-stage build: la clave',
      },
      {
        tipo: 'texto',
        texto: 'El truco más importante que aprendí es el multi-stage build. En lugar de usar una imagen de Node (que pesa ~900MB) para servir archivos estáticos, usamos Node solo para construir la app y luego copiamos solo el resultado (la carpeta dist) a una imagen de Nginx Alpine (que pesa ~7MB).',
      },
      {
        tipo: 'codigo',
        lenguaje: 'dockerfile',
        texto: `# Etapa 1: construir con Node
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa 2: servir con Nginx (imagen mucho más liviana)
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80`,
      },
      {
        tipo: 'h2',
        texto: 'El docker-compose.yml',
      },
      {
        tipo: 'texto',
        texto: 'El archivo docker-compose.yml es el que hace que todo sea tan simple. Define el servicio, el puerto y la política de reinicio. Con esto, el comando docker compose up levanta todo.',
      },
      {
        tipo: 'texto',
        texto: 'Lo más importante que aprendí: siempre usar --build cuando hacés cambios al código. Sin ese flag, Docker usa la imagen vieja cacheada.',
      },
      {
        tipo: 'conclusion',
        texto: 'La dockerización fue más sencilla de lo que esperaba. El multi-stage build es el patrón recomendado para aplicaciones frontend y explica por qué la imagen final es tan liviana. ¡Altamente recomendado para cualquier proyecto!',
      },
    ],
  },
  {
    slug: 'react-router-v6-guia',
    titulo: 'React Router v6: Navegación moderna en React',
    resumen: 'Guía práctica sobre React Router v6 para convertir una SPA en una aplicación multipágina con rutas dinámicas, transiciones y navegación programática.',
    emoji: '🗺️',
    categoria: 'Frontend',
    fecha: '14 mayo, 2025',
    tiempoLectura: '7 min',
    etiquetas: ['React', 'React Router', 'SPA', 'Navegación'],
    contenido: [
      {
        tipo: 'intro',
        texto: 'React Router es la librería estándar para manejar navegación en React. La versión 6 introdujo cambios importantes que simplifican mucho el código. En este post explico los conceptos clave con ejemplos reales.',
      },
      {
        tipo: 'h2',
        texto: 'Configuración básica',
      },
      {
        tipo: 'texto',
        texto: 'Lo primero es envolver la aplicación en BrowserRouter y definir las rutas con Routes y Route. Cada Route tiene un path y el componente que renderiza.',
      },
      {
        tipo: 'codigo',
        lenguaje: 'jsx',
        texto: `import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/proyectos/:id" element={<ProyectoDetalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}`,
      },
      {
        tipo: 'h2',
        texto: 'Rutas dinámicas con useParams',
      },
      {
        tipo: 'texto',
        texto: 'Las rutas dinámicas usan :parametro en el path. El componente destino accede al valor con el hook useParams. Es perfecto para páginas de detalle como proyectos o posts.',
      },
      {
        tipo: 'codigo',
        lenguaje: 'jsx',
        texto: `import { useParams } from 'react-router-dom'

const ProyectoDetalle = () => {
  const { id } = useParams()  // lee el :id de la URL
  const proyecto = PROYECTOS.find(p => p.id === id)

  if (!proyecto) return <NotFound />
  return <div>{proyecto.titulo}</div>
}`,
      },
      {
        tipo: 'h2',
        texto: 'Transiciones entre páginas con Framer Motion',
      },
      {
        tipo: 'texto',
        texto: 'Para animaciones entre páginas, usamos AnimatePresence de Framer Motion junto con useLocation para detectar cambios de ruta. El truco es pasar location.pathname como key a Routes.',
      },
      {
        tipo: 'conclusion',
        texto: 'React Router v6 simplificó enormemente la navegación en React. Las rutas dinámicas con useParams son perfectas para páginas de detalle. Combinado con Framer Motion, las transiciones quedan muy profesionales.',
      },
    ],
  },
  {
    slug: 'tailwind-vs-css-tradicional',
    titulo: 'TailwindCSS vs CSS tradicional: Mi experiencia',
    resumen: 'Después de usar ambos enfoques en proyectos reales, comparto mis conclusiones sobre cuándo usar Tailwind y cuándo escribir CSS tradicional.',
    emoji: '🎨',
    categoria: 'Frontend',
    fecha: '5 mayo, 2025',
    tiempoLectura: '4 min',
    etiquetas: ['TailwindCSS', 'CSS', 'Frontend', 'Desarrollo web'],
    contenido: [
      {
        tipo: 'intro',
        texto: 'Cuando empecé a aprender desarrollo web, escribía CSS en archivos separados. Luego descubrí TailwindCSS y todo cambió. Pero ¿es siempre mejor? Después de usarlos en varios proyectos, tengo una opinión clara.',
      },
      {
        tipo: 'h2',
        texto: 'Lo que me gustó de Tailwind',
      },
      {
        tipo: 'texto',
        texto: 'La velocidad de desarrollo es impresionante. Sin Tailwind, creo una clase, escribo CSS, vuelvo al HTML, ajusto. Con Tailwind, todo está en el HTML y lo ajusto al instante. Para prototipos y proyectos personales es imbatible.',
      },
      {
        tipo: 'texto',
        texto: 'Otra ventaja enorme: el diseño responsivo. En CSS tradicional, las media queries son verbosas. En Tailwind, sm:, md:, lg: van inline y son clarísimas de leer.',
      },
      {
        tipo: 'h2',
        texto: 'Las desventajas reales',
      },
      {
        tipo: 'texto',
        texto: 'El HTML se vuelve muy largo. Una card puede tener 15 clases. Al principio parece un desastre pero te acostumbrás y con componentes React se soluciona completamente.',
      },
      {
        tipo: 'conclusion',
        texto: 'Mi conclusión: Tailwind para proyectos personales, startups y cuando trabajás rápido. CSS tradicional (o CSS Modules) cuando el equipo es grande y necesitás naming conventions claras. En React, Tailwind gana casi siempre.',
      },
    ],
  },
  {
    slug: 'primer-año-ingenieria-sistemas',
    titulo: 'Mi primer año en Ingeniería de Sistemas: lo que aprendí',
    resumen: 'Reflexiones honestas sobre el primer año de carrera, los retos de programar desde cero, las materias que más me marcaron y los consejos que me hubiera gustado recibir.',
    emoji: '🎓',
    categoria: 'Personal',
    fecha: '28 abril, 2025',
    tiempoLectura: '6 min',
    etiquetas: ['Universidad', 'Ingeniería', 'Programación', 'UNHEVAL'],
    contenido: [
      {
        tipo: 'intro',
        texto: 'Entrar a Ingeniería de Sistemas en la UNHEVAL fue uno de los mejores y más desafiantes pasos de mi vida. Después de completar el primer año, quiero compartir una reflexión honesta sobre lo que viví.',
      },
      {
        tipo: 'h2',
        texto: 'El choque inicial con la programación',
      },
      {
        tipo: 'texto',
        texto: 'Llegar sin experiencia en programación y enfrentarse a algoritmos y pseudocódigo desde la primera semana fue duro. Los primeros ejercicios de lógica en papel me hicieron sudar frío. Pero hay algo que nadie te dice: todos pasamos por eso.',
      },
      {
        tipo: 'texto',
        texto: 'El punto de inflexión fue cuando dejé de copiar código y empecé a entender por qué cada línea hacía lo que hacía. Eso cambia todo.',
      },
      {
        tipo: 'h2',
        texto: 'Las materias que más me marcaron',
      },
      {
        tipo: 'texto',
        texto: 'Fundamentos de Programación me enseñó a pensar de forma estructurada. Matemática Discreta me hizo entender la lógica detrás de los algoritmos. Bases de Datos me mostró cómo organizar información de forma eficiente.',
      },
      {
        tipo: 'h2',
        texto: 'Lo que haría diferente',
      },
      {
        tipo: 'texto',
        texto: 'Empezaría proyectos personales desde el primer mes, no esperaría a "saber suficiente". La mejor forma de aprender es haciendo cosas reales, aunque sean pequeñas.',
      },
      {
        tipo: 'conclusion',
        texto: 'El primer año fue difícil pero transformador. Si estás empezando: sé constante, construye proyectos aunque sean básicos, y no compares tu progreso con el de los demás. Cada uno tiene su ritmo.',
      },
    ],
  },
]
