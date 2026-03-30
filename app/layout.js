import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Memorias de Hassinger',
  description:
    'Un archivo de amor para preservar las historias, recuerdos y sabiduría de nuestra abuela.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer
          style={{
            textAlign: 'center',
            padding: '2rem 1rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            color: 'var(--color-text-muted)',
            borderTop: '1px solid var(--color-border)',
            marginTop: '4rem',
            background: 'var(--color-surface)',
          }}
        >
          Hecho con amor · Memorias de Hassinger
        </footer>
      </body>
    </html>
  );
}
