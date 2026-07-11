import { process } from '../../../data/homeContent';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { ProcessGrid } from '../../shared/ProcessGrid/ProcessGrid';
import styles from './Process.module.css';

export function Process() {
  return (
    <section className={styles.section}>
      <SectionHeading
        eyebrow="How we work"
        title="A process built for speed"
        typewriterText="A process built for speed"
        align="center"
      />
      <ProcessGrid steps={process} />
    </section>
  );
}
