"use client";
import { useEffect, useRef } from 'react';
import styles from './home.module.css';
import { FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';

export default function HomeSection1({ animate }) {
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
      <div className={styles.heroRow} ref={heroRowRef}>
        <div className={styles.heroContent}>
          <span className={styles.webOffer}>
            Transform Your Future
          </span>
          <h1 className={styles.heroTitle}>
            Shape Tomorrow Through <br />Design & Development
          </h1>
          <p className={styles.heroDesc}>
            IIDAD empowers creative minds with world-class education in design, development, and innovation. Join India&apos;s premier institute for a transformative learning experience.
          </p>
          <div className={styles.ctaBox} ref={ctaBoxRef}>
            <span className={styles.ctaText}>Start your journey. Explore our programs today.</span>
            <button className={styles.ctaBtn}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
