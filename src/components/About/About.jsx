import { useLanguage } from '../../i18n/LanguageContext';
import Icon from '../Icons/Icon';
import { useOnScreen } from '../../hooks/useOnScreen';
import profilePhoto from '../../assets/profile-photo.jpeg';
import styles from './About.module.css';

const PROFILE_PHOTO = profilePhoto;

export default function About() {
  const { t } = useLanguage();
  const paragraphs = t('about.paragraphs');
  const highlights = t('about.highlights');
  const [ref, isVisible] = useOnScreen();

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div ref={ref} className={`${styles.grid} reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className={styles.textCol}>
            <h2 className={styles.heading}>{t('about.heading')}</h2>
            <p className={styles.tagline}>{t('about.tagline')}</p>

            <div className={styles.paragraphs}>
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className={styles.visualCol}>
            <div className={styles.photoFrame}>
              {PROFILE_PHOTO ? (
                <img src={PROFILE_PHOTO} alt="Vitor Martimiani" className={styles.photo} />
              ) : (
                <div className={styles.photoPlaceholder} aria-hidden="true">
                  <Icon name="person" className={styles.photoPlaceholderIcon} />
                </div>
              )}
            </div>

            <ul className={styles.badges}>
              {highlights.map((highlight, index) => (
                <li key={index} className={styles.badge}>
                  <Icon name={highlight.icon} className={styles.badgeIcon} />
                  <span>{highlight.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
