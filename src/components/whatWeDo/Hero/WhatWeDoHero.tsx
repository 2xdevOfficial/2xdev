import { PageHero } from '../../shared/PageHero/PageHero';
import utilities from '../../../styles/utilities.module.css';

export function WhatWeDoHero() {
  return (
    <PageHero
      badge="What we do"
      title={
        <>
          One team for the <span className={utilities.accent}>whole build.</span>
        </>
      }
      subtitle="From a fast startup site to a full custom platform, we design, build and scale software end to end — with the right stack for the job."
      titleMaxWidth={860}
    />
  );
}
