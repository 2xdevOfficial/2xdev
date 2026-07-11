import { Link } from 'react-router-dom';
import { projects } from '../../../data/homeContent';
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';
import reveal from '../../../styles/reveal.module.css';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

export function Projects() {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id="projects" className={styles.section}>
      <div
        ref={ref}
        className={[styles.header, reveal.reveal, isVisible ? reveal.visible : ''].join(' ')}
      >
        <div className={styles.headingBlock}>
          <div className={styles.eyebrow}>Selected work</div>
          <h2 className={styles.title}>Case studies with real outcomes</h2>
        </div>
        <Link to="/contact" className={styles.linkButton}>
          Start your project →
        </Link>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
