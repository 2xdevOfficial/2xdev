import { aboutTech } from '../../../data/aboutContent';
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';
import reveal from '../../../styles/reveal.module.css';
import styles from './TechBand.module.css';

export function TechBand() {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div
        ref={ref}
        className={[styles.panel, reveal.reveal, isVisible ? reveal.visible : ''].join(' ')}
      >
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.content}>
          <h2 className={styles.title}>A stack we know inside out</h2>
          <div className={styles.pills}>
            {aboutTech.map((tech) => (
              <span key={tech} className={styles.pill}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
