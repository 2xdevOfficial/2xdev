import { projectStats } from '../../../data/projectsContent';
import { StatCardGrid } from '../../shared/StatCardGrid/StatCardGrid';
import styles from './ProjectsStats.module.css';

export function ProjectsStats() {
  return (
    <section className={styles.section}>
      <StatCardGrid stats={projectStats} reveal={false} />
    </section>
  );
}
