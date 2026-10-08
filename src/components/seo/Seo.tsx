import { useEffect } from 'react';
import { headTagsFor, pages, structuredDataFor, type PageKey } from '../../seo/config';

const JSON_LD_ID = 'structured-data';
const MANAGED_SELECTORS = ['link[rel="canonical"]', 'meta[property="og:url"]'];

/**
 * Keeps <head> in sync with the current page during client-side navigation.
 *
 * The very first load is already correct because every route is prerendered to
 * static HTML with these same tags (see scripts/prerender.mjs), so Google sees
 * them without having to run JavaScript.
 */
export function Seo({ page }: { page: PageKey }) {
  useEffect(() => {
    document.title = pages[page].title;

    const tags = headTagsFor(page);

    // Remove optional tags that this page doesn't use (e.g. canonical on the 404 page).
    for (const selector of MANAGED_SELECTORS) {
      if (!tags.some((tag) => tag.key === selector)) {
        document.head.querySelector(selector)?.remove();
      }
    }

    for (const { tag, key, attrs } of tags) {
      let el = document.head.querySelector(key);
      if (!el) {
        el = document.createElement(tag);
        document.head.appendChild(el);
      }
      for (const [name, value] of Object.entries(attrs)) el.setAttribute(name, value);
    }

    const data = structuredDataFor(page);
    let script = document.getElementById(JSON_LD_ID);
    if (data) {
      if (!script) {
        script = document.createElement('script');
        script.id = JSON_LD_ID;
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    } else {
      script?.remove();
    }
  }, [page]);

  return null;
}
