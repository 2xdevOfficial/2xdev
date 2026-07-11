import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

const CHAR_DELAY_MS = 55;

export function useTypewriter<T extends HTMLElement>(fullText: string) {
  const ref = useRef<T | null>(null);
  const [text, setText] = useState('');
  const [showCaret, setShowCaret] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setText(fullText);
      setShowCaret(false);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let started = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        observer.unobserve(el);

        for (let i = 0; i <= fullText.length; i++) {
          timeouts.push(
            setTimeout(() => setText(fullText.slice(0, i)), i * CHAR_DELAY_MS),
          );
        }
        timeouts.push(
          setTimeout(() => setShowCaret(false), fullText.length * CHAR_DELAY_MS + 1600),
        );
      },
      { threshold: 0.5 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, [fullText, reducedMotion]);

  return { ref, text, showCaret };
}
