export function isInternalHref(href: string): boolean {
  return href.startsWith('/') && !href.startsWith('//');
}

/** "What pushes the price up?" → "what-pushes-the-price-up" (heading anchors). */
export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
