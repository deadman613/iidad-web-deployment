"use client";
import styles from "./softwareDegree.module.css";

const TESTIMONIALS = [
  { name: "Arjun Mehta",     role: "Software Engineer @ Google",    avatar: "A", color: "#4285f4", quote: "IIDAD's degree program gave me both theory and practice. The DU SOL degree opened doors while the real projects made me stand out at Google interviews.", tag: "Google hired", rating: 5 },
  { name: "Priya Sharma",    role: "Backend Dev @ Flipkart",         avatar: "P", color: "#57d773", quote: "As a girl from a tier-2 city, I never imagined working at Flipkart. The mentors here genuinely cared about my growth. The outstation trip to Bangalore changed my perspective.", tag: "₹14 LPA offer", rating: 5 },
  { name: "Rohan Gupta",     role: "Full-Stack Dev @ Razorpay",      avatar: "R", color: "#ff6b6b", quote: "The Amity University partnership was the deciding factor for me. A premium degree + IIDAD's intense practical training = an unbeatable combination.", tag: "Dream company", rating: 5 },
  { name: "Sneha Yadav",     role: "Software Architect @ IBM",       avatar: "S", color: "#9b59b6", quote: "Did the PG program after my BTech. The system design and distributed systems modules were at par with postgrad IIT content. IBM hired me at 18 LPA.", tag: "PG Program", rating: 5 },
  { name: "Dev Khatri",      role: "Startup Founder",                avatar: "D", color: "#f39c12", quote: "The hackathon club and social work projects formed my team. We all met at IIDAD and now run a funded startup together. Best decision ever.", tag: "Founded startup", rating: 5 },
  { name: "Neha Bandyopadhyay", role: "Cloud Engineer @ Microsoft", avatar: "N", color: "#1abc9c", quote: "The annual Bangalore trip introduced us to Microsoft's India team. I returned with a reference contact, and six months later I was hired. IIDAD does this right.", tag: "Microsoft hired", rating: 5 },
  { name: "Karan Soni",      role: "ML Engineer @ Amazon",          avatar: "K", color: "#e74c3c", quote: "The PG program's AI integration track was exactly what I needed. Building ML pipelines in real software products is rare in any curriculum.", tag: "ML track", rating: 5 },
  { name: "Divya Kaur",      role: "DevOps Lead @ Meta India",       avatar: "Di", color: "#3498db", quote: "DevOps from Year 3 of the degree program. I was deploying real apps on AWS and GCP while my college friends were still writing paper exams.", tag: "Meta India", rating: 5 },
];

const row1 = [...TESTIMONIALS, ...TESTIMONIALS];
const row2 = [...TESTIMONIALS.slice(4), ...TESTIMONIALS.slice(0, 4), ...TESTIMONIALS.slice(4), ...TESTIMONIALS.slice(0, 4)];

function Stars({ count }) {
  return (
    <div className={styles.starRow}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={styles.star}>★</span>
      ))}
    </div>
  );
}

export default function SoftwareDegreeTestimonials({ program = "degree" }) {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsFrame}>
        <div className={styles.testimonialsHeader}>
          <p className={styles.sectionLabel}>Student stories</p>
          <h2 className={styles.testimonialsTitle}>
            Real Results.<br />
            <span className={styles.accent}>Real People.</span>
          </h2>
        </div>

        <div style={{ overflow: "hidden" }}>
          <div className={styles.testimonialsTrack}>
            {row1.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.testimonialTop}>
                  <div className={styles.testimonialAvatar} style={{ background: t.color }}>
                    {t.avatar}
                  </div>
                  <span className={styles.testimonialTag}>{t.tag}</span>
                </div>
                <Stars count={t.rating} />
                <p className={styles.testimonialQuote}>"{t.quote}"</p>
                <p className={styles.testimonialName}>{t.name}</p>
                <p className={styles.testimonialRole}>{t.role}</p>
              </div>
            ))}
          </div>

          <div className={styles.testimonialsTrackReverse}>
            {row2.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.testimonialTop}>
                  <div className={styles.testimonialAvatar} style={{ background: t.color }}>
                    {t.avatar}
                  </div>
                  <span className={styles.testimonialTag}>{t.tag}</span>
                </div>
                <Stars count={t.rating} />
                <p className={styles.testimonialQuote}>"{t.quote}"</p>
                <p className={styles.testimonialName}>{t.name}</p>
                <p className={styles.testimonialRole}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
