"use client";
import styles from "./softwareDegree.module.css";

export default function SoftwareDegreeOfferings({ program = "degree" }) {
  const isDegree = program === "degree";
  const degreeType = isDegree ? "B.Sc. Software Development" : "M.Sc. Software Development";

  return (
    <section className={styles.offeringsSection}>
      <div className={styles.offeringsFrame}>
        {/* LEFT */}
        <div className={styles.offeringsLeft}>
          <p className={styles.sectionLabel}>Degree We Provide</p>
          <h2 className={styles.heading}>
            Two Paths.<br />
            <span className={styles.accent}>One Destination.</span>
          </h2>
          <p className={styles.desc}>
            We partner with both a government-recognized open university and a premier private institute so you can choose the credential that matches your goals and budget — with
            identical IIDAD skill training alongside both.
          </p>
          <div className={styles.statsBlock}>
            <div className={styles.statItem}>
              <span className={styles.statItemVal}>2</span>
              <span className={styles.statItemDesc}>university partners</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statItemVal}>UGC</span>
              <span className={styles.statItemDesc}>recognized degrees</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statItemVal}>EMI</span>
              <span className={styles.statItemDesc}>available, no-cost options</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.offeringsRight}>
          <p className={styles.rightLabel}>University Partners</p>

          {/* DU SOL */}
          <div className={styles.offeringCard}>
            <div className={styles.offeringIcon}>DU</div>
            <div className={styles.offeringBody}>
              <span className={styles.offeringTag}>Government University</span>
              <h3 className={styles.offeringTitle}>DU SOL — Delhi University School of Open Learning</h3>
              <p className={styles.offeringDesc}>
                Earn your <strong style={{ color: "#fff" }}>{degreeType}</strong> from one of India's most respected public universities. DU SOL degrees are recognized by UGC, AICTE, and thousands of employers across India. A cost-accessible, highly credible credential paired with IIDAD's live industry training.
              </p>
              <div className={styles.offeringBadges}>
                <span className={styles.offeringBadge}>UGC Recognized</span>
                <span className={styles.offeringBadge}>Delhi University</span>
                <span className={styles.offeringBadge}>Affordable Fee</span>
                <span className={styles.offeringBadge}>Open Learning Flexible</span>
              </div>
            </div>
          </div>

          {/* Private / Amity */}
          <div className={styles.offeringCard}>
            <div className={styles.offeringIcon}>AU</div>
            <div className={styles.offeringBody}>
              <span className={styles.offeringTag}>Premier Private University</span>
              <h3 className={styles.offeringTitle}>Amity University — {degreeType}</h3>
              <p className={styles.offeringDesc}>
                Partner with Amity University for a <strong style={{ color: "#fff" }}>{degreeType}</strong> with strong global recognition, on-campus events, and a powerful alumni network. Ideal for students targeting premium placements, higher studies abroad, or startup ventures.
              </p>
              <div className={styles.offeringBadges}>
                <span className={styles.offeringBadge}>NAAC A+ Accredited</span>
                <span className={styles.offeringBadge}>Global Recognition</span>
                <span className={styles.offeringBadge}>Powerful Alumni Network</span>
                <span className={styles.offeringBadge}>International Tie-ups</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
