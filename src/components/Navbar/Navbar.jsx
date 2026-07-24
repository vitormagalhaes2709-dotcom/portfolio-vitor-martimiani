import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import styles from './Navbar.module.css';

const SECTION_IDS = ['home', 'about', 'skills', 'certifications', 'projects', 'contact'];
const LANGUAGE_OPTIONS = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const activeId = useScrollSpy(SECTION_IDS);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trava o scroll do body enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Fecha o menu automaticamente se a viewport crescer para desktop (ex.:
  // usuário gira o tablet ou redimensiona a janela com o menu aberto).
  useEffect(() => {
    const query = window.matchMedia('(min-width: 861px)');
    const handleChange = (event) => {
      if (event.matches) setIsMenuOpen(false);
    };
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  const links = SECTION_IDS.map((id) => ({
    id,
    label: t(`nav.links.${id}`),
  }));

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.brand} onClick={handleLinkClick}>
          VM
        </a>

        <nav className={styles.links} aria-label="Navegação principal">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className={activeId === link.id ? styles.active : ''}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.desktopExtras}>
          <AvailabilityBadge label={t('nav.available')} />
          <LanguageSwitch lang={lang} setLang={setLang} />
        </div>

        <button
          type="button"
          className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ''}`}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/*
        Renderizado via portal direto em document.body: a navbar usa
        backdrop-filter, que cria um containing block para descendentes
        position:fixed — sem o portal, este painel ficaria confinado à
        altura de 76px da navbar em vez de cobrir a viewport inteira.
      */}
      {createPortal(
        <div
          className={`${styles.mobilePanel} ${isMenuOpen ? styles.mobilePanelOpen : ''}`}
          aria-hidden={!isMenuOpen}
        >
          <nav aria-label="Navegação mobile">
            <ul>
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={activeId === link.id ? styles.active : ''}
                    onClick={handleLinkClick}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.mobileExtras}>
            <AvailabilityBadge label={t('nav.available')} />
            <LanguageSwitch lang={lang} setLang={setLang} />
          </div>
        </div>,
        document.body,
      )}
    </header>
  );
}

function AvailabilityBadge({ label }) {
  return (
    <span className={styles.badge}>
      <span className={styles.badgeDot} aria-hidden="true" />
      {label}
    </span>
  );
}

function LanguageSwitch({ lang, setLang }) {
  return (
    <div className={styles.langSwitch} role="group" aria-label="Selecionar idioma">
      {LANGUAGE_OPTIONS.map((option) => (
        <button
          key={option.code}
          type="button"
          className={lang === option.code ? styles.langActive : ''}
          onClick={() => setLang(option.code)}
          aria-pressed={lang === option.code}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
