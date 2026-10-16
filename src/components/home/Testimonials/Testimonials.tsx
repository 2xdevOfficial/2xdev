import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { TrustpilotWidget } from '../../shared/TrustpilotWidget/TrustpilotWidget';
import { ReviewSlider } from './ReviewSlider';
import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <section id="about" className={styles.section}>
      <SectionHeading
        eyebrow="Client reviews"
        title="What our clients say"
        typewriterText="What our clients say"
        align="center"
      />
      <ReviewSlider />
      <div className={styles.trustpilot}>
        <p className={styles.trustpilotText}>Worked with us? We&apos;d love to hear how it went.</p>
        <TrustpilotWidget />
      </div>
    </section>
  );
}
