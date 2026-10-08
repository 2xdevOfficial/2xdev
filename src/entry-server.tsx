/* oxlint-disable react/only-export-components -- build-time entry, never hot-reloaded */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';

export { headTagsFor, indexablePages, pages, structuredDataFor, absoluteUrl, SITE_URL } from './seo/config';
export { servicePages } from './data/servicePages';

/** Used at build time only (scripts/prerender.mjs) to turn each route into static HTML. */
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
}
