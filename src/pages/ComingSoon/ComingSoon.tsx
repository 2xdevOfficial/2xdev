import { Link } from 'react-router-dom';
import styles from './ComingSoon.module.css';
import { Seo } from '../../components/seo/Seo';

export function ComingSoon() {
  return (
    <section className={styles.section}>
      <Seo page="notFound" />
      <div className={styles.eyebrow}>404 · Page not found</div>
      <h1 className={styles.title}>We couldn&apos;t find that page</h1>
      <p className={styles.subtitle}>
        The link may be broken or the page may have moved. Head back home to see what we do.
      </p>
      <Link to="/" className={styles.link}>
        ← Back to home
      </Link>
    </section>
  );
}
