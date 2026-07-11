import { Link } from 'react-router-dom';
import { footerCols } from '../../../data/homeContent';
import { isInternalHref } from '../../../utils/links';
import logo from '../../../assets/images/logo.png';
import styles from './Footer.module.css';

function FooterLink({ href, label }: { href: string; label: string }) {
  if (isInternalHref(href)) {
    return (
      <Link to={href} className={styles.colLink}>
        {label}
      </Link>
    );
  }
  return (
    <a href={href} className={styles.colLink}>
      {label}
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <img src={logo} alt="2xdev" className={styles.logo} />
          <p className={styles.blurb}>
            A UK-based engineering partner building fast, reliable software for startups and
            growing businesses.
          </p>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <div className={styles.colTitle}>{col.title}</div>
            <div className={styles.colLinks}>
              {col.links.map((link) => (
                <FooterLink key={link.label} href={link.href} label={link.label} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomBarInner}>
          <span>© {year} 2xdev Ltd. All rights reserved.</span>
          <span>Built in the UK · Angular · React · Laravel · Node · Shopify</span>
        </div>
      </div>
    </footer>
  );
}
