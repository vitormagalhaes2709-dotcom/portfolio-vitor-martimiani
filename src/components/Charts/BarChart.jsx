import { useState } from 'react';
import styles from './BarChart.module.css';

/**
 * Série única (uma métrica, várias categorias nominais) — por isso todas as
 * barras usam a MESMA cor (accent do site). Colorir cada barra de uma cor
 * diferente gastaria o canal de identidade em categorias que não têm
 * "identidade" nenhuma a comunicar além do próprio rótulo (ver dataviz
 * skill: "one series -> one color for every bar").
 */
export default function BarChart({ data, formatValue, annotate }) {
  const [hoverIndex, setHoverIndex] = useState(null);
  const max = Math.max(...data.map((item) => item.value), 1);

  return (
    <ul className={styles.chart}>
      {data.map((item, index) => {
        const pct = (item.value / max) * 100;
        const isHovered = hoverIndex === index;

        return (
          <li
            key={item.label}
            className={styles.row}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            onFocus={() => setHoverIndex(index)}
            onBlur={() => setHoverIndex(null)}
            tabIndex={0}
          >
            <span className={styles.label}>{item.label}</span>
            <div className={styles.track}>
              <div
                className={`${styles.bar} ${isHovered ? styles.barHover : ''}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className={styles.value}>{formatValue(item.value)}</span>
            {annotate && <span className={styles.annotation}>{annotate(item)}</span>}

            {isHovered && (
              <div className={styles.tooltip} role="tooltip">
                <strong>{formatValue(item.value)}</strong>
                <span>{item.label}</span>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
