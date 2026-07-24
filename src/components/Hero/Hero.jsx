import { useLanguage } from '../../i18n/LanguageContext';
import heroPhoto from '../../assets/profile-photo-hero.jpg';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.kicker}>{t('hero.kicker')}</p>
          <h1 className={styles.name}>{t('hero.name')}</h1>
          <p className={styles.role}>{t('hero.role')}</p>
          <p className={styles.tagline}>{t('hero.tagline')}</p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>
              {t('hero.ctaPrimary')}
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>

        <div className={styles.avatarWrap}>
          <div className={styles.avatarGlow} aria-hidden="true" />
          <div className={styles.avatarRing}>
            <img src={heroPhoto} alt="Vitor Martimiani" className={styles.avatar} />
          </div>
        </div>
      </div>

      <a href="#about" className={styles.scrollHint}>
        <span className={styles.scrollLine} aria-hidden="true" />
        <span>{t('hero.scrollHint')}</span>
      </a>
    </section>
  );
}
