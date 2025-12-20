"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./audioMarquee.module.css";

const tracks = [
  {
    id: "design-futures",
    title: "Design Futures",
    caption: "How design leaders shape resilient products in 2025 and beyond.",
    src: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
  },
  {
    id: "studio-culture",
    title: "Studio Culture",
    caption: "What makes product teams ship faster together.",
    src: "https://samplelib.com/lib/preview/mp3/sample-6s.mp3",
  },
  {
    id: "product-legends",
    title: "Product Legends",
    caption: "How disciplined teams keep shipping when scope shifts.",
    src: "https://samplelib.com/lib/preview/mp3/sample-9s.mp3",
  },
  {
    id: "tech-careers",
    title: "Tech Careers",
    caption: "Career pivots, mentorship, and habits that accelerate junior devs.",
    src: "https://samplelib.com/lib/preview/mp3/sample-6s.mp3",
  },
  {
    id: "ai-practitioner",
    title: "AI Practitioner",
    caption: "Building with AI responsibly: workflows, guardrails, and impact.",
    src: "https://samplelib.com/lib/preview/mp3/sample-9s.mp3",
  },
  {
    id: "ops-culture",
    title: "Ops Culture",
    caption: "Shipping reliable releases without slowing the team down.",
    src: "https://samplelib.com/lib/preview/mp3/sample-12s.mp3",
  },
];

export default function AudioMarquee() {
  const GAP = 12;
  const audioRef = useRef(null);
  const rowRef = useRef(null);
  const cardRefs = useRef([]);
  const collapseTimerRef = useRef(null);
  const [activeId, setActiveId] = useState(null);
  const [activeInstanceIndex, setActiveInstanceIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(tracks.length); // start at middle copy for seamless loop
  const [isAutoplaying, setIsAutoplaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [offsets, setOffsets] = useState([]);

  const baseLength = tracks.length;
  const loopedTracks = useMemo(() => [...tracks, ...tracks, ...tracks], []);

  const activeTrack = useMemo(() => tracks.find((t) => t.id === activeId), [activeId]);

  const measureOffsets = () => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    let acc = 0;
    const nextOffsets = cards.map((card) => {
      const start = acc;
      const width = card?.getBoundingClientRect().width || 0;
      acc += width + GAP;
      return start;
    });
    setOffsets(nextOffsets);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setIsPlaying(false);
      setActiveId(null);
      setIsAutoplaying(true);
    };

    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    measureOffsets();
    const handleResize = () => measureOffsets();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => measureOffsets());
  }, [activeInstanceIndex, isPlaying]);

  const handlePlayToggle = (track, idx) => {
    const audio = audioRef.current;
    if (!audio) return;

    // If clicking the same track while playing, pause it.
    if (isPlaying && activeId === track.id) {
      audio.pause();
      setIsPlaying(false);
      setActiveId(null);
      setIsAutoplaying(true);
      return;
    }

    audio.pause();
    // Swap source and play.
    audio.src = track.src;

    audio
      .play()
      .then(() => {
        setActiveId(track.id);
        setIsPlaying(true);
        const baseIdx = tracks.findIndex((t) => t.id === track.id);
        const targetIndex = baseIdx >= 0 ? baseLength + baseIdx : idx;
        if (baseIdx >= 0) setCurrentIndex(targetIndex);
        setActiveInstanceIndex(targetIndex);
        setIsAutoplaying(false);
      })
      .catch(() => {
        setActiveId(track.id);
        setIsPlaying(false);
        setActiveInstanceIndex(null);
      });
  };

  useEffect(() => {
    if (collapseTimerRef.current) {
      clearTimeout(collapseTimerRef.current);
      collapseTimerRef.current = null;
    }

    if (!isPlaying && activeInstanceIndex !== null) {
      collapseTimerRef.current = setTimeout(() => {
        setActiveInstanceIndex(null);
      }, 320);
    }

    return () => {
      if (collapseTimerRef.current) {
        clearTimeout(collapseTimerRef.current);
        collapseTimerRef.current = null;
      }
    };
  }, [isPlaying, activeInstanceIndex]);

  useEffect(() => {
    if (!isAutoplaying || isPlaying) return undefined;

    const id = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(id);
  }, [isAutoplaying]);

  useEffect(() => {
    const transitionMs = 350;

    if (currentIndex >= baseLength * 2) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex((idx) => idx - baseLength);
        setActiveInstanceIndex((idx) => (idx === null ? null : idx - baseLength));
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setIsTransitioning(true));
        });
        measureOffsets();
      }, transitionMs);
      return () => clearTimeout(timeout);
    }

    if (currentIndex < baseLength) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex((idx) => idx + baseLength);
        setActiveInstanceIndex((idx) => (idx === null ? null : idx + baseLength));
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setIsTransitioning(true));
        });
        measureOffsets();
      }, transitionMs);
      return () => clearTimeout(timeout);
    }

    return undefined;
  }, [currentIndex, baseLength]);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section
      className={styles.section}
      aria-label="Featured audio highlights"
      onMouseEnter={() => setIsAutoplaying(false)}
      onMouseLeave={() => setIsAutoplaying(true)}
    >
      <div className={styles.controlsRow}>
        <div className={styles.trackViewport}>
          <div
            className={styles.trackRow}
            style={{
              transform: `translateX(-${offsets[currentIndex] || 0}px)`,
              transition: isTransitioning ? "transform 0.35s ease" : "none",
            }}
          >
            {loopedTracks.map((track, idx) => {
              const isActive = idx === activeInstanceIndex;
              const isActivePlaying = isActive && isPlaying;
              return (
                <div
                  key={`${track.id}-${idx}`}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  className={[
                    styles.card,
                    isActive ? styles.cardActive : "",
                    isActivePlaying ? styles.cardExpanded : "",
                  ].join(" ")}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.trackTitle} title={track.title}>
                      {track.title}
                    </span>
                    {isActivePlaying && (
                      <span className={styles.captionInline} aria-live="polite">
                        {track.caption}
                      </span>
                    )}
                    <button
                      type="button"
                      className={styles.playBtn}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handlePlayToggle(track, idx);
                      }}
                      aria-pressed={isActivePlaying}
                      aria-label={isActivePlaying ? `Pause ${track.title}` : `Play ${track.title}`}
                    >
                      {isActivePlaying ? "❚❚" : "►"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.navButtons} aria-label="Slide controls">
          <button type="button" onClick={handlePrev} aria-label="Previous audio" className={styles.navBtn}>
            ←
          </button>
          <button type="button" onClick={handleNext} aria-label="Next audio" className={styles.navBtn}>
            →
          </button>
        </div>
      </div>

      <audio ref={audioRef} preload="none" />
    </section>
  );
}
