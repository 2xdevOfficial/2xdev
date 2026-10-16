import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { ContentSection } from '../../../types/content';
import { isInternalHref, slugify } from '../../../utils/links';
import styles from './RichText.module.css';

const INLINE = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;

/** Renders `[text](href)`, `**bold**` and `*italic*` inside a plain string. */
export function Inline({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(INLINE)) {
    const index = match.index ?? 0;
    if (index > last) out.push(text.slice(last, index));
    const [, label, href, bold, italic] = match;
    if (label && href) {
      out.push(
        isInternalHref(href) ? (
          <Link key={index} to={href} className={styles.link}>
            {label}
          </Link>
        ) : (
          <a key={index} href={href} className={styles.link} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        ),
      );
    } else if (bold) {
      out.push(<strong key={index}>{bold}</strong>);
    } else if (italic) {
      out.push(<em key={index}>{italic}</em>);
    }
    last = index + match[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

/** Long-form article body: H2 sections with paragraphs, bullet lists and tables. */
export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className={styles.body}>
      {sections.map((section) => (
        <section key={section.heading} id={slugify(section.heading)} className={styles.section}>
          <h2 className={styles.h2}>{section.heading}</h2>
          {section.paragraphs?.map((p) => (
            <p key={p.slice(0, 40)}>
              <Inline text={p} />
            </p>
          ))}
          {section.bullets && (
            <ul className={styles.list}>
              {section.bullets.map((item) => (
                <li key={item.slice(0, 40)}>
                  <Inline text={item} />
                </li>
              ))}
            </ul>
          )}
          {section.table && (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                {section.table.caption && <caption>{section.table.caption}</caption>}
                <thead>
                  <tr>
                    {section.table.head.map((cell, i) => (
                      <th key={i} scope="col">
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row) => (
                    <tr key={row.join('|')}>
                      {row.map((cell, i) =>
                        i === 0 ? (
                          <th key={i} scope="row">
                            <Inline text={cell} />
                          </th>
                        ) : (
                          <td key={i}>
                            <Inline text={cell} />
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {section.after?.map((p) => (
            <p key={p.slice(0, 40)}>
              <Inline text={p} />
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
