// Deriva as visões que a página /pedidos precisa a partir dos 3 resumos já
// agregados pelo pipeline Python (pedidosDashboard.json) — nenhuma agregação
// bruta acontece aqui, só reagrupamentos leves em cima de dados já pequenos.

export function monthlyRevenue(resumoMensal) {
  const byMonth = new Map();
  for (const row of resumoMensal) {
    byMonth.set(row.ano_mes, (byMonth.get(row.ano_mes) ?? 0) + row.receita_total);
  }
  return Array.from(byMonth.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([anoMes, receita]) => ({ anoMes, receita }));
}

export function revenueByDimension(resumoMensal, dimensionKey) {
  const byDim = new Map();
  for (const row of resumoMensal) {
    const key = row[dimensionKey];
    byDim.set(key, (byDim.get(key) ?? 0) + row.receita_total);
  }
  return Array.from(byDim.entries())
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);
}

export function monthlyStatusMix(resumoStatusMensal) {
  const byMonth = new Map();
  for (const row of resumoStatusMensal) {
    if (!byMonth.has(row.ano_mes)) byMonth.set(row.ano_mes, {});
    byMonth.get(row.ano_mes)[row.status] = row.pedidos_total;
  }
  return Array.from(byMonth.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([anoMes, counts]) => ({
      anoMes,
      pago: counts.Pago ?? 0,
      pendente: counts.Pendente ?? 0,
      cancelado: counts.Cancelado ?? 0,
    }));
}

export function formatCompactBRL(value) {
  const abs = Math.abs(value);
  if (abs >= 1_000_000) return `R$ ${(value / 1_000_000).toFixed(1)}M`;
  if (abs >= 1_000) return `R$ ${(value / 1_000).toFixed(1)}K`;
  return `R$ ${Math.round(value)}`;
}

export function formatFullBRL(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

// Intl.DateTimeFormat({month:'short'}) devolve "jan. de 25" em pt-BR — bom
// pra rótulo de eixo isolado, largo demais quando são 18 meses lado a lado
// numa faixa estreita (o texto de um mês invadia o próximo). Formato curto
// e de largura previsível (3 letras + /ano) resolve sem precisar rotacionar.
const SHORT_MONTHS = {
  pt: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  en: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
};

export function formatMonthLabel(anoMes, localeTag = 'pt-BR') {
  const [year, month] = anoMes.split('-').map(Number);
  const lang = localeTag.slice(0, 2);
  const months = SHORT_MONTHS[lang] ?? SHORT_MONTHS.pt;
  return `${months[month - 1]}/${String(year).slice(2)}`;
}
