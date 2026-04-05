"use client";
import { useRef, useEffect } from "react";
import styles from "./testimonialsV2.module.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Full-Stack Developer @ Infosys",
    avatar: "R",
    avatarColor: "#5569ff",
    quote:
      "IIDAD changed my life completely. Within 6 months I went from zero coding knowledge to landing a job at Infosys. The practical projects and live mentoring made all the difference.",
    rating: 5,
    tag: "Placed in 5 months",
    course: "Full Stack Development",
  },
  {
    name: "Priya Verma",
    role: "UI Developer @ TCS",
    avatar: "P",
    avatarColor: "#57d773",
    quote:
      "The curriculum is incredibly well-structured. I loved how every concept was followed by a real project. My confidence grew week by week. IIDAD is the best decision I ever made.",
    rating: 5,
    tag: "12 LPA Salary",
    course: "Web Development",
  },
  {
    name: "Amit Joshi",
    role: "React Developer @ Wipro",
    avatar: "A",
    avatarColor: "#ff986c",
    quote:
      "Trainers here don't just teach — they mentor. I got career guidance, resume reviews, and mock interviews. My first job offer came within a week of completing the course!",
    rating: 5,
    tag: "Hired in 1 week",
    course: "Diploma in Full Stack",
  },
  {
    name: "Sneha Kapoor",
    role: "Frontend Engineer @ Razorpay",
    avatar: "S",
    avatarColor: "#9b59b6",
    quote:
      "I was a commerce student with zero tech background. IIDAD's beginner-friendly approach helped me crack frontend development. Best investment I have made in my career.",
    rating: 5,
    tag: "Career switch",
    course: "Web Development",
  },
  {
    name: "Vikram Singh",
    role: "Backend Developer @ Flipkart",
    avatar: "V",
    avatarColor: "#e74c3c",
    quote:
      "The Node.js and database modules were outstanding. Real-world assignments pushed me to think like a developer. Got placed at Flipkart at 14 LPA — couldn't be happier!",
    rating: 5,
    tag: "14 LPA Package",
    course: "Backend Specialization",
  },
  {
    name: "Nisha Agarwal",
    role: "App Developer @ Swiggy",
    avatar: "N",
    avatarColor: "#f39c12",
    quote:
      "IIDAD taught me not just how to code but how to think like an engineer. The Gen AI modules were futuristic and gave me an edge over other candidates in interviews.",
    rating: 5,
    tag: "Gen AI track",
    course: "Application Development",
  },
  {
    name: "Deepak Yadav",
    role: "Game Developer @ Ubisoft India",
    avatar: "D",
    avatarColor: "#1abc9c",
    quote:
      "I always dreamed of working in gaming. IIDAD's game development track combined theory with Unity projects. The portfolio I built here got me directly hired by Ubisoft.",
    rating: 5,
    tag: "Dream job achieved",
    course: "Game Development",
  },
  {
    name: "Ananya Dubey",
    role: "Software Engineer @ HCL",
    avatar: "An",
    avatarColor: "#3498db",
    quote:
      "Classes were live and engaging, never boring. The doubt sessions were incredibly helpful. Got certified, got placed, and got a 10 LPA starting package. Thank you IIDAD!",
    rating: 5,
    tag: "10 LPA fresher",
    course: "Software Development",
  },
];

// Split into two rows
const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4, 8);

function StarRating({ count }) {
  return (
    <span className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={styles.star}>★</span>
      ))}
    </span>
  );
}

function TestimonialCard({ item }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <div
          className={styles.avatar}
          style={{ background: `linear-gradient(135deg, ${item.avatarColor}cc, ${item.avatarColor}66)` }}
        >
          {item.avatar}
        </div>
        <div className={styles.cardMeta}>
          <span className={styles.personName}>{item.name}</span>
          <span className={styles.personRole}>{item.role}</span>
        </div>
        <StarRating count={item.rating} />
      </div>
      <p className={styles.quote}>{item.quote}</p>
      <div className={styles.cardFooter}>
        <span className={styles.tag} style={{ borderColor: `${item.avatarColor}55`, color: item.avatarColor }}>
          {item.tag}
        </span>
        <span className={styles.coursePill}>{item.course}</span>
      </div>
    </article>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Clone children for seamless loop
    const clone = track.innerHTML;
    track.innerHTML += clone;

    let pos = 0;
    const speed = reverse ? 0.4 : 0.5;
    let animId;

    function tick() {
      pos += reverse ? speed : -speed;
      const totalWidth = track.scrollWidth / 2;
      if (!reverse && pos <= -totalWidth) pos = 0;
      if (reverse && pos >= 0) pos = -totalWidth;
      track.style.transform = `translateX(${pos}px)`;
      animId = requestAnimationFrame(tick);
    }

    animId = requestAnimationFrame(tick);

    // Pause on hover
    const pause = () => cancelAnimationFrame(animId);
    const resume = () => { animId = requestAnimationFrame(tick); };
    track.parentElement.addEventListener("mouseenter", pause);
    track.parentElement.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animId);
      track.parentElement?.removeEventListener("mouseenter", pause);
      track.parentElement?.removeEventListener("mouseleave", resume);
    };
  }, [reverse]);

  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeTrack} ref={trackRef}>
        {items.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsV2() {
  return (
    <section className={styles.section} id="student-reviews" aria-labelledby="tv2-heading">
      {/* Ambient glow blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={styles.header}>
        <span className={styles.eyebrow}>Student Success Stories</span>
        <h2 id="tv2-heading" className={styles.heading}>
          25,000+ Learners. <span className={styles.accent}>Countless Success Stories.</span>
        </h2>
        <p className={styles.subtext}>
          Real outcomes from real students — developers, designers, and engineers who transformed their
          careers through IIDAD's hands-on, mentor-led programs.
        </p>
        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>25,000+</span>
            <span className={styles.statLabel}>Graduates</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>12 LPA</span>
            <span className={styles.statLabel}>Avg. Salary</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>4.9★</span>
            <span className={styles.statLabel}>Rating</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>95%</span>
            <span className={styles.statLabel}>Placement Rate</span>
          </div>
        </div>
      </div>

      <div className={styles.marqueeSection}>
        <MarqueeRow items={row1} reverse={false} />
        <MarqueeRow items={row2} reverse={true} />
      </div>

      <div className={styles.cta}>
        <button className={`${styles.ctaBtn} demoButtonForm`} type="button">
          Start Your Success Story →
        </button>
      </div>
    </section>
  );
}
