import { values } from '../../../data/aboutContent';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { ValueCard } from './ValueCard';
import styles from './Values.module.css';

const ROW_STAGGER_STEP_MS = 80;
const COLUMNS = 3;

export function Values() {
  return (
    <section className={styles.section}>
      <SectionHeading
        eyebrow="What we value"
        title="Principles we don't compromise on"
        align="center"
      />
      <div className={styles.grid}>
        {values.map((value, index) => (
          <ValueCard
            key={value.title}
            value={value}
            delayMs={(index % COLUMNS) * ROW_STAGGER_STEP_MS}
          />
        ))}
      </div>
    </section>
  );
}
