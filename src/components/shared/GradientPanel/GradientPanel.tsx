import type { ReactNode } from 'react';
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';
import reveal from '../../../styles/reveal.module.css';
import styles from './GradientPanel.module.css';

interface GradientPanelProps {
  children: ReactNode;
  className?: string;
}

export function GradientPanel({ children, className }: GradientPanelProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={[styles.panel, reveal.reveal, isVisible ? reveal.visible : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={[styles.blob, styles.blobOne].join(' ')} aria-hidden="true" />
      <div className={[styles.blob, styles.blobTwo].join(' ')} aria-hidden="true" />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
