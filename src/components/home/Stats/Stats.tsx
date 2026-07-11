import { stats } from '../../../data/homeContent';
import { StatItem } from './StatItem';
import styles from './Stats.module.css';

export function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}
