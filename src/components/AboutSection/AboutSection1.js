import styles from "./aboutSection1.module.css";

// Add your actual image URLs here
const philosophyImg = "https://images.pexels.com/photos/34514019/pexels-photo-34514019.jpeg";
const mainImg = "https://images.pexels.com/photos/34514019/pexels-photo-34514019.jpeg";
const principal1Img = "https://images.pexels.com/photos/34514019/pexels-photo-34514019.jpeg";
const principal2Img = "https://images.pexels.com/photos/34514019/pexels-photo-34514019.jpeg";

export default function AboutSection1() {
  return (
    <section className={styles.wrapper}>
      {/* Top Section */}
      <div className={styles.topGrid}>
        <div className={styles.left}>
          <h1 className={styles.heading}>ABOUT<br />IIDAD</h1>
          <div className={styles.leftDesc}>
            <div className={styles.detail}>Indian Institute of Design and Development</div>
            <div className={styles.subdesc}>
              Empowering Creative Minds: IIDAD provides world-class education<br />
              in design, development, and digital innovation.
            </div>
          </div>
        </div>
        <div className={styles.middle}>
          <img src={mainImg} alt="Main Room" className={styles.mainImg} />
        </div>
        <div className={styles.right}>
          <img src={philosophyImg} alt="Our Philosophy" className={styles.philosophyImg} />
          <div className={styles.philosophyTextBlock}>
            <div className={styles.philosophyTitle}>Our Philosophy</div>
            <div className={styles.philosophyText}>
              At IIDAD, we believe in nurturing creative talent,<br />
              fostering innovation, and preparing students to become<br />
              industry leaders in design and technology.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
