import styles from "./gallery.module.css";

export default function Gallery() {
  const galleryItems = [
    {
      image: "/college.jpg",
      title: "College Friends",
    },
    {
      image: "/canon.jpg",
      title: "Work Friends",
    },
    {
      image: "/bruno.png",
      title: "Pet dog",
    },
  ];

  return (
    <main className={styles.container}>
      <div className={styles.label}>My Gallery</div>
      <h1 className={styles.caption}>Life in frames</h1>
      <div className={styles.grid}>
        {galleryItems.map((item, index) => (
          <div key={index} className={styles.card}>

            <img
              src={item.image}
              alt={item.title}
              className={styles.image}
            />

            <div className={styles.content}>
              <h2 className={styles.cap}>{item.title}</h2>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
}