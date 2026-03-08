import { useLanguage } from '../../../context/LanguageContext';
import './About.css';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { number: '3+', label: t.aboutStatYears },
    { number: '10+', label: t.aboutStatProjects },
    { number: '5+', label: t.aboutStatTech },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__inner">
          {/* Left: Text */}
          <div className="about__content">
            <span className="section-tag">{t.aboutTag}</span>
            <h2 className="section-title">{t.aboutTitle.split(',').map((part, i) => (
              <span key={i}>{part}{i === 0 && <br />}</span>
            ))}</h2>
            <p className="about__text">
              {t.aboutText1}
            </p>
            <p className="about__text">
              {t.aboutText2}
            </p>

            <div className="about__info-grid">
              <div className="about__info-item">
                <span className="about__info-icon">🎓</span>
                <div>
                  <span className="about__info-label">{t.aboutInfoCareer}</span>
                  <span className="about__info-value">{t.aboutInfoSystems}</span>
                </div>
              </div>
              <div className="about__info-item">
                <span className="about__info-icon">📍</span>
                <div>
                  <span className="about__info-label">{t.aboutInfoLocation}</span>
                  <span className="about__info-value">Montería, Colombia</span>
                </div>
              </div>
              <div className="about__info-item">
                <span className="about__info-icon">💼</span>
                <div>
                  <span className="about__info-label">{t.aboutInfoStatus}</span>
                  <span className="about__info-value">{t.aboutInfoStatusVal}</span>
                </div>
              </div>
              <div className="about__info-item">
                <span className="about__info-icon">🌐</span>
                <div>
                  <span className="about__info-label">{t.aboutInfoLanguages}</span>
                  <span className="about__info-value">{t.aboutInfoLanguagesVal}</span>
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
                {t.aboutTalk}
              </a>
              <a
                href="https://github.com/ronaldgaravito"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                id="about-github-btn"
              >
                {t.aboutGithub}
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
