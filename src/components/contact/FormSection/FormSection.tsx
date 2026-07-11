import { ContactForm } from '../ContactForm/ContactForm';
import { InfoColumn } from '../InfoColumn/InfoColumn';
import styles from './FormSection.module.css';

export function FormSection() {
  return (
    <section id="form" className={styles.section}>
      <div className={styles.grid}>
        <ContactForm />
        <InfoColumn />
      </div>
    </section>
  );
}
