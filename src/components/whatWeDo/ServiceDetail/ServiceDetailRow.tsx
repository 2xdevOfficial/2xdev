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
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.desc}>{service.desc}</p>
        <div className={styles.tags}>
          {service.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Link to="/contact" className={styles.cta}>
        Discuss this →
      </Link>
    </div>
  );
}
