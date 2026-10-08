import { useState } from 'react';
import { faqs as defaultFaqs } from '../../../data/contactContent';
import type { Faq as FaqEntry } from '../../../types/contact';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { FaqItem } from './FaqItem';
import styles from './Faq.module.css';

interface FaqProps {
  items?: FaqEntry[];
  eyebrow?: string;
  title?: string;
}

export function Faq({ items = defaultFaqs, eyebrow = 'FAQ', title = 'Before you get in touch' }: FaqProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.section}>
      <SectionHeading eyebrow={eyebrow} title={title} align="center" />
      <div className={styles.list}>
        {items.map((faq, index) => (
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
