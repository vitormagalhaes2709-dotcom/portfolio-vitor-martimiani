import { useEffect, useRef, useState } from 'react';

/**
 * Observa quando o elemento entra na viewport para acionar a animação de
 * "reveal" (ver .reveal em styles/global.css). Dispara uma única vez: uma
 * seção que já foi revelada não deve desaparecer ao rolar para cima.
 */
export function useOnScreen({ threshold = 0.15, rootMargin = '0px' } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
