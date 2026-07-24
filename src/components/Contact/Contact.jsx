import { useLanguage } from '../../i18n/LanguageContext';
import SectionHeading from '../SectionHeading/SectionHeading';
import Icon from '../Icons/Icon';
import { useOnScreen } from '../../hooks/useOnScreen';
import styles from './Contact.module.css';

export default function Contact() {
  const { t } = useLanguage();
  const items = t('contact.items');
  const [ref, isVisible] = useOnScreen();

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <SectionHeading
          kicker={t('contact.kicker')}
          heading={t('contact.heading')}
          subheading={t('contact.subheading')}
        />

        <ul ref={ref} className={`${styles.grid} reveal ${isVisible ? 'is-visible' : ''}`}>
          {items.map((item) => {
            const isExternal = item.href.startsWith('http');
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={styles.card}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                >
                  <Icon name={item.id} className={styles.icon} />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
