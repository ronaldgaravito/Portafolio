import { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import { LanguageProvider } from "./context/LanguageContext";

// Aplicamos Lazy Loading (Carga Diferida)
// Estas secciones solo se descargarán cuando el usuario empiece a hacer scroll o las necesite,
// haciendo que la carga inicial de la página sea ultra rápida.
const About = lazy(() => import("./components/sections/About/About"));
const Skills = lazy(() => import("./components/sections/Skills/Skills"));
const Projects = lazy(() => import("./components/sections/Projects/Projects"));
const Contact = lazy(() => import("./components/sections/Contact/Contact"));

// Un componente simple para mostrar mientras cargan las secciones pesadas al hacer scroll
const SectionLoader = () => (
  <div
    style={{
      padding: "5rem",
      textAlign: "center",
      color: "rgba(255,255,255,0.5)",
    }}
  >
    Cargando...
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        {/* Background Orbs */}
        <div className="orb orb-1" aria-hidden="true"></div>
        <div className="orb orb-2" aria-hidden="true"></div>
        <div className="orb orb-3" aria-hidden="true"></div>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          {/* El Hero carga inmediatamente porque es lo primero que ve el usuario */}
          <Hero />

          {/* Todo lo que no está visible inmediatamente se carga en segundo plano (Lazy) */}
          <Suspense fallback={<SectionLoader />}>
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
