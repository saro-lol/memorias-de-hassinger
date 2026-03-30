import Link from 'next/link';
import BackButton from '../../components/BackButton';
import styles from './page.module.css';

export const metadata = {
  title: 'Entrevista 3: Legado y Sabiduría · Memorias de Hassinger',
};

export default function Entrevista3() {
  return (
    <article className={styles.page}>
      {/* ── Breadcrumb ── */}
      <p className={styles.breadcrumb}>
        <Link href="/">Inicio</Link> / Entrevista 3
      </p>

      {/* ── Header ── */}
      <header className={styles.header}>
        <span className={styles.tag}>Entrevista 3</span>
        <h1 className={styles.title}>Legado y Sabiduría</h1>
      </header>

      {/* ── Video ── */}
      <div className={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Entrevista 3: Legado y Sabiduría"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* ── Contexto ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contexto</h2>
        <div className={styles.contextGrid}>
          <div className={styles.contextItem}>
            <span className={styles.contextLabel}>Fecha de grabación</span>
            <span className={styles.contextValue}>10 de marzo de 2024</span>
          </div>
          <div className={styles.contextItem}>
            <span className={styles.contextLabel}>Lugar</span>
            <span className={styles.contextValue}>Comedor familiar, tarde del domingo</span>
          </div>
          <div className={styles.contextItem}>
            <span className={styles.contextLabel}>Participantes</span>
            <span className={styles.contextValue}>
              Abuela Hassinger, Rafael y María (nietos)
            </span>
          </div>
          <div className={styles.contextItem}>
            <span className={styles.contextLabel}>Duración</span>
            <span className={styles.contextValue}>62 minutos</span>
          </div>
        </div>
      </section>

      {/* ── Resumen ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Resumen</h2>
        <p className={styles.summaryText}>
          La tercera y última entrevista es quizás la más poderosa: la abuela reflexiona
          sobre todo lo vivido y comparte la esencia de lo que aprendió. Habla de la
          familia que construyó, de las pérdidas que la forjaron, de los valores que
          quiere que sus nietos lleven consigo siempre. Es una conversación sobre la
          gratitud, la fe y el poder de seguir adelante. Un legado en palabras.
        </p>
      </section>

      {/* ── Transcripción ── */}
      <section className={`${styles.section} ${styles.transcriptSection}`}>
        <h2 className={styles.sectionTitle}>Transcripción completa</h2>
        <div className={styles.transcriptBody}>
          <p>
            <span className={styles.speaker}>Rafael:</span> Abuela, ¿cuál crees que es la
            lección más importante que has aprendido en la vida?
          </p>
          <p>
            <span className={styles.speaker}>Abuela Hassinger:</span> Que el tiempo es lo
            único que no puedes recuperar. Todo lo demás — el dinero, la salud incluso —
            se puede intentar recuperar de alguna manera. El tiempo no. Por eso siempre
            les digo: estén presentes. No en el teléfono, no en el pasado, no en el futuro.
            Aquí. Ahora. Con las personas que tienen enfrente.
          </p>
          <p>
            <span className={styles.speaker}>María:</span> ¿De qué estás más orgullosa en
            tu vida?
          </p>
          <p>
            <span className={styles.speaker}>Abuela Hassinger:</span> (Larga pausa.) De
            mis hijos. No porque hayan llegado a tal o cual lugar, sino porque son buenas
            personas. Eso fue lo que intenté hacer: criarlos con bondad. Si lo logré,
            todo lo demás no importa.
          </p>
          <p>
            <span className={styles.speaker}>Rafael:</span> ¿Y cuál fue el momento más
            difícil de tu vida?
          </p>
          <p>
            <span className={styles.speaker}>Abuela Hassinger:</span> Perder a tu abuelo.
            Llevábamos cuarenta y tres años juntos. Cuando él se fue, tuve que aprender a
            ser una persona distinta. Fue duro, muy duro. Pero también descubrí que tenía
            una fuerza que no sabía que existía. Los duelos nos rompen, sí, pero también
            nos muestran de qué estamos hechos.
          </p>
          <p>
            <span className={styles.speaker}>María:</span> ¿Qué le dirías a las nuevas
            generaciones?
          </p>
          <p>
            <span className={styles.speaker}>Abuela Hassinger:</span> Que no tengan miedo
            de equivocarse. Que los errores no son el final, son el camino. Que llamen a
            su mamá. Que digan "te quiero" antes de colgar el teléfono. Que coman juntos
            en familia los domingos aunque sea una vez al mes. Que cuiden a los viejos,
            porque en ellos está la memoria de todo lo que fueron.
          </p>
          <p>
            <span className={styles.speaker}>Rafael:</span> ¿Hay algo que quieras que
            recordemos de ti?
          </p>
          <p>
            <span className={styles.speaker}>Abuela Hassinger:</span> Que los amé. Que
            cada vez que los miré, sentí que la vida valió la pena. No necesito más que
            eso. Con eso es suficiente.
          </p>
        </div>
      </section>

      {/* ── Volver ── */}
      <div className={styles.backRow}>
        <BackButton />
      </div>
    </article>
  );
}
