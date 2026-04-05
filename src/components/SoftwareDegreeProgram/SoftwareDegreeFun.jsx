"use client";
import styles from "./softwareDegree.module.css";

const FUN_CARDS = [
  {
    num: "01",
    title: "Weekly Local Trips",
    desc: "Every week, students head out to tech parks, innovation hubs, science museums, and cultural sites across the city — learning beyond textbooks.",
    highlights: ["Tech park tours", "Museum & gallery visits", "City hackathon meetups", "Start-up hub walkthroughs"],
  },
  {
    num: "02",
    title: "Annual Outstation Business Trips",
    desc: "Once a year, the entire cohort travels to another city — Bangalore, Hyderabad, or Mumbai — for industry visits, networking events, and live company exposure.",
    highlights: ["3-day industry immersion", "Company office tours", "Networking dinners", "Travel fully guided"],
  },
  {
    num: "03",
    title: "Social Work Initiatives",
    desc: "Build tech for good. Students run quarterly social impact projects — digital literacy drives, tech workshops for underserved communities, and NGO partnerships.",
    highlights: ["Quarterly social sprints", "NGO tech support", "Digital literacy camps", "Counted in portfolio"],
  },
  {
    num: "04",
    title: "Gaming & Hackathon Club",
    desc: "A dedicated club for coding challenges, hackathons, Capture-The-Flag security events, and game-jam weekends. Compete, build, and win prizes.",
    highlights: ["Monthly hackathons", "Game-jam weekends", "CTF competitions", "Prize pools & internship offers"],
  },
  {
    num: "05",
    title: "Cultural & Arts Club",
    desc: "Coding students love music, art, and drama too. Join the cultural club for annual fest performances, design competitions, and open-mic tech talks.",
    highlights: ["Annual TechFest", "Open-mic tech talks", "Design competitions", "Film & photography events"],
  },
  {
    num: "06",
    title: "Student Leadership & Clubs",
    desc: "Run for student council, lead a club, organize events. IIDAD students build leadership experience right alongside their technical skills.",
    highlights: ["Student Council voting", "Club leadership roles", "Event management", "Speaker invite opportunities"],
  },
];

export default function SoftwareDegreeFun({ program = "degree" }) {
  return (
    <section className={styles.funSection}>
      <div className={styles.funFrame}>
        <div className={styles.funHeader}>
          <p className={styles.sectionLabel}>College Life & Activities</p>
          <h2 className={styles.funTitle}>
            More Than a<br />
            <span className={styles.accent}>Degree.</span>
          </h2>
          <p className={styles.funSubtitle}>
            We believe the best developers are well-rounded humans. Beyond the classroom, IIDAD is full of
            trips, clubs, social work, and adventures that make your {program === "degree" ? "3-year" : "2-year"} journey unforgettable.
          </p>
        </div>

        <div className={styles.funGrid}>
          {FUN_CARDS.map((card) => (
            <div key={card.title} className={styles.funCard}>
              <span className={styles.funCardIcon}>{card.num}</span>
              <h3 className={styles.funCardTitle}>{card.title}</h3>
              <p className={styles.funCardDesc}>{card.desc}</p>
              <div className={styles.funCardHighlights}>
                {card.highlights.map((h) => (
                  <span key={h} className={styles.funHighlight}>{h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
