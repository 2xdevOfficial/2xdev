import type { ProcessStep } from '../../../types/home';
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';
import reveal from '../../../styles/reveal.module.css';
import styles from './ProcessGrid.module.css';

export function ProcessCard({ step, delayMs = 0 }: { step: ProcessStep; delayMs?: number }) {
  const { ref, isVisible, style } = useRevealOnScroll<HTMLDivElement>(delayMs);

  return (
    <div
      ref={ref}
      style={style}
      className={[reveal.reveal, isVisible ? reveal.visible : ''].join(' ')}
    >
      <div className={styles.card}>
        <div className={styles.number}>{step.n}</div>
        <h3 className={styles.title}>{step.t}</h3>
        <p className={styles.desc}>{step.d}</p>
      </div>
    </div>
  );
}
