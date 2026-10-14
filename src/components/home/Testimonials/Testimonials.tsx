import { testimonials } from '../../../data/homeContent';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { TestimonialCard } from './TestimonialCard';
import { TrustpilotWidget } from '../../shared/TrustpilotWidget/TrustpilotWidget';
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
      <div className={styles.trustpilot}>
        <p className={styles.trustpilotText}>Worked with us? We&apos;d love to hear how it went.</p>
        <TrustpilotWidget />
      </div>
    </section>
  );
}
