import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';
import reveal from '../../../styles/reveal.module.css';
import styles from './Story.module.css';

export function Story() {
  const text = useRevealOnScroll<HTMLDivElement>();
  const quote = useRevealOnScroll<HTMLDivElement>(120);

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div
          ref={text.ref}
          className={[reveal.reveal, text.isVisible ? reveal.visible : ''].join(' ')}
        >
          <div className={styles.eyebrow}>Our story</div>
          <h2 className={styles.title}>Built by engineers tired of slow agencies</h2>
          <p className={styles.paragraph}>
            2xdev began with a simple frustration: too many projects were delivered late, over
            budget and harder to maintain than they needed to be. We knew it could be faster and
            cleaner.
          </p>
          <p className={styles.paragraph}>
            So we built a lean, senior-only team that pairs directly with founders — no account
            managers, no hand-offs, no mess. Today we ship everything from Shopify stores to
            multi-tenant platforms, and we still measure ourselves by one thing: did it launch,
            and does it last?
          </p>
        </div>

        <div
          ref={quote.ref}
          style={quote.style}
          className={[styles.quoteWrap, reveal.reveal, quote.isVisible ? reveal.visible : ''].join(
            ' ',
          )}
        >
          <div className={styles.quoteGlowBlock} aria-hidden="true" />
          <div className={styles.quoteCard}>
            <div className={styles.quoteGlow} aria-hidden="true" />
            <div className={styles.quoteContent}>
              <div className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </div>
              <p className={styles.quoteText}>
                We don&apos;t hand you a black box. You own clean, documented code — and a team
                that actually answers the phone.
              </p>
              <div className={styles.person}>
                <div className={styles.avatar}>SA</div>
                <div>
                  <div className={styles.name}>Syed Aftab</div>
                  <div className={styles.role}>Founder &amp; Lead Engineer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
