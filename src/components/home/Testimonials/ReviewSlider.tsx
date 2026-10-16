import { useCallback, useEffect, useRef, useState } from 'react';
import { TRUSTPILOT_PROFILE_URL, trustpilotReviews, type TrustpilotReview } from '../../../data/trustpilotReviews';
import styles from './ReviewSlider.module.css';

const dateFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

function Stars({ rating, size = 22 }: { rating: number; size?: number }) {
  return (
    <span className={styles.stars} role="img" aria-label={`Rated ${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={styles.star}
          style={{ width: size, height: size, background: n <= rating ? '#00b67a' : '#dcdce6' }}
        >
          <svg viewBox="0 0 24 24" width={size * 0.7} height={size * 0.7} aria-hidden="true">
            <path fill="#fff" d="M12 2.5l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.7l7.1-.6z" />
          </svg>
        </span>
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: TrustpilotReview }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <Stars rating={review.rating} />
        <time className={styles.date} dateTime={review.date}>
          {dateFormat.format(new Date(review.date))}
        </time>
      </div>
      <h3 className={styles.title}>{review.title}</h3>
      <p className={styles.text}>{review.text}</p>
      <div className={styles.person}>
        <div className={styles.avatar} aria-hidden="true">
          {review.initials}
        </div>
        <div className={styles.personInfo}>
          <div className={styles.name}>{review.name}</div>
          <div className={styles.meta}>{review.country} · Review on Trustpilot</div>
        </div>
      </div>
      <a
        className={styles.readMore}
        href={review.url ?? TRUSTPILOT_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read ${review.name}'s review on Trustpilot`}
      >
        Read on Trustpilot
      </a>
    </article>
  );
}

function Arrow({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
    </svg>
  );
}

/** Swipeable slider of real Trustpilot reviews (touch-swipe, arrows, dots, keyboard). */
export function ReviewSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const reviews = trustpilotReviews;

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < max - 4);
    const cards = Array.from(track.children) as HTMLElement[];
    const left = track.scrollLeft + track.offsetLeft;
    let closest = 0;
    cards.forEach((card, i) => {
      if (Math.abs(card.offsetLeft - left) < Math.abs(cards[closest].offsetLeft - left)) closest = i;
    });
    setActive(track.scrollLeft >= max - 4 ? cards.length - 1 : closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    update();
    track.addEventListener('scroll', update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(track);
    return () => {
      track.removeEventListener('scroll', update);
      ro.disconnect();
    };
  }, [update]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  };

  const step = (dir: 1 | -1) => goTo(Math.max(0, Math.min(reviews.length - 1, active + dir)));

  const fiveStar = reviews.filter((r) => r.rating === 5).length;
  const scrollable = canPrev || canNext;

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <a className={styles.summary} href={TRUSTPILOT_PROFILE_URL} target="_blank" rel="noopener noreferrer">
          <Stars rating={5} size={20} />
          <span>
            <strong>{fiveStar} five-star {fiveStar === 1 ? 'review' : 'reviews'}</strong> on{' '}
            <span className={styles.tpWord}>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path fill="#00b67a" d="M12 2.5l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.7l7.1-.6z" />
              </svg>
              Trustpilot
            </span>
          </span>
        </a>
        <div className={styles.controls} hidden={!scrollable}>
          <button type="button" className={styles.arrow} onClick={() => step(-1)} disabled={!canPrev} aria-label="Previous review">
            <Arrow dir="left" />
          </button>
          <button type="button" className={styles.arrow} onClick={() => step(1)} disabled={!canNext} aria-label="Next review">
            <Arrow dir="right" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className={styles.track}
        tabIndex={0}
        role="region"
        aria-label="Customer reviews from Trustpilot"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
          if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
        }}
      >
        {reviews.map((review) => (
          <ReviewCard key={review.name + review.date} review={review} />
        ))}
      </div>

      {scrollable && (
        <div className={styles.dots}>
          {reviews.map((review, i) => (
            <button
              key={review.name + review.date}
              type="button"
              className={[styles.dot, i === active ? styles.dotActive : ''].join(' ')}
              onClick={() => goTo(i)}
              aria-label={`Show review ${i + 1} of ${reviews.length}`}
              aria-current={i === active}
            />
          ))}
        </div>
      )}
    </div>
  );
}
