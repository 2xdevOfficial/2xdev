import { PageHero } from '../../shared/PageHero/PageHero';
import utilities from '../../../styles/utilities.module.css';

export function ContactHero() {
  return (
    <PageHero
      badge="Usually replies within 24 hours"
      title={
        <>
          Let&apos;s build something <span className={utilities.accent}>worth shipping.</span>
        </>
      }
      subtitle="Tell us about your project and we'll get back with a clear plan, a realistic timeline and a free, no-obligation quote."
      titleMaxWidth={820}
    />
  );
}
