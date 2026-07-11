import { useState } from 'react';
import { faqs } from '../../../data/contactContent';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { FaqItem } from './FaqItem';
import styles from './Faq.module.css';

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.section}>
      <SectionHeading eyebrow="FAQ" title="Before you get in touch" align="center" />
      <div className={styles.list}>
        {faqs.map((faq, index) => (
          <FaqItem
            key={faq.q}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
          />
        ))}
      </div>
    </section>
  );
}
