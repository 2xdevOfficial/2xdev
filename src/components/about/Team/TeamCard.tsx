import type { TeamMember } from '../../../types/about';
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';
import reveal from '../../../styles/reveal.module.css';
import styles from './Team.module.css';

export function TeamCard({ member, delayMs }: { member: TeamMember; delayMs: number }) {
  const { ref, isVisible, style } = useRevealOnScroll<HTMLDivElement>(delayMs);

  return (
    <div
      ref={ref}
      style={style}
      className={[styles.card, reveal.reveal, isVisible ? reveal.visible : ''].join(' ')}
    >
      <div className={styles.avatar} style={{ background: member.av }}>
        {member.init}
      </div>
      <div className={styles.name}>{member.name}</div>
      <div className={styles.role}>{member.role}</div>
    </div>
  );
}
