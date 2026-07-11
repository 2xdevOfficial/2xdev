import { whyUs } from '../../../data/homeContent';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { WhyUsCard } from './WhyUsCard';
import styles from './WhyUs.module.css';

export function WhyUs() {
  return (
    <section className={styles.section}>
      <SectionHeading
        eyebrow="Why 2xdev"
        title="Built to make the difference obvious"
        align="center"
      />
      <div className={styles.grid}>
        {whyUs.map((item) => (
          <WhyUsCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
