import { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import './Projects.css';

// Import images
import imgClima from '../../../assets/4.png';
import imgSpring1 from '../../../assets/2.png';
import imgSpring2 from '../../../assets/3.png';
import imgDBDesigner from '../../../assets/bd.png';
import spring3 from '../../../assets/Captura desde 2026-04-27 01-22-07.png';
import spring4 from '../../../assets/Captura desde 2026-04-27 01-22-20.png';
import spring5 from '../../../assets/Captura desde 2026-04-27 01-22-46.png';
import spring6 from '../../../assets/Captura desde 2026-04-28 14-10-54.png';
import spring7 from '../../../assets/Captura desde 2026-04-28 14-14-39.png';
import spring8 from '../../../assets/Captura desde 2026-04-28 14-14-51.png';
import spring9 from '../../../assets/Captura desde 2026-04-28 14-15-00.png';
import spring10 from '../../../assets/Captura desde 2026-04-28 14-15-07.png';
import spring11 from '../../../assets/Captura desde 2026-04-28 14-15-16.png';
import spring12 from '../../../assets/Captura desde 2026-04-28 14-16-23.png';

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({}); // { projectId: index }

  const nextImage = (projectId, totalImages, e) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectId, totalImages, e) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: (prev[projectId] || 0) === 0 ? totalImages - 1 : (prev[projectId] || 0) - 1
    }));
  };

  const projects = [
    {
      id: 1,
      title: t.project1Title,
      description: t.project1Desc,
      tags: ['JavaScript', 'API REST', 'HTML', 'CSS'],
      emoji: '🌤️',
      color: '#06b6d4',
      github: 'https://github.com/ronaldgaravito/App-clima.git',
      demo: null,
      featured: true,
      image: imgClima,
    },
    {
      id: 2,
      title: t.project2Title,
      description: t.project2Desc,
      tags: ['Java', 'Spring Boot', 'MySQL'],
      emoji: '🍃',
      color: '#6db33f',
      github: 'https://github.com/ronaldgaravito/inventory-system.git',
      demo: null,
      featured: false,
      images: [imgSpring1, imgSpring2, spring3, spring4, spring5, spring6, spring7, spring8, spring9, spring10, spring11, spring12],
    },
    {
      id: 3,
      title: t.project3Title,
      description: t.project3Desc,
      tags: ['React', 'Vite', 'Supabase', 'Frontend', 'Diseño de BD'],
      emoji: '🧩',
      color: '#a855f7',
      github: 'https://github.com/ronaldgaravito/db-designer', // Link to be checked later, standard placeholder for now if you don't provide one
      demo: 'https://db-designer-mu.vercel.app/',
      featured: true,
      image: imgDBDesigner, // Replaced later
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        {/* Header */}
        <div className="projects__header">
          <span className="section-tag">{t.projectsTag}</span>
          <h2 className="section-title">{t.projectsTitle}</h2>
          <p className="section-subtitle">
            {t.projectsSubtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`project-card glass-card ${project.featured ? 'project-card--featured' : ''} ${(project.id === 3 || project.id === 2) ? 'project-card--clickable' : ''}`}
              style={{ animationDelay: `${i * 0.15}s`, '--card-color': project.color }}
              onClick={() => { if (project.id === 3 || project.id === 2) setSelectedProject(project); }}
            >
              {/* Card Header */}
              <div className="project-card__header">
                <div className="project-card__emoji" style={{ background: `${project.color}20`, borderColor: `${project.color}40` }}>
                  {project.emoji}
                </div>
                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                      aria-label="GitHub"
                      id={`project-github-${project.id}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                      aria-label="Demo"
                      id={`project-demo-${project.id}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Image */}
              <div className="project-card__image-container">
                {project.images && project.images.length > 0 ? (
                  <div className="project-card__carousel">
                    <img 
                      src={project.images[currentImageIndex[project.id] || 0]} 
                      alt={`${project.title} - ${(currentImageIndex[project.id] || 0) + 1}`} 
                      className="project-card__img" 
                    />
                    {project.images.length > 1 && (
                      <>
                        <button 
                          className="carousel-btn carousel-btn--prev"
                          onClick={(e) => prevImage(project.id, project.images.length, e)}
                          aria-label="Imagen anterior"
                        >
                          ‹
                        </button>
                        <button 
                          className="carousel-btn carousel-btn--next"
                          onClick={(e) => nextImage(project.id, project.images.length, e)}
                          aria-label="Siguiente imagen"
                        >
                          ›
                        </button>
                        <div className="carousel-dots">
                          {project.images.map((_, idx) => (
                            <span 
                              key={idx} 
                              className={`carousel-dot ${(currentImageIndex[project.id] || 0) === idx ? 'active' : ''}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <img src={project.image} alt={project.title} className="project-card__img" />
                )}
              </div>

              {/* Card Body */}
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              {/* Tags */}
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Gradient line at bottom */}
              <div
                className="project-card__accent"
                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
              ></div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="projects__cta">
          <a
            href="https://github.com/ronaldgaravito"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            id="projects-github-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            {t.projectsViewAll}
          </a>
        </div>
        {/* Modal for Projects with Images */}
        {selectedProject && (selectedProject.id === 3 || selectedProject.id === 2) && (
          <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="project-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
              <button className="project-modal-close" onClick={() => setSelectedProject(null)} aria-label="Cerrar modal">&times;</button>
              
              <div className="project-modal-body">
                {/* Carousel in Modal */}
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <div className="project-modal-carousel">
                    <img 
                      src={selectedProject.images[currentImageIndex[selectedProject.id] || 0]} 
                      alt={`${selectedProject.title} - ${(currentImageIndex[selectedProject.id] || 0) + 1}`} 
                      className="project-modal-img" 
                    />
                    {selectedProject.images.length > 1 && (
                      <>
                        <button 
                          className="carousel-btn carousel-btn--prev modal-carousel-btn--prev"
                          onClick={(e) => prevImage(selectedProject.id, selectedProject.images.length, e)}
                          aria-label="Imagen anterior"
                        >
                          ‹
                        </button>
                        <button 
                          className="carousel-btn carousel-btn--next modal-carousel-btn--next"
                          onClick={(e) => nextImage(selectedProject.id, selectedProject.images.length, e)}
                          aria-label="Siguiente imagen"
                        >
                          ›
                        </button>
                        <div className="carousel-dots modal-carousel-dots">
                          {selectedProject.images.map((_, idx) => (
                            <span 
                              key={idx} 
                              className={`carousel-dot ${(currentImageIndex[selectedProject.id] || 0) === idx ? 'active' : ''}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <img src={selectedProject.image} alt={selectedProject.title} className="project-modal-img" />
                )}
                
                <div className="project-modal-info">
                  <h2>{selectedProject.title}</h2>
                  <div className="project-modal-tags">
                    {selectedProject.tags.map(tag => <span key={tag} className="project-card__tag">{tag}</span>)}
                  </div>
                  
                  <div className="project-modal-readme">
                    {selectedProject.id === 3 ? (
                      <>
                        <h3>Acerca del Proyecto</h3>
                        <p>
                          <strong>DB Designer — Visual Database Schema Builder</strong><br/><br/>
                          DB Designer es una herramienta premium enfocada en lo visual para diseñar esquemas de bases de datos. Creada para desarrolladores que buscan evitar la tediosa escritura manual de SQL y centrarse en la arquitectura. Diseña tus tablas, arrastra relaciones y exporta código SQL listo para producción en segundos.
                        </p>
                        
                        <h3>Características Principales</h3>
                        <ul>
                          <li><strong>Infinite Canvas:</strong> Un espacio de trabajo fluido e interactivo para mapear toda la arquitectura de tu base de datos.</li>
                          <li><strong>Smart Relations:</strong> Conecta tablas mediante arrastrar y soltar para definir relaciones 1:1, 1:N o N:M.</li>
                          <li><strong>Instant SQL Generation:</strong> Genera automáticamente scripts SQL CREATE TABLE estándar y limpios con restricciones de Foreign Key.</li>
                          <li><strong>Cloud Sync:</strong> Guarda y gestiona tus diagramas de forma segura en la nube usando Supabase.</li>
                          <li><strong>Premium Aesthetics:</strong> Diseño elegante en modo oscuro con tipografía moderna y animaciones fluidas.</li>
                          <li><strong>Templates:</strong> Empieza al instante con esquemas preconstruidos para E-Commerce o Blogs.</li>
                        </ul>

                        <h3>Tecnologías Utilizadas</h3>
                        <ul>
                          <li><strong>Frontend:</strong> React + Vite</li>
                          <li><strong>Node Engine:</strong> React Flow (Diagramas interactivos)</li>
                          <li><strong>State Management:</strong> Zustand</li>
                          <li><strong>Backend / Auth:</strong> Supabase</li>
                          <li><strong>Icons:</strong> Lucide React</li>
                        </ul>
                      </>
                    ) : (
                      <>
                        <h3>Acerca del Proyecto</h3>
                        <p>
                          <strong>Sistema de Inventario</strong><br/><br/>
                          Sistema completo de gestión de inventario construido con Java y Spring Boot. Incluye gestión de productos, ventas, compras y usuarios con interfaz moderna en React y Vite.
                        </p>
                        
                        <h3>Características Principales</h3>
                        <ul>
                          <li><strong>Gestión de Productos:</strong> CRUD completo con categorías, imágenes y control de stock.</li>
                          <li><strong>Ventas y Compras:</strong> Sistema de ventas con carrito de compras y historial de compras.</li>
                          <li><strong>Autenticación:</strong> Login y registro de usuarios con diferentes roles (Admin/Cliente).</li>
                          <li><strong>Base de Datos:</strong> PostgreSQL en la nube con Supabase para persistencia segura.</li>
                          <li><strong>Interfaz Moderna:</strong> Diseño responsive con React, Vite y CSS moderno.</li>
                          <li><strong>Reportes:</strong> Alertas de stock mínimo y máximo para gestión eficiente.</li>
                        </ul>

                        <h3>Tecnologías Utilizadas</h3>
                        <ul>
                          <li><strong>Backend:</strong> Java + Spring Boot</li>
                          <li><strong>Frontend:</strong> React + Vite</li>
                          <li><strong>Base de Datos:</strong> PostgreSQL (Supabase)</li>
                          <li><strong>ORM:</strong> JPA/Hibernate</li>
                          <li><strong>Build Tool:</strong> Maven</li>
                        </ul>
                      </>
                    )}
                  </div>
                  
                  <div className="project-modal-actions">
                    {selectedProject.demo && (
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">Ver Demo en Vivo</a>
                    )}
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Ver Repositorio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
