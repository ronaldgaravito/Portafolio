import { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import './Skills.css';

export default function Skills() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('backend');

  const skillCategories = [
    {
      id: 'backend',
      label: t.skillsBackend,
      icon: '🖥️',
      skills: [
        { name: 'Java', level: 100, color: '#f89820', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Spring Boot', level: 100, color: '#6db33f', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'MySQL', level: 100, color: '#4479a1', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'REST APIs', level: 100, color: '#7c3aed', icon: 'https://api.iconify.design/logos:rest.svg' },
      ],
    },
    {
      id: 'frontend',
      label: t.skillsFrontend,
      icon: '🎨',
      skills: [
        { name: 'React', level: 100, color: '#61dafb', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'JavaScript', level: 100, color: '#f7df1e', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML5', level: 100, color: '#e34c26', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', level: 100, color: '#1572b6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      ],
    },
    {
      id: 'tools',
      label: t.skillsTools,
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 100, color: '#f05032', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', level: 100, color: '#ffffff', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Vite', level: 100, color: '#646cff', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
        { name: 'Maven', level: 100, color: '#c71a36', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
        { name: 'Postman', level: 100, color: '#ef5b25', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
      ],
    },
  ];

  const techBadges = [
    { name: 'Java', color: '#f89820', bg: 'rgba(248,152,32,0.12)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot', color: '#6db33f', bg: 'rgba(109,179,63,0.12)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'React', color: '#61dafb', bg: 'rgba(97,218,251,0.12)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', color: '#f7df1e', bg: 'rgba(247,223,30,0.12)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'MySQL', color: '#4479a1', bg: 'rgba(68,121,161,0.12)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'HTML5', color: '#e34c26', bg: 'rgba(227,76,38,0.12)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', color: '#1572b6', bg: 'rgba(21,114,182,0.12)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Git', color: '#f05032', bg: 'rgba(240,80,50,0.12)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', color: '#ffffff', bg: 'rgba(255,255,255,0.12)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Vite', color: '#646cff', bg: 'rgba(100,108,255,0.12)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    { name: 'Maven', color: '#c71a36', bg: 'rgba(199,26,54,0.12)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
    { name: 'Postman', color: '#ef5b25', bg: 'rgba(239,91,37,0.12)', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'REST APIs', color: '#7c3aed', bg: 'rgba(124,58,237,0.12)', icon: 'https://api.iconify.design/logos:rest.svg' },
  ];

  const activeCategory = skillCategories.find((c) => c.id === activeTab);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        {/* Header */}
        <div className="skills__header">
          <span className="section-tag">{t.skillsTag}</span>
          <h2 className="section-title">{t.skillsTitle}</h2>
          <p className="section-subtitle">
            {t.skillsSubtitle}
          </p>
        </div>

        {/* Tech Badge Cloud */}
        <div className="skills__badges">
          {techBadges.map((tech) => (
            <span
              key={tech.name}
              className="skills__badge"
              style={{ color: tech.color, background: tech.bg, borderColor: tech.color + '40' }}
            >
              <img src={tech.icon} alt={tech.name} className="skills__badge-icon" />
              {tech.name}
            </span>
          ))}
        </div>

        {/* Tabs */}
        <div className="skills__tabs">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skills__tab ${activeTab === cat.id ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
              id={`skill-tab-${cat.id}`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="skills__bars">
          {activeCategory?.skills.map((skill, i) => (
            <div key={skill.name} className="skills__bar-item glass-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="skills__bar-header">
                <div className="skills__bar-info">
                  <img src={skill.icon} alt={skill.name} className="skills__bar-icon-img" />
                  <span className="skills__bar-name">{skill.name}</span>
                </div>
              </div>
              <div className="skills__bar-track">
                <div
                  className="skills__bar-fill"
                  style={{
                    width: '100%',
                    background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})`,
                    boxShadow: `0 0 12px ${skill.color}50`,
                    animationDelay: `${i * 0.15}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
