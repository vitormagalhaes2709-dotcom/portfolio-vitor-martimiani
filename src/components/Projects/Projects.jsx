import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import SectionHeading from '../SectionHeading/SectionHeading';
import FilterBar from '../FilterBar/FilterBar';
import ProjectModal from './ProjectModal';
import { projects } from '../../data/projects';
import { useOnScreen } from '../../hooks/useOnScreen';
import styles from './Projects.module.css';

export default function Projects() {
  const { t } = useLanguage();
  const categories = t('projects.filters');
  const modalText = t('projects.modal');
  const localizedItems = t('projects.items');
  const countLabel = t('projects.countLabel');
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState(null);

  const filterOptions = Object.entries(categories).map(([key, label]) => ({ key, label }));

  const merged = useMemo(
    () =>
      projects.map((project) => ({
        ...project,
        ...localizedItems.find((item) => item.id === project.id),
      })),
    [localizedItems],
  );

  const filtered =
    activeFilter === 'all' ? merged : merged.filter((project) => project.category === activeFilter);

  // Um projeto aberto pode não existir mais depois de trocar o filtro —
  // fechamos o modal para não deixá-lo referenciando um índice inválido.
  useEffect(() => {
    setActiveIndex(null);
  }, [activeFilter]);

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <SectionHeading
          kicker={t('projects.kicker')}
          heading={t('projects.heading')}
          subheading={t('projects.subheading')}
        />

        <FilterBar options={filterOptions} active={activeFilter} onChange={setActiveFilter} />
        <p className={styles.count}>{countLabel(filtered.length)}</p>

        <div className={styles.grid}>
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              categories={categories}
              index={index}
              onOpen={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <ProjectModal
          projects={filtered}
          categories={categories}
          modalText={modalText}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  );
}

function ProjectCard({ project, categories, index, onOpen }) {
  const [ref, isVisible] = useOnScreen();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpen();
    }
  };

  return (
    <article
      ref={ref}
      className={`${styles.card} reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${Math.min(index, 6) * 50}ms` }}
      role="button"
      tabIndex={0}
      aria-label={project.title}
      onClick={onOpen}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.thumb} data-category={project.category} aria-hidden="true">
        <span className={styles.thumbMonogram}>{project.category.slice(0, 2).toUpperCase()}</span>
      </div>

      <div className={styles.cardBody}>
        <span className={styles.badge}>{categories[project.category]}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
