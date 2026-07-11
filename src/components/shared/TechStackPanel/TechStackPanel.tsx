import type { TechGroup } from '../../../types/home';
import { techGroups as defaultTechGroups } from '../../../data/homeContent';
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';
import reveal from '../../../styles/reveal.module.css';
import styles from './TechStackPanel.module.css';

interface TechStackPanelProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  groups?: TechGroup[];
}

export function TechStackPanel({
  eyebrow = 'Our stack',
  title = 'The right tool for every layer',
  subtitle = "We're framework-agnostic. We pick the stack that fits your product, budget and timeline — not the other way round.",
  groups = defaultTechGroups,
}: TechStackPanelProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={[styles.panel, reveal.reveal, isVisible ? reveal.visible : ''].join(' ')}
    >
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div>
          <div className={styles.eyebrow}>{eyebrow}</div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.groups}>
          {groups.map((group) => (
            <div key={group.label} className={styles.group}>
              <div className={styles.groupLabel}>{group.label}</div>
              <div className={styles.items}>
                {group.items.map((tech) => (
                  <div key={tech.name} className={styles.item}>
                    <span className={styles.mono} style={{ background: tech.color }}>
                      {tech.mono}
                    </span>
                    <span className={styles.name}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
