import { PageHero } from '../../shared/PageHero/PageHero';
import utilities from '../../../styles/utilities.module.css';

export function ProjectsHero() {
  return (
    <PageHero
      badge="50+ projects delivered"
      title={
        <>
          Work we&apos;re <span className={utilities.accent}>proud to ship.</span>
        </>
      }
      subtitle="From headless stores to multi-tenant platforms — a look at what we've built for founders and teams across the UK and beyond."
      titleMaxWidth={840}
    />
  );
}
