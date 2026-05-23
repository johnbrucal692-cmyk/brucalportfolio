import Image from "next/image";
import styles from "./resume.module.css";

export default function Resume() {
  return (
    <main className={styles.resume}>

      {/* LEFT SIDEBAR */}
      <aside className={styles.sidebar}>
        <Image
          src="/profile.png"
          alt="Profile"
          width={140}
          height={140}
          className={styles.profile}
        />

        <h1>John Paul M. Brucal</h1>
        <p className={styles.role}>Web Developer</p>

        <div className={styles.section}>
          <h3>Contact</h3>
          <p>📧 johnbrucal692@gmail.com</p>
          <p>📱 +63 930 995 0219</p>
          <p>📍 Brgy. San Antonio II, San Pablo City, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Laguna, Philippines</p>
        </div>

        <div className={styles.section}>
          <h3>Personal Info</h3>
          <p>Sex: Male</p>
          <p>Age: 22</p>
          <p>Birthdate: July 8, 2003</p>
          <p>Civil Status: Single</p>
          <p>Nationality: Filipino</p>
        </div>

        <div className={styles.section}>
          <h3>Skills</h3>

          <div className={styles.skills}>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Python</span>
            <span>PHP</span>
            <span>MySQL</span>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <section className={styles.content}>

        <div className={styles.card}>
          <h2>Career Objective</h2>

          <p>
            Motivated IT student and aspiring web developer seeking opportunities
            to apply my skills in React, Next.js, and modern web technologies
            while continuously improving my development experience.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Education</h2>

          <div className={styles.item}>
            <h4>BS Information Technology</h4>
            <p>Currently Studying</p>
          </div>

          <div className={styles.item}>
            <h4>Senior High School – HUMSS Strand</h4>
            <p>Completed</p>
          </div>
        </div>

        <div className={styles.card}>
          <h2>Experience</h2>

          <div className={styles.item}>
            <h4>Production Operator</h4>
            <p>Canon Business Machines Philippines</p>

            <ul>
              <li>Handled machine operations and inspections.</li>
              <li>Maintained production quality standards.</li>
              <li>Worked efficiently in fast-paced environments.</li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <h2>Projects</h2>

          <div className={styles.item}>
            <h4>Portfolio Website</h4>
            <p>Built with Next.js and responsive UI design.</p>
          </div>

          <div className={styles.item}>
            <h4>Inventory Management System</h4>
            <p>Developed using React for inventory tracking.</p>
          </div>

          <div className={styles.item}>
            <h4>Student Event Rating System</h4>
            <p>Integrated APIs for event evaluation.</p>
          </div>

          <div className={styles.item}>
            <h4>Student Grade Converter System</h4>
            <p>A C# program for converting grades to a 5 point sytem.</p>
          </div>
        </div>

      </section>
    </main>
  );
}