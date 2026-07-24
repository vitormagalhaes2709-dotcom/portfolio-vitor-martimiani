import { useLanguage } from '../../i18n/LanguageContext';
import SectionHeading from '../SectionHeading/SectionHeading';
import { skills } from '../../data/skills';
import { useOnScreen } from '../../hooks/useOnScreen';
import styles from './Skills.module.css';

export default function Skills() {
  const { t, lang } = useLanguage();
  const [ref, isVisible] = useOnScreen();

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <SectionHeading
          kicker={t('skills.kicker')}
          heading={t('skills.heading')}
          subheading={t('skills.subheading')}
        />

        <ul ref={ref} className={`${styles.grid} reveal ${isVisible ? 'is-visible' : ''}`}>
          {skills.map((skill) => (
            <li key={skill.id} className={styles.pill}>
              {typeof skill.name === 'string' ? skill.name : skill.name[lang]}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
