
"use client";
import React, { useRef } from 'react';
import styles from "./homeSection2.module.css";

export default function HomeSection2() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className={styles.sectionWrapper}>
      <div className={styles.leftCol}>
        <h2 className={styles.bigTitle}>Innovation Through Education</h2>
        <p className={styles.descText}>
          From foundational design principles to advanced development techniques, IIDAD offers comprehensive programs in UI/UX design, web development, mobile app development, graphic design, and product design. We nurture talent and transform aspiring designers into industry leaders.
        </p>
        <div className={styles.ctaRow}>
          <span className={styles.ctaMain}>Why 25,000+ Learners Chose Us</span>
        </div>
        <div className={styles.ctaButtons}>
          <button className={`${styles.primaryBtn} demoButtonForm`}>Book My Free Counseling Call</button>
          <button className={`${styles.ghostBtn} demoButtonForm`}>Help Me Choose the Right Course</button>
        </div>
      </div>

      <div className={styles.rightCol}>
        <div className={styles.videoWrapper}>
          <img
            src="/teamIIDAD.png"
            alt="Team IIDAD"
            className={styles.showcaseImage}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
