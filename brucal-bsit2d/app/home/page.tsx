import Link from "next/link";
import Image from "next/image";
import { FaCode, FaTools, FaFileAlt } from "react-icons/fa";
import styles from'./home.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.label}>Home</div>
      <section className={styles.hero}>
      <div className={styles.content}>
      <div className={styles.eyebrow}>
        Frontend Developer & Student
      </div>

      <h1 className={styles.name}>
        John Paul<br/>
        <em>M. Brucal</em>
      </h1>

      <p className={styles.description}>
        I craft clean, thoughtful web experiences —
        turning ideas into fast, accessible,
        and beautiful interfaces.
      </p>

      <div className={styles.button}>
        <Link href="/projects" className={`${styles.btn} ${styles.primary}`}>
          View My Work
        </Link>

        <Link href="/contact" className={`${styles.btn} ${styles.secondary}`}>
          Get In Touch
        </Link>
        </div>
      </div>
      <div className={styles.imageWrapper}>
          <Image
            src="/profile.png"
            alt="John Paul Brucal"
            width={400}
            height={400}
            className={styles.profileImage}
            priority
          />
        </div>
      </section>
    </main>
  );
}