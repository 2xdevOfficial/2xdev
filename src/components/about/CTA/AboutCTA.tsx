import { GradientPanel } from '../../shared/GradientPanel/GradientPanel';
import { Button } from '../../ui/Button/Button';
import styles from './AboutCTA.module.css';

export function AboutCTA() {
  return (
    <section className={styles.section}>
      <GradientPanel>
        <h2 className={styles.title}>Let&apos;s build together.</h2>
        <p className={styles.subtitle}>
          Tell us what you&apos;re building — we&apos;ll come back with a plan, a timeline and a
          free quote.
        </p>
        <Button href="/contact" variant="white">
          Get a free quote →
        </Button>
      </GradientPanel>
    </section>
  );
}
