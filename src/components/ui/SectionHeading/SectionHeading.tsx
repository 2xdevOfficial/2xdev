import type { ReactNode } from 'react';
import { useTypewriter } from '../../../hooks/useTypewriter';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  typewriterText?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  typewriterText,
  className,
}: SectionHeadingProps) {
  const { ref, text, showCaret } = useTypewriter<HTMLHeadingElement>(typewriterText ?? '');

  return (
    <div className={[styles.heading, align === 'center' ? styles.center : '', className].filter(Boolean).join(' ')}>
      <div className={styles.eyebrow}>{eyebrow}</div>
      {typewriterText ? (
        <h2 ref={ref} className={styles.title} aria-label={typewriterText}>
          <span aria-hidden="true">{text}</span>
          {showCaret && <span className={styles.caret} aria-hidden="true" />}
        </h2>
      ) : (
        <h2 className={styles.title}>{title}</h2>
      )}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
