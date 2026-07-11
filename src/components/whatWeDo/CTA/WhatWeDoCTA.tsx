import { GradientPanel } from '../../shared/GradientPanel/GradientPanel';
import { Button } from '../../ui/Button/Button';
import styles from './WhatWeDoCTA.module.css';

export function WhatWeDoCTA() {
  return (
    <section className={styles.section}>
      <GradientPanel>
        <h2 className={styles.title}>Not sure which you need?</h2>
        <p className={styles.subtitle}>
          Tell us the problem, not the spec. We&apos;ll help you scope the right solution — and
          give you a free quote.
        </p>
        <Button href="/contact" variant="white">
          Get a free quote →
        </Button>
      </GradientPanel>
    </section>
  );
}
