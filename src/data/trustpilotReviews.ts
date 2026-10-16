/**
 * Real reviews from https://www.trustpilot.com/review/2xdev.com
 *
 * Trustpilot's free plan has no API for pulling reviews into a website, so they live here.
 * To add a new review: copy it from Trustpilot and add an entry at the TOP of the list
 * (newest first). Keep the wording exactly as the reviewer wrote it.
 */
export interface TrustpilotReview {
  name: string;
  initials: string;
  country: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  title: string;
  text: string;
  /** Link to the review on Trustpilot (falls back to the profile page). */
  url?: string;
}

export const TRUSTPILOT_PROFILE_URL = 'https://www.trustpilot.com/review/2xdev.com';

export const trustpilotReviews: TrustpilotReview[] = [
  {
    name: 'Jawad Abadullah Nagra',
    initials: 'JN',
    country: 'GB',
    rating: 5,
    date: '2026-10-13',
    title: 'Perfect dev',
    text: 'Perfect dev',
  },
  {
    name: 'Syed Awais Haider',
    initials: 'SH',
    country: 'GB',
    rating: 5,
    date: '2026-10-01',
    title: 'Good service always',
    text: 'Cooperative and Good service always Fully satisfied 😊',
  },
  {
    name: 'Asad Mand',
    initials: 'AM',
    country: 'GB',
    rating: 5,
    date: '2026-09-22',
    title: 'Excellent software company',
    // Opening of the review — paste the full text from Trustpilot here if you want it all shown.
    text: 'Excellent software company offering reliable, user-friendly solutions outstanding customer support professional service…',
    url: 'https://www.trustpilot.com/reviews/6ace2d6c65e56275d3dde5eb',
  },
];
