# Portafolio Personal - Ronald Garavito

Portafolio personal construido con **React** y **Vite** para presentar mi perfil, habilidades, proyectos y formas de contacto en una experiencia single-page, responsive y bilingüe.

<div align="center">
  <a href="https://portafolio-iota-blush-71.vercel.app/">Ver demo en vivo</a>
</div>

## Resumen

La app está pensada como una landing profesional con navegación por secciones, cambio de idioma, tema claro/oscuro/sistema y una experiencia visual con fondos animados y carga diferida de contenido.

Incluye estas secciones:

- Hero con presentación principal y acceso rápido al CV.
- About con resumen personal, datos clave y enlace a GitHub.
- Skills con categorías de tecnologías y badges visuales.
- Projects con tarjetas, carrusel de imágenes y modales informativos.
- Contact con enlaces directos y formulario integrado con EmailJS y reCAPTCHA.

## Características

- Multilenguaje en español e inglés.
- Tema persistente con opciones claro, oscuro y sistema.
- Layout responsive para escritorio y móvil.
- Carga diferida de secciones no visibles al inicio para mejorar el rendimiento.
- Formulario de contacto con validación de reCAPTCHA y envío por EmailJS.
- Animaciones, cards tipo glassmorphism y fondo decorativo en el hero.
- Descarga de CV desde el sitio.

## Stack

- React 19
- Vite
- CSS personalizado
- Lucide React
- EmailJS Browser
- react-google-recaptcha
- @react-three/fiber
- three

## Estructura

```bash
src/
├── App.jsx
├── App.css
├── index.css
├── main.jsx
├── assets/
├── components/
│   ├── features/
│   │   └── Antigravity/
│   ├── layout/
│   │   └── Navbar/
│   └── sections/
│       ├── About/
│       ├── Contact/
│       ├── Hero/
│       ├── Projects/
│       └── Skills/
└── context/
    └── LanguageContext.jsx
```

## Requisitos

- Node.js 20 o superior.
- npm.
- Variables de entorno para EmailJS y reCAPTCHA.

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con estas variables:

```bash
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
VITE_RECAPTCHA_SITE_KEY=tu_recaptcha_site_key
```

## Instalación local

1. Instala dependencias:

```bash
npm install
```

2. Configura el archivo `.env`.

3. Levanta el entorno de desarrollo:

```bash
npm run dev
```

4. Para generar el build de producción:

```bash
npm run build
```

5. Para previsualizar el build:

```bash
npm run preview
```

## Scripts

- `npm run dev`: inicia Vite en modo desarrollo.
- `npm run build`: compila la aplicación para producción.
- `npm run preview`: previsualiza el build localmente.
- `npm run lint`: ejecuta ESLint sobre el proyecto.

## Docker

El proyecto incluye `Dockerfile` y `docker-compose.yml` para construir y servir la app con Nginx.

```bash
docker compose up --build
```

La aplicación queda disponible en `http://localhost:8080`.

## Contacto

- LinkedIn: https://www.linkedin.com/in/ronald-garavito-0320b927a/
- GitHub: https://github.com/ronaldgaravito
- Email: ronaldgaravito687@gmail.com

## Nota

El portafolio carga el CV desde el archivo `cv ronald.pdf` ubicado en `public/`.