import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
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
        { name: 'Java', level: 85, color: '#f89820', icon: '☕' },
        { name: 'Spring Boot', level: 78, color: '#6db33f', icon: '🍃' },
        { name: 'MySQL', level: 80, color: '#4479a1', icon: '🗄️' },
        { name: 'REST APIs', level: 82, color: '#7c3aed', icon: '🔗' },
      ],
    },
    {
      id: 'frontend',
      label: t.skillsFrontend,
      icon: '🎨',
      skills: [
        { name: 'React', level: 80, color: '#61dafb', icon: '⚛️' },
        { name: 'JavaScript', level: 82, color: '#f7df1e', icon: '⚡' },
        { name: 'HTML5', level: 90, color: '#e34c26', icon: '📄' },
        { name: 'CSS3', level: 85, color: '#1572b6', icon: '🎨' },
      ],
    },
    {
      id: 'tools',
      label: t.skillsTools,
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 78, color: '#f05032', icon: '🔧' },
        { name: 'Vite', level: 75, color: '#646cff', icon: '⚡' },
        { name: 'Maven', level: 70, color: '#c71a36', icon: '📦' },
        { name: 'Postman', level: 75, color: '#ef5b25', icon: '🧪' },
      ],
    },
  ];

  const techBadges = [
    { name: 'Java', color: '#f89820', bg: 'rgba(248,152,32,0.12)' },
    { name: 'Spring Boot', color: '#6db33f', bg: 'rgba(109,179,63,0.12)' },
    { name: 'React', color: '#61dafb', bg: 'rgba(97,218,251,0.12)' },
    { name: 'JavaScript', color: '#f7df1e', bg: 'rgba(247,223,30,0.12)' },
    { name: 'MySQL', color: '#4479a1', bg: 'rgba(68,121,161,0.12)' },
    { name: 'HTML5', color: '#e34c26', bg: 'rgba(227,76,38,0.12)' },
    { name: 'CSS3', color: '#1572b6', bg: 'rgba(21,114,182,0.12)' },
    { name: 'Git', color: '#f05032', bg: 'rgba(240,80,50,0.12)' },
    { name: 'Vite', color: '#646cff', bg: 'rgba(100,108,255,0.12)' },
    { name: 'REST APIs', color: '#a78bfa', bg: 'rgba(167,139,250,0.12)' },
    { name: 'Maven', color: '#c71a36', bg: 'rgba(199,26,54,0.12)' },
    { name: 'Postman', color: '#ef5b25', bg: 'rgba(239,91,37,0.12)' },
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
                  <span className="skills__bar-icon">{skill.icon}</span>
                  <span className="skills__bar-name">{skill.name}</span>
                </div>
                <span className="skills__bar-level">{skill.level}%</span>
              </div>
              <div className="skills__bar-track">
                <div
                  className="skills__bar-fill"
                  style={{
                    width: `${skill.level}%`,
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
