import { Link } from 'react-router-dom';
import type { ServiceDetail } from '../../../types/whatWeDo';
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';
import reveal from '../../../styles/reveal.module.css';
import styles from './ServiceDetail.module.css';

export function ServiceDetailRow({ service }: { service: ServiceDetail }) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={[styles.row, reveal.reveal, isVisible ? reveal.visible : ''].join(' ')}
    >
      <div className={styles.icon}>{service.icon}</div>
      <div>
        <h3 className={styles.title}>
          <Link to={`/services/${service.slug}`} className={styles.titleLink}>
            {service.title}
          </Link>
        </h3>
        <p className={styles.desc}>{service.desc}</p>
        <div className={styles.tags}>
          {service.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Link
        to={`/services/${service.slug}`}
        className={styles.cta}
        aria-label={`Learn more about ${service.title}`}
      >
        Learn more →
      </Link>
    </div>
  );
}
