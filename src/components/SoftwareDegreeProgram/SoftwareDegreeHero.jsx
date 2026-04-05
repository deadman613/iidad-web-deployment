"use client";
import styles from "./softwareDegree.module.css";

export default function SoftwareDegreeHero({ program = "degree" }) {
  const isDegree = program === "degree";

  const years = isDegree
    ? [
        { num: "01", year: "Year One", title: "Programming Fundamentals & Web Dev", desc: "Python, C, Java basics, HTML/CSS, JavaScript — build the core software mindset." },
        { num: "02", year: "Year Two", title: "Data Structures, OOP & Databases", desc: "Algorithms, object-oriented design, SQL, system architecture and backend dev." },
        { num: "03", year: "Year Three", title: "Advanced Software Engineering", desc: "Cloud, DevOps, AI integration, microservices, capstone industry project." },
      ]
    : [
        { num: "01", year: "Year One", title: "Advanced Software Design & Architecture", desc: "System design, design patterns, distributed systems, cloud-native apps." },
        { num: "02", year: "Year Two", title: "Research, ML Integration & Capstone", desc: "Research methods, ML in software products, thesis project, industry deployment." },
      ];

  const stats = isDegree
    ? [{ v: "36", l: "Modules" }, { v: "3", l: "Certifications" }, { v: "100%", l: "Placement" }, { v: "3", l: "Years" }]
    : [{ v: "24", l: "Modules" }, { v: "2", l: "Certifications" }, { v: "100%", l: "Placement" }, { v: "2", l: "Years" }];

  const programLabel = isDegree
    ? "B.Sc. Software Development — 3-Year Degree Program · 2026"
    : "M.Sc. Software Development — 2-Year PG Program · 2026";

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroFrame}>
        {/* LEFT */}
        <div className={styles.heroLeft}>
          <p className={styles.heroLabel}>{programLabel}</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>{isDegree ? "Build" : "Master"}</span>
            <span className={styles.titleLine}>Software</span>
            <span className={`${styles.titleLine} ${styles.titleAccent}`}>
              {isDegree ? "from Scratch." : "at Depth."}
            </span>
          </h1>
          <p className={styles.heroSubtitle}>
            {isDegree
              ? "A full 3-year degree program combining university schooling with live industry skills. Graduate as a certified Software Developer with a portfolio of real products."
              : "A rigorous 2-year post-graduation that turns experienced developers into software architects and engineering leaders, backed by a university degree."}
          </p>
          <div className={styles.ctaRow}>
            <button className={`${styles.btnPrimary} demoButtonForm`}>Enroll Now</button>
            <button className={styles.btnGhost}>View Curriculum</button>
          </div>
        </div>

        <div className={styles.heroDivider} />

        {/* RIGHT */}
        <div className={styles.heroRight}>
          <p className={styles.heroRightLabel}>What you will master</p>
          <div className={styles.yearList}>
            {years.map((y) => (
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
            {stats.map((s) => (
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
