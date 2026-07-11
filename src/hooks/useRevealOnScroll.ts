import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useRevealOnScroll<T extends HTMLElement>(delayMs = 0) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const style: CSSProperties | undefined = delayMs ? { transitionDelay: `${delayMs}ms` } : undefined;

  return { ref, isVisible, style };
}
