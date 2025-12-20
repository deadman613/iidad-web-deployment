'use client';

import { useEffect, useState } from 'react';
import styles from '@/components/LoaderPage/loadPage.module.css';

export default function FrontPage({ onComplete }) {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Disable scrolling when loader is active
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Counter animation
    const interval = setInterval(() => {
      setCounter(prev => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 33);

    // Animation phases (visual timing)
    const phase1 = setTimeout(() => setAnimationPhase(1), 500);
    const phase2 = setTimeout(() => setAnimationPhase(2), 1000);
    const phase3 = setTimeout(() => setAnimationPhase(3), 2000);

    // Instead of a long fixed final timeout, we'll finish as soon as
    // the counter reaches 100 and the final animation phase is active.

    return () => {
      clearInterval(interval);
      clearTimeout(phase1);
      clearTimeout(phase2);
      clearTimeout(phase3);
      // Cleanup: ensure scrolling is re-enabled
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [onComplete]);

  // When counter reaches 100 and animationPhase is at the final stage,
  // finish the loader immediately (no extra waiting).
  useEffect(() => {
    if (counter >= 100 && animationPhase >= 3) {
      // small micro-delay to allow final frame paint if needed
      const t = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        if (onComplete) onComplete();
      }, 80);
      return () => clearTimeout(t);
    }
  }, [counter, animationPhase, onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.loader} ${animationPhase >= 3 ? styles.fadeOut : ''}`}>
      <div className={styles.line}>
        <div className={`${styles.linetime} ${animationPhase >= 1 ? styles.show : ''}`}>
          <h5 className={styles.counter}>{counter.toString().padStart(2, '0')}</h5>
          <h4>- 100</h4>
        </div>
        <p className={`${styles.lineHeading} ${animationPhase >= 1 ? styles.slideIn : ''}`}>Your</p>
      </div>
      <div className={styles.line}>
        <p className={`${styles.lineHeading} ${animationPhase >= 1 ? styles.slideIn : ''}`}>Web Experiences</p>
      </div>
      <div className={styles.line}>
        <p className={`${styles.lineHeading} ${animationPhase >= 1 ? styles.slideIn : ''}`}>is loading right</p>
        <h2 className={`${styles.now} ${animationPhase >= 2 ? styles.animate : ''}`}>NOW</h2>
      </div>
    </div>
  );
}