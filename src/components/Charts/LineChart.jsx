import { useMemo, useRef, useState } from 'react';
import styles from './LineChart.module.css';

const WIDTH = 640;
const HEIGHT = 220;
const PADDING = { top: 16, right: 12, bottom: 28, left: 12 };

export default function LineChart({ data, formatValue, formatLabel, ariaLabel }) {
  const svgRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const plotW = WIDTH - PADDING.left - PADDING.right;
  const plotH = HEIGHT - PADDING.top - PADDING.bottom;
  const max = Math.max(...data.map((d) => d.receita)) * 1.1;

  const points = useMemo(
    () =>
      data.map((d, index) => ({
        ...d,
        x: PADDING.left + (data.length === 1 ? 0 : (index / (data.length - 1)) * plotW),
        y: PADDING.top + plotH - (d.receita / max) * plotH,
      })),
    [data, max, plotH, plotW],
  );

  const linePath = points.map((p, index) => `${index === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const baseline = PADDING.top + plotH;
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${baseline} L ${points[0].x} ${baseline} Z`;

  function handleMove(event) {
    const rect = svgRef.current.getBoundingClientRect();
    const relativeX = ((event.clientX - rect.left) / rect.width) * WIDTH;
    let closest = 0;
    let closestDist = Infinity;
    points.forEach((p, index) => {
      const dist = Math.abs(p.x - relativeX);
      if (dist < closestDist) {
        closestDist = dist;
        closest = index;
      }
    });
    setHoverIndex(closest);
  }

  const hovered = hoverIndex !== null ? points[hoverIndex] : null;
  const last = points[points.length - 1];

  return (
    <div className={styles.wrap}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className={styles.svg}
        onMouseMove={handleMove}
        onMouseLeave={() => setHoverIndex(null)}
        role="img"
        aria-label={ariaLabel}
      >
        {[0, 0.5, 1].map((t) => (
          <line
            key={t}
            x1={PADDING.left}
            x2={WIDTH - PADDING.right}
            y1={PADDING.top + plotH * (1 - t)}
            y2={PADDING.top + plotH * (1 - t)}
            className={styles.grid}
          />
        ))}

        <path d={areaPath} className={styles.area} />
        <path d={linePath} className={styles.line} />

        <circle cx={last.x} cy={last.y} r="5" className={styles.dotEnd} />

        {hovered && (
          <>
            <line
              x1={hovered.x}
              x2={hovered.x}
              y1={PADDING.top}
              y2={baseline}
              className={styles.crosshair}
            />
            <circle cx={hovered.x} cy={hovered.y} r="5" className={styles.dot} />
          </>
        )}
      </svg>

      {hovered && (
        <div
          className={styles.tooltip}
          style={{ left: `${(hovered.x / WIDTH) * 100}%` }}
        >
          <strong>{formatValue(hovered.receita)}</strong>
          <span>{formatLabel(hovered.anoMes)}</span>
        </div>
      )}

      <div className={styles.axisLabels}>
        <span>{formatLabel(data[0].anoMes)}</span>
        <span>{formatLabel(data[data.length - 1].anoMes)}</span>
      </div>
    </div>
  );
}
