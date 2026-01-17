"use client";
import { useState, useEffect, useRef } from "react";
import styles from "@/components/HomeSection/homeSection7.module.css";

const people = [
  { name: "Mr. Manjeet Singh", role: "Project Head", img: "/teamPic/manjeet3-removebg-preview.webp", desc: "Visionary founder and leader of IIDAD with extensive experience in design education and industry partnerships. Committed to nurturing the next generation of creative professionals." },
  { name: "Mr. Jatin Gautam", role: "Senior Developer", img: "/teamPic/Gemini_Generated_Image_iv7bbgiv7bbgiv7b-removebg-preview.webp", desc: "Seasoned full-stack developer with expertise in modern web technologies and scalable application architecture. Passionate about mentoring aspiring developers." },
  { name: "Mr. Deepanshu Soni", role: "Senior Developer", img: "/teamPic/Gemini_Generated_Image_ggtlqfggtlqfggtl-removebg-preview.webp", desc: "Expert in full-stack development with a strong focus on creating efficient, user-centric solutions. Dedicated to delivering high-quality code and innovative features." },
  { name: "Mr. Harsh Shakya", role: "Developer", img: "/teamPic/Gemini_Generated_Image_3gmign3gmign3gmi__1_-removebg-preview.webp", desc: "Talented developer specializing in modern web frameworks and responsive design. Bringing fresh perspectives and technical excellence to every project." },
  { name: "Ms. Shagun Shrivastava", role: "AI Head", img: "/teamPic/Shagun3__1_-removebg-preview.png", desc: "Leads AI initiatives and crafts intelligent learning experiences across IIDAD programs." },
  { name: "Mr. Harvinder Singh", role: "Content Head", img: "/teamPic/Prompt_generate_an_202512051119-removebg-preview.png", desc: "Oversees curriculum storytelling and content quality to keep learners engaged and outcomes-focused." },
  { name: "Mr. Govind Bisht", role: "SEO Expert", img: "/teamPic/Gemini_Generated_Image_xm81zbxm81zbxm81-removebg-preview.png", desc: "Drives search strategy to grow IIDAD's reach and ensures content ranks for the right learners." },
 // { name: "Sneha Kapoor", role: "Alumni - UI Designer", img: "/teamPic/Gemini_Generated_Image_3gmign3gmign3gmi__1_-removebg-preview.png", desc: "IIDAD alumna now working as Senior UI Designer at Adobe. Credits IIDAD for launching her successful design career." },
  //{ name: "Arjun Reddy", role: "Alumni - Full Stack Dev", img: "/teamPic/Gemini_Generated_Image_ggtlqfggtlqfggtl-removebg-preview.png", desc: "Graduated from IIDAD's web development program, now building innovative startups and mentoring aspiring developers." },
  //{ name: "Maya Iyer", role: "Motion Design Faculty", img: "/teamPic/Gemini_Generated_Image_iv7bbgiv7bbgiv7b-removebg-preview.png", desc: "Animation and motion graphics specialist. Created visuals for major film studios and advertising campaigns worldwide." },
  //{ name: "Karthik Nair", role: "Alumni - Product Manager", img: "/teamPic/manjeet3-removebg-preview.png", desc: "IIDAD graduate leading product development at Amazon. Combines design thinking with technical excellence." },
];

// Simple touch device check  
function isTouchDevice() {  
  if (typeof window === "undefined") return false;  
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;  
}

