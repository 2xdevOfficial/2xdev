import type { Service } from '../../../types/home';
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';
import reveal from '../../../styles/reveal.module.css';
import styles from './Services.module.css';

export function ServiceCard({ service }: { service: Service }) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={[styles.card, reveal.reveal, isVisible ? reveal.visible : ''].join(' ')}
    >
      <div className={styles.number}>{service.no}</div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.desc}>{service.desc}</p>
      <div className={styles.tags}>{service.tags}</div>
    </div>
  );
}
