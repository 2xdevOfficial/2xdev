import type { Faq } from '../../../types/contact';
import styles from './Faq.module.css';

interface FaqItemProps {
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqItem({ faq, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className={styles.item}>
      <button
        type="button"
        onClick={onToggle}
        className={styles.question}
        aria-expanded={isOpen}
      >
        <span className={styles.questionText}>{faq.q}</span>
        <span className={[styles.plus, isOpen ? styles.plusOpen : ''].join(' ')}>+</span>
      </button>
      <div className={[styles.answerWrap, isOpen ? styles.answerOpen : ''].join(' ')}>
        <p className={styles.answer}>{faq.a}</p>
      </div>
    </div>
  );
}