export default function HomeSection7() {
  const [hovered, setHovered] = useState(-1);
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const touchStartX = useRef(0);
  const autoScrollRef = useRef();

  // Responsive: update card count on resize
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width <= 768) setVisibleCount(2);
      else if (width <= 1024) setVisibleCount(3);
      else setVisibleCount(4);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll carousel one card at a time
  useEffect(() => {
    if (visibleCount < 1) return;
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      setCurrentPage(prev => {
        const totalPages = Math.ceil(people.length / visibleCount);
        if (prev < totalPages - 1) return prev + 1;
        return 0;
      });
      setHovered(-1);
    }, 3500);
    return () => clearInterval(autoScrollRef.current);
  }, [visibleCount]);

  const totalPages = Math.ceil(people.length / visibleCount);

  // Reset to valid page when visibleCount changes
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
    setHovered(-1);
  }, [visibleCount, currentPage, totalPages]);

  const start = currentPage * visibleCount;
  const visiblePeople = people.slice(start, start + visibleCount);

  const canPrev = currentPage > 0;
  const canNext = currentPage < totalPages - 1;

  const handlePrev = () => {
    if (canPrev) {
      setCurrentPage(currentPage - 1);
      setHovered(-1);
    }
  };

  const handleNext = () => {
    if (canNext) {
      setCurrentPage(currentPage + 1);
      setHovered(-1);
    }
  };

  const handleIndicatorClick = (pageIndex) => {
    setCurrentPage(pageIndex);
    setHovered(-1);
  };

  // ---- SWIPE ---
  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function handleTouchEnd(e) {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx > 0 && canPrev) handlePrev();
      if (dx < 0 && canNext) handleNext();
    }
  }

  // ---- DOUBLE TAP: TOGGLE CARD ----
  function handleCardTouch(idx) {
    if (hovered === idx) setHovered(-1);
    else setHovered(idx);
  }

  // Close hover card when tapping outside (for mobile/tablet touch only)
  useEffect(() => {
    if (!isTouchDevice() || hovered === -1) return;
    function handleDocTouch(e) {
      // If tapped outside .card
      if (!e.target.closest(`.${styles.card}`)) setHovered(-1);
    }
    document.addEventListener("touchstart", handleDocTouch, { passive: true });
    return () => document.removeEventListener("touchstart", handleDocTouch);
  }, [hovered]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.arcBackground}></div>
      <div className={styles.headerCircleArc}>
        <h2 className={styles.header}>
          Partnered with most of the<br />
          <span className={styles.headerBlue}>
            top people at each industry
          </span>
        </h2>
      </div>
      <div
        className={styles.carouselContainer}
      >
        <button
          className={styles.navButton}
          disabled={!canPrev}
          onClick={handlePrev}
          aria-label="Previous"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div
          className={styles.carouselRow}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {visiblePeople.map((person, idx) => (
            <div
              key={person.name + idx}
              className={styles.card}
              onMouseEnter={() => !isTouchDevice() && setHovered(idx)}
              onMouseLeave={() => !isTouchDevice() && setHovered(-1)}
              onTouchEnd={() => isTouchDevice() && handleCardTouch(idx)}
              style={{ touchAction: "manipulation" }}
            >
              {hovered === idx && person.desc ? (
                <div className={styles.cardHoverGlass}>
                  <div className={styles.cardHoverContent}>
                    <div className={styles.cardTitle}>{person.name}</div>
                    <div className={styles.cardRole}>{person.role}</div>
                    <div className={styles.cursorIcon}>👆</div>
                    <div className={styles.cardDesc}>{person.desc}</div>
                  </div>
                </div>
              ) : (
                <div className={styles.cardPortraitWrap}>
                  <img
                    className={styles.cardImg}
                    src={person.img}
                    alt={person.name}
                    draggable={false}
                  />
                  <div className={styles.cardOverlayText}>
                    <div className={styles.cardTitle}>{person.name}</div>
                    <div className={styles.cardRole}>{person.role}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          className={styles.navButton}
          disabled={!canNext}
          onClick={handleNext}
          aria-label="Next"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className={styles.carouselIndicator}>
        {Array.from({ length: totalPages }, (_, i) => (
          <div
            key={i}
            className={`${styles.indicatorDot} ${i === currentPage ? styles.active : ''}`}
            onClick={() => handleIndicatorClick(i)}
            aria-label={`Go to page ${i + 1}`}
            tabIndex={0}
          />
        ))}
      </div>
    </section>
  );
}
