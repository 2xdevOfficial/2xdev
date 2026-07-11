import { clientRow } from '../../../data/homeContent';
import styles from './LogoMarquee.module.css';

export function LogoMarquee() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Trusted by teams across the UK &amp; beyond</p>
      <div className={styles.track}>
        {clientRow.map((client, index) => (
          <span key={`${client}-${index}`} className={styles.client}>
            {client}
          </span>
        ))}
      </div>
    </section>
  );
}
