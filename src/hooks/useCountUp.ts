import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

const DURATION_MS = 1400;

function easeOutCubic(p: number): number {
  return 1 - Math.pow(1 - p, 3);
}

export function useCountUp<T extends HTMLElement>(target: number, suffix: string) {
  const ref = useRef<T | null>(null);
  const [display, setDisplay] = useState(`0${suffix}`);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(`${target}${suffix}`);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let frame: number;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);
        const start = performance.now();

        const step = (now: number) => {
          const progress = Math.min((now - start) / DURATION_MS, 1);
          const eased = easeOutCubic(progress);
          setDisplay(`${Math.round(target * eased)}${suffix}`);
          if (progress < 1) frame = requestAnimationFrame(step);
          else setDisplay(`${target}${suffix}`);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target, suffix, reducedMotion]);

  return { ref, display };
}
