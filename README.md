# 🚀 Portfolio — Walter Sebastian Pacheco Orizano

Portfolio web profesional desarrollado con **React + Vite + TailwindCSS + Framer Motion**, completamente dockerizado para una ejecución inmediata sin configuraciones adicionales.

> **Autor:** Walter Sebastian Pacheco Orizano  
> **Carrera:** Ingeniería de Sistemas — UNHEVAL  
> **Email:** wsebaspach23@gmail.com

---

## ✨ Características

- Diseño moderno en modo oscuro con paleta cyan/púrpura
- Totalmente responsive (móvil, tablet y escritorio)
- Animaciones fluidas con Framer Motion (typewriter, barras animadas, contadores, carrusel)
- Toggle dark/light mode con persistencia
- 11 secciones completas de contenido
- Links funcionales a GitHub, LinkedIn, Instagram y Email

## 🛠️ Tecnologías utilizadas

| Área          | Tecnología                        |
|---------------|-----------------------------------|
| Framework     | React 18 + Vite 5                 |
| Estilos       | TailwindCSS 3                     |
| Animaciones   | Framer Motion 11                  |
| Iconos        | React Icons 5                     |
| Fuentes       | Google Fonts (Inter, Outfit)      |
| Servidor      | Nginx 1.25 Alpine                 |
| Contenedor    | Docker + Docker Compose           |

## 📁 Estructura del proyecto

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       ← Barra de navegación fija
│   │   │   └── Footer.jsx       ← Pie de página
│   │   ├── sections/
│   │   │   ├── Hero.jsx         ← Pantalla principal con typewriter
│   │   │   ├── About.jsx        ← Información personal
│   │   │   ├── Skills.jsx       ← Barras de habilidades animadas
│   │   │   ├── Projects.jsx     ← Tarjetas de proyectos
│   │   │   ├── Experience.jsx   ← Timeline de experiencia/educación
│   │   │   ├── Certifications.jsx ← Certificados obtenidos
│   │   │   ├── Stats.jsx        ← Contadores animados + mapa GitHub
│   │   │   ├── Testimonials.jsx ← Carrusel de testimonios
│   │   │   ├── Hobbies.jsx      ← Hobbies e intereses
│   │   │   ├── FAQ.jsx          ← Preguntas frecuentes (acordeón)
│   │   │   └── Contact.jsx      ← Formulario + redes sociales
│   │   └── ui/
│   │       └── SectionTitle.jsx ← Título reutilizable para secciones
│   ├── hooks/
│   │   └── useDarkMode.js       ← Hook para modo oscuro/claro
│   ├── App.jsx                  ← Componente raíz
│   ├── main.jsx                 ← Punto de entrada React
│   └── index.css                ← Estilos globales + utilidades Tailwind
├── Dockerfile                   ← Build multi-etapa Node → Nginx
├── docker-compose.yml           ← Configuración de servicio Docker
├── nginx.conf                   ← Configuración del servidor web
├── package.json                 ← Dependencias del proyecto
├── tailwind.config.js           ← Configuración de TailwindCSS
└── vite.config.js               ← Configuración de Vite
```

## 🐳 Ejecutar con Docker (recomendado)

**Requisito:** Tener [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado.

```bash
# 1. Levantar el proyecto
docker compose up

# 2. Abrir en el navegador
# http://localhost:3000

# 3. Para detener
docker compose down
```

Si modificaste el código fuente:
```bash
docker compose up --build
```

## 💻 Ejecutar en modo desarrollo (sin Docker)

**Requisito:** [Node.js 18+](https://nodejs.org/)

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo con hot-reload
npm run dev
# → http://localhost:5173

# 3. Generar build de producción
npm run build
```

## ✏️ Cómo personalizar el contenido

Cada sección tiene sus datos declarados directamente al inicio del archivo. Por ejemplo, para cambiar los proyectos:

```
src/components/sections/Projects.jsx  → array PROYECTOS
src/components/sections/Skills.jsx    → arrays FRONTEND, BACKEND, etc.
src/components/sections/Hero.jsx      → constantes NOMBRE, BIO, SOCIALES
src/components/sections/About.jsx     → constantes DESCRIPCION, INFO
```

Solo editá las constantes en la parte superior de cada componente y el cambio se refleja automáticamente.

---

Desarrollado con ❤️ por Walter Sebastian Pacheco Orizano
