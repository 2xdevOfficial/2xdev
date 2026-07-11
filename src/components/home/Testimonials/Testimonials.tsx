import { testimonials } from '../../../data/homeContent';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { TestimonialCard } from './TestimonialCard';
import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <section id="about" className={styles.section}>
      <SectionHeading
        eyebrow="Client stories"
        title="Teams love working with us"
        typewriterText="Teams love working with us"
        align="center"
      />
      <div className={styles.grid}>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
