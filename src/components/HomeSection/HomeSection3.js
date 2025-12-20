import styles from "./homeSection3.module.css";

export default function HomeSection3() {
  const rows = [
    "UI/UX Design - Web Development - Mobile Apps -",
    "Graphic Design - Product Design - Branding -",
    "Front-End - Back-End - Full-Stack -",
    "Animation - Motion Design - 3D Modeling -",
  ];

  return (
    <section className={styles.page5}>
      <div className={styles.elem}>
        <p className={styles.marqueeRow} data-text={rows[0]}>
          <span>UI/UX Design</span> - Web Development - Mobile Apps - {rows[0]}
        </p>
      </div>
      <div className={styles.elem2}>
        <p className={styles.marqueeRow} data-text={rows[1]}>
          Graphic Design - <span>Product Design</span> - Branding - {rows[1]}
        </p>
      </div>
      <div className={styles.elem}>
        <p className={styles.marqueeRow} data-text={rows[2]}>
          Front-End - <span>Back-End</span> - Full-Stack - {rows[2]}
        </p>
      </div>
      <div className={styles.elem2}>
        <p className={styles.marqueeRow} data-text={rows[3]}>
          Animation - Motion Design - <span>3D Modeling</span> - {rows[3]}
        </p>
      </div>
    </section>
  );
}
