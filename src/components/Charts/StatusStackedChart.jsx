import { useState } from 'react';
import Icon from '../Icons/Icon';
import styles from './StatusStackedChart.module.css';

// Ordem de baixo pra cima na pilha (ver .stack { flex-direction: column-reverse }).
// Cor de status é fixa e reservada — nunca reaproveitada como "série 4" em
// nenhum outro gráfico da página — e sempre acompanhada de ícone + rótulo,
// nunca só a cor (ver dataviz skill: par CVD status-warning×status-good fica
// na faixa WARN, legal só com essa codificação secundária).
const STATUS_ORDER = [
  { key: 'pago', label: 'Pago', icon: 'statusPago', colorVar: '--color-success' },
  { key: 'pendente', label: 'Pendente', icon: 'statusPendente', colorVar: '--color-warning' },
  { key: 'cancelado', label: 'Cancelado', icon: 'statusCancelado', colorVar: '--color-danger' },
];

export default function StatusStackedChart({ data, formatLabel }) {
  const [hover, setHover] = useState(null);
  const max = Math.max(...data.map((m) => m.pago + m.pendente + m.cancelado), 1);

  return (
    <div className={styles.wrap}>
      <div className={styles.legend}>
        {STATUS_ORDER.map((s) => (
          <span key={s.key} className={styles.legendItem}>
            <Icon name={s.icon} className={styles.legendIcon} style={{ color: `var(${s.colorVar})` }} />
            {s.label}
          </span>
        ))}
      </div>

      <div className={styles.strip}>
        {data.map((month, monthIndex) => (
          <div key={month.anoMes} className={styles.column}>
            <div className={styles.stack}>
              {STATUS_ORDER.map((s) => {
                const value = month[s.key];
                const heightPct = (value / max) * 100;
                const isHovered = hover?.monthIndex === monthIndex && hover?.statusKey === s.key;
                return (
                  <div
                    key={s.key}
                    className={`${styles.segment} ${isHovered ? styles.segmentHover : ''}`}
                    style={{ height: `${heightPct}%`, background: `var(${s.colorVar})` }}
                    onMouseEnter={() => setHover({ monthIndex, statusKey: s.key })}
                    onMouseLeave={() => setHover(null)}
                    onFocus={() => setHover({ monthIndex, statusKey: s.key })}
                    onBlur={() => setHover(null)}
                    tabIndex={0}
                    role="button"
                    aria-label={`${s.label}: ${value} pedidos em ${formatLabel(month.anoMes)}`}
                  />
                );
              })}
            </div>
            {/* 18 meses lado a lado não cabem rotulados um a um sem se
                sobrepor — mostra 1 a cada 3 (+ o último), o resto fica
                disponível no hover e na visão em tabela. */}
            <span className={styles.monthLabel}>
              {monthIndex % 3 === 0 || monthIndex === data.length - 1 ? formatLabel(month.anoMes) : ''}
            </span>

            {hover?.monthIndex === monthIndex && (
              <div className={styles.tooltip} role="tooltip">
                <strong>
                  {month[hover.statusKey]} {STATUS_ORDER.find((s) => s.key === hover.statusKey).label}
                </strong>
                <span>{formatLabel(month.anoMes)}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
