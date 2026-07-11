import { process } from '../../../data/homeContent';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { ProcessGrid } from '../../shared/ProcessGrid/ProcessGrid';
import styles from './WhatWeDoProcess.module.css';

export function WhatWeDoProcess() {
  return (
    <section className={styles.section}>
      <SectionHeading
        eyebrow="How we work"
        title="A process built for speed"
        align="center"
      />
      <ProcessGrid steps={process} stagger />
    </section>
  );
}
