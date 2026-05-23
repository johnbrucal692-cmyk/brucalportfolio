import styles from "./projects.module.css";

export default function Projects() {
  return (
    <main>

      <section className={styles.page}>

        <div className={styles.top}>Projects</div>

        <h1 className={styles.title}>Things I've built</h1>

        <div className={styles.projects}>

          <div className={styles.project}>
            <h3>Portfolio Website</h3>

            <p>
              Personal portfolio website showcasing my work,
              skills, and experience.
            </p>

            <div className={styles.tech}>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>CSS</span>
            </div>
          </div>

          <div className={styles.project}>
            <h3>Inventory Management System</h3>

            <p>
              A modern productivity system to support small businesses.
            </p>

            <div className={styles.tech}>
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
          </div>

          <div className={styles.project}>
            <h3>Student Event Rating System</h3>

            <p>
              A system used to measure the satisfaction of students
              regarding department events.
            </p>

            <div className={styles.tech}>
              <span>PHP</span>
              <span>MySQL</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>

          <div className={styles.project}>
            <h3>Student Grade Converter System</h3>

            <p>
              A program used to convert students' grade into a 5 point based system.
            </p>

            <div className={styles.tech}>
              <span>C#</span>
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}