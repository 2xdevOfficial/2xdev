import { Link } from 'react-router-dom';
import { blogPath, blogPosts, getBlogPost } from '../../data/blogPosts';
import { getServicePage, servicePath } from '../../data/servicePages';
import { caseStudyPath, getCaseStudy } from '../../data/caseStudies';
import { team } from '../../data/aboutContent';
import { postKey } from '../../seo/config';
import { Seo } from '../../components/seo/Seo';
import { Breadcrumbs } from '../../components/shared/Breadcrumbs/Breadcrumbs';
import { ContentSections } from '../../components/shared/RichText/RichText';
import { slugify } from '../../utils/links';
import { Faq } from '../../components/contact/Faq/Faq';
import { GradientPanel } from '../../components/shared/GradientPanel/GradientPanel';
import { Button } from '../../components/ui/Button/Button';
import serviceStyles from '../Service/ServicePage.module.css';
import { formatDate } from '../../utils/dates';
import styles from './Article.module.css';

export function BlogPostPage({ slug }: { slug: string }) {
  const post = getBlogPost(slug);
  const author = team.find((member) => member.name === post.author);
  const services = post.relatedServices.map(getServicePage);
  const studies = (post.relatedCaseStudies ?? []).map(getCaseStudy);
  const morePosts = blogPosts.filter((item) => item.slug !== slug).slice(0, 3);
  const mainService = services[0];

  return (
    <>
      <Seo page={postKey(slug)} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]} />

      <article>
        <header className={styles.header}>
          <span className={styles.category}>{post.category}</span>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.lede}>{post.excerpt}</p>
          <div className={styles.meta}>
            <span>
              By {post.author}
              {author ? `, ${author.role}` : ''}
            </span>
            <span>
              Updated <time dateTime={post.dateModified}>{formatDate(post.dateModified)}</time>
            </span>
            <span>{post.readingMinutes} min read</span>
          </div>
        </header>

        <div className={styles.layout}>
          <div>
            <div className={styles.takeaways}>
              <h2 className={styles.takeawaysTitle}>Key takeaways</h2>
              <ul>
                {post.keyTakeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <ContentSections sections={post.sections} />

            <div className={styles.author}>
              <span className={styles.avatar} aria-hidden="true">
                {post.author
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </span>
              <span>
                <span className={styles.authorName}>{post.author}</span>
                {author ? ` — ${author.role} at 2xdev. ` : ' — 2xdev. '}
                Builds websites, e-commerce stores and custom software for UK businesses.{' '}
                <Link to="/about">About our team →</Link>
              </span>
            </div>
          </div>

          <aside className={styles.aside}>
            <nav className={styles.card} aria-label="On this page">
              <p className={styles.cardTitle}>On this page</p>
              <ol className={styles.toc}>
                {post.sections.map((section) => (
                  <li key={section.heading}>
                    <a href={`#${slugify(section.heading)}`}>{section.heading}</a>
                  </li>
                ))}
              </ol>
            </nav>
            {mainService && (
              <div className={styles.ctaCard}>
                <p className={styles.ctaCardTitle}>Need a fixed-price quote?</p>
                <p>Tell us what you need — we reply within one business day with a clear plan and price.</p>
                <Button href="/contact" variant="white">
                  Get a free quote →
                </Button>
              </div>
            )}
            <div className={styles.card}>
              <p className={styles.cardTitle}>Related services</p>
              <ul className={styles.linkList}>
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link to={servicePath(service.slug)}>{service.name} →</Link>
                  </li>
                ))}
                {studies.map((study) => (
                  <li key={study.slug}>
                    <Link to={caseStudyPath(study.slug)}>Case study: {study.client} →</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>

      <Faq items={post.faqs} eyebrow="FAQ" title="Common questions" />

      {morePosts.length > 0 && (
        <section className={serviceStyles.section}>
          <h2 className={serviceStyles.h2}>More guides</h2>
          <ul className={serviceStyles.related}>
            {morePosts.map((item) => (
              <li key={item.slug}>
                <Link to={blogPath(item.slug)} className={serviceStyles.relatedLink}>
                  <span>{item.title}</span>
                  <span className={serviceStyles.relatedArrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className={[serviceStyles.section, serviceStyles.ctaSection].join(' ')}>
        <GradientPanel>
          <h2 className={serviceStyles.ctaTitle}>Planning a project?</h2>
          <p className={serviceStyles.ctaSubtitle}>
            Get a clear plan, a realistic timeline and a free, fixed-price quote from a senior UK team.
          </p>
          <Button href="/contact" variant="white">
            Get a free quote →
          </Button>
        </GradientPanel>
      </section>
    </>
  );
}
