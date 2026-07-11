import type { Value } from '../../../types/about';
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';
import reveal from '../../../styles/reveal.module.css';
import styles from './Values.module.css';

export function ValueCard({ value, delayMs }: { value: Value; delayMs: number }) {
  const { ref, isVisible, style } = useRevealOnScroll<HTMLDivElement>(delayMs);

  return (
    <div
      ref={ref}
      style={style}
      className={[styles.card, reveal.reveal, isVisible ? reveal.visible : ''].join(' ')}
    >
      <div className={styles.icon}>{value.icon}</div>
      <h3 className={styles.title}>{value.title}</h3>
      <p className={styles.desc}>{value.desc}</p>
    </div>
  );
}
