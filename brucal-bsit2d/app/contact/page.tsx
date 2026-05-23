import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <main>
      <section className={styles.page}>

        <div className={styles.con}>Contact</div>

        <h1 className={styles.sub}>Let's work together</h1>

        <div className={styles.wrapper}>

          {/* LEFT SIDE CONTACT INFO */}
          <div className={styles.info}>

            <div className={styles.infoCard}>
              <FaEnvelope className={styles.icon} />

              <div>
                <h3>Email</h3>
                <p>johnbrucal692@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <FaPhone className={styles.icon} />

              <div>
                <h3>Phone</h3>
                <p>+63 930 995 0219</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <FaMapMarkerAlt className={styles.icon} />

              <div>
                <h3>Address</h3>
                <p>San Pablo City, Laguna, Philippines</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE CONTACT FORM */}
          <form className={styles.contactform}>

            <input
              type="text"
              placeholder="Your Name"
              required
              className={styles.input}
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className={styles.input}
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              required
              className={styles.input}
            />

            <button type="submit" className={styles.btn}>
              Send Message
            </button>

          </form>

        </div>

      </section>
    </main>
  );
}