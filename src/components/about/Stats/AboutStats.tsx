import { aboutStats } from '../../../data/aboutContent';
import { StatCardGrid } from '../../shared/StatCardGrid/StatCardGrid';
import styles from './AboutStats.module.css';

export function AboutStats() {
  return (
    <section className={styles.section}>
      <StatCardGrid stats={aboutStats} stagger />
    </section>
  );
}
