import styles from "./ach.module.css";

export default function Achievements() {
  const achievements = [
    {
      title: "With Honors",
      year: "2019-2021",
      description:
        "Recognized for outstanding academic performance and consistent excellence as a Senior High School Student.",
      icon: "🏆",
    },
    {
      title: "2nd Place DSPC Feature Writing",
      year: "2017",
      description:
        "Awarded for exceptional skills in feature writing in the Division Schools Press Conference.",
      icon: "📜",
    },
    {
      title: "With Honors",
      year: "2015-2019",
      description:
        "Outstanding academic performance as a Junior High School student. ",
      icon: "💡",
    },
  ];

  return (
    <main className={styles.page}>

      <div className={styles.top}>Achievements</div>

      <h1 className={styles.title}>Milestones & Recognition</h1>

      <div className={styles.timeline}>

        {achievements.map((achievement, index) => (
          <div key={index} className={styles.card}>

            <div className={styles.icon}>
              {achievement.icon}
            </div>

            <div className={styles.content}>

              <div className={styles.header}>
                <h2>{achievement.title}</h2>

                <span>{achievement.year}</span>
              </div>

              <p>{achievement.description}</p>

            </div>

          </div>
        ))}

      </div>

    </main>
  );
}