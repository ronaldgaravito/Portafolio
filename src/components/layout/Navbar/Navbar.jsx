import { useState, useEffect } from "react";
import { Monitor, Sun, Moon, Languages, ChevronDown } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import "./Navbar.css";

const navLinks = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const [themeOpen, setThemeOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    const applyTheme = (t) => {
      if (t === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        root.classList.toggle("light", systemTheme === "light");
      } else {
        root.classList.toggle("light", t === "light");
      }
    };

    applyTheme(theme);
    localStorage.setItem("theme", theme);

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => applyTheme("system");
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLang = (l) => {
    setLang(l);
    setLangOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        {/* Logo */}
        <a
          href="#hero"
          className="navbar__logo"
          onClick={() => handleLinkClick("#hero")}
        >
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">RG</span>
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                {t[link.key]}
              </a>
            </li>
          ))}
        </ul>

        {/* Toolbar: Theme & Lang */}
        <div className="navbar__toolbar">
          {/* Theme Switcher */}
          <div className="navbar__dropdown-container">
            <button 
              className="navbar__icon-btn" 
              onClick={() => {
                setThemeOpen(!themeOpen);
                setLangOpen(false);
              }}
              title={t.changeTheme}
            >
              {theme === "light" ? <Sun size={20} /> : theme === "dark" ? <Moon size={20} /> : <Monitor size={20} />}
            </button>
            {themeOpen && (
              <div className="navbar__dropdown">
                <button onClick={() => { setTheme("light"); setThemeOpen(false); }} className={theme === "light" ? "active" : ""}>
                  <Sun size={16} /> {t.light}
                </button>
                <button onClick={() => { setTheme("dark"); setThemeOpen(false); }} className={theme === "dark" ? "active" : ""}>
                  <Moon size={16} /> {t.dark}
                </button>
                <button onClick={() => { setTheme("system"); setThemeOpen(false); }} className={theme === "system" ? "active" : ""}>
                  <Monitor size={16} /> {t.system}
                </button>
              </div>
            )}
          </div>

          {/* Lang Switcher */}
          <div className="navbar__dropdown-container">
            <button 
              className="navbar__icon-btn" 
              onClick={() => {
                setLangOpen(!langOpen);
                setThemeOpen(false);
              }}
              title={t.changeLang}
            >
              <Languages size={20} />
              <span className="navbar__lang-text">{lang.toUpperCase()}</span>
              <ChevronDown size={14} className={`navbar__chevron ${langOpen ? "open" : ""}`} />
            </button>
            {langOpen && (
              <div className="navbar__dropdown">
                <button onClick={() => toggleLang("es")} className={lang === "es" ? "active" : ""}>Español</button>
                <button onClick={() => toggleLang("en")} className={lang === "en" ? "active" : ""}>English</button>
              </div>
            )}
          </div>

          <a
            href="mailto:ronaldgaravito687@gmail.com"
            className="navbar__cta btn-primary"
          >
            {t.cta}
          </a>

          {/* Mobile Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="nav-hamburger"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(link.href);
            }}
          >
            {t[link.key]}
          </a>
        ))}
        
        <div className="navbar__mobile-tools">
          <div className="navbar__mobile-theme">
            <span>{t.theme}:</span>
            <div className="navbar__mobile-theme-btns">
              <button onClick={() => setTheme("light")} className={theme === "light" ? "active" : ""}><Sun size={18}/></button>
              <button onClick={() => setTheme("dark")} className={theme === "dark" ? "active" : ""}><Moon size={18}/></button>
              <button onClick={() => setTheme("system")} className={theme === "system" ? "active" : ""}><Monitor size={18}/></button>
            </div>
          </div>
          <div className="navbar__mobile-lang">
            <span>{t.lang}:</span>
            <div className="navbar__mobile-lang-btns">
              <button onClick={() => toggleLang("es")} className={lang === "es" ? "active" : ""}>ES</button>
              <button onClick={() => toggleLang("en")} className={lang === "en" ? "active" : ""}>EN</button>
            </div>
          </div>
        </div>

        <a
          href="mailto:ronaldgaravito687@gmail.com"
          className="btn-primary"
          style={{ width: "100%", justifyContent: "center", marginTop: "1rem" }}
        >
          {t.cta}
        </a>
      </div>
    </nav>
  );
}

