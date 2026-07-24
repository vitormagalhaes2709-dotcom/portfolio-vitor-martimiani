import { useEffect, useState } from 'react';

/**
 * Retorna o id da seção atualmente "ativa" no viewport, para destacar o link
 * correspondente na navbar. `offset` compensa a altura da navbar fixa, para
 * a seção trocar de ativa no momento em que passa por baixo dela (não em
 * cima, o que faria a troca acontecer antes do usuário perceber a seção).
 */
export function useScrollSpy(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    function handleScroll() {
      const scrollPos = window.scrollY + offset;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }

      setActiveId(current);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
