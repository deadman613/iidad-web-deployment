"use client";
import styles from "./threeYearCTA.module.css";

const PLANS = [
  {
    id: "y1",
    label: "Year 01",
    title: "Full-Stack Development",
    price: "₹13,200",
    per: "₹1,100 / month",
    points: ["12 modules", "12 deployable projects", "Year-end certificate", "Placement assistance"],
  },
  {
    id: "y2",
    label: "Year 02",
    title: "Application Development",
    price: "₹13,200",
    per: "₹1,100 / month",
    points: ["12 modules", "12 deployable projects", "Year-end certificate", "Internship access from M7"],
  },
  {
    id: "y3",
    label: "Year 03",
    title: "Game Development",
    price: "₹13,200",
    per: "₹1,100 / month",
    points: ["12 modules", "12 deployable projects", "Year-end certificate", "Game publishing support"],
  },
];

export default function ThreeYearCTA() {
  return (
    <section className={styles.section} id="enroll">
      <div className={styles.frame}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.sectionLabel}>Pricing & Enrollment</p>
          <h2 className={styles.heading}>
            Invest in<br />
            <span className={styles.accent}>3 Years.</span><br />
            Profit for a<br />Lifetime.
          </h2>
          <p className={styles.desc}>
            Enroll year by year at your own pace, or commit to the full
            3-year bundle and unlock our best rate — plus priority placement
            and lifetime alumni membership.
          </p>

          {/* Bundle offer */}
          <div className={styles.bundle}>
            <div className={styles.bundleTop}>
              <span className={styles.bundleTag}>Best Value</span>
              <span className={styles.bundleTitle}>Complete 3-Year Bundle</span>
            </div>
            <div className={styles.bundlePriceRow}>
              <span className={styles.bundleOld}>₹39,600</span>
              <span className={styles.bundlePrice}>₹35,000</span>
              <span className={styles.bundleSave}>Save ₹4,600</span>
            </div>
            <button id="enroll-bundle-btn" className={styles.bundleBtn}>
              Get the Complete Program
            </button>
          </div>

          <div className={styles.guarantees}>
            {["7-day money-back guarantee", "Certificate included", "100% placement support"].map((g) => (
              <span key={g} className={styles.guarantee}>{g}</span>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className={styles.sep} />

        {/* RIGHT — three plans */}
        <div className={styles.right}>
          <p className={styles.rightLabel}>Individual year pricing</p>
          <div className={styles.planList}>
            {PLANS.map((p) => (
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
                  <span className={styles.planPrice}>{p.price}</span>
                  <span className={styles.planPer}>{p.per}</span>
                  <button id={`enroll-btn-${p.id}`} className={styles.planBtn}>
                    Enroll
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
