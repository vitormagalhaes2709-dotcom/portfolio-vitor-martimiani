import styles from './FilterBar.module.css';

export default function FilterBar({ options, active, onChange }) {
  return (
    <div className={styles.bar} role="tablist">
      {options.map((option) => (
        <button
          key={option.key}
          type="button"
          role="tab"
          aria-selected={active === option.key}
          className={active === option.key ? styles.active : ''}
          onClick={() => onChange(option.key)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
