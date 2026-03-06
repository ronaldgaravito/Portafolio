import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const contactLinks = [
  {
    id: 'email',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: 'Email',
    value: 'ronaldgaravito687@gmail.com',
    href: 'mailto:ronaldgaravito687@gmail.com',
    color: '#ea4335',
    bg: 'rgba(234,67,53,0.12)',
  },
  {
    id: 'github',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub',
    value: '@ronaldgaravito',
    href: 'https://github.com/ronaldgaravito',
    color: '#e2e8f0',
    bg: 'rgba(226,232,240,0.08)',
  },
  {
    id: 'linkedin',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Ronald Garavito',
    href: 'https://www.linkedin.com/in/ronald-garavito-0320b927a/',
    color: '#0a66c2',
    bg: 'rgba(10,102,194,0.15)',
  },
];

export default function Contact() {
  const { t } = useLanguage();
  const form = useRef();
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const copyEmail = () => {
    navigator.clipboard.writeText('ronaldgaravito687@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log(result.text);
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus(null), 5000);
    }, (error) => {
      console.log(error.text);
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__inner">
          {/* Header */}
          <div className="contact__header">
            <span className="section-tag">{t.contactTag}</span>
            <h2 className="section-title">{t.contactTitle}</h2>
            <p className="section-subtitle">
              {t.contactSubtitle}
            </p>
          </div>

          {/* Cards */}
          <div className="contact__cards">
            {contactLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.id !== 'email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="contact__card glass-card"
                id={`contact-${link.id}`}
              >
                <div className="contact__card-icon" style={{ color: link.color, background: link.bg }}>
                  {link.icon}
                </div>
                <div className="contact__card-info">
                  <span className="contact__card-label">{link.label}</span>
                  <span className="contact__card-value">{link.value}</span>
                </div>
                <svg className="contact__card-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </a>
            ))}
          </div>

          <div className="contact__scroll-indicator">
            <button 
              className="contact__scroll-btn" 
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="Scroll to form"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m7 13 5 5 5-5M7 6l5 5 5-5"/>
              </svg>
            </button>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="contact__form-container glass-card">
            <h3 className="contact__form-title">{t.contactFormTitle}</h3>
            <form ref={form} onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-group">
                <label className="contact__form-label">{t.contactName}</label>
                <div className="contact__input-wrapper">
                  <svg className="contact__input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <input name="user_name" type="text" placeholder={t.contactPlaceholderName} className="contact__input" required />
                </div>
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label">{t.contactEmailLabel}</label>
                <div className="contact__input-wrapper">
                  <svg className="contact__input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  <input name="user_email" type="email" placeholder={t.contactPlaceholderEmail} className="contact__input" required />
                </div>
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label">{t.contactSubject}</label>
                <div className="contact__input-wrapper">
                  <svg className="contact__input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" x2="3" y1="6" y2="6"></line><line x1="21" x2="3" y1="12" y2="12"></line><line x1="21" x2="3" y1="18" y2="18"></line></svg>
                  <input name="subject" type="text" placeholder={t.contactPlaceholderSubject} className="contact__input" required />
                </div>
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label">{t.contactMessage}</label>
                <div className="contact__input-wrapper contact__input-wrapper--textarea">
                  <textarea name="message" placeholder={t.contactPlaceholderMessage} className="contact__input contact__input--textarea" required></textarea>
                </div>
              </div>

              <button type="submit" disabled={status === 'sending'} className={`contact__form-submit ${status === 'sending' ? 'sending' : ''}`}>
                {status === 'sending' ? t.contactSending : status === 'success' ? t.contactSuccess : t.contactSendMessage}
                <svg className="contact__submit-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>

              {status === 'error' && (
                <p className="contact__form-status error">{t.contactError}</p>
              )}
            </form>
          </div>

          {/* Copy Email Button */}
          <div className="contact__copy">
            <button
              className="contact__copy-btn"
              onClick={copyEmail}
              id="contact-copy-email"
            >
              {copied ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  {t.contactCopied}
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="14" height="14" x="8" y="8" rx="2"/>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                  </svg>
                  {t.contactCopyEmail}
                </>
              )}
            </button>
          </div>

          {/* Footer Quote */}
          <div className="contact__footer">
            <p className="contact__quote">
              {t.contactQuote}
            </p>
            <span className="contact__quote-author">{t.contactAuthor}</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="contact__bottom">
        <div className="container">
          <div className="contact__bottom-inner">
            <span className="contact__bottom-logo">
              <span style={{color:'#a78bfa'}}>&lt;</span>RG<span style={{color:'#a78bfa'}}>/&gt;</span>
            </span>
            <p className="contact__bottom-copy">
              © 2025 Ronald Garavito Zapata • {t.contactFooter}
            </p>
            <div className="contact__bottom-socials">
              {contactLinks.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__bottom-social"
                  style={{ color: l.color }}
                  aria-label={l.label}
                >
                  {l.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
