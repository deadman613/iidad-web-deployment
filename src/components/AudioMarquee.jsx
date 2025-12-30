"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import React, { useEffect } from 'react';
import styles from "./audioMarquee.module.css";

const tracks = [
    {
    id: "riya2",
    title: "Aisha Patel",
    caption: "Learning React at IIDAD went beyond tutorials. The focus on clean code and best practices made a big difference. It directly reflects in the quality of work I deliver today.",
    src: "/audioFiles/Inworld_inworld-tts-1-max_Riya_12-21-2025 22-48-52.mp3",
  },
  {
    id: "riya3",
    title: "Meera Joshi",
    caption: "As a fresher, confidence was my biggest challenge. IIDAD’s project-based learning and mentorship made me job-ready. My interviews focused more on experience than just theory.",
    src: "/audioFiles/Inworld_inworld-tts-1-max_Riya_12-21-2025 22-54-21.mp3",
  },
  {
    id: "riya4",
    title: "Pooja Reddy",
    caption: "IIDAD didn’t just teach the MERN stack—they made us build with it. From development to deployment, everything was hands-on. That experience reduced the learning curve at my workplace.",
    src: "/audioFiles/Inworld_inworld-tts-1-max_Riya_12-21-2025 22-55-17.mp3",
  },
  {
    id: "timothy",
    title: "Arjun Deshmukh",
    caption: "Working in a startup requires problem-solving, not just coding. IIDAD trained us to think logically and take ownership of tasks. That mindset helps me adapt quickly in a fast-paced environment.",
    src: "/audioFiles/Inworld_inworld-tts-1-max_Timothy_12-21-2025 22-59-26.mp3",
  },
  {
    id: "ashley",
    title: "Priya Sharma",
    caption: "I learned how to translate designs into scalable, maintainable code. IIDAD helped bridge the gap between design and development. Collaborating with designers is much smoother now.",
    src: "/audioFiles/Inworld_inworld-tts-1-max_Ashley_12-21-2025 22-56-20.mp3",
  },
  {
    id: "deborah",
    title: "Anjali Nair",
    caption: "I had theoretical knowledge before, but lacked real-world exposure. At IIDAD, I worked on actual projects with proper guidance. That hands-on experience made my transition into a professional role seamless. I apply those learnings every day at work.",
    src: "/audioFiles/Inworld_inworld-tts-1-max_Deborah_12-21-2025 22-44-33.mp3",
  },
  {
    id: "dennis",
    title: "Amit Verma",
    caption: "I came from a non-technical background. IIDAD’s structured learning and consistent practice helped me break into IT. Today, I’m working as a developer with confidence.",
    src: "/audioFiles/Inworld_inworld-tts-1-max_Dennis_12-21-2025 22-57-18.mp3",
  },
  {
    id: "edward",
    title: "Rahul Mehra",
    caption: "Backend concepts felt complex before joining IIDAD. The step-by-step approach and real API development helped build confidence. Handling production systems now feels natural.",
    src: "/audioFiles/Inworld_inworld-tts-1-max_Edward_12-21-2025 22-50-19.mp3",
  },
  {
    id: "hana",
    title: "Sneha Iyer",
    caption: "IIDAD shaped how I approach development, not just how I write code. Debugging, structuring solutions, and continuous learning became habits. Those skills are essential in my professional journey.",
    src: "/audioFiles/Inworld_inworld-tts-1-max_Hana_12-21-2025 23-00-34.mp3",
  },
  {
    id: "riya1",
    title: "Durgesh kr. Prajapati",
    caption: "IIDAD helped me understand how frontend and backend connect in real products. The training was practical, structured, and industry-focused. It prepared me well for real deadlines and team-based development.",
    src: "/audioFiles/Inworld_inworld-tts-1-max_Riya_12-21-2025 22-47-44.mp3",
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
      // Dispatch custom event to unmute video
      window.dispatchEvent(new CustomEvent('audio-marquee-playing', { detail: { playing: false } }));
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

    useEffect(() => {
      // Google Analytics gtag.js script injection
      const scriptTag = document.createElement('script');
      scriptTag.async = true;
      scriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-EG0KPE5YEP';
      document.head.appendChild(scriptTag);

      const inlineScript = document.createElement('script');
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-EG0KPE5YEP');
      `;
      document.head.appendChild(inlineScript);

      return () => {
        document.head.removeChild(scriptTag);
        document.head.removeChild(inlineScript);
      };
    }, []);

    // If clicking the same track while playing, pause it.
    if (isPlaying && activeId === track.id) {
      audio.pause();
      setIsPlaying(false);
      setActiveId(null);
      setIsAutoplaying(true);
      // Dispatch custom event to unmute video
      window.dispatchEvent(new CustomEvent('audio-marquee-playing', { detail: { playing: false } }));
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
        // Dispatch custom event to mute video
        window.dispatchEvent(new CustomEvent('audio-marquee-playing', { detail: { playing: true } }));
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

      <audio
        ref={audioRef}
        preload="none"
        controlsList="nodownload noplaybackrate nofullscreen"
        style={{ display: 'none' }}
        tabIndex={-1}
        aria-hidden="true"
      />
    </section>
  );
}
