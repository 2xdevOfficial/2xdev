import type { WhyUsItem } from '../../../types/home';
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';
import reveal from '../../../styles/reveal.module.css';
import styles from './WhyUs.module.css';

export function WhyUsCard({ item }: { item: WhyUsItem }) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div ref={ref} className={[reveal.reveal, isVisible ? reveal.visible : ''].join(' ')}>
      <div className={styles.frame}>
        <div className={styles.card}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.icon}>{item.icon}</div>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.desc}>{item.desc}</p>
        </div>
      </div>
    </div>
  );
}
