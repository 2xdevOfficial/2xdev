import { Link } from 'react-router-dom';
import styles from './ComingSoon.module.css';

export function ComingSoon() {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>Coming soon</div>
      <h1 className={styles.title}>This page is on its way</h1>
      <p className={styles.subtitle}>
        We&apos;re still building this part of the site. Head back home in the meantime.
      </p>
      <Link to="/" className={styles.link}>
        ← Back to home
      </Link>
    </section>
  );
}
