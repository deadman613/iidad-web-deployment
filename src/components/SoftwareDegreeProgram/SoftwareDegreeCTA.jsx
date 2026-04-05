"use client";
import styles from "./softwareDegree.module.css";

export default function SoftwareDegreeCTA({ program = "degree" }) {
  const isDegree = program === "degree";

  const plans = isDegree
    ? [
        { id: "y1", label: "Year 01", title: "Programming Fundamentals & Web",  points: ["12 modules", "12 live projects", "Year-end certificate", "Placement assistance from Month 6"] },
        { id: "y2", label: "Year 02", title: "DSA, OOP & Databases",             points: ["12 modules", "12 live projects", "Year-end certificate", "Internship access from Month 3"] },
        { id: "y3", label: "Year 03", title: "Advanced Software Engineering",    points: ["12 modules", "Capstone industry project", "Final degree certificate", "100% placement drive"] },
      ]
    : [
        { id: "y1", label: "Year 01", title: "Advanced Software Design & Cloud", points: ["12 advanced modules", "Enterprise project delivery", "Year-end master's credit", "Industry mentor access"] },
        { id: "y2", label: "Year 02", title: "Research, ML & Capstone",           points: ["12 advanced modules", "Thesis / Capstone project", "M.Sc. degree completion", "Premier placement drive"] },
      ];

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaFrame}>
        {/* LEFT */}
        <div className={styles.ctaLeft}>
          <p className={styles.sectionLabel}>Enrollment</p>
          <h2 className={styles.heading}>
            Start Your<br />
            <span className={styles.accent}>{isDegree ? "3-Year" : "2-Year"}</span><br />
            Journey.
          </h2>
          <p className={styles.desc}>
            Enroll for the complete program and get priority placement support, lifetime alumni access, and guaranteed university certification throughout.
          </p>

          <div className={styles.bundle}>
            <div className={styles.bundleTop}>
              <span className={styles.bundleTag}>Best Value</span>
              <span className={styles.bundleTitle}>
                Complete {isDegree ? "3-Year" : "2-Year"} Program
              </span>
            </div>
            <button className={`${styles.bundleBtn} demoButtonForm`}>
              Get the Complete Program
            </button>
          </div>

          <div className={styles.guarantees}>
            {["University degree included", "100% placement support", "EMI available — No Cost", "Free counselling session"].map((g) => (
              <span key={g} className={styles.guarantee}>{g}</span>
            ))}
          </div>
        </div>

        <div className={styles.sep} />

        {/* RIGHT */}
        <div className={styles.ctaRight}>
          <p className={styles.rightLabel}>What you get — year by year</p>
          <div className={styles.planList}>
            {plans.map((p) => (
              <div key={p.id} className={styles.planRow}>
                <div className={styles.planMeta}>
                  <span className={styles.planLabel}>{p.label}</span>
                  <strong className={styles.planTitle}>{p.title}</strong>
                </div>
                <div className={styles.planCenter}>
                  {p.points.map((pt) => (
                    <span key={pt} className={styles.planPoint}>{pt}</span>
                  ))}
                </div>
                <div className={styles.planRight}>
                  <button className={`${styles.planBtn} demoButtonForm`}>Enroll</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
