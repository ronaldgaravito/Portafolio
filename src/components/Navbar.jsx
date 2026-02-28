import { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="mailto:ronaldgaravito687@gmail.com"
          className="navbar__cta btn-primary"
        >
          Contáctame
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
            {link.label}
          </a>
        ))}
        <a
          href="mailto:ronaldgaravito687@gmail.com"
          className="btn-primary"
          style={{ alignSelf: "flex-start", marginTop: "8px" }}
        >
          Contáctame
        </a>
      </div>
    </nav>
  );
}
