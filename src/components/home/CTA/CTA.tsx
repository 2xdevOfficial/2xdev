import { GradientPanel } from '../../shared/GradientPanel/GradientPanel';
import { Button } from '../../ui/Button/Button';
import styles from './CTA.module.css';

export function CTA() {
  return (
    <section id="contact" className={styles.section}>
      <GradientPanel>
        <h2 className={styles.title}>Got a project in mind?</h2>
        <p className={styles.subtitle}>
          Tell us what you&apos;re building. We&apos;ll come back with a clear plan, timeline and
          a free, no-obligation quote.
        </p>
        <div className={styles.actions}>
          <Button href="/contact" variant="white">
            Get a free quote →
          </Button>
          <Button href="/contact" variant="ghost">
            Book a call
          </Button>
        </div>
        <div className={styles.meta}>
          <span>✉ support@2xdev.com</span>
          <span>📍 United Kingdom</span>
          <span>⏱ Reply within 24h</span>
        </div>
      </GradientPanel>
    </section>
  );
}
