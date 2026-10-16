import { Link } from 'react-router-dom';
import { caseStudies, caseStudyPath, getCaseStudy } from '../../data/caseStudies';
import { allProjects } from '../../data/projectsContent';
import { getServicePage, servicePath } from '../../data/servicePages';
import { caseKey } from '../../seo/config';
import { Seo } from '../../components/seo/Seo';
import { Breadcrumbs } from '../../components/shared/Breadcrumbs/Breadcrumbs';
import { ContentSections } from '../../components/shared/RichText/RichText';
import { Faq } from '../../components/contact/Faq/Faq';
import { GradientPanel } from '../../components/shared/GradientPanel/GradientPanel';
import { Button } from '../../components/ui/Button/Button';
import serviceStyles from '../Service/ServicePage.module.css';
import styles from '../Blog/Article.module.css';

export function CaseStudyPage({ slug }: { slug: string }) {
  const study = getCaseStudy(slug);
  const project = allProjects.find((item) => item.name === study.projectName);
  const services = study.services.map(getServicePage);
  const others = caseStudies.filter((item) => item.slug !== slug);

  return (
    <>
      <Seo page={caseKey(slug)} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: study.client }]} />

      <article>
        <header className={styles.header}>
          <span className={styles.category}>Case study · {study.industry}</span>
          <h1 className={styles.title}>{study.h1}</h1>
          <p className={styles.lede}>{study.summary}</p>
        </header>

        <div className={styles.layout}>
          <div>
            <div className={styles.results}>
              {study.results.map((result) => (
                <div key={result.label} className={styles.result}>
                  <div className={styles.resultValue}>{result.value}</div>
                  <div className={styles.resultLabel}>{result.label}</div>
                </div>
              ))}
            </div>
            {project?.image && (
              <img
                src={project.image}
                alt={`${study.client} website built by 2xdev`}
                className={styles.shot}
                loading="lazy"
                decoding="async"
              />
            )}
            <ContentSections sections={study.sections} />
          </div>

          <aside className={styles.aside}>
            <div className={styles.card}>
              <p className={styles.cardTitle}>Project facts</p>
              <dl className={styles.facts}>
                <div>
                  <dt>Client</dt>
                  <dd>{study.client}</dd>
                </div>
                <div>
                  <dt>Industry</dt>
                  <dd>{study.industry}</dd>
                </div>
                {study.location && (
                  <div>
                    <dt>Location</dt>
                    <dd>{study.location}</dd>
                  </div>
                )}
                <div>
                  <dt>Stack</dt>
                  <dd>{study.stack.join(' · ')}</dd>
                </div>
                <div>
                  <dt>Live site</dt>
                  <dd>
                    <a href={study.liveUrl} target="_blank" rel="noopener">
                      {study.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')} ↗
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className={styles.card}>
              <p className={styles.cardTitle}>Services used</p>
              <ul className={styles.linkList}>
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link to={servicePath(service.slug)}>{service.name} →</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.ctaCard}>
              <p className={styles.ctaCardTitle}>Want something similar?</p>
              <p>Tell us about your project and get a fixed-price quote within one business day.</p>
              <Button href="/contact" variant="white">
                Get a free quote →
              </Button>
            </div>
          </aside>
        </div>
      </article>

      <Faq items={study.faqs} eyebrow="FAQ" title="Questions about projects like this" />

      <section className={serviceStyles.section}>
        <h2 className={serviceStyles.h2}>More case studies</h2>
        <ul className={serviceStyles.related}>
          {others.map((item) => (
            <li key={item.slug}>
              <Link to={caseStudyPath(item.slug)} className={serviceStyles.relatedLink}>
                <span>
                  {item.client} — {item.industry}
                </span>
                <span className={serviceStyles.relatedArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={[serviceStyles.section, serviceStyles.ctaSection].join(' ')}>
        <GradientPanel>
          <h2 className={serviceStyles.ctaTitle}>Let’s build yours next</h2>
          <p className={serviceStyles.ctaSubtitle}>
            A clear plan, a realistic timeline and a free, fixed-price quote — usually within one business day.
          </p>
          <Button href="/contact" variant="white">
            Get a free quote →
          </Button>
        </GradientPanel>
      </section>
    </>
  );
}
