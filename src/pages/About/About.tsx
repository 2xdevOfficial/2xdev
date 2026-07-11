import { AboutHero } from '../../components/about/Hero/AboutHero';
import { AboutStats } from '../../components/about/Stats/AboutStats';
import { Story } from '../../components/about/Story/Story';
import { Values } from '../../components/about/Values/Values';
import { Team } from '../../components/about/Team/Team';
import { TechBand } from '../../components/about/TechBand/TechBand';
import { AboutCTA } from '../../components/about/CTA/AboutCTA';

export function About() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <Story />
      <Values />
      <Team />
      <TechBand />
      <AboutCTA />
    </>
  );
}
