// import { useRef, useEffect } from "react";
import styles from "./homeSection2.module.css";
import gsap from "gsap";

export default function HomeSection2() {
  // const leftRef = useRef(null);
  // const rightRef = useRef(null);

  // useEffect(() => {
  //   gsap.from(leftRef.current, {
  //     y: 40, opacity: 0, duration: 0.7, ease: "power2.out"
  //   });
  //   gsap.from(rightRef.current, {
  //     y: 40, opacity: 0, duration: 0.7, delay: 0.18, ease: "power2.out"
  //   });
  // }, []);

  return (
    <section className={styles.sectionWrapper}>
      {/* Left Text */}
      <div className={styles.leftCol} >
        <h2 className={styles.bigTitle}>
          Innovation Through Education
        </h2>
        <p className={styles.descText}>
          From foundational design principles to advanced development techniques, IIDAD offers comprehensive programs in UI/UX design, web development, mobile app development, graphic design, and product design. We nurture talent and transform aspiring designers into industry leaders.
        </p>
      </div>
      {/* Right Video */}
      <div className={styles.rightCol} >
        <video
          src="https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66d5d5e612d0da0c1338e3ba_LGM%20-%20MAIN%20VIDEO-transcode.mp4"
          className={styles.showcaseVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
}
