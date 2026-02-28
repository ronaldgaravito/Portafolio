import './About.css';

const stats = [
  { number: '3+', label: 'Años estudiando' },
  { number: '10+', label: 'Proyectos' },
  { number: '5+', label: 'Tecnologías' },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__inner">
          {/* Left: Text */}
          <div className="about__content">
            <span className="section-tag">✦ Sobre mí</span>
            <h2 className="section-title">Construyendo el futuro,<br />una línea a la vez</h2>
            <p className="about__text">
              Soy <strong>Ronald Garavito Zapata</strong>, estudiante de Ingeniería de Sistemas
              en Montería, Colombia. Tengo una gran pasión por el desarrollo de software
              y la tecnología, especialmente en el desarrollo backend con Java y Spring Boot,
              y en el frontend con React y tecnologías web modernas.
            </p>
            <p className="about__text">
              Me motiva crear soluciones que tengan un impacto real, aprendiendo constantemente
              y aplicando buenas prácticas de programación. Disfruto trabajar tanto en el lado
              del servidor como en la interfaz de usuario, lo que me permite tener una visión
              completa del desarrollo de aplicaciones.
            </p>

            <div className="about__info-grid">
              <div className="about__info-item">
                <span className="about__info-icon">🎓</span>
                <div>
                  <span className="about__info-label">Carrera</span>
                  <span className="about__info-value">Ing. Sistemas</span>
                </div>
              </div>
              <div className="about__info-item">
                <span className="about__info-icon">📍</span>
                <div>
                  <span className="about__info-label">Ubicación</span>
                  <span className="about__info-value">Montería, Colombia</span>
                </div>
              </div>
              <div className="about__info-item">
                <span className="about__info-icon">💼</span>
                <div>
                  <span className="about__info-label">Estado</span>
                  <span className="about__info-value">Buscando oportunidades</span>
                </div>
              </div>
              <div className="about__info-item">
                <span className="about__info-icon">🌐</span>
                <div>
                  <span className="about__info-label">Idiomas</span>
                  <span className="about__info-value">Español, Inglés básico</span>
                </div>
              </div>
            </div>

            <div className="about__actions">
              <a
                href="mailto:ronaldgaravito687@gmail.com"
                className="btn-primary"
                id="about-contact-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.96-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Hablemos
              </a>
              <a
                href="https://github.com/ronaldgaravito"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                id="about-github-btn"
              >
                Ver GitHub →
              </a>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="about__stats-side">
            <div className="about__stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about__stat glass-card">
                  <span className="about__stat-number">{stat.number}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Terminal Card */}
            <div className="about__terminal glass-card">
              <div className="about__terminal-header">
                <span className="about__terminal-dot" style={{background: '#ff5f57'}}></span>
                <span className="about__terminal-dot" style={{background: '#febc2e'}}></span>
                <span className="about__terminal-dot" style={{background: '#28c840'}}></span>
                <span className="about__terminal-title">ronald.json</span>
              </div>
              <pre className="about__terminal-body">
{`{
  "nombre": "Ronald Garavito Zapata",
  "rol": "Full Stack Developer",
  "ciudad": "Montería, Colombia",
  "stack": ["Java", "Spring Boot",
            "React", "MySQL"],
  "disponible": true,
  "passion": "Clean Code 🚀"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
