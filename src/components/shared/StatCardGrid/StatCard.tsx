import type { StatItem } from '../../../types/shared';
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';
import reveal from '../../../styles/reveal.module.css';
import styles from './StatCardGrid.module.css';

interface StatCardProps {
  stat: StatItem;
  delayMs?: number;
  reveal?: boolean;
}

export function StatCard({ stat, delayMs = 0, reveal: shouldReveal = true }: StatCardProps) {
  const { ref, isVisible, style } = useRevealOnScroll<HTMLDivElement>(delayMs);

  const content = (
    <>
      <div className={styles.num}>{stat.num}</div>
      <div className={styles.label}>{stat.label}</div>
    </>
  );

  if (!shouldReveal) {
    return <div className={styles.card}>{content}</div>;
  }

  return (
    <div
      ref={ref}
      style={style}
      className={[styles.card, reveal.reveal, isVisible ? reveal.visible : ''].join(' ')}
    >
      {content}
    </div>
  );
}
