'use client';

import { useState } from 'react';
import styles from './TranscriptSection.module.css';

export default function TranscriptSection({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Transcripción completa</h2>
        <button
          className={styles.toggle}
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
        >
          {open ? 'Cerrar transcripción' : 'Ver transcripción completa'}
          <span className={`${styles.arrow} ${open ? styles.arrowUp : ''}`}>▼</span>
        </button>
      </div>

      {open && (
        <div className={styles.body}>
          {children}
        </div>
      )}
    </section>
  );
}
