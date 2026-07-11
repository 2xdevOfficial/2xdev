import { services } from '../../../data/homeContent';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { ServiceCard } from './ServiceCard';
import styles from './Services.module.css';

export function Services() {
  return (
    <section id="services" className={styles.section}>
      <SectionHeading
        eyebrow="What we do"
        title="Everything you need to launch and scale"
        subtitle="One partner for the whole build — from a fast startup site to a full custom management system, with the right stack for the job."
      />
      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.no} service={service} />
        ))}
      </div>
    </section>
  );
}
