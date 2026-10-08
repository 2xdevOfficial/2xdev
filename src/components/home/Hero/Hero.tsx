import { heroTech } from '../../../data/homeContent';
import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';
import { Button } from '../../ui/Button/Button';
import reveal from '../../../styles/reveal.module.css';
import styles from './Hero.module.css';

export function Hero() {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id="home" className={styles.hero}>
      <div aria-hidden="true" className={styles.blob} />
      <div className={styles.grid}>
        <div>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Software &amp; digital product studio · United Kingdom
          </div>

          <h1 className={styles.title}>
            Great products aren&apos;t built. <span className={styles.accent}>They&apos;re engineered.</span>
          </h1>

          <p className={styles.subtitle}>
            We&apos;re a UK software company that partners with founders and teams to design,
            build and scale the technology behind their business — from websites and online
            stores to custom platforms, AI-powered tools and the systems that run entire
            operations. Fewer bottlenecks, cleaner code, twice the pace.
          </p>

          <div className={styles.ctaRow}>
            <Button href="/contact" variant="primary">
              Get a free quote →
            </Button>
            <Button href="#projects" variant="outline">
              View our work
            </Button>
          </div>

          <div className={styles.techRow}>
            <span className={styles.techLabel}>Built with</span>
            <div className={styles.techPills}>
              {heroTech.map((tech) => (
                <span key={tech} className={styles.techPill}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={ref}
          className={[styles.codeWindowWrap, reveal.reveal, isVisible ? reveal.visible : ''].join(' ')}
        >
          <div className={styles.codeGlow} aria-hidden="true" />
          <div className={styles.codeWindow}>
            <div className={styles.codeBar}>
              <span className={[styles.dot, styles.dotRed].join(' ')} />
              <span className={[styles.dot, styles.dotYellow].join(' ')} />
              <span className={[styles.dot, styles.dotGreen].join(' ')} />
              <span className={styles.codeBarLabel}>2xdev — deploy.ts</span>
            </div>
            <pre className={styles.codeBody}>
              <span className={styles.kw}>const</span> team = <span className={styles.str}>"2xdev"</span>;
              {'\n'}
              <span className={styles.kw}>await</span> ship({'{'}
              {'\n'}  stack: [<span className={styles.str}>"React"</span>, <span className={styles.str}>"Laravel"</span>],
              {'\n'}  speed: <span className={styles.num}>2</span>x,
              {'\n'}  quality: <span className={styles.num}>100</span>%,
              {'\n'}
              {'}'});
              {'\n'}
              <span className={styles.comment}>// launched in weeks, not months</span>
              {'\n'}
              <span className={styles.str}>✓ build passed</span> <span className={styles.blinkBlock}> </span>
            </pre>
          </div>
          <div className={styles.floatingCard}>
            <div className={styles.floatingIcon}>⚡</div>
            <div>
              <div className={styles.floatingTitle}>2× faster</div>
              <div className={styles.floatingSubtitle}>avg. delivery time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
