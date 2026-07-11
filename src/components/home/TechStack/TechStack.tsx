import { TechStackPanel } from '../../shared/TechStackPanel/TechStackPanel';
import styles from './TechStack.module.css';

export function TechStack() {
  return (
    <section className={styles.section}>
      <TechStackPanel />
    </section>
  );
}
