import { Link } from 'react-router-dom';
import { featuredProject } from '../../../data/projectsContent';
import styles from './FeaturedProject.module.css';

export function FeaturedProject() {
  const content = (
    <>
      <div className={styles.info}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.content}>
          <span className={styles.tag}>{featuredProject.tag}</span>
          <h2 className={styles.title}>{featuredProject.name}</h2>
          <p className={styles.desc}>{featuredProject.desc}</p>
          <div className={styles.metrics}>
            {featuredProject.metrics.map((metric) => (
              <div key={metric.label}>
                <div className={styles.metricValue}>{metric.value}</div>
                <div className={styles.metricLabel}>{metric.label}</div>
              </div>
            ))}
          </div>
          <span className={styles.cta}>
            {featuredProject.liveUrl ? 'Visit live site →' : 'Read the story →'}
          </span>
        </div>
      </div>
      <div className={styles.visual}>
        {featuredProject.image ? (
          <img
            src={featuredProject.image}
            alt={`${featuredProject.name} website built by 2xdev`}
            className={styles.shotImage}
          />
        ) : (
          <span className={styles.shotLabel}>[ project shot ]</span>
        )}
      </div>
    </>
  );

  return (
    <section className={styles.section}>
      {featuredProject.liveUrl ? (
        <a
          href={featuredProject.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          {content}
        </a>
      ) : (
        <Link to="/contact" className={styles.card}>
          {content}
        </Link>
      )}
    </section>
  );
}
