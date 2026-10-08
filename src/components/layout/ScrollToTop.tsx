import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scroll to the top on page change (keeps #hash links like /#services working). */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
