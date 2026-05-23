import Link from "next/link";
import styles from "./aboutme.module.css";
import { FaGraduationCap, FaGamepad, FaImage, FaTrophy } from "react-icons/fa";

export default function About() {
  return (
    <main>
      <section className={styles.page}>

      <div className={styles.label}>About Me</div>

      <h1 className={styles.top}>
        A developer who loves<br/>
        clean code & clean design
      </h1>

      <div className={styles.content}>

      <div className={styles.avatar}>
        <span>JP</span>
      </div>

      <div className={styles.text}>

      <p className={styles.text}>
      Hi! I'm John Paul, a 22 year old frontend developer and student
      based in the Philippines.
      </p>

      <p className={styles.text}>
      I enjoy building thoughtful user interfaces with modern
      frontend technologies like HTML and Next.js.
      </p>

      <p className={styles.text}>
      I believe great interfaces should feel effortless —
      where design and functionality meet naturally.
      </p>

      </div>

      </div>

      <div className={styles.cardgrid}>
        <Link href="/education" className={styles.card}>
          <FaGraduationCap size={30} />
          <span>Education</span>
        </Link>

        <Link href="/hobbies" className={styles.card}>
          <FaGamepad size={30} />
          <span>Hobbies</span>
        </Link>

        <Link href="/gallery" className={styles.card}>
          <FaImage size={30} />
          <span>Gallery</span>
        </Link>

        <Link href="/achievements" className={styles.card}>
          <FaTrophy size={30} />
          <span>Achievements</span>
        </Link>
      </div>

      </section>

    </main>
  );
}