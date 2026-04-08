import Image from 'next/image';
import InterviewCard from '../components/InterviewCard';
import styles from './page.module.css';

const interviews = [
  {
    number: 1,
    title: 'Infancia y Familia',
    description:
      'Nacida en 1945 en el fundo San Francisco de Oxapampa, Iris recuerda su infancia junto a once hermanos, las comidas de la chacra, la tienda familiar, el ingenio de su padre carpintero y embutidor, y la vena artística que las monjas españolas intentaron apagar.',
    href: '/entrevista1',
  },
  {
    number: 2,
    title: 'Abuelos, Juventud y Amor',
    description:
      'Los abuelos Hassinger y la legendaria "mamá Jetro", el grupo de siete amigas inseparables, los estudios de corte y confección en Lima, el terremoto que la marcó, y cómo el insistente Pepe Romero terminó conquistando su corazón.',
    href: '/entrevista2',
  },
  {
    number: 3,
    title: 'Legado y Sabiduría',
    description:
      'Las lecciones de vida, los valores transmitidos de generación en generación y los consejos que solo los años y la experiencia pueden dar.',
    href: '/entrevista3',
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroPortrait}>
            <Image
              src="/WhatsApp Image 2026-04-05 at 8.41.02 PM.jpeg"
              alt="Iris Teresa Hassinger Verde"
              width={160}
              height={160}
              priority
            />
          </div>
          <span className={styles.heroPortraitCaption}>Iris Teresa Hassinger Verde</span>
          <span className={styles.ornament}>Archivo de memorias</span>
          <h1 className={styles.heroTitle}>
            Memorias de <em>Iris</em>
          </h1>
          <hr className={styles.heroDivider} />
          <p className={styles.heroText}>
            Este sitio es un regalo de amor para preservar la voz, los recuerdos y la
            sabiduría de nuestra abuela. Aquí encontrarás sus historias contadas en sus
            propias palabras, para que nunca se pierdan y las generaciones que vienen
            puedan conocerla tal como fue: fuerte, tierna y llena de vida.
          </p>
        </div>
      </section>

      {/* ── Quote band ── */}
      <div className={styles.quoteBand}>
        <blockquote className={styles.quote}>
          "Una familia sin historia es como un árbol sin raíces."
        </blockquote>
        <p className={styles.quoteAuthor}>— Proverbio familiar</p>
      </div>

      {/* ── Entrevistas ── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Sus historias</span>
          <h2 className={styles.sectionTitle}>Las entrevistas</h2>
        </div>
        <div className={styles.grid}>
          {interviews.map((item) => (
            <InterviewCard
              key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>
      </section>
    </>
  );
}
