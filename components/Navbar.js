'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Memorias de Iris
        </Link>

        <button
          className={styles.menuToggle}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`${styles.nav} ${open ? styles.open : ''}`}>
          <li>
            <Link href="/" className={styles.navLink} onClick={() => setOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/entrevista1" className={styles.navLink} onClick={() => setOpen(false)}>
              Entrevista 1
            </Link>
          </li>
          <li>
            <Link href="/entrevista2" className={styles.navLink} onClick={() => setOpen(false)}>
              Entrevista 2
            </Link>
          </li>
          <li>
            <Link href="/entrevista3" className={styles.navLink} onClick={() => setOpen(false)}>
              Entrevista 3
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
