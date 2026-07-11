import type { Testimonial } from '../../../types/home';
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';
import reveal from '../../../styles/reveal.module.css';
import styles from './Testimonials.module.css';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div ref={ref} className={[reveal.reveal, isVisible ? reveal.visible : ''].join(' ')}>
      <div className={styles.card}>
        <div className={styles.quoteMark} aria-hidden="true">”</div>
        <div className={styles.stars} aria-hidden="true">★★★★★</div>
        <p className={styles.quote}>{testimonial.quote}</p>
        <div className={styles.person}>
          <div className={styles.avatar} style={{ background: testimonial.av }}>
            {testimonial.init}
          </div>
          <div>
            <div className={styles.name}>{testimonial.name}</div>
            <div className={styles.role}>{testimonial.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
