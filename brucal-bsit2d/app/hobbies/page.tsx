import styles from "./hobbies.module.css";

export default function Hobbies() {
  const hobbies = [
    {
      title: "Coding",
      description: "I like building websites and experimenting with new technologies. It is a way for me to channel my talent in arts and designing.",
      emoji: "💻",
    },
    {
      title: "Gaming",
      description: "I also like playing competitive and story-driven games for fun particularly MLBB(Mobile Legends) and LOL(League of Legends)",
      emoji: "🎮",
    },
    {
      title: "Watching Tech Videos",
      description: "It helps me to learn about programming, AI, and modern software trends.",
      emoji: "📺",
    },
    {
      title: "Watching K-Drama",
      description: "I also enjoy emotional stories, comedy, and action-packed series particularly kdrama. It is also a means for me to know more about another country's culture.",
      emoji: "🎬",
    },
    {
      title: "Watching Anime",
      description: "I also like to explore different genres from action to slice-of-life anime.",
      emoji: "🌸",
    },
    {
      title: "Reading Manga",
      description: "This hobby allows me to appreciate the raw art or sketch of the mangaka or artist behind a popular anime.",
      emoji: "📚",
    },
  ];

  return (
    <main className={styles.container}>

      <div className={styles.stack}>
        <div className={styles.label}>Hobbies</div>
        <h1 className={styles.cap}>What fuels my Creativity</h1>
        {hobbies.map((hobby, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.left}>
              <div className={styles.emoji}>{hobby.emoji}</div>
            </div>

            <div className={styles.content}>
              <h2>{hobby.title}</h2>
              <p>{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}