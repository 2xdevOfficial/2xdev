import { Link } from 'react-router-dom';
import type { Project } from '../../../types/home';
import styles from './ProjectGrid.module.css';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to="/contact" className={styles.card}>
      <div
        className={styles.thumb}
        style={{
          background: `repeating-linear-gradient(135deg, ${project.bg1}, ${project.bg1} 14px, ${project.bg2} 14px, ${project.bg2} 28px)`,
        }}
      >
        <span className={styles.category}>{project.cat}</span>
        <span className={styles.shotLabel}>[ project shot ]</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.cardTitle}>{project.name}</h3>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.footer}>
          <span className={styles.metric}>{project.metric}</span>
          <span className={styles.stack}>{project.stack}</span>
        </div>
      </div>
    </Link>
  );
}
