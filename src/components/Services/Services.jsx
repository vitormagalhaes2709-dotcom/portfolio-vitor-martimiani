import { useLanguage } from '../../i18n/LanguageContext';
import SectionHeading from '../SectionHeading/SectionHeading';
import Icon from '../Icons/Icon';
import { useOnScreen } from '../../hooks/useOnScreen';
import styles from './Services.module.css';

const ICON_BY_ID = {
  'web-apps': 'web',
  dashboards: 'chart',
  automation: 'automation',
  systems: 'systems',
  integrations: 'integration',
};

export default function Services() {
  const { t } = useLanguage();
  const items = t('services.items');

  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <SectionHeading
          kicker={t('services.kicker')}
          heading={t('services.heading')}
          subheading={t('services.subheading')}
        />

        <div className={styles.grid}>
          {items.map((item, index) => (
            <ServiceCard key={item.id} item={item} iconName={ICON_BY_ID[item.id]} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ item, iconName, index }) {
  const [ref, isVisible] = useOnScreen();

  return (
    <article
      ref={ref}
      className={`${styles.card} reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${Math.min(index, 5) * 60}ms` }}
    >
      <div className={styles.iconWrap}>
        <Icon name={iconName} className={styles.icon} />
      </div>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.description}>{item.description}</p>
    </article>
  );
}
