import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

export interface Crumb {
  label: string;
  href?: string;
}

/** Visible breadcrumb trail — mirrors the BreadcrumbList structured data. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={item.label} className={styles.item}>
            {item.href && index < items.length - 1 ? (
              <Link to={item.href} className={styles.link}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={styles.current}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
