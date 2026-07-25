import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '../../i18n/LanguageContext';
import Icon from '../../components/Icons/Icon';
import casa1 from '../../assets/liz-imoveis/casa-1.jpg';
import casa2 from '../../assets/liz-imoveis/casa-2.jpg';
import casa4 from '../../assets/liz-imoveis/casa-4.jpg';
import planta1 from '../../assets/liz-imoveis/planta-1.png';
import planta2 from '../../assets/liz-imoveis/planta-2.png';
import planta3 from '../../assets/liz-imoveis/planta-3.png';
import planta4 from '../../assets/liz-imoveis/planta-4.png';
import styles from './LizImoveisPage.module.css';

const REPO_URL = 'https://github.com/vitormagalhaes2709-dotcom/landing-page-redesign';

const WHY_US_ICONS = ['certificate', 'person', 'document', 'banknote'];

// Não são "outras fotos daquele imóvel" de verdade — é o mesmo pool de 3 fotos
// pra todos os cards, só pra dar a sensação de galeria ao passar o mouse sem
// precisar de fotos reais por imóvel (é uma prévia, não um catálogo real).
const GALLERY_IMAGES = [casa1, casa2, casa4];

export default function LizImoveisPage() {
  const { t } = useLanguage();
  const text = t('lizImoveis');

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <Link to="/#projects" className={styles.back}>
            <span aria-hidden="true">←</span> {text.back}
          </Link>
        </div>
      </header>

      <p className={styles.demoNote}>
        <span className="container">{text.demoNote}</span>
      </p>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroBg} style={{ backgroundImage: `url(${casa4})` }} aria-hidden="true" />
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}>{text.hero.eyebrow}</p>
            <h1 className={styles.heroTitle}>{text.hero.title}</h1>
            <p className={styles.heroLead}>{text.hero.lead}</p>
          </div>
        </section>

        <section className={`container ${styles.section}`}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>{text.listings.eyebrow}</p>
            <h2>{text.listings.heading}</h2>
          </div>

          <div className={styles.listingsGrid}>
            {text.listings.items.map((item, index) => (
              <PropertyCard key={item.title} item={item} imageIndex={index} />
            ))}
          </div>
        </section>

        <section className={`container ${styles.section}`}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>{text.plans.eyebrow}</p>
            <h2>{text.plans.heading}</h2>
          </div>

          <div className={styles.plansGrid}>
            {text.plans.items.map((item, index) => (
              <div key={item.title} className={styles.planCard}>
                <img src={[planta1, planta2, planta3, planta4][index]} alt={item.alt} loading="lazy" />
                <h3>{item.title}</h3>
                <p>{item.spec}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>{text.whyUs.eyebrow}</p>
              <h2>{text.whyUs.heading}</h2>
            </div>

            <div className={styles.whyUsGrid}>
              {text.whyUs.items.map((item, index) => (
                <div key={item.title} className={styles.whyUsCard}>
                  <Icon name={WHY_US_ICONS[index]} className={styles.whyUsIcon} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`container ${styles.ctaSection}`}>
          <h2>{text.cta.heading}</h2>
          <p>{text.cta.subheading}</p>
          <p className={styles.ctaDisabledNote}>{text.cta.disabledNote}</p>
        </section>

        <p className={styles.sourceNote}>
          {text.poweredBy}{' '}
          <a href={REPO_URL} target="_blank" rel="noreferrer">
            {text.viewCode}
          </a>
        </p>
      </main>
    </div>
  );
}

function PropertyCard({ item, imageIndex }) {
  const [displayIndex, setDisplayIndex] = useState(imageIndex);
  const intervalRef = useRef(null);

  useEffect(() => () => window.clearInterval(intervalRef.current), []);

  function startCycling() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    intervalRef.current = window.setInterval(() => {
      setDisplayIndex((current) => (current + 1) % GALLERY_IMAGES.length);
    }, 900);
  }

  function stopCycling() {
    window.clearInterval(intervalRef.current);
    setDisplayIndex(imageIndex);
  }

  return (
    <article
      className={styles.propertyCard}
      tabIndex={0}
      onMouseEnter={startCycling}
      onMouseLeave={stopCycling}
      onFocus={startCycling}
      onBlur={stopCycling}
    >
      <div className={styles.propertyImageWrap}>
        <img src={GALLERY_IMAGES[displayIndex]} alt={item.imageAlt} />
        <span className={styles.propertyBadge}>{item.badge}</span>
      </div>
      <div className={styles.propertyBody}>
        <p className={styles.propertyPrice}>{item.price}</p>
        <h3>{item.title}</h3>
        <p className={styles.propertyAddress}>{item.address}</p>
        <ul className={styles.propertySpecs}>
          <li>
            <Icon name="ruler" className={styles.specIcon} /> {item.area}
          </li>
          <li>
            <Icon name="bed" className={styles.specIcon} /> {item.rooms}
          </li>
          <li>
            <Icon name="home" className={styles.specIcon} /> {item.extra}
          </li>
        </ul>
      </div>
    </article>
  );
}
