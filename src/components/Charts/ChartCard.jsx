import { useState } from 'react';
import styles from './ChartCard.module.css';

/**
 * Todo gráfico tem uma tabela equivalente por trás de um toggle — a "gêmea
 * acessível" que não depende de cor pra ser lida (ver dataviz skill: todo
 * gráfico precisa de uma table-view twin).
 */
export default function ChartCard({ title, subtitle, tableColumns, tableRows, toggleLabels, children }) {
  const [showTable, setShowTable] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <button
          type="button"
          className={styles.toggleBtn}
          onClick={() => setShowTable((show) => !show)}
          aria-pressed={showTable}
        >
          {showTable ? toggleLabels.chart : toggleLabels.table}
        </button>
      </div>

      {showTable ? (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {tableColumns.map((col) => (
                  <th key={col.key}>{col.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, index) => (
                <tr key={index}>
                  {tableColumns.map((col) => (
                    <td key={col.key}>{col.format ? col.format(row[col.key]) : row[col.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
