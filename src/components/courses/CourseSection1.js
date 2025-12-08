// CourseSection1.js
import React from 'react';
import styles from './courseSection1.module.css';

const CourseSection1 = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.leftContent}>
          <div className={styles.logo}>
            <img 
              src="/g10.png" 
              alt="IIDAD Logo"
            />
          </div>

          <h1 className={styles.heading}>
            Achieve your career goals with iidad
          </h1>

          <p className={styles.subtitle}>
            Subscribe to build job-ready skills from world-class institutions.
          </p>

          <p className={styles.pricing}>
            ₹2,099/month, cancel anytime
          </p>

          <button className={`${styles.ctaButton} ${styles.demoButtonForm} demoButtonForm`}>
            Start 7-day Free Trial
          </button>

          <p className={styles.guarantee}>
            best courses at affordable prices
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.rightContent}>
          <div className={styles.graphicWrapper}>
            <img
              src="/uploads/graphic (1).png"
              alt=""
              className={styles.bgGraphic}
            />

            <img
              src="/uploads/manjeet3-removebg-preview (1).png"
              alt="iidad Professional"
              className={styles.personImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection1;