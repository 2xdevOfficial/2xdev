import type { ProcessStep } from '../../../types/home';
import { ProcessCard } from './ProcessCard';
import styles from './ProcessGrid.module.css';

const STAGGER_STEP_MS = 90;

interface ProcessGridProps {
  steps: ProcessStep[];
  stagger?: boolean;
}

export function ProcessGrid({ steps, stagger = false }: ProcessGridProps) {
  return (
    <div className={styles.grid}>
      {steps.map((step, index) => (
        <ProcessCard key={step.n} step={step} delayMs={stagger ? index * STAGGER_STEP_MS : 0} />
      ))}
    </div>
  );
}
