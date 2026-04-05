"use client";
import styles from "./threeYearWhy.module.css";

const FEATURES = [
  { title: "Monthly Sprint Structure",    desc: "Every month is a focused building block — clear objectives, a real project, and measurable output." },
  { title: "36 Deployable Projects",      desc: "You build a portfolio automatically. Every module ends with something you can show to an employer." },
  { title: "3 Year-End Certifications",   desc: "Industry-recognized certificates at the end of each year. Full-Stack, App Dev, Game Dev." },
  { title: "School + Skills — Together",  desc: "Designed to run alongside regular schooling. No gap year required. No compromises." },
  { title: "Industry Mentors",            desc: "You learn from people actively working in the industry — not from slides written five years ago." },
  { title: "Placement Pipeline",          desc: "Resume reviews, mock interviews, and referrals to hiring partners are included from Year 1." },
  { title: "Compounding Expertise",       desc: "Each year builds directly on the last. By Year 3 you are not a beginner — you are a specialist." },
  { title: "Internship Access from Y2",   desc: "Real client projects and paid internship placements open up from Year 2 onwards." },
];

export default function ThreeYearWhy() {
  return (
    <section className={styles.section} id="why">
      <div className={styles.frame}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.sectionLabel}>Why Choose This Program</p>
          <h2 className={styles.heading}>
            Designed for<br />
            <span className={styles.accent}>Future-Ready</span><br />
            Students.
          </h2>
          <p className={styles.desc}>
            Most courses hand you tools and leave you alone. This program
            gives you structure, accountability, and a clear path from
            beginner to specialist — one month at a time.
          </p>
          <div className={styles.statsBlock}>
            {[
              { v: "36", l: "hands-on projects" },
              { v: "3",  l: "career paths" },
              { v: "3",  l: "certifications" },
            ].map((s) => (
              <div key={s.l} className={styles.statItem}>
                <span className={styles.statVal}>{s.v}</span>
                <span className={styles.statDesc}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className={styles.sep} />

        {/* RIGHT */}
        <div className={styles.right}>
          <p className={styles.rightLabel}>Program advantages</p>
          <div className={styles.featureGrid}>
            {FEATURES.map((f, i) => (
              <div key={f.title} className={styles.featureItem}>
                <span className={styles.featureNum}>{String(i + 1).padStart(2, "0")}</span>
                <div className={styles.featureText}>
                  <strong className={styles.featureTitle}>{f.title}</strong>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
