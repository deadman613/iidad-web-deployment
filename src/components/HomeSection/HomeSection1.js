"use client";
import { useEffect, useRef } from 'react';
import styles from './home.module.css';
import { FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import GridMotionBackground from './GridMotionBackground';

const heroGridItems = [
  '/bannerImages/1.webp',
  '/bannerImages/2.webp',
  '/bannerImages/3.webp',
  '/bannerImages/4.webp',
  '/bannerImages/5.webp',
  '/bannerImages/6.webp',
  '/bannerImages/7.webp',
  '/bannerImages/8.webp',
  '/bannerImages/9.webp',
  '/bannerImages/10.webp',
  '/bannerImages/11.webp',
  '/bannerImages/12.webp',
  '/bannerImages/13.webp',
  '/bannerImages/14.webp',
  '/bannerImages/15.webp',
  '/bannerImages/16.webp',
  '/bannerImages/17.webp',
  '/bannerImages/18.webp',
  '/bannerImages/19.webp',
  '/bannerImages/20.webp',
  '/bannerImages/21.webp',
  '/bannerImages/22.webp',
  '/bannerImages/23.webp',
  '/bannerImages/24.webp',
  '/bannerImages/25.webp',
  '/bannerImages/26.webp',
  '/bannerImages/27.webp',
  '/bannerImages/28.webp',
];

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
      <div className={styles.heroGridLayer}>
        <GridMotionBackground items={heroGridItems} gradientColor="rgba(0, 0, 0, 0.62)" />
      </div>
      <div className={styles.Logo}>
        <img src="/g10.png" alt="IIDAD Logo" />
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
    </section>
  );
}
