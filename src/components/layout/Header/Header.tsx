import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../../../data/homeContent';
import { useTheme } from '../../../hooks/useTheme';
import { Button } from '../../ui/Button/Button';
import logo from '../../../assets/images/logo-600.png';
import styles from './Header.module.css';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        <Link to="/" className={styles.logoLink} onClick={closeMenu} aria-label="2xdev home">
          <img src={logo} alt="2xdev — web development agency" width={90} height={34} className={styles.logo} />
        </Link>

        <div className={[styles.links, isMenuOpen ? styles.linksOpen : ''].join(' ')}>
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className={styles.link} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" className={styles.mobileCta} onClick={closeMenu}>
            Get a free quote
          </Button>
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
          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span className={[styles.burgerLine, isMenuOpen ? styles.burgerLineOpen : ''].join(' ')} />
            <span className={[styles.burgerLine, isMenuOpen ? styles.burgerLineOpen : ''].join(' ')} />
            <span className={[styles.burgerLine, isMenuOpen ? styles.burgerLineOpen : ''].join(' ')} />
          </button>
        </div>
      </nav>
    </header>
  );
}
