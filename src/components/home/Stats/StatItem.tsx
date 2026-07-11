import type { Stat } from '../../../types/home';
import { useCountUp } from '../../../hooks/useCountUp';
import styles from './Stats.module.css';

export function StatItem({ stat }: { stat: Stat }) {
  const { ref, display } = useCountUp<HTMLDivElement>(stat.count, stat.suffix);

  return (
    <div className={styles.item}>
      <div ref={ref} className={styles.number}>
        {display}
      </div>
      <div className={styles.label}>{stat.label}</div>
    </div>
  );
}
