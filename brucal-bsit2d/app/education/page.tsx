import Image from "next/image";
import styles from "./educ.module.css";
export default function Education() {
  return (
    <main className={styles.main}>
      <h1 className={styles.edu}>Education</h1>
      <br/>
        <h1 className={styles.cap}>My Academic journey</h1>
        <div className={styles.timeline}>
        <section className={styles.college}>
          <div className={styles.badge}>
            Current • 2026
          </div>
          <Image 
            src="/plsp.png"
            alt="PLSP"
            width={120}
            height={120} 
            className={styles.school}/>
            <div>
              <h2 className="school">Pamantasan ng Lungsod ng San Pablo</h2>
              <p>Course: Bachelor of Science in Information Technology</p>
              <p>Major: Software Development</p>
              <p>Address: Brgy. San Jose, San Pablo City, Laguna</p>
            </div>
        </section>

        <section className={styles.college}>
          <div className={styles.badge}>
            Graduated • 2021
          </div>
          <Image 
            src="/recto.png"
            alt="PLSP"
            width={120}
            height={120} 
            className={styles.school}/>
            <div>
              <h2 className="school">Recto Memorial National High School</h2>
              <p>Year Level: Senior High School</p>
              <p>Strand: Humanities and Social Sciences</p>
              <p>Address: Brgy. Quipot, Tiaong, Quezon</p>
            </div>
        </section>

        <section className={styles.college}>
          <div className={styles.badge}>
            Graduated • 2019
          </div>
          <Image 
            src="/recto.png"
            alt="PLSP"
            width={120}
            height={120} 
            className={styles.school}/>
            <div>
              <h2 className="school">Recto Memorial National High School</h2>
              <p>Year Level: Junior High School</p>
              <p>Address: Brgy. Quipot, Tiaong, Quezon</p>
            </div>
        </section>

        <section className={styles.college}>
          <div className={styles.badge}>
            Graduated • 2015
          </div>
          <Image 
            src="/sa2.png"
            alt="PLSP"
            width={120}
            height={120} 
            className={styles.school}/>
            <div>
              <h2 className="school">San Antonio II Elementary School</h2>
              <p>Year Level: Elementary</p>
              <p>Address: Brgy. San antonio II, San Pablo City, Laguna</p>
            </div>
        </section>
      </div>
    </main>
  );
}