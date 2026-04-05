"use client";
import styles from "./threeYearHero.module.css";

export default function ThreeYearHero() {
  return (
    <section className={styles.section}>
      <div className={styles.frame}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.label}>Skilling with Schooling — 2026</p>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>Master</span>
            <span className={styles.titleLine}>Tech in</span>
            <span className={`${styles.titleLine} ${styles.accent}`}>3 Years.</span>
          </h1>
          <p className={styles.subtitle}>
            A structured, month-by-month program built for students who refuse
            to wait. Continue school. Build a career simultaneously.
          </p>
          <div className={styles.ctaRow}>
            <button id="hero-enroll-btn" className={styles.btnPrimary}>Enroll Now</button>
            <button id="hero-view-btn" className={styles.btnGhost}>View Curriculum</button>
          </div>
        </div>

        {/* DIVIDER */}
        <div className={styles.divider} />

        {/* RIGHT */}
        <div className={styles.right}>
          <p className={styles.rightLabel}>What you will master</p>
          <div className={styles.yearList}>
            {[
              { num: "01", year: "Year One", title: "Full-Stack Development", desc: "HTML, CSS, JavaScript, React, Node.js, MongoDB — the complete web stack." },
              { num: "02", year: "Year Two", title: "Application Development", desc: "React Native, Flutter, Firebase — build and publish cross-platform apps." },
              { num: "03", year: "Year Three", title: "Game Development", desc: "Unity, C#, 3D physics, AI systems — create and ship original games." },
            ].map((y) => (
              <div key={y.num} className={styles.yearItem}>
                <span className={styles.yearNum}>{y.num}</span>
                <div className={styles.yearContent}>
                  <span className={styles.yearLabel}>{y.year}</span>
                  <strong className={styles.yearTitle}>{y.title}</strong>
                  <p className={styles.yearDesc}>{y.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.statsRow}>
            {[
              { v: "36", l: "Modules" },
              { v: "36", l: "Projects" },
              { v: "3", l: "Certificates" },
              { v: "100%", l: "Placement" },
            ].map((s) => (
              <div key={s.l} className={styles.stat}>
                <span className={styles.statVal}>{s.v}</span>
                <span className={styles.statLabel}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
