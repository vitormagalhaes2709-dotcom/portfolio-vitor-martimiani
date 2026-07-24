import { useLanguage } from '../../i18n/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();
  const rights = t('footer.rights');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.brand}>VM</span>
        <p className={styles.rights}>{typeof rights === 'function' ? rights(year) : rights}</p>
        <a href="#home" className={styles.backToTop}>
          ↑
        </a>
      </div>
    </footer>
  );
}
