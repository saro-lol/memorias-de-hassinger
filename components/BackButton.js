'use client';

import Link from 'next/link';

export default function BackButton() {
  return (
    <Link
      href="/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.7rem 1.5rem',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '8px',
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem',
        fontWeight: 700,
        color: 'var(--color-primary)',
        textDecoration: 'none',
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
        letterSpacing: '0.02em',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--color-border)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--color-surface)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <span aria-hidden="true">←</span> Volver al inicio
    </Link>
  );
}
