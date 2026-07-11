import { useState } from 'react';
import { allProjects } from '../../../data/projectsContent';
import { ProjectFilters } from './ProjectFilters';
import { ProjectCard } from './ProjectCard';
import styles from './ProjectGrid.module.css';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProjects =
    activeFilter === 'All' ? allProjects : allProjects.filter((p) => p.cat === activeFilter);

  return (
    <section className={styles.section}>
      <ProjectFilters active={activeFilter} onSelect={setActiveFilter} />
      <div className={styles.grid} key={activeFilter}>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
