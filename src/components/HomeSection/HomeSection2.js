
"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from "./homeSection2.module.css";
import gsap from "gsap";



export default function HomeSection2() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [showPoster, setShowPoster] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  function handleEnded() {
    setShowPoster(true);
    const v = videoRef.current;
    if (v) {
      try {
        v.pause();
        v.currentTime = 0;
      } catch (err) {}
    }
  }

  useEffect(() => {
    // mark hydrated so autoplay doesn't trigger during SSR/client hydration
    setIsHydrated(true);

    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const handlePlaySafe = async () => {
      try {
        await video.play();
      } catch (err) {
        // play may be blocked; keep poster visible
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setShowPoster(false);
          handlePlaySafe();
        } else {
          try {
            video.pause();
            video.currentTime = 0;
          } catch (err) {}
          setShowPoster(true);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

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
          {showPoster && (
            <img src="/thumbnail.PNG" alt="Video thumbnail" className={styles.videoPoster} />
          )}

          <video
            ref={videoRef}
            className={styles.showcaseVideo}
            poster="/thumbnail.PNG"
            autoPlay={isHydrated}
            playsInline={true}
            preload="metadata"
            aria-label="IIDAD showcase video"
            onError={(e) => console.error("Video failed to load", e)}
            onEnded={handleEnded}
          >
            <source src={encodeURI('/Manjeet sir web page .webm')} type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
}
