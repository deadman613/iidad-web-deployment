"use client";
import styles from "./softwareDegree.module.css";

const GALLERY_ITEMS = [
  { label: "Campus Life", caption: "State-of-the-art labs & innovation centers", emoji: "🏛️", wide: true },
  { label: "Weekly Trips", caption: "Tech park & museum visits", emoji: "🚌" },
  { label: "Hackathons", caption: "48-hour build challenges", emoji: "💻" },
  { label: "Industry Visits", caption: "Bangalore & Delhi tech corridors", emoji: "🏢" },
  { label: "Cultural Fests", caption: "Annual tech & culture festival", emoji: "🎉" },
];

export default function SoftwareDegreeGallery({ program = "degree" }) {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryFrame}>
        <div className={styles.galleryHeader}>
          <h2 className={styles.galleryTitle}>
            Life at<br />
            <span className={styles.accent}>IIDAD.</span>
          </h2>
          <p className={styles.gallerySubtitle}>
            Campus is not just classrooms. From annual outstation trips to social hackathons, student life here is built to inspire.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={`${styles.galleryItem} ${i === 0 ? styles.galleryItemWide : ""}`}
            >
              <div className={styles.galleryPlaceholder}>{item.emoji}</div>
              <div className={styles.galleryItemOverlay}>
                <span className={styles.galleryItemLabel}>{item.label}</span>
                <p className={styles.galleryItemCaption}>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
