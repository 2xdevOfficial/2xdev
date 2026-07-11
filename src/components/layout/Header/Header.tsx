import { Link } from 'react-router-dom';
import { navLinks } from '../../../data/homeContent';
import { useTheme } from '../../../hooks/useTheme';
import { Button } from '../../ui/Button/Button';
import logo from '../../../assets/images/logo.png';
import styles from './Header.module.css';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="2xdev" className={styles.logo} />
        </Link>

        <div className={styles.links}>
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <Button href="/contact" variant="primary" className={styles.cta}>
            Get a free quote
          </Button>
        </div>
      </nav>
    </header>
  );
}
