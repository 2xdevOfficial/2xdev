import { Link } from 'react-router-dom';
import { getServicePage, servicePages, servicePath } from '../../data/servicePages';
import { allProjects } from '../../data/projectsContent';
import { process, techGroups } from '../../data/homeContent';
import { serviceKey } from '../../seo/config';
import { Seo } from '../../components/seo/Seo';
import { Breadcrumbs } from '../../components/shared/Breadcrumbs/Breadcrumbs';
import { PageHero } from '../../components/shared/PageHero/PageHero';
import { ProcessGrid } from '../../components/shared/ProcessGrid/ProcessGrid';
import { GradientPanel } from '../../components/shared/GradientPanel/GradientPanel';
import { SectionHeading } from '../../components/ui/SectionHeading/SectionHeading';
import { Button } from '../../components/ui/Button/Button';
import { Faq } from '../../components/contact/Faq/Faq';
import { ProjectCard } from '../../components/projects/ProjectGrid/ProjectCard';
import projectGrid from '../../components/projects/ProjectGrid/ProjectGrid.module.css';
import styles from './ServicePage.module.css';

const allTech = techGroups.flatMap((group) => group.items);

export function ServicePage({ slug }: { slug: string }) {
  const service = getServicePage(slug);
  const projects = allProjects.filter((project) => service.relatedProjects.includes(project.name));
  const otherServices = servicePages.filter((item) => item.slug !== slug);

  return (
    <>
      <Seo page={serviceKey(slug)} />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'What We Do', href: '/what-we-do' },
          { label: service.shortName },
        ]}
      />
      <PageHero badge={service.badge} title={service.h1} subtitle={service.heroSubtitle} />

      <div className={styles.heroCtas}>
        <Button href="/contact" variant="primary">
          Get a free quote →
        </Button>
        <Button href="/projects" variant="outline">
          See our work
        </Button>
      </div>

      <section className={styles.section}>
        <div className={styles.introGrid}>
          <div className={styles.prose}>
            <h2 className={styles.h2}>{service.name} from a senior UK team</h2>
            {service.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <aside className={styles.idealCard}>
            <h3 className={styles.idealTitle}>Ideal for</h3>
            <ul className={styles.checkList}>
              {service.idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.techTitle}>Typical stack</div>
            <div className={styles.techPills}>
              {service.techNames.map((name) => {
                const tech = allTech.find((item) => item.name === name);
                return (
                  <span key={name} className={styles.techPill}>
                    {tech && <span className={styles.techDot} style={{ background: tech.color }} />}
                    {name}
                  </span>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeading
          eyebrow="What’s included"
          title={`Our ${service.shortName.toLowerCase()} services`}
          subtitle="Pick what you need — every project is scoped up front with a fixed, itemised quote."
        />
        <div className={styles.deliverables}>
          {service.deliverables.map((item) => (
            <div key={item.title} className={styles.deliverable}>
              <h3 className={styles.deliverableTitle}>{item.title}</h3>
              <p className={styles.deliverableDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeading eyebrow="How we work" title="From first call to launch" align="center" />
        <ProcessGrid steps={process} stagger />
      </section>

      {projects.length > 0 && (
        <section className={styles.section}>
          <SectionHeading
            eyebrow="Related work"
            title={projects.length > 1 ? 'Projects we’ve delivered' : 'A project we’ve delivered'}
          />
          <div className={projectGrid.grid}>
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      )}

      <Faq items={service.faqs} eyebrow="FAQ" title={`${service.shortName} questions`} />

      <section className={styles.section}>
        <SectionHeading eyebrow="More services" title="Everything else we can help with" align="center" />
        <ul className={styles.related}>
          {otherServices.map((item) => (
            <li key={item.slug}>
              <Link to={servicePath(item.slug)} className={styles.relatedLink}>
                <span className={styles.relatedIcon} aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.name}</span>
                <span className={styles.relatedArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={[styles.section, styles.ctaSection].join(' ')}>
        <GradientPanel>
          <h2 className={styles.ctaTitle}>Let’s talk about your project</h2>
          <p className={styles.ctaSubtitle}>
            Tell us what you need and get a clear plan, a realistic timeline and a free, fixed-price
            quote — usually within one business day.
          </p>
          <Button href="/contact" variant="white">
            Get a free quote →
          </Button>
        </GradientPanel>
      </section>
    </>
  );
}
