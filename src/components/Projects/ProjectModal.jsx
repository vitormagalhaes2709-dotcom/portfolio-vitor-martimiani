import { useEffect, useRef } from 'react';
import styles from './ProjectModal.module.css';

export default function ProjectModal({
  projects,
  categories,
  modalText,
  activeIndex,
  onClose,
  onNavigate,
}) {
  const project = projects[activeIndex];
  const dialogRef = useRef(null);
  const previouslyFocused = useRef(null);

  // Trava o scroll da página e devolve o foco ao elemento que abriu o modal
  // ao desmontar — essencial para quem navega por teclado/leitor de tela.
  useEffect(() => {
    previouslyFocused.current = document.activeElement;
    dialogRef.current?.focus();
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      previouslyFocused.current?.focus?.();
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        onNavigate((activeIndex + 1) % projects.length);
      } else if (event.key === 'ArrowLeft') {
        onNavigate((activeIndex - 1 + projects.length) % projects.length);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, projects.length, onClose, onNavigate]);

  if (!project) return null;

  const goPrev = () => onNavigate((activeIndex - 1 + projects.length) % projects.length);
  const goNext = () => onNavigate((activeIndex + 1) % projects.length);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className={styles.closeBtn} onClick={onClose} aria-label={modalText.close}>
          ×
        </button>

        {projects.length > 1 && (
          <>
            <button
              type="button"
              className={`${styles.navBtn} ${styles.navPrev}`}
              onClick={goPrev}
              aria-label={modalText.prev}
            >
              ‹
            </button>
            <button
              type="button"
              className={`${styles.navBtn} ${styles.navNext}`}
              onClick={goNext}
              aria-label={modalText.next}
            >
              ›
            </button>
          </>
        )}

        <div className={styles.thumbLarge} data-category={project.category} aria-hidden="true">
          <span>{project.category.slice(0, 2).toUpperCase()}</span>
        </div>

        <div className={styles.content}>
          <span className={styles.badge}>{categories[project.category]}</span>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.techBlock}>
            <span className={styles.techLabel}>{modalText.technologies}</span>
            <ul className={styles.tags}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>

          <div className={styles.actions}>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className={styles.primaryBtn}>
                {modalText.viewProject}
              </a>
            )}
            {project.video && (
              <a href={project.video} target="_blank" rel="noreferrer" className={styles.secondaryBtn}>
                {modalText.watchVideo}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
