"use client";
import { useEffect, useRef } from 'react';
import styles from './home.module.css';
import { FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';

export default function HomeSection1({ animate }) {
  const marqueeItems = [
    "Full Stack",
    "Web Development",
    "Application Development",
    "Gen AI",
    "Game Development",
    "Software Development",
  ];

  const marqueeLine = `${marqueeItems.join(" - ")} -`;

  const heroRowRef = useRef(null);
  const ctaBoxRef = useRef(null);

  useEffect(() => {
    if (animate) {
      gsap.from(heroRowRef.current, { y: 100, opacity: 0, duration: 1, ease: 'power2.out' });
      gsap.from(ctaBoxRef.current, { y: 40, opacity: 0, duration: 0.5, delay: 0.7, ease: 'power3.out' });
    }
  }, [animate]);

  return (
    <section className={styles.heroBg}>
      <div className={styles.Logo}>
        <img src="/g10.png" alt="IIDAD Logo" />
      </div>
      <div className={`${styles.heroMarqueeWrap} ${styles.heroMarqueeTop}`} aria-hidden="true">
        <p className={styles.heroMarquee} data-text={marqueeLine}>
          {marqueeItems.map((item, idx) => (
            <span key={`top-${item}`}>
              <span className={styles.heroMarqueeItem}>{item}</span>
              {idx !== marqueeItems.length - 1 ? " - " : " - "}
            </span>
          ))}
          {marqueeLine}
        </p>
      </div>
      <div className={styles.heroRow} ref={heroRowRef}>
        <div className={styles.heroContent}>
          <span className={styles.webOffer}>
            Unlock Your Learning Advantage
          </span>
          <h1 className={styles.heroTitle}>
            Shape Tomorrow Through <br />Design & Development
          </h1>
          <p className={styles.heroDesc}>
            IIDAD empowers creative minds with world-class education in design, development, and innovation. Join India&apos;s premier institute for a transformative learning experience.
          </p>
          <div className={styles.ctaBox} ref={ctaBoxRef}>
            <span className={styles.ctaText}>Get your personalized career plan today.</span>
            <button className={`${styles.ctaBtn} demoButtonForm`} type="button">
              <span className={styles.ctaBtnLabel}>Book my free counseling call</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.heroMarqueeWrap} aria-hidden="true">
        <p className={styles.heroMarquee} data-text={marqueeLine}>
          {marqueeItems.map((item, idx) => (
            <span key={item}>
              <span className={styles.heroMarqueeItem}>{item}</span>
              {idx !== marqueeItems.length - 1 ? " - " : " - "}
            </span>
          ))}
          {marqueeLine}
        </p>
      </div>
    </section>
  );
}
