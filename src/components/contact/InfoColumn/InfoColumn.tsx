import { infoCards } from '../../../data/contactContent';
import styles from './InfoColumn.module.css';

export function InfoColumn() {
  return (
    <div className={styles.column}>
      {infoCards.map((card) => (
        <a key={card.title} href={card.href} className={styles.card}>
          <div className={styles.icon}>{card.icon}</div>
          <div>
            <div className={styles.cardTitle}>{card.title}</div>
            <div className={styles.cardValue}>{card.value}</div>
          </div>
        </a>
      ))}

      <div className={styles.promise}>
        <div className={styles.promiseGlow} aria-hidden="true" />
        <div className={styles.promiseContent}>
          <div className={styles.promiseEyebrow}>Our promise</div>
          <p className={styles.promiseText}>
            Every enquiry gets a real reply from an engineer — not a sales script. If we&apos;re
            not the right fit, we&apos;ll tell you.
          </p>
          <div className={styles.stats}>
            <div>
              <div className={styles.statValue}>24h</div>
              <div className={styles.statLabel}>avg. reply</div>
            </div>
            <div>
              <div className={styles.statValue}>Free</div>
              <div className={styles.statLabel}>first consult</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
