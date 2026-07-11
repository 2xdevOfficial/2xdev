import type { StatItem } from '../../../types/shared';
import { StatCard } from './StatCard';
import styles from './StatCardGrid.module.css';

const STAGGER_STEP_MS = 90;

interface StatCardGridProps {
  stats: StatItem[];
  stagger?: boolean;
  reveal?: boolean;
}

export function StatCardGrid({ stats, stagger = false, reveal = true }: StatCardGridProps) {
  return (
    <div className={styles.grid}>
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          stat={stat}
          delayMs={stagger ? index * STAGGER_STEP_MS : 0}
          reveal={reveal}
        />
      ))}
    </div>
  );
}
