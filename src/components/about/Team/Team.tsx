import { team } from '../../../data/aboutContent';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import { TeamCard } from './TeamCard';
import styles from './Team.module.css';

const STAGGER_STEP_MS = 90;

export function Team() {
  return (
    <section className={styles.section}>
      <SectionHeading
        eyebrow="The team"
        title="Senior people, no hand-offs"
        subtitle="The people who scope your project are the people who build it."
        align="center"
      />
      <div className={styles.grid}>
        {team.map((member, index) => (
          <TeamCard key={member.name} member={member} delayMs={index * STAGGER_STEP_MS} />
        ))}
      </div>
    </section>
  );
}
