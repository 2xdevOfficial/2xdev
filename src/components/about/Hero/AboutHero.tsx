import { PageHero } from '../../shared/PageHero/PageHero';
import utilities from '../../../styles/utilities.module.css';

export function AboutHero() {
  return (
    <PageHero
      badge="About 2xdev"
      title={
        <>
          A small team with a <span className={utilities.accent}>big obsession</span> for
          shipping.
        </>
      }
      subtitle="We're engineers first. We started 2xdev to prove that great software doesn't need a bloated agency — just senior people, clean code and a bias for shipping."
      titleMaxWidth={860}
    />
  );
}
