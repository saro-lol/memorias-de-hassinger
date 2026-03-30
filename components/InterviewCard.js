import Link from 'next/link';
import styles from './InterviewCard.module.css';

export default function InterviewCard({ number, title, description, href }) {
  return (
    <Link href={href} className={styles.card}>
      <span className={styles.number}>{String(number).padStart(2, '0')}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.cta}>
        Ver entrevista <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
