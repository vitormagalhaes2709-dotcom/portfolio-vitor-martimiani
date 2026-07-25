import { Link } from 'react-router';
import { useLanguage } from '../../i18n/LanguageContext';
import Icon from '../../components/Icons/Icon';
import ChartCard from '../../components/Charts/ChartCard';
import BarChart from '../../components/Charts/BarChart';
import LineChart from '../../components/Charts/LineChart';
import StatusStackedChart from '../../components/Charts/StatusStackedChart';
import dashboard from '../../data/pedidosDashboard.json';
import {
  formatCompactBRL,
  formatFullBRL,
  formatMonthLabel,
  monthlyRevenue,
  monthlyStatusMix,
  revenueByDimension,
} from '../../utils/pedidosData';
import styles from './PedidosPage.module.css';

const PIPELINE_REPO_URL = 'https://github.com/vitormagalhaes2709-dotcom/pipeline-mysql-powerbi';

export default function PedidosPage() {
  const { t, lang } = useLanguage();
  const text = t('pedidos');
  const { kpis, resumoMensal, resumoVendedor, resumoStatusMensal } = dashboard;

  const localeTag = lang === 'pt' ? 'pt-BR' : lang;
  const monthLabel = (anoMes) => formatMonthLabel(anoMes, localeTag);

  const receitaMensal = monthlyRevenue(resumoMensal);
  const receitaPorCategoria = revenueByDimension(resumoMensal, 'categoria');
  const receitaPorEstado = revenueByDimension(resumoMensal, 'estado');
  const statusMensal = monthlyStatusMix(resumoStatusMensal);

  const vendedores = [...resumoVendedor].sort((a, b) => b.receita_total - a.receita_total);
  const vendedorBars = vendedores.map((v) => ({ label: v.vendedor, value: v.receita_total }));

  const dateFormatter = new Intl.DateTimeFormat(localeTag, { day: '2-digit', month: 'short', year: 'numeric' });

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <Link to="/#projects" className={styles.back}>
            <span aria-hidden="true">←</span> {text.back}
          </Link>
        </div>
      </header>

      <main className={`container ${styles.main}`}>
        <section className={styles.hero}>
          <p className={styles.kicker}>{text.kicker}</p>
          <h1 className={styles.heading}>{text.heading}</h1>
          <p className={styles.subheading}>
            {text.subheading(dateFormatter.format(new Date(`${kpis.periodoInicio}T12:00:00`)), dateFormatter.format(new Date(`${kpis.periodoFim}T12:00:00`)))}
          </p>
        </section>

        <section className={styles.kpiGrid} aria-label={text.kpiLabel}>
          <KpiTile icon="banknote" label={text.kpis.receitaTotal} value={formatFullBRL(kpis.receitaTotalPaga)} />
          <KpiTile icon="cart" label={text.kpis.totalPedidos} value={kpis.totalPedidos.toLocaleString(localeTag)} />
          <KpiTile icon="chart" label={text.kpis.ticketMedio} value={formatFullBRL(kpis.ticketMedioPago)} />
          <KpiTile icon="statusCancelado" label={text.kpis.taxaCancelamento} value={`${kpis.taxaCancelamentoPct}%`} />
        </section>

        <div className={styles.chartsGrid}>
          <ChartCard
            title={text.charts.receitaMensal.title}
            subtitle={text.charts.receitaMensal.subtitle}
            toggleLabels={{ table: text.table.viewTable, chart: text.table.viewChart }}
            tableColumns={[
              { key: 'anoMes', label: text.columns.mes, format: monthLabel },
              { key: 'receita', label: text.columns.receita, format: formatFullBRL },
            ]}
            tableRows={receitaMensal}
          >
            <LineChart
              data={receitaMensal}
              formatValue={formatCompactBRL}
              formatLabel={monthLabel}
              ariaLabel={text.charts.receitaMensal.title}
            />
          </ChartCard>

          <ChartCard
            title={text.charts.statusMensal.title}
            subtitle={text.charts.statusMensal.subtitle}
            toggleLabels={{ table: text.table.viewTable, chart: text.table.viewChart }}
            tableColumns={[
              { key: 'anoMes', label: text.columns.mes, format: monthLabel },
              { key: 'pago', label: 'Pago' },
              { key: 'pendente', label: 'Pendente' },
              { key: 'cancelado', label: 'Cancelado' },
            ]}
            tableRows={statusMensal}
          >
            <StatusStackedChart data={statusMensal} formatLabel={monthLabel} />
          </ChartCard>

          <ChartCard
            title={text.charts.receitaCategoria.title}
            subtitle={text.charts.receitaCategoria.subtitle}
            toggleLabels={{ table: text.table.viewTable, chart: text.table.viewChart }}
            tableColumns={[
              { key: 'label', label: text.columns.categoria },
              { key: 'value', label: text.columns.receita, format: formatFullBRL },
            ]}
            tableRows={receitaPorCategoria}
          >
            <BarChart data={receitaPorCategoria} formatValue={formatCompactBRL} />
          </ChartCard>

          <ChartCard
            title={text.charts.receitaEstado.title}
            subtitle={text.charts.receitaEstado.subtitle}
            toggleLabels={{ table: text.table.viewTable, chart: text.table.viewChart }}
            tableColumns={[
              { key: 'label', label: text.columns.estado },
              { key: 'value', label: text.columns.receita, format: formatFullBRL },
            ]}
            tableRows={receitaPorEstado}
          >
            <BarChart data={receitaPorEstado} formatValue={formatCompactBRL} />
          </ChartCard>

          <ChartCard
            title={text.charts.vendedor.title}
            subtitle={text.charts.vendedor.subtitle}
            toggleLabels={{ table: text.table.viewTable, chart: text.table.viewChart }}
            tableColumns={[
              { key: 'vendedor', label: text.columns.vendedor },
              { key: 'receita_total', label: text.columns.receita, format: formatFullBRL },
              { key: 'taxa_cancelamento_pct', label: text.columns.cancelamento, format: (v) => `${v}%` },
            ]}
            tableRows={vendedores}
          >
            <BarChart
              data={vendedorBars}
              formatValue={formatCompactBRL}
              annotate={(item) => {
                const vendedor = vendedores.find((v) => v.vendedor === item.label);
                return `${text.columns.cancelamento}: ${vendedor.taxa_cancelamento_pct}%`;
              }}
            />
          </ChartCard>
        </div>

        <p className={styles.sourceNote}>
          {text.poweredBy}{' '}
          <a href={PIPELINE_REPO_URL} target="_blank" rel="noreferrer">
            {text.viewCode}
          </a>
        </p>
      </main>
    </div>
  );
}

function KpiTile({ icon, label, value }) {
  return (
    <div className={styles.kpiTile}>
      <Icon name={icon} className={styles.kpiIcon} />
      <div className={styles.kpiText}>
        <span className={styles.kpiValue}>{value}</span>
        <span className={styles.kpiLabel}>{label}</span>
      </div>
    </div>
  );
}
