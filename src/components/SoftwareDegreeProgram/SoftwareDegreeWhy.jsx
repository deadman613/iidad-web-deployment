"use client";
import styles from "./softwareDegree.module.css";

const DEGREE_FEATURES = [
  { title: "University-Recognized Degree",    desc: "Graduate with a B.Sc. / M.Sc. that employers and post-grad institutions honor globally." },
  { title: "Live Industry Projects",          desc: "Every semester ends with a real client project, not just assignments. Build an actual portfolio." },
  { title: "Dual Certification",              desc: "Your university degree PLUS IIDAD's own industry certification — double your market value." },
  { title: "Structured Monthly Sprints",      desc: "Clear month-by-month syllabus keeps you on track and ensures progressive skill stacking." },
  { title: "100% Placement Support",          desc: "Dedicated placement cell, resume reviews, mock interviews, and direct employer referrals." },
  { title: "Industry Mentors Only",           desc: "All faculty are active professionals — CTOs, senior engineers, and startup founders." },
  { title: "Flexible Online + Offline",       desc: "Attend live or hybrid. Never miss a class — all sessions are recorded for revision." },
  { title: "Algorithm & System Design Track", desc: "DSA and system design taught from Semester 1 to make you interview-ready at any company." },
];

const PG_FEATURES = [
  { title: "Advanced Architecture Focus",     desc: "Go beyond coding — learn distributed systems, cloud-native design, and microservices at scale." },
  { title: "Research + Industry Blend",       desc: "Thesis-driven learning combined with real enterprise project delivery at top companies." },
  { title: "AI-Powered Software Development", desc: "Integrate machine learning, LLMs, and computer vision directly into production software." },
  { title: "Leadership & Engineering Management", desc: "Learn how to lead teams, architect products, and manage tech roadmaps as a senior engineer." },
  { title: "M.Sc. Degree + IIDAD Certificate", desc: "Dual credentials — a master's degree and an advanced professional certification." },
  { title: "Startup Incubation Access",       desc: "PG students get access to IIDAD's startup lab with mentors, seed funding guidance, and co-founders." },
  { title: "International Exposure",          desc: "Study tours, online seminars with global engineers, and cross-border project collaborations." },
  { title: "Premier Placement Pipeline",      desc: "Connections to top-tier companies, MNCs, and product startups with ₹12–30 LPA packages." },
];

export default function SoftwareDegreeWhy({ program = "degree" }) {
  const isDegree = program === "degree";
  const features = isDegree ? DEGREE_FEATURES : PG_FEATURES;

  const stats = isDegree
    ? [{ v: "36", l: "hands-on projects" }, { v: "3", l: "certifications" }, { v: "100%", l: "placement rate" }]
    : [{ v: "24", l: "advanced modules" }, { v: "2", l: "master credentials" }, { v: "₹18L", l: "avg. placement" }];

  return (
    <section className={styles.whySection}>
      <div className={styles.whyFrame}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.sectionLabel}>Why {isDegree ? "Degree" : "Post Graduation"} with Us</p>
          <h2 className={styles.heading}>
            Designed for<br />
            <span className={styles.accent}>{isDegree ? "Future-Ready" : "Engineering"}</span><br />
            {isDegree ? "Developers." : "Leaders."}
          </h2>
          <p className={styles.subtitle}>
            {isDegree
              ? "Most colleges teach theory and leave you unemployable. We pair your university degree with real software skills, live projects, and a direct path into the industry."
              : "A post-graduation that doesn't slow you down. Build expertise in advanced systems engineering while earning a master's degree and industry credentials simultaneously."}
          </p>
          <div className={styles.statsBlock}>
            {stats.map((s) => (
              <div key={s.l} className={styles.statItem}>
                <span className={styles.statItemVal}>{s.v}</span>
                <span className={styles.statItemDesc}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sep} />

        {/* RIGHT */}
        <div className={styles.right}>
          <p className={styles.rightLabel}>Program advantages</p>
          <div className={styles.featureGrid}>
            {features.map((f, i) => (
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
