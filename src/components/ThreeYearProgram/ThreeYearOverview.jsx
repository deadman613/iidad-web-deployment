"use client";
import styles from "./threeYearOverview.module.css";

const YEARS = [
  {
    num: "01",
    year: "Year One",
    title: "Full-Stack Development",
    tagline: "Build the complete web — front and back.",
    description:
      "Begin with the fundamentals and work up to building deployable, production-grade web applications. You will leave knowing how to architect, build, and ship any web product independently.",
    outcome: "Job-ready Full-Stack Developer",
    salary: "₹4 – 10 LPA",
    skills: ["HTML & CSS", "JavaScript ES6+", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git & GitHub", "Responsive Design", "Deployment & CI/CD"],
  },
  {
    num: "02",
    year: "Year Two",
    title: "Application Development",
    tagline: "Take your skills cross-platform and mobile.",
    description:
      "Move beyond the browser. Year Two teaches you how to design, build, and publish apps for Android, iOS, and desktop — using frameworks trusted by the world's top product companies.",
    outcome: "Cross-Platform App Developer",
    salary: "₹6 – 14 LPA",
    skills: ["React Native", "Flutter & Dart", "Firebase", "State Management", "Native Device APIs", "SQLite & Local Storage", "UI/UX for Mobile", "App Store Publishing", "Performance Profiling", "Integration Testing"],
  },
  {
    num: "03",
    year: "Year Three",
    title: "Game Development",
    tagline: "Create immersive worlds from scratch.",
    description:
      "The most creative year. You will go from designing game mechanics to shipping a fully playable original game — learning real-time systems, AI, 3D graphics, and publishing pipelines along the way.",
    outcome: "Game & XR Developer",
    salary: "₹6 – 18 LPA",
    skills: ["Unity Engine", "C# Scripting", "2D & 3D Game Design", "Physics Systems", "Enemy AI", "Shader & VFX Basics", "Audio Systems", "Multiplayer Basics", "AR / VR Fundamentals", "Game Publishing"],
  },
];

export default function ThreeYearOverview() {
  return (
    <section className={styles.section} id="overview">
      {YEARS.map((y, i) => (
        <div key={y.num} className={styles.frame}>
          {/* LEFT */}
          <div className={`${styles.panel} ${styles.left} ${i % 2 !== 0 ? styles.orderRight : ""}`}>
            <span className={styles.bigNum}>{y.num}</span>
            <div className={styles.meta}>
              <p className={styles.yearLabel}>{y.year}</p>
              <h2 className={styles.title}>{y.title}</h2>
              <p className={styles.tagline}>{y.tagline}</p>
              <p className={styles.desc}>{y.description}</p>
            </div>
            <div className={styles.outcomeRow}>
              <div className={styles.outcomeItem}>
                <span className={styles.outcomeLabel}>Outcome</span>
                <span className={styles.outcomeVal}>{y.outcome}</span>
              </div>
              <div className={styles.dividerV} />
              <div className={styles.outcomeItem}>
                <span className={styles.outcomeLabel}>Avg. Salary</span>
                <span className={`${styles.outcomeVal} ${styles.salaryText}`}>{y.salary}</span>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className={styles.sep} />

          {/* RIGHT — Skills list */}
          <div className={`${styles.panel} ${styles.right} ${i % 2 !== 0 ? styles.orderLeft : ""}`}>
            <p className={styles.skillsLabel}>12-Month Skill Stack</p>
            <ul className={styles.skillsList}>
              {y.skills.map((sk, idx) => (
                <li key={sk} className={styles.skillItem}>
                  <span className={styles.skillIdx}>{String(idx + 1).padStart(2, "0")}</span>
                  <span className={styles.skillName}>{sk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
