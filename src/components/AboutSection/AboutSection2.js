import styles from './aboutSection2.module.css';

const mainImg = "https://4kwallpapers.com/images/wallpapers/zenitsu-agatsuma-2048x2048-22696.png";

export default function AboutSection2() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.topGrid}>
        {/* LEFT SIDE: Supporting Details */}
        <div className={styles.left}>
          <div className={styles.leftDesc}>
            <div className={styles.detail}>
              Transforming Education Through Innovation
            </div>
            <div className={styles.subdesc}>
              IIAD was founded with a vision to bridge the gap between traditional education and industry demands. We combine academic excellence with practical training, state-of-the-art facilities with expert mentorship, and creative freedom with professional discipline. Our journey began with a commitment to make quality design and development education accessible to passionate learners across India.
            </div>
          </div>
        </div>

        {/* CENTER: Main Image */}
        <div className={styles.middle}>
          <img src={mainImg} alt="Main Visual" className={styles.mainImg} />
        </div>

        {/* RIGHT SIDE: Section Heading */}
        <div className={styles.right}>
          <h2 className={styles.heading}>
            OUR<br />STORY
          </h2>
        </div>
      </div>
    </section>
  );
}
