import { useLanguage } from '../../i18n/LanguageContext';
import { useOnScreen } from '../../hooks/useOnScreen';
import styles from './CTA.module.css';

export default function CTA() {
  const { t } = useLanguage();
  const [ref, isVisible] = useOnScreen();

  return (
    <section className={styles.cta}>
      <div className="container">
        <div ref={ref} className={`${styles.box} reveal ${isVisible ? 'is-visible' : ''}`}>
          <h2 className={styles.heading}>{t('cta.heading')}</h2>
          <p className={styles.subheading}>{t('cta.subheading')}</p>
          <a href="#contact" className={styles.button}>
            {t('cta.button')}
          </a>
        </div>
      </div>
    </section>
  );
}
