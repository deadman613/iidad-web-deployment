"use client";
import { useEffect, useRef, useState } from 'react';
// 7 light color shades for hover effect
const HEADLINE_COLORS = [
  '#FEEA00', // yellow
  '#AEE9FF', // light blue
  '#B9FFB7', // light green
  '#FFD6E0', // light pink
  '#FFF6B7', // pale yellow
  '#D1C4E9', // lavender
  '#FFECB3', // light amber
];

function getRandomColorIndex(exclude) {
  let idx;
  do {
    idx = Math.floor(Math.random() * HEADLINE_COLORS.length);
  } while (idx === exclude);
  return idx;
}
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

const headlinePart1 = 'Imagine Your High-Paid Career As';
const headlinePart2 = 'Web | App | Software | Game Developer';

const longerPart = Math.max(headlinePart1.length, headlinePart2.length);
const [colorIndexes, setColorIndexes] = useState(Array(longerPart).fill(-1));
const [shakeIndexes, setShakeIndexes] = useState(Array(longerPart).fill(false));

const shakeTimeouts = useRef({});

const handleCharEnter = (idx, part) => {
  setColorIndexes(prev => {
    const next = [...prev];
    next[idx] = getRandomColorIndex(prev[idx]);
    return next;
  });

  if (shakeTimeouts.current[`${part}-${idx}`]) {
    clearTimeout(shakeTimeouts.current[`${part}-${idx}`]);
  }

  setShakeIndexes(prev => {
    const next = [...prev];
    next[idx] = true;
    return next;
  });
};

const handleCharLeave = (idx, part) => {
  shakeTimeouts.current[`${part}-${idx}`] = setTimeout(() => {
    setShakeIndexes(prev => {
      const next = [...prev];
      next[idx] = false;
      return next;
    });
  }, 1100);
};

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
            Unlock Your <span style={{fontWeight:"700"}}>AI Powered</span> Development Learning Advantages
          </span>
   <h1 className={styles.heroTitle}>
  {headlinePart1.split('').map((char, idx) => (
    char === ' ' ? (
      <span key={"p1-" + idx} style={{ display: 'inline-block', width: '0.35em' }}>&nbsp;</span>
    ) : (
      <span
        key={"p1-" + idx}
        onMouseEnter={() => handleCharEnter(idx, 1)}
        onMouseLeave={() => handleCharLeave(idx, 1)}
        style={{
          display: 'inline-block',
          color: colorIndexes[idx] >= 0 ? HEADLINE_COLORS[colorIndexes[idx]] : undefined,
          transition: 'color 0.2s',
          animation: shakeIndexes[idx] ? `${styles.shakeAnim} 1.1s cubic-bezier(0.4, 0.15, 0.6, 0.85)` : 'none',
        }}
      >
        {char}
      </span>
    )
  ))}
  <br />
  {headlinePart2.split('').map((char, idx) => (
    char === ' ' ? (
      <span key={"p2-" + idx} style={{ display: 'inline-block', width: '0.35em' }}>&nbsp;</span>
    ) : (
      <span
        key={"p2-" + idx}
        onMouseEnter={() => handleCharEnter(idx, 2)}
        onMouseLeave={() => handleCharLeave(idx, 2)}
        style={{
          display: 'inline-block',
          color: colorIndexes[idx] >= 0 ? HEADLINE_COLORS[colorIndexes[idx]] : undefined,
          transition: 'color 0.2s',
          animation: shakeIndexes[idx] ? `${styles.shakeAnim} 1.1s cubic-bezier(0.4, 0.15, 0.6, 0.85)` : 'none',
        }}
      >
        {char}
      </span>
    )
  ))}
</h1>
         <span style={{fontSize:"12px", borderBottom:"1px solid #57d773",transform:"translateY(-100%)"}}>DEGREE PROGRAMS</span>
            <span className={styles.productHeroBanner}>
              <a href="/degree-program-software" style={{color:"inherit",textDecoration:"none"}}>Degree Programs</a>
              <span className={styles.whiteText}> | </span>
              <a href="/post-graduation-software" style={{color:"inherit",textDecoration:"none"}}>Post Graduation Programs</a>
            </span>
          <div className={styles.ctaBox} ref={ctaBoxRef}>
            <span style={{textAlign:"center"}} className={styles.ctaText}>Degree and Skill All Together - We Are <span style={{backgroundColor:"#57d773",color:"black",padding:"0 5px",fontWeight:"700"}}>Asia's #1</span> Institute Has Collabration With 80 Universities and 250 Colleges With 100+ Trainers Team.</span>
          </div>
          <button style={{marginTop:"10px"}} className={`${styles.ctaBtn} demoButtonForm`} type="button">
              <span style={{fontWeight:"700"}
              } className={styles.ctaBtnLabel} >Book Your Free Counselling</span>
            </button>
        </div>
      </div>
    </section>
  );
}
