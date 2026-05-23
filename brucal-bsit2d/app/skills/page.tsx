import styles from "./skills.module.css"
export default function Skills() {
  return (
    <main>
      <section className={styles.page}>

        <div className={styles.label}>Skills</div>

          <h1 className={styles.top}>What I work with</h1>

          <div className={styles.skillsgrid}>

            <div className={styles.card}>
              <h3 className={styles.sub}>Frontend</h3>

              <div className={styles.tags}>
                <span className={styles.tag}>HTML5</span>
                <span className={styles.tag}>CSS3</span>
                <span className={styles.tag}>JavaScript</span>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>Next.js</span>
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.sub}>Tools</h3>

              <div className={styles.tags}>
                <span className={styles.tag}>Git</span>
                <span className={styles.tag}>GitHub</span>
                <span className={styles.tag}>Figma</span>
                <span className={styles.tag}>VS Code</span>
              </div>
            </div>
          </div>

          <div className={styles.skillsgrid}>

            <div className={styles.card}>
              <h3 className={styles.sub}>Backend</h3>

              <div className={styles.tags}>
                <span className={styles.tag}>MySQL</span>
                <span className={styles.tag}>Python</span>
                <span className={styles.tag}>PHP</span>
                <span className={styles.tag}>Next.js</span>
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.sub}>Tools</h3>

              <div className={styles.tags}>
                <span className={styles.tag}>Git</span>
                <span className={styles.tag}>GitHub</span>
                <span className={styles.tag}>XAMPP</span>
                <span className={styles.tag}>VS Code</span>
              </div>
            </div>

          </div>

      </section>
    </main>
  );
}