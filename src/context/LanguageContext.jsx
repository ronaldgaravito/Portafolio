import { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  es: {
    // Navbar
    home: "Inicio",
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Mensaje",
    cta: "Contáctame",
    theme: "Tema",
    lang: "Idioma",
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
    changeTheme: "Cambiar tema",
    changeLang: "Cambiar idioma",
    
    // Hero
    heroBadge: "Disponible para trabajar",
    heroGreeting: "Hola, soy",
    heroRole: "Estudiante de Ing. Sistemas",
    heroDesc: "Apasionado por el desarrollo de software, construyendo soluciones con Java, Spring Boot y React. Basado en",
    heroLocation: "📍 Montería, Colombia",
    heroViewProjects: "Ver proyectos",
    
    // About
    aboutTag: "✦ Sobre mí",
    aboutTitle: "Construyendo el futuro, una línea a la vez",
    aboutText1: "Soy Ronald Garavito Zapata, estudiante de Ingeniería de Sistemas en Montería, Colombia. Tengo una gran pasión por el desarrollo de software y la tecnología, especialmente en el desarrollo backend con Java y Spring Boot, y en el frontend con React y tecnologías web modernas.",
    aboutText2: "Me motiva crear soluciones que tengan un impacto real, aprendiendo constantemente y aplicando buenas prácticas de programación. Disfruto trabajar tanto en el lado del servidor como en la interfaz de usuario, lo que me permite tener una visión completa del desarrollo de aplicaciones.",
    aboutInfoCareer: "Carrera",
    aboutInfoSystems: "Ing. Sistemas",
    aboutInfoLocation: "Ubicación",
    aboutInfoStatus: "Estado",
    aboutInfoStatusVal: "Buscando oportunidades",
    aboutInfoLanguages: "Idiomas",
    aboutInfoLanguagesVal: "Español, Inglés básico",
    aboutTalk: "Hablemos",
    aboutGithub: "Ver GitHub →",
    aboutStatYears: "Años estudiando",
    aboutStatProjects: "Proyectos",
    aboutStatTech: "Tecnologías",
    
    // Skills
    skillsTag: "✦ Habilidades",
    skillsTitle: "Mi Stack Tecnológico",
    skillsSubtitle: "Tecnologías con las que construyo soluciones modernas, desde APIs robustas hasta interfaces de usuario interactivas.",
    skillsBackend: "Backend",
    skillsFrontend: "Frontend",
    skillsTools: "Herramientas",

    // Projects
    projectsTag: "✦ Proyectos",
    projectsTitle: "Lo que he construido",
    projectsSubtitle: "Una selección de proyectos que demuestran mis habilidades en desarrollo frontend, backend y consumo de APIs.",
    projectsViewAll: "Ver todos en GitHub",
    project1Title: "App del Clima",
    project1Desc: "Aplicación web que consume una API meteorológica en tiempo real para mostrar pronósticos del clima por ciudad. Interfaz moderna con datos dinámicos.",
    project2Title: "API Spring Boot",
    project2Desc: "Backend RESTful construido con Java y Spring Boot. Incluye entidades, repositorios, servicios y controladores para una arquitectura limpia y escalable.",
    project3Title: "Consumo de API (Grupal)",
    project3Desc: "Proyecto grupal enfocado en el consumo de una API y la implementación de mejoras a la aplicación.",

    // Contact
    contactTag: "✦ Contacto",
    contactTitle: "¿Hablamos?",
    contactSubtitle: "Estoy disponible para oportunidades laborales, colaboraciones en proyectos o simplemente para conectar. ¡No dudes en escribirme!",
    contactCopyEmail: "Copiar email",
    contactCopied: "¡Copiado!",
    contactQuote: '"El código limpio siempre parece que fue escrito por alguien que se preocupa."',
    contactAuthor: "— Robert C. Martin",
    contactFooter: "Hecho con ❤️ y React",
    contactName: "NOMBRE",
    contactEmailLabel: "CORREO ELECTRÓNICO",
    contactSubject: "ASUNTO",
    contactMessage: "MENSAJE",
    contactPlaceholderName: "Tu nombre",
    contactPlaceholderEmail: "tu@correo.com",
    contactPlaceholderSubject: "Oportunidad de proyecto",
    contactPlaceholderMessage: "Cuéntame sobre tu proyecto u oportunidad...",
    contactSendMessage: "Enviar Mensaje",
    contactFormTitle: "Enviame un Mensaje"
  },
  en: {
    // Navbar
    home: "Home",
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    contact: "Message",
    cta: "Contact Me",
    theme: "Theme",
    lang: "Language",
    light: "Light",
    dark: "Dark",
    system: "System",
    changeTheme: "Change theme",
    changeLang: "Change language",

    // Hero
    heroBadge: "Available for work",
    heroGreeting: "Hi, I'm",
    heroRole: "Computer Engineering Student",
    heroDesc: "Passionate about software development, building modern solutions with Java, Spring Boot and React. Based in",
    heroLocation: "📍 Montería, Colombia",
    heroViewProjects: "View projects",
    
    // About
    aboutTag: "✦ About Me",
    aboutTitle: "Building the future, one line at a time",
    aboutText1: "I'm Ronald Garavito Zapata, a Computer Engineering student in Montería, Colombia. I have a great passion for software development and technology, especially in backend development with Java and Spring Boot, and in frontend with React and modern web technologies.",
    aboutText2: "I'm motivated by creating solutions that have a real impact, constantly learning and applying good programming practices. I enjoy working on both the server side and the user interface, which allows me to have a complete vision of application development.",
    aboutInfoCareer: "Degree",
    aboutInfoSystems: "Systems Eng.",
    aboutInfoLocation: "Location",
    aboutInfoStatus: "Status",
    aboutInfoStatusVal: "Looking for opportunities",
    aboutInfoLanguages: "Languages",
    aboutInfoLanguagesVal: "Spanish, Basic English",
    aboutTalk: "Let's Talk",
    aboutGithub: "View GitHub →",
    aboutStatYears: "Years studying",
    aboutStatProjects: "Projects",
    aboutStatTech: "Technologies",

    // Skills
    skillsTag: "✦ Skills",
    skillsTitle: "My Tech Stack",
    skillsSubtitle: "Technologies I use to build modern solutions, from robust APIs to interactive user interfaces.",
    skillsBackend: "Backend",
    skillsFrontend: "Frontend",
    skillsTools: "Tools",

    // Projects
    projectsTag: "✦ Projects",
    projectsTitle: "What I've Built",
    projectsSubtitle: "A selection of projects demonstrating my skills in frontend, backend development, and API consumption.",
    projectsViewAll: "View all on GitHub",
    project1Title: "Weather App",
    project1Desc: "Web application that consumes a real-time weather API to show weather forecasts by city. Modern interface with dynamic data.",
    project2Title: "Spring Boot API",
    project2Desc: "RESTful backend built with Java and Spring Boot. Includes entities, repositories, services, and controllers for a clean and scalable architecture.",
    project3Title: "API Consumption (Group)",
    project3Desc: "Group project focused on consuming an API and implementing improvements to the application.",

    // Contact
    contactTag: "✦ Contact",
    contactTitle: "Let's Talk!",
    contactSubtitle: "I'm available for work opportunities, project collaborations, or just to connect. Don't hesitate to write to me!",
    contactCopyEmail: "Copy email",
    contactCopied: "Copied!",
    contactQuote: '"Clean code always looks like it was written by someone who cares."',
    contactAuthor: "— Robert C. Martin",
    contactFooter: "Made with ❤️ and React",
    contactName: "NAME",
    contactEmailLabel: "EMAIL",
    contactSubject: "SUBJECT",
    contactMessage: "MESSAGE",
    contactPlaceholderName: "Your name",
    contactPlaceholderEmail: "you@company.com",
    contactPlaceholderSubject: "Project opportunity",
    contactPlaceholderMessage: "Tell me about your project or opportunity...",
    contactSendMessage: "Send Message",
    contactFormTitle: "Send me a Message"
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "es");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
