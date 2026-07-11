import { ProjectsHero } from '../../components/projects/Hero/ProjectsHero';
import { ProjectsStats } from '../../components/projects/Stats/ProjectsStats';
import { FeaturedProject } from '../../components/projects/Featured/FeaturedProject';
import { ProjectsSection } from '../../components/projects/ProjectGrid/ProjectsSection';
import { ProjectsCTA } from '../../components/projects/CTA/ProjectsCTA';

export function Projects() {
  return (
    <>
      <ProjectsHero />
      <ProjectsStats />
      <FeaturedProject />
      <ProjectsSection />
      <ProjectsCTA />
    </>
  );
}
