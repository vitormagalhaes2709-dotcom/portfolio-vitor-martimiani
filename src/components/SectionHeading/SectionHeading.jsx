import styles from './SectionHeading.module.css';

export default function SectionHeading({ kicker, heading, subheading, align = 'center' }) {
  return (
    <div className={`${styles.wrapper} ${align === 'left' ? styles.left : ''}`}>
      {kicker && <span className={styles.kicker}>{kicker}</span>}
      <h2 className={styles.heading}>{heading}</h2>
      {subheading && <p className={styles.subheading}>{subheading}</p>}
    </div>
  );
}
