import type { ReactNode } from 'react';
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';
import reveal from '../../../styles/reveal.module.css';
import styles from './PageHero.module.css';

interface PageHeroProps {
  badge: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
  titleMaxWidth?: number;
}

export function PageHero({ badge, title, subtitle, titleMaxWidth = 860 }: PageHeroProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className={styles.hero}>
      <div aria-hidden="true" className={styles.blob} />
      <div
        ref={ref}
        className={[styles.inner, reveal.reveal, isVisible ? reveal.visible : ''].join(' ')}
      >
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          {badge}
        </div>
        <h1 className={styles.title} style={{ maxWidth: titleMaxWidth }}>
          {title}
        </h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  );
}
