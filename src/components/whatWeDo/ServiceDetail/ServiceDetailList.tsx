import { serviceDetails } from '../../../data/whatWeDoContent';
import { ServiceDetailRow } from './ServiceDetailRow';
import styles from './ServiceDetail.module.css';

export function ServiceDetailList() {
  return (
    <section className={styles.section}>
      <div className={styles.list}>
        {serviceDetails.map((service) => (
          <ServiceDetailRow key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
