import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { isInternalHref } from '../../../utils/links';
import styles from './Button.module.css';

type Variant = 'primary' | 'outline' | 'white' | 'ghost';

interface ButtonProps {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

export function Button({ href, variant = 'primary', children, className }: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ');

  if (isInternalHref(href)) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
