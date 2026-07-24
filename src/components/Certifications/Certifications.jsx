import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import SectionHeading from '../SectionHeading/SectionHeading';
import FilterBar from '../FilterBar/FilterBar';
import Icon from '../Icons/Icon';
import { certifications } from '../../data/certifications';
import { useOnScreen } from '../../hooks/useOnScreen';
import styles from './Certifications.module.css';

const LOCALE_BY_LANG = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };
const PAGE_SIZE = 6;

// year/month ficam em data/certifications.js (independentes de idioma);
// formatamos aqui para não precisar traduzir nomes de mês manualmente.
function formatCertDate(year, month, lang) {
  const date = new Date(year, month - 1, 1);
  return new Intl.DateTimeFormat(LOCALE_BY_LANG[lang] ?? 'pt-BR', {
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export default function Certifications() {
  const { t, lang } = useLanguage();
  const categories = t('certifications.filters');
  const localizedItems = t('certifications.items');
  const countLabel = t('certifications.countLabel');
  const viewCredential = t('certifications.viewCredential');
  const stats = t('certifications.stats');
  const pagination = t('certifications.pagination');
  const [activeFilter, setActiveFilter] = useState('all');
  const [page, setPage] = useState(1);

  const filterOptions = Object.entries(categories).map(([key, label]) => ({ key, label }));

  const merged = useMemo(
    () =>
      certifications.map((cert) => ({
        ...cert,
        ...localizedItems.find((item) => item.id === cert.id),
      })),
    [localizedItems],
  );

  // Total de horas/certificados é sempre sobre TODOS os certificados, não
  // sobre o filtro ativo — é um número de currículo, não uma contagem de tela.
  const totalHours = useMemo(
    () => certifications.reduce((sum, cert) => sum + (cert.hours ?? 0), 0),
    [],
  );

  const filtered = useMemo(
    () =>
      activeFilter === 'all' ? merged : merged.filter((cert) => cert.category === activeFilter),
    [merged, activeFilter],
  );

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Trocar de filtro pode deixar a página atual fora do intervalo válido.
  useEffect(() => {
    setPage(1);
  }, [activeFilter]);

  return (
    <section id="certifications" className={styles.certifications}>
      <div className="container">
        <div className={styles.header}>
          <SectionHeading
            align="left"
            kicker={t('certifications.kicker')}
            heading={t('certifications.heading')}
            subheading={t('certifications.subheading')}
          />

          <div className={styles.statPills}>
            <span className={styles.statPill}>
              <Icon name="experience" className={styles.statIcon} />
              {stats.hoursLabel(totalHours)}
            </span>
            <span className={styles.statPill}>
              <Icon name="certificate" className={styles.statIcon} />
              {stats.certificatesLabel(certifications.length)}
            </span>
          </div>
        </div>

        <FilterBar options={filterOptions} active={activeFilter} onChange={setActiveFilter} />
        <p className={styles.count}>{countLabel(filtered.length)}</p>

        <div className={styles.grid}>
          {paged.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              categories={categories}
              index={index}
              lang={lang}
              viewCredential={viewCredential}
            />
          ))}
        </div>

        {pageCount > 1 && (
          <nav className={styles.pager} aria-label="Paginação de certificações">
            <button
              type="button"
              disabled={page === 1}
              aria-label={pagination.prev}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              ‹
            </button>

            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                className={n === page ? styles.pagerActive : ''}
                aria-current={n === page ? 'page' : undefined}
                aria-label={pagination.page(n)}
                onClick={() => setPage(n)}
              >
                {n}
              </button>
            ))}

            <button
              type="button"
              disabled={page === pageCount}
              aria-label={pagination.next}
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            >
              ›
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}

function CertificationCard({ cert, categories, index, lang, viewCredential }) {
  const [ref, isVisible] = useOnScreen();
  const initials = cert.issuer.slice(0, 1).toUpperCase();

  return (
    <article
      ref={ref}
      className={`${styles.card} reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${Math.min(index, 6) * 50}ms` }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.cardMain}>
          <div className={styles.logo} aria-hidden="true">
            {initials}
          </div>
          <div className={styles.cardText}>
            <h3 className={styles.title}>{cert.title}</h3>
            <p className={styles.issuer}>{cert.issuer}</p>
          </div>
        </div>

        <span className={styles.badge}>{categories[cert.category]}</span>
      </div>

      <p className={styles.meta}>
        {formatCertDate(cert.year, cert.month, lang)}
        {cert.hours != null && <> · {cert.hours}h</>}
      </p>

      {cert.credentialUrl && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.credentialLink}
        >
          {viewCredential}
        </a>
      )}
    </article>
  );
}
